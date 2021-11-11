<template>
  <APIObject
    :headerProperties="headerProperties"
    :overview="overview"
    :signature="signature"
    :usageText="usageText"
    :usage="usage"
  />
</template>

<script setup>
import { ref, inject, onMounted } from "vuei5/Vue";

import APIObject from "../../common/APIObject";

const headerProperties = [
  ["Module", "vuei5/VUEIComponent"],
  ["Type", "Class"],
  ["Extends", "sap/ui/core/UIComponent"],
];
const overview = `VUEIComponent is a extension of UIComponent wich will automatically create a Vue app and a UI5 view wich it will be bound to. Routing, translations and context will also be automatically handled. This will enable Vuei5 for the entire app. If you only want vuejs to take over part of your app use the "Launcher" Functtion. To use it simply extend it in Component.js`;

const signature = `class VUEIComponent extends UIComponent {
  public vuei5: vuei5Options;
}

interface vuei5Options {
  /**
   * Root vuejs component
   */
  vueRoot: Object,

  /**
   * @optional
   * Vue app options that will be passed to "createApp()"
   * Default: {}
   */
  vueOptions?: Object,

  /**
   * @optional
   * Root ui5 control that will be used to create the app
   * Default: sap.m.App
   */
  ui5Root?: sap.ui.core.Control;

  /**
   * @optional
   * Specifies the aggregation used when binding to the specified ui5 root control
   * Default: 'default'
   */
  ui5RootAggregation?: String;
  
  /**
   * @optional
   * Context of the ui5 app
   * Default: this
   */
  ui5Context?: Object;

  /**
   * @optional
   * Router of the ui5 app
   * Default: this.getRouter()
   */
  ui5Router?: ui5Context.getRouter();
  
  /**
   * @optional
   * Middleware to modify vue instance after creation
   * Default: $ => $
   */
  vueAppMiddleware?: (vueInstance: Object) => Object;

  /**
   * @optional
   * Function that will be used to get translated texts
   * Default: (...args) => this.getModel('i18n').getResourceBundle().getText(...args);
   */
  i18nFunction?: (...args) => String;

  /**
   * @optional
   * Fill object to define global components. Key will be the components tag name, value the component.
   * Can only be used with ui5 control components. For other global components please use vueAppMiddleware.
   * Default: {}
   */
  components?: {[key:string]: string | Object };
}`;

const usageText = `To use VUEIComponent simply go to the Component.js file and replace UIComponent with VUEIComponent. Then add the vuei5 configuration object provide your root vue component and any othe options you want to set. You can configure the VUEIComponent the same way you configure UIComponent. A reference to the component will be provided to all vue components.`;

const usage = `sap.ui.define([
    "sap/ui/core/UIComponent",
    "vuei5/VUEIComponent", // Import VUEIComponent
    "./Main" // Import your root vue component
], function(UIComponent, VUEIComponent, MainComponent) {

    // replace UIComponent with VUEIComponent
    return VUEIComponent.extend("test.Component", {
        vuei5: {
            // provide your vue root in the vuei5 property
            vueRoot: MainComponent
        },

        // Everything else can stay the same

        metadata: {
          manifest: "json"
        },

        init: function() {
            VUEIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();
            sap.ui.getCore().applyTheme("sap_fiori_3_dark");
        }
    });
});`;
</script>