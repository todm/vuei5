sap.ui.define(["jquery.sap.global", "sap/ui/core/library"], function (jQuery) {
        "use strict";

        sap.ui.getCore().initLibrary({
            name: "vuei5",
            version: "${version}",
            dependencies: [
                "sap.ui.core"
            ],
            types: [],
            interfaces: [],
            controls: [],
            elements: [
                "vuei5.Vue",
                "vuei5.VUEIComponent",
                "vuei5.UI5Control",
                "vuei5.UI5Library",
                "vuei5.Launcher",
                "vuei5.UI5html",
                "vuei5.Router",
                "vuei5.Utils"
            ]
        });

        return vuei5;

    }, /* bExport= */ false);