sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/Vue", "../../common/APIObject"], function (module, exports, require, __destructureImport0, __destructureImport1, __defaultImport2) {
  var _unref = __destructureImport0.unref;
  var _openBlock = __destructureImport0.openBlock;
  var _createBlock = __destructureImport0.createBlock;
  var ref = __destructureImport1.ref;
  var inject = __destructureImport1.inject;
  var onMounted = __destructureImport1.onMounted;
  var APIObject = typeof __defaultImport2 === "object" && __defaultImport2.__esModule ? __defaultImport2.default : __defaultImport2;
  const __sfc__ = {
    setup(__props) {
      const headerProperties = [["Module", "vuei5/VUEIComponent"], ["Type", "Class"], ["Extends", "sap/ui/core/UIComponent"]];
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
      return (_ctx, _cache) => {
        return _openBlock(), _createBlock(_unref(APIObject), {
          headerProperties: headerProperties,
          overview: overview,
          signature: signature,
          usageText: usageText,
          usage: usage
        });
      };
    }

  };
  __sfc__.__scopeId = "data-v-fwyac4lkejg";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9kb2NzL2xpYnJhcnkvVlVFSUNvbXBvbmVudC52dWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBZUEsWUFBTSxnQkFBZ0IsR0FBRyxDQUN2QixDQUFBLFFBQUEsRUFEdUIscUJBQ3ZCLENBRHVCLEVBRXZCLENBQUEsTUFBQSxFQUZ1QixPQUV2QixDQUZ1QixFQUd2QixDQUFBLFNBQUEsRUFIRix5QkFHRSxDQUh1QixDQUF6QjtBQUtBLFlBQU0sUUFBUSxHQUFkLDhXQUFBO0FBRUEsWUFBTSxTQUFTLEdBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpFQSxFQUFBO0FBb0VBLFlBQU0sU0FBUyxHQUFmLG9XQUFBO0FBRUEsWUFBTSxLQUFLLEdBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkEsSUFBQSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPEFQSU9iamVjdFxuICAgIDpoZWFkZXJQcm9wZXJ0aWVzPVwiaGVhZGVyUHJvcGVydGllc1wiXG4gICAgOm92ZXJ2aWV3PVwib3ZlcnZpZXdcIlxuICAgIDpzaWduYXR1cmU9XCJzaWduYXR1cmVcIlxuICAgIDp1c2FnZVRleHQ9XCJ1c2FnZVRleHRcIlxuICAgIDp1c2FnZT1cInVzYWdlXCJcbiAgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyByZWYsIGluamVjdCwgb25Nb3VudGVkIH0gZnJvbSBcInZ1ZWk1L1Z1ZVwiO1xuXG5pbXBvcnQgQVBJT2JqZWN0IGZyb20gXCIuLi8uLi9jb21tb24vQVBJT2JqZWN0XCI7XG5cbmNvbnN0IGhlYWRlclByb3BlcnRpZXMgPSBbXG4gIFtcIk1vZHVsZVwiLCBcInZ1ZWk1L1ZVRUlDb21wb25lbnRcIl0sXG4gIFtcIlR5cGVcIiwgXCJDbGFzc1wiXSxcbiAgW1wiRXh0ZW5kc1wiLCBcInNhcC91aS9jb3JlL1VJQ29tcG9uZW50XCJdLFxuXTtcbmNvbnN0IG92ZXJ2aWV3ID0gYFZVRUlDb21wb25lbnQgaXMgYSBleHRlbnNpb24gb2YgVUlDb21wb25lbnQgd2ljaCB3aWxsIGF1dG9tYXRpY2FsbHkgY3JlYXRlIGEgVnVlIGFwcCBhbmQgYSBVSTUgdmlldyB3aWNoIGl0IHdpbGwgYmUgYm91bmQgdG8uIFJvdXRpbmcsIHRyYW5zbGF0aW9ucyBhbmQgY29udGV4dCB3aWxsIGFsc28gYmUgYXV0b21hdGljYWxseSBoYW5kbGVkLiBUaGlzIHdpbGwgZW5hYmxlIFZ1ZWk1IGZvciB0aGUgZW50aXJlIGFwcC4gSWYgeW91IG9ubHkgd2FudCB2dWVqcyB0byB0YWtlIG92ZXIgcGFydCBvZiB5b3VyIGFwcCB1c2UgdGhlIFwiTGF1bmNoZXJcIiBGdW5jdHRpb24uIFRvIHVzZSBpdCBzaW1wbHkgZXh0ZW5kIGl0IGluIENvbXBvbmVudC5qc2A7XG5cbmNvbnN0IHNpZ25hdHVyZSA9IGBjbGFzcyBWVUVJQ29tcG9uZW50IGV4dGVuZHMgVUlDb21wb25lbnQge1xuICBwdWJsaWMgdnVlaTU6IHZ1ZWk1T3B0aW9ucztcbn1cblxuaW50ZXJmYWNlIHZ1ZWk1T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBSb290IHZ1ZWpzIGNvbXBvbmVudFxuICAgKi9cbiAgdnVlUm9vdDogT2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAb3B0aW9uYWxcbiAgICogVnVlIGFwcCBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gXCJjcmVhdGVBcHAoKVwiXG4gICAqIERlZmF1bHQ6IHt9XG4gICAqL1xuICB2dWVPcHRpb25zPzogT2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAb3B0aW9uYWxcbiAgICogUm9vdCB1aTUgY29udHJvbCB0aGF0IHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgdGhlIGFwcFxuICAgKiBEZWZhdWx0OiBzYXAubS5BcHBcbiAgICovXG4gIHVpNVJvb3Q/OiBzYXAudWkuY29yZS5Db250cm9sO1xuXG4gIC8qKlxuICAgKiBAb3B0aW9uYWxcbiAgICogU3BlY2lmaWVzIHRoZSBhZ2dyZWdhdGlvbiB1c2VkIHdoZW4gYmluZGluZyB0byB0aGUgc3BlY2lmaWVkIHVpNSByb290IGNvbnRyb2xcbiAgICogRGVmYXVsdDogJ2RlZmF1bHQnXG4gICAqL1xuICB1aTVSb290QWdncmVnYXRpb24/OiBTdHJpbmc7XG4gIFxuICAvKipcbiAgICogQG9wdGlvbmFsXG4gICAqIENvbnRleHQgb2YgdGhlIHVpNSBhcHBcbiAgICogRGVmYXVsdDogdGhpc1xuICAgKi9cbiAgdWk1Q29udGV4dD86IE9iamVjdDtcblxuICAvKipcbiAgICogQG9wdGlvbmFsXG4gICAqIFJvdXRlciBvZiB0aGUgdWk1IGFwcFxuICAgKiBEZWZhdWx0OiB0aGlzLmdldFJvdXRlcigpXG4gICAqL1xuICB1aTVSb3V0ZXI/OiB1aTVDb250ZXh0LmdldFJvdXRlcigpO1xuICBcbiAgLyoqXG4gICAqIEBvcHRpb25hbFxuICAgKiBNaWRkbGV3YXJlIHRvIG1vZGlmeSB2dWUgaW5zdGFuY2UgYWZ0ZXIgY3JlYXRpb25cbiAgICogRGVmYXVsdDogJCA9PiAkXG4gICAqL1xuICB2dWVBcHBNaWRkbGV3YXJlPzogKHZ1ZUluc3RhbmNlOiBPYmplY3QpID0+IE9iamVjdDtcblxuICAvKipcbiAgICogQG9wdGlvbmFsXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGdldCB0cmFuc2xhdGVkIHRleHRzXG4gICAqIERlZmF1bHQ6ICguLi5hcmdzKSA9PiB0aGlzLmdldE1vZGVsKCdpMThuJykuZ2V0UmVzb3VyY2VCdW5kbGUoKS5nZXRUZXh0KC4uLmFyZ3MpO1xuICAgKi9cbiAgaTE4bkZ1bmN0aW9uPzogKC4uLmFyZ3MpID0+IFN0cmluZztcblxuICAvKipcbiAgICogQG9wdGlvbmFsXG4gICAqIEZpbGwgb2JqZWN0IHRvIGRlZmluZSBnbG9iYWwgY29tcG9uZW50cy4gS2V5IHdpbGwgYmUgdGhlIGNvbXBvbmVudHMgdGFnIG5hbWUsIHZhbHVlIHRoZSBjb21wb25lbnQuXG4gICAqIENhbiBvbmx5IGJlIHVzZWQgd2l0aCB1aTUgY29udHJvbCBjb21wb25lbnRzLiBGb3Igb3RoZXIgZ2xvYmFsIGNvbXBvbmVudHMgcGxlYXNlIHVzZSB2dWVBcHBNaWRkbGV3YXJlLlxuICAgKiBEZWZhdWx0OiB7fVxuICAgKi9cbiAgY29tcG9uZW50cz86IHtba2V5OnN0cmluZ106IHN0cmluZyB8IE9iamVjdCB9O1xufWA7XG5cbmNvbnN0IHVzYWdlVGV4dCA9IGBUbyB1c2UgVlVFSUNvbXBvbmVudCBzaW1wbHkgZ28gdG8gdGhlIENvbXBvbmVudC5qcyBmaWxlIGFuZCByZXBsYWNlIFVJQ29tcG9uZW50IHdpdGggVlVFSUNvbXBvbmVudC4gVGhlbiBhZGQgdGhlIHZ1ZWk1IGNvbmZpZ3VyYXRpb24gb2JqZWN0IHByb3ZpZGUgeW91ciByb290IHZ1ZSBjb21wb25lbnQgYW5kIGFueSBvdGhlIG9wdGlvbnMgeW91IHdhbnQgdG8gc2V0LiBZb3UgY2FuIGNvbmZpZ3VyZSB0aGUgVlVFSUNvbXBvbmVudCB0aGUgc2FtZSB3YXkgeW91IGNvbmZpZ3VyZSBVSUNvbXBvbmVudC4gQSByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCB3aWxsIGJlIHByb3ZpZGVkIHRvIGFsbCB2dWUgY29tcG9uZW50cy5gO1xuXG5jb25zdCB1c2FnZSA9IGBzYXAudWkuZGVmaW5lKFtcbiAgICBcInNhcC91aS9jb3JlL1VJQ29tcG9uZW50XCIsXG4gICAgXCJ2dWVpNS9WVUVJQ29tcG9uZW50XCIsIC8vIEltcG9ydCBWVUVJQ29tcG9uZW50XG4gICAgXCIuL01haW5cIiAvLyBJbXBvcnQgeW91ciByb290IHZ1ZSBjb21wb25lbnRcbl0sIGZ1bmN0aW9uKFVJQ29tcG9uZW50LCBWVUVJQ29tcG9uZW50LCBNYWluQ29tcG9uZW50KSB7XG5cbiAgICAvLyByZXBsYWNlIFVJQ29tcG9uZW50IHdpdGggVlVFSUNvbXBvbmVudFxuICAgIHJldHVybiBWVUVJQ29tcG9uZW50LmV4dGVuZChcInRlc3QuQ29tcG9uZW50XCIsIHtcbiAgICAgICAgdnVlaTU6IHtcbiAgICAgICAgICAgIC8vIHByb3ZpZGUgeW91ciB2dWUgcm9vdCBpbiB0aGUgdnVlaTUgcHJvcGVydHlcbiAgICAgICAgICAgIHZ1ZVJvb3Q6IE1haW5Db21wb25lbnRcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBFdmVyeXRoaW5nIGVsc2UgY2FuIHN0YXkgdGhlIHNhbWVcblxuICAgICAgICBtZXRhZGF0YToge1xuICAgICAgICAgIG1hbmlmZXN0OiBcImpzb25cIlxuICAgICAgICB9LFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgVlVFSUNvbXBvbmVudC5wcm90b3R5cGUuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZXIoKS5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICBzYXAudWkuZ2V0Q29yZSgpLmFwcGx5VGhlbWUoXCJzYXBfZmlvcmlfM19kYXJrXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtgO1xuPC9zY3JpcHQ+Il19