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
      const headerProperties = [["Module", "vuei5-task-sfc"], ["Type", "UI5 CLI Task"]];
      const overview = `The SFC task is used to transform your .vue files into normal Javascript files. It will handle template compilation, preprocessors and style extraction.`;
      const signatureText = ``;
      const signature = `interface configuration { 
    /**
     * @optional
     * Sets wich files should be included in the task
     * Default: ['** /*.vue'] (All .vue files)
     */
    include?: string[];

    /**
     * @optional
     * Sets wich files should be excluded from the task. 
     * Default: [] (None)
     */
    exclude?: string[];

    /**
     * @optional
     * Specifies the output style.css file
     * If set to a falsy value the style will be included in the .js files
     * if a path is set all styles will be written to that file wich then has to be included manually
     * Default: false
     */
    stylesheet?: string | false;

    /**
     * @optional
     * Wether or not to trnaspile the resulting script.
     * if true: Changes es modules to sap.ui.define() and changes imports from 'vue' to 'vuei5/Vue'
     * Default: true
     */
    transpileScript?: boolean;
}`;
      const usageText = `If you want to use .vue sfc files include task and middleware in ui5.yaml`;
      const usage = `builder:
  customTasks:
    - name: vuei5-task-sfc
      beforeTask: generateComponentPreload
      configuration:
        # Your configurations`;
      return (_ctx, _cache) => {
        return _openBlock(), _createBlock(_unref(APIObject), {
          headerProperties: headerProperties,
          overview: overview,
          signature: signature,
          usageText: usageText,
          usage: usage,
          usageLang: "yaml"
        });
      };
    }

  };
  __sfc__.__scopeId = "data-v-os761hmyrwr";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9kb2NzL3VpNVRhc2svU0ZDVGFzay52dWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBZUEsWUFBTSxnQkFBZ0IsR0FBRyxDQUN2QixDQUFBLFFBQUEsRUFEdUIsZ0JBQ3ZCLENBRHVCLEVBRXZCLENBQUEsTUFBQSxFQUZGLGNBRUUsQ0FGdUIsQ0FBekI7QUFLQSxZQUFNLFFBQVEsR0FBZCwwSkFBQTtBQUVBLFlBQU0sYUFBYSxHQUFuQixFQUFBO0FBQ0EsWUFBTSxTQUFTLEdBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUJBLEVBQUE7QUFpQ0EsWUFBTSxTQUFTLEdBQWYsMkVBQUE7QUFDQSxZQUFNLEtBQUssR0FBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBSkEsOEJBQUEiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxBUElPYmplY3RcbiAgICA6aGVhZGVyUHJvcGVydGllcz1cImhlYWRlclByb3BlcnRpZXNcIlxuICAgIDpvdmVydmlldz1cIm92ZXJ2aWV3XCJcbiAgICA6c2lnbmF0dXJlPVwic2lnbmF0dXJlXCJcbiAgICA6dXNhZ2VUZXh0PVwidXNhZ2VUZXh0XCJcbiAgICA6dXNhZ2U9XCJ1c2FnZVwiXG4gICAgdXNhZ2VMYW5nPVwieWFtbFwiXG4gIC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgcmVmLCBpbmplY3QsIG9uTW91bnRlZCB9IGZyb20gXCJ2dWVpNS9WdWVcIjtcbmltcG9ydCBBUElPYmplY3QgZnJvbSBcIi4uLy4uL2NvbW1vbi9BUElPYmplY3RcIjtcblxuY29uc3QgaGVhZGVyUHJvcGVydGllcyA9IFtcbiAgW1wiTW9kdWxlXCIsIFwidnVlaTUtdGFzay1zZmNcIl0sXG4gIFtcIlR5cGVcIiwgXCJVSTUgQ0xJIFRhc2tcIl1cbl1cblxuY29uc3Qgb3ZlcnZpZXcgPSBgVGhlIFNGQyB0YXNrIGlzIHVzZWQgdG8gdHJhbnNmb3JtIHlvdXIgLnZ1ZSBmaWxlcyBpbnRvIG5vcm1hbCBKYXZhc2NyaXB0IGZpbGVzLiBJdCB3aWxsIGhhbmRsZSB0ZW1wbGF0ZSBjb21waWxhdGlvbiwgcHJlcHJvY2Vzc29ycyBhbmQgc3R5bGUgZXh0cmFjdGlvbi5gO1xuXG5jb25zdCBzaWduYXR1cmVUZXh0ID0gYGA7XG5jb25zdCBzaWduYXR1cmUgPSBgaW50ZXJmYWNlIGNvbmZpZ3VyYXRpb24geyBcbiAgICAvKipcbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKiBTZXRzIHdpY2ggZmlsZXMgc2hvdWxkIGJlIGluY2x1ZGVkIGluIHRoZSB0YXNrXG4gICAgICogRGVmYXVsdDogWycqKiAvKi52dWUnXSAoQWxsIC52dWUgZmlsZXMpXG4gICAgICovXG4gICAgaW5jbHVkZT86IHN0cmluZ1tdO1xuXG4gICAgLyoqXG4gICAgICogQG9wdGlvbmFsXG4gICAgICogU2V0cyB3aWNoIGZpbGVzIHNob3VsZCBiZSBleGNsdWRlZCBmcm9tIHRoZSB0YXNrLiBcbiAgICAgKiBEZWZhdWx0OiBbXSAoTm9uZSlcbiAgICAgKi9cbiAgICBleGNsdWRlPzogc3RyaW5nW107XG5cbiAgICAvKipcbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG91dHB1dCBzdHlsZS5jc3MgZmlsZVxuICAgICAqIElmIHNldCB0byBhIGZhbHN5IHZhbHVlIHRoZSBzdHlsZSB3aWxsIGJlIGluY2x1ZGVkIGluIHRoZSAuanMgZmlsZXNcbiAgICAgKiBpZiBhIHBhdGggaXMgc2V0IGFsbCBzdHlsZXMgd2lsbCBiZSB3cml0dGVuIHRvIHRoYXQgZmlsZSB3aWNoIHRoZW4gaGFzIHRvIGJlIGluY2x1ZGVkIG1hbnVhbGx5XG4gICAgICogRGVmYXVsdDogZmFsc2VcbiAgICAgKi9cbiAgICBzdHlsZXNoZWV0Pzogc3RyaW5nIHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKiBXZXRoZXIgb3Igbm90IHRvIHRybmFzcGlsZSB0aGUgcmVzdWx0aW5nIHNjcmlwdC5cbiAgICAgKiBpZiB0cnVlOiBDaGFuZ2VzIGVzIG1vZHVsZXMgdG8gc2FwLnVpLmRlZmluZSgpIGFuZCBjaGFuZ2VzIGltcG9ydHMgZnJvbSAndnVlJyB0byAndnVlaTUvVnVlJ1xuICAgICAqIERlZmF1bHQ6IHRydWVcbiAgICAgKi9cbiAgICB0cmFuc3BpbGVTY3JpcHQ/OiBib29sZWFuO1xufWA7XG5cbmNvbnN0IHVzYWdlVGV4dCA9IGBJZiB5b3Ugd2FudCB0byB1c2UgLnZ1ZSBzZmMgZmlsZXMgaW5jbHVkZSB0YXNrIGFuZCBtaWRkbGV3YXJlIGluIHVpNS55YW1sYDtcbmNvbnN0IHVzYWdlID0gYGJ1aWxkZXI6XG4gIGN1c3RvbVRhc2tzOlxuICAgIC0gbmFtZTogdnVlaTUtdGFzay1zZmNcbiAgICAgIGJlZm9yZVRhc2s6IGdlbmVyYXRlQ29tcG9uZW50UHJlbG9hZFxuICAgICAgY29uZmlndXJhdGlvbjpcbiAgICAgICAgIyBZb3VyIGNvbmZpZ3VyYXRpb25zYDtcbjwvc2NyaXB0PiJdfQ==