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
      const headerProperties = [["Module", "vuei5/Launcher"], ["Type", "Function"]];
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
  __sfc__.__scopeId = "data-v-jqv5bsg7exa";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9kb2NzL2xpYnJhcnkvTGF1bmNoZXIudnVlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQWNBLFlBQU0sZ0JBQWdCLEdBQUcsQ0FDdkIsQ0FBQSxRQUFBLEVBRHVCLGdCQUN2QixDQUR1QixFQUV2QixDQUFBLE1BQUEsRUFGRixVQUVFLENBRnVCLENBQXpCO0FBS0EsWUFBTSxRQUFRLEdBQWQsc0pBQUE7QUFFQSxZQUFNLGFBQWEsR0FBbkIsRUFBQTtBQUNBLFlBQU0sU0FBUyxHQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcERBLENBQUE7QUF1REEsWUFBTSxTQUFTLEdBQWYsa0hBQUE7QUFDQSxZQUFNLEtBQUssR0FBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEEsRUFBQSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPEFQSU9iamVjdFxuICAgIDpoZWFkZXJQcm9wZXJ0aWVzPVwiaGVhZGVyUHJvcGVydGllc1wiXG4gICAgOm92ZXJ2aWV3PVwib3ZlcnZpZXdcIlxuICAgIDpzaWduYXR1cmU9XCJzaWduYXR1cmVcIlxuICAgIDp1c2FnZVRleHQ9XCJ1c2FnZVRleHRcIlxuICAgIDp1c2FnZT1cInVzYWdlXCJcbiAgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyByZWYsIGluamVjdCwgb25Nb3VudGVkIH0gZnJvbSBcInZ1ZWk1L1Z1ZVwiO1xuaW1wb3J0IEFQSU9iamVjdCBmcm9tIFwiLi4vLi4vY29tbW9uL0FQSU9iamVjdFwiO1xuXG5jb25zdCBoZWFkZXJQcm9wZXJ0aWVzID0gW1xuICBbXCJNb2R1bGVcIiwgXCJ2dWVpNS9MYXVuY2hlclwiXSxcbiAgW1wiVHlwZVwiLCBcIkZ1bmN0aW9uXCJdXG5dXG5cbmNvbnN0IG92ZXJ2aWV3ID0gYFRoZSBsYXVuY2hlciBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSBhIHZ1ZSBhcHAgYW5kIGJpbmQgaXQgdG8gdGhlIGdpdmVuIHVpNSBjb250cm9sLiBZb3UgY2FuIHVzZSBpdCB0byBsZXQgdnVlIHRha2Ugb3ZlciBvbmx5IGEgcGFydCBvZiB5b3VyIGFwcC5gO1xuXG5jb25zdCBzaWduYXR1cmVUZXh0ID0gYGA7XG5jb25zdCBzaWduYXR1cmUgPSBgZnVuY3Rpb24gTGF1bmNoZXIodWk1Um9vdDogc2FwLnVpLmNvcmUuQ29udHJvbCwgdnVlUm9vdDogdnVlQ29tcG9uZW50LCBvcHRpb25zOiBMYXVuY2hlck9wdGlvbnMpOiB2b2lkO1xuXG5pbnRlcmZhY2UgTGF1bmNoZXJPcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKiBVSTUgY29udGV4dCB0aGF0IGNhbiBiZSBpbmplY3RlZCBpbnRvIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICB1aTVDb250ZXh0PzogT2JqZWN0O1xuXG4gICAgLyoqXG4gICAgICogQG9wdGlvbmFsXG4gICAgICogU3BlY2lmaWVzIHRoZSBhZ2dyZWdhdGlvbiB1c2VkIHdoZW4gYmluZGluZyB0byB0aGUgc3BlY2lmaWVkIHVpNSByb290IGNvbnRyb2xcbiAgICAgKiBEZWZhdWx0OiAnZGVmYXVsdCdcbiAgICAgKi9cbiAgICB1aTVSb290QWdncmVnYXRpb24/OiBTdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKiBVSTUgcm91dGVyIHJlZmVyZW5jZSB0aGF0IGNhbiBiZSBpbmplY3RlZCBpbnRvIGNvbXBvbmVudHMgYW5kIGlzIHVzZWQgaW4gPFJvdXRlci8+IGNvbXBvbmVudFxuICAgICAqIElmIG5vdCBzZXQgcm91dGluZyBjYW5ub3QgYmUgdXNlZFxuICAgICAqL1xuICAgIHVpNVJvdXRlcj86IE9iamVjdDtcbiAgICBcbiAgICAvKipcbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKiBWdWUgYXBwIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byBcXGBjcmVhdGVBcHAoKVxcYFxuICAgICAqIERlZmF1bHQ6IHt9XG4gICAgICovXG4gICAgdnVlT3B0aW9ucz86IE9iamVjdDtcblxuICAgIC8qKlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqIE1pZGRsZXdhcmUgdG8gbW9kaWZ5IHZ1ZSBpbnN0YW5jZSBhZnRlciBjcmVhdGlvblxuICAgICAqIERlZmF1bHQ6ICQgPT4gJFxuICAgICAqL1xuICAgIHZ1ZUFwcE1pZGRsZXdhcmU/OiAodnVlSW5zdGFuY2U6IE9iamVjdCkgPT4gT2JqZWN0O1xuXG4gICAgLyoqXG4gICAgICogQG9wdGlvbmFsXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gZ2V0IHRyYW5zbGF0ZWQgdGV4dHNcbiAgICAgKiBJZiBub3Qgc2V0IHRyYW5zbGF0aW9ucyBjYW50IGJlIHVzZWRcbiAgICAgKiBEZWZhdWx0OiAkPT4kXG4gICAgICovXG4gICAgaTE4bkZ1bmN0aW9uPzogKC4uLmFyZ3MpID0+IFN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqIEZpbGwgb2JqZWN0IHRvIGRlZmluZSBnbG9iYWwgY29tcG9uZW50cy4gS2V5IHdpbGwgYmUgdGhlIGNvbXBvbmVudHMgdGFnIG5hbWUsIHZhbHVlIHRoZSBjb21wb25lbnQuXG4gICAgICogQ2FuIG9ubHkgYmUgdXNlZCB3aXRoIHVpNSBjb250cm9sIGNvbXBvbmVudHMuIEZvciBvdGhlciBnbG9iYWwgY29tcG9uZW50cyBwbGVhc2UgdXNlIHZ1ZUFwcE1pZGRsZXdhcmUuXG4gICAgICogRGVmYXVsdDoge31cbiAgICAgKi9cbiAgICBjb21wb25lbnRzPzoge1trZXk6c3RyaW5nXTogc3RyaW5nIHwgT2JqZWN0IH07XG59XG5gO1xuXG5jb25zdCB1c2FnZVRleHQgPSBgU2ltcGx5IGNhbGwgdGhlIGZ1bmN0aW9uIGluIGEgY29udHJvbGxlciBhbmQgcGFzcyBpdCByZWZlcmVuY2VzIHRvIHlvdXIgVUk1IENvbnRyb2wgYW5kIHlvdXIgcm9vdCB2dWUgY29tcG9uZW50LmA7XG5jb25zdCB1c2FnZSA9IGAvLyBpbXBvcnQgbXlWdWVDb21wb25lbnQgZnJvbSAnLi4vcGF0aC90by9WdWVDb21wb25lbnQnO1xub25Jbml0OiBmdW5jdGlvbigpe1xuICB2YXIgbXlVSTVSb290ID0gdGhpcy5ieUlkKCdteUNvbnRyb2xJZCcpO1xuICBMYXVuY2hlcihteVVJNVJvb3QsIG15VnVlQ29tcG9uZW50LCB7XG4gICAgdWk1Q29udGV4dDogdGhpcyxcbiAgICB1aTVSb3V0ZXI6IHRoaXMuZ2V0T3duZXJDb21wb25lbnQoKS5nZXRSb3V0ZXIoKSxcbiAgICBpMThuRnVuY3Rpb246ICguLi5hcmdzKSA9PiB0aGlzLmdldFZpZXcoKS5nZXRNb2RlbChcImkxOG5cIikuZ2V0UmVzb3VyY2VCdW5kbGUoKS5nZXRUZXh0KC4uLmFyZ3MpO1xuICB9KSAgXG59YDtcbjwvc2NyaXB0PiJdfQ==