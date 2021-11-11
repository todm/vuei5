sap.ui.define(['./Vue', './UI5Control'], (Vue, UI5Control) => {
    /**
     * Launches vue app and attaches to ui5 dom
     * @param {sap.ui.core.Control} ui5Root - UI5 Root control
     * @param {Object} vueRoot - Root vue component
     * @param {Object} options - Options object
     */
    function launcher(ui5Root, vueRoot, options) {
        const _options = {
            ui5RootAggregation: 'default',
            ui5Context: null,
            ui5Router: null,
            vueOptions: {},
            vueAppMiddleware: e => e,
            i18nFunction: e => e,
            components: {},
            ...options
        };

        const mountingPoint = document.createElement("div");
        const appOptions = {
            ui5Control: ui5Root,
            render() {
                return Vue.h(vueRoot);
            },
            provide: {
                $mountingPoint: mountingPoint,
                $ui5Root: ui5Root,
                $ui5Context: _options.ui5Context,
                $ui5Router: _options.ui5Router,
                $i18n: _options.i18nFunction,
                
                __vuei5_rootAggregation: _options.ui5RootAggregation,
                __vuei5_currentParent: ui5Root
            },
            ..._options.vueOptions
        };
        let app = Vue.createApp(appOptions);
        app.config.globalProperties.$i18n = _options.i18nFunction;

        Object.entries(_options.components).forEach(([name, control]) => {
            if(typeof control === 'object' && control.isVuei5Control)
                app.component(name, control);
            else
                app.component(name, UI5Control(control));
        });

        app = _options.vueAppMiddleware(app);

        app.mount(mountingPoint);
    }

    return launcher;
});