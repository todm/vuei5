sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "vuei5/Launcher",
    "../components/Home"
], function (Controller, vuei5Launcher, Home) {
    "use strict";

    return Controller.extend("test.controller.App", {
        onInit() {
            const element = this.byId("vuei5VBox");
            vuei5Launcher(element, Home, {

            });
        },

        onSelect(e) {
            console.log(e.getParameters())
        }
    });

});