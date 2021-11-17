sap.ui.define(["./Vue", "sap/base/Log"], (Vue, Log) => {


    function getProps(Control) {
        let metadata;
        if (Control.getMetadata) metadata = Control.getMetadata();
        else metadata = Control.prototype.getMetadata();
        const props = metadata.getAllProperties();
        return Object.keys(props);
    };

    function getEmits(Control) {
        let metadata;
        if (Control.getMetadata) metadata = Control.getMetadata();
        else metadata = Control.prototype.getMetadata();
        const emits = metadata.getAllEvents();
        return Object.keys(emits);
    }

    function setupModel() {
        const that = this;
        try {
            const metadata = this.ui5Control.getMetadata();
            const events = metadata.getAllEvents();
            Object.keys(this.$attrs)
                .filter(key => key.startsWith("onUpdate:"))
                .forEach(key => {
                    const vuePropertyName = key.replace("onUpdate:", "");
                    const ui5PropertyName = vuePropertyName === "modelValue" ? "value" : vuePropertyName;

                    const propertyData = metadata.getProperty(ui5PropertyName);
                    const getter = this.ui5Control[propertyData._sGetter];
                    const setter = this.ui5Control[propertyData._sMutator];

                    Object.values(events)
                        .filter(event => event.appData && event.appData.parameters && event.appData.parameters[ui5PropertyName])
                        .forEach(event => {
                            this.ui5Control[event._sMutator].apply(this.ui5Control, [
                                e => that.$attrs[key](getter.apply(that.ui5Control))
                            ]);
                        });

                    Vue.watch(() => this.$attrs[vuePropertyName], (next, prev) => {
                        if (next === prev || !setter) return;
                        setter.apply(this.ui5Control, [next]);
                    });
                });
        } catch (ex) {
            Log.error("Could not setup v-model for control");
        }
    };

    function setupStyleScope() {
        let scope;
        if(this.$parent && !this.$parent.ui5Control && !this.$parent.$options.ui5Control) {
            // parent is vue component
            scope = this.$parent.__scopeId || this.$parent.$options.__scopeId;
            Vue.provide('__vuei5_currentScopeId', scope);
        } else {
            scope = Vue.inject('__vuei5_currentScopeId');
        }
        if(!scope) return;
        const onAfterRendering = this.ui5Control.onAfterRendering;
        this.ui5Control.onAfterRendering = () => {
            if(onAfterRendering) onAfterRendering.apply(this.ui5Control);
            const domRef = this.ui5Control.getDomRef();
            domRef.setAttribute(scope, '');
            const ctrlId = domRef.id;
            domRef.querySelectorAll(`[id^='${ctrlId}']`).forEach(e => {
                e.setAttribute(scope, "");
            })
        }
    }

    function mount(control, ui5Parent) {
        const metadata = ui5Parent.getMetadata();
        let aggregationName;
        if(aggregationName = Vue.inject('__vuei5_rootAggregation')) {
            Vue.provide('__vuei5_rootAggregation', undefined);
        } else {
            aggregationName = this.$attrs['ui5--aggregation'] || this.$el || this.$parent.$el;
        } 

        const aggregation = !aggregationName || aggregationName === "default" ? metadata.getDefaultAggregation() : metadata.getAggregation(aggregationName);
        if (!aggregation) return Log.error("Aggregation '" + aggregationName + "' not found");
        const mutator = ui5Parent[aggregation._sMutator];
        mutator.apply(ui5Parent, [control]);
    }

    function setupBinding() {
        const metadata = this.ui5Control.getMetadata();
        Object.keys(this.$props).forEach(key => {
            const mutator = this.ui5Control[metadata.getProperty(key)._sMutator];
            Vue.watch(() => this.$props[key], (next, prev) => {
                if (next === prev || !mutator) return;
                mutator.apply(this.ui5Control, [next]);
            });
        });
    }

    function setupEmits() {
        const metadata = this.ui5Control.getMetadata();
        this.$options.emits.forEach(e => {
            const attach = this.ui5Control[metadata.getEvent(e)._sMutator];
            if (!attach) return;
            attach.apply(this.ui5Control, [(...args) => this.$emit(e, ...args)]);
        });
    }

    function renderSlots() {
        const slots = this.$slots;
        const toRender = [];
        Object.entries(slots).forEach(([key, val]) => {
            const slot = val();
            slot.forEach(node => {
                node.el = key;
                if (Array.isArray(node.children)) node.children.forEach(n => {
                    n.el = key;
                });
            });
            toRender.push(slot);
        });
        return Vue.h('div', [toRender]);
    }

    return (ui5Control, options) => {
        const Control = typeof ui5Control === "string" ? sap.ui.requireSync(ui5Control) : ui5Control;

        return Vue.defineComponent({
            isVuei5Control: true,
            ui5Control: null,
            hasRendered: false,
            props: getProps(Control),
            emits: getEmits(Control),
            render() {
                return renderSlots.apply(this);
            },
            beforeMount() {
                if(this.$attrs.debug) debugger;
                const controlOptions = {};
                Object.entries(this.$props)
                    .filter(([k, v]) => v !== undefined)
                    .forEach(([k, v]) => { controlOptions[k] = v });

                //augment props
                if (this.$attrs.modelValue && !controlOptions.value) controlOptions.value = this.$attrs.modelValue;
                Object.entries(this.$attrs)
                    .filter(([k]) => !['ui5--aggregation'].includes(k))
                    .filter(([k]) => k.startsWith('ui5--') || ['id'].includes(k))
                    .map(([k,v]) => [k.replace(/^ui5--/, ''),v])
                    .forEach(([k,v]) => {
                        controlOptions[k] = v;
                    })

                this.ui5Control = new Control(controlOptions);
                setupModel.apply(this);

                const parent = Vue.inject('__vuei5_currentParent');
                Vue.provide('__vuei5_currentParent', this.ui5Control);

                mount.apply(this, [this.ui5Control, parent]);
                setupBinding.apply(this);
                setupEmits.apply(this);

                if (this.$attrs.class) this.ui5Control.addStyleClass(this.$attrs.class);
                setupStyleScope.apply(this);
            },

            beforeUnmount() {
                this.ui5Control.destroy();
            }
        });
    };
});