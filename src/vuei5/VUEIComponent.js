sap.ui.define([
	"sap/ui/core/UIComponent",
    "sap/base/Log",
    "sap/m/App",
    "./Launcher"
], function(UIComponent, Log, App, vuei5Launcher) {
	"use strict";

	return UIComponent.extend("vuei5.VUEIComponent", {
        vuei5: {},

        createContent() {
            const ui5Context = this;
            const vuei5Options = {
                ui5Root: sap.m.App,
                ui5RootAggregation: 'default',
                ui5Context: ui5Context,
                ui5Router: ui5Context.getRouter(),
                vueRoot: null,
                vueOptions: {},
                vueAppMiddleware: e=>e,
                i18nFunction: e=>e,
                components: {},
                ...this.vuei5
            };

            const ui5Root = typeof vuei5Options.ui5Root === "function" ? new vuei5Options.ui5Root() : vuei5Options.ui5Root;
            if(!vuei5Options.vueRoot) Log.error("No vue root component specified", "A vue component must be specified to start a vuei5 app");

            try {
                const resourceBundle = this.getModel('i18n').getResourceBundle();
                vuei5Options.i18nFunction = (...args) => resourceBundle.getText(...args);
            } catch(ex) {}

            vuei5Launcher(ui5Root, vuei5Options.vueRoot, vuei5Options);
            
            return ui5Root;
        }
	});
});