sap.ui.define(["./Vue", "sap/ui/core/HTML", "sap/m/VBox"], (Vue, HTMLControl, VBox) => {
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

    return {
        ui5Control: null,
        template: `<teleport :to="htmlElement"><slot/></teleport>`,
        beforeMount() {
            this.ui5Control = new VBox("ui5html__" + Math.random().toString(36).substr(2));
            const parent = Vue.inject('__vuei5_currentParent');
            mount.apply(this, [this.ui5Control, parent]);

            const classes = this.$attrs.class || "";
            const scope = Vue.inject('__vuei5_currentScopeId');
            this.htmlElement = document.createElement('div');
            this.htmlElement.className = classes;
            this.htmlElement.setAttribute(scope, "");


            const onAfterRendering = this.ui5Control.onAfterRendering;
            this.ui5Control.onAfterRendering = () => {
                if(onAfterRendering) onAfterRendering.apply(this.ui5Control);
                const domRef = this.ui5Control.getDomRef();
                domRef.className = "vuei5--ui5html";
                domRef.appendChild(this.htmlElement);
            }
        },
        beforeUnmount() {
            this.ui5Control.destroy();
        }
    }
});