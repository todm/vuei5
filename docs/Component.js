sap.ui.define([
    "sap/ui/core/UIComponent",
    "vuei5/VUEIComponent",
    "vuei5/UI5Library",
    "./Main"
], function(UIComponent, VUEIComponent, UI5Library, MainComponent) {
    return VUEIComponent.extend("test.Component", {
        vuei5: {
            vueRoot: MainComponent,
            components: {
                // 'Avatar': 'sap/m/Avatar',
                // 'Panel': 'sap/m/Panel',
                // 'Text': 'sap/m/Text',
                ...UI5Library("sap/m/library", 'm:', [
                    'Avatar',
                    'Panel',
                    'Text',
                ])
            }
        },

        metadata: {
			manifest: "json"
		},

        init: function() {
            VUEIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();
            try {
                const el = document.querySelector(".vuei5-loader");
                el.style.opacity = "0";
                setTimeout(el.remove, 500);
            } catch(ex) {}
        }
    });
});