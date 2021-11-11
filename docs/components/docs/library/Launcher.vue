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
  ["Module", "vuei5/Launcher"],
  ["Type", "Function"]
]

const overview = `The launcher function is used to create a vue app and bind it to the given ui5 control. You can use it to let vue take over only a part of your app.`;

const signatureText = ``;
const signature = `function Launcher(ui5Root: sap.ui.core.Control, vueRoot: vueComponent, options: LauncherOptions): void;

interface LauncherOptions {
    /**
     * @optional
     * UI5 context that can be injected into components
     */
    ui5Context?: Object;

    /**
     * @optional
     * Specifies the aggregation used when binding to the specified ui5 root control
     * Default: 'default'
     */
    ui5RootAggregation?: String;

    /**
     * @optional
     * UI5 router reference that can be injected into components and is used in <Router/> component
     * If not set routing cannot be used
     */
    ui5Router?: Object;
    
    /**
     * @optional
     * Vue app options that will be passed to \`createApp()\`
     * Default: {}
     */
    vueOptions?: Object;

    /**
     * @optional
     * Middleware to modify vue instance after creation
     * Default: $ => $
     */
    vueAppMiddleware?: (vueInstance: Object) => Object;

    /**
     * @optional
     * Function that will be used to get translated texts
     * If not set translations cant be used
     * Default: $=>$
     */
    i18nFunction?: (...args) => String;

    /**
     * @optional
     * Fill object to define global components. Key will be the components tag name, value the component.
     * Can only be used with ui5 control components. For other global components please use vueAppMiddleware.
     * Default: {}
     */
    components?: {[key:string]: string | Object };
}
`;

const usageText = `Simply call the function in a controller and pass it references to your UI5 Control and your root vue component.`;
const usage = `// import myVueComponent from '../path/to/VueComponent';
onInit: function(){
  var myUI5Root = this.byId('myControlId');
  Launcher(myUI5Root, myVueComponent, {
    ui5Context: this,
    ui5Router: this.getOwnerComponent().getRouter(),
    i18nFunction: (...args) => this.getView().getModel("i18n").getResourceBundle().getText(...args);
  })  
}`;
</script>