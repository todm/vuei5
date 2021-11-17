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
      const headerProperties = [["Module", "vuei5-middleware-sfc"], ["Type", "UI5 CLI Middleware"]];
      const overview = `The SFC middle is used to transform your .vue files into normal Javascript files. It will handle template compilation, preprocessors and style extraction.`;
      const signatureText = ``;
      const signature = `interface configuration { 
    /**
     * @optional
     * Sets wich files should be included in the task
     * Default: ['** /*.js'] (All .js files)
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
     * Specifies the behaviour when an error occures
     * 'next' will call the next middleware
     * 'error' will respond with 503
     * 'exit' will make the server exit
     * Default: 'error'
     */
    onError?: 'next' | 'error' | 'exit';

    /**
     * @optional
     * Wether or not to trnaspile the resulting script.
     * if true: Changes es modules to sap.ui.define() and changes imports from 'vue' to 'vuei5/Vue'
     * Default: true
     */
    transpileScript?: boolean;

    /**
     * @optional
     * if set to true the resulting file will be passed to the next middleware
     * Only works if the next middleware checks for req.passedFile
     * Default: false
     */
    passfile?: false
}`;
      const usageText = `If you want to use .vue sfc files include task and middleware in ui5.yaml`;
      const usage = `builder:
  server:
    customMiddleware:
      - name: vuei5-middleware-sfc
        beforeMiddleware: serveResources
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
  __sfc__.__scopeId = "data-v-6j7r18t6rhs";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9kb2NzL3VpNVRhc2svU0ZDTWlkZGxld2FyZS52dWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBZUEsWUFBTSxnQkFBZ0IsR0FBRyxDQUN2QixDQUFBLFFBQUEsRUFEdUIsc0JBQ3ZCLENBRHVCLEVBRXZCLENBQUEsTUFBQSxFQUZGLG9CQUVFLENBRnVCLENBQXpCO0FBS0EsWUFBTSxRQUFRLEdBQWQsNEpBQUE7QUFFQSxZQUFNLGFBQWEsR0FBbkIsRUFBQTtBQUNBLFlBQU0sU0FBUyxHQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZDQSxFQUFBO0FBMENBLFlBQU0sU0FBUyxHQUFmLDJFQUFBO0FBQ0EsWUFBTSxLQUFLLEdBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUpBLGdDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8QVBJT2JqZWN0XG4gICAgOmhlYWRlclByb3BlcnRpZXM9XCJoZWFkZXJQcm9wZXJ0aWVzXCJcbiAgICA6b3ZlcnZpZXc9XCJvdmVydmlld1wiXG4gICAgOnNpZ25hdHVyZT1cInNpZ25hdHVyZVwiXG4gICAgOnVzYWdlVGV4dD1cInVzYWdlVGV4dFwiXG4gICAgOnVzYWdlPVwidXNhZ2VcIlxuICAgIHVzYWdlTGFuZz1cInlhbWxcIlxuICAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiwgaW5qZWN0LCBvbk1vdW50ZWQgfSBmcm9tIFwidnVlaTUvVnVlXCI7XG5pbXBvcnQgQVBJT2JqZWN0IGZyb20gXCIuLi8uLi9jb21tb24vQVBJT2JqZWN0XCI7XG5cbmNvbnN0IGhlYWRlclByb3BlcnRpZXMgPSBbXG4gIFtcIk1vZHVsZVwiLCBcInZ1ZWk1LW1pZGRsZXdhcmUtc2ZjXCJdLFxuICBbXCJUeXBlXCIsIFwiVUk1IENMSSBNaWRkbGV3YXJlXCJdXG5dXG5cbmNvbnN0IG92ZXJ2aWV3ID0gYFRoZSBTRkMgbWlkZGxlIGlzIHVzZWQgdG8gdHJhbnNmb3JtIHlvdXIgLnZ1ZSBmaWxlcyBpbnRvIG5vcm1hbCBKYXZhc2NyaXB0IGZpbGVzLiBJdCB3aWxsIGhhbmRsZSB0ZW1wbGF0ZSBjb21waWxhdGlvbiwgcHJlcHJvY2Vzc29ycyBhbmQgc3R5bGUgZXh0cmFjdGlvbi5gO1xuXG5jb25zdCBzaWduYXR1cmVUZXh0ID0gYGA7XG5jb25zdCBzaWduYXR1cmUgPSBgaW50ZXJmYWNlIGNvbmZpZ3VyYXRpb24geyBcbiAgICAvKipcbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKiBTZXRzIHdpY2ggZmlsZXMgc2hvdWxkIGJlIGluY2x1ZGVkIGluIHRoZSB0YXNrXG4gICAgICogRGVmYXVsdDogWycqKiAvKi5qcyddIChBbGwgLmpzIGZpbGVzKVxuICAgICAqL1xuICAgIGluY2x1ZGU/OiBzdHJpbmdbXTtcblxuICAgIC8qKlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqIFNldHMgd2ljaCBmaWxlcyBzaG91bGQgYmUgZXhjbHVkZWQgZnJvbSB0aGUgdGFzay4gXG4gICAgICogRGVmYXVsdDogW10gKE5vbmUpXG4gICAgICovXG4gICAgZXhjbHVkZT86IHN0cmluZ1tdO1xuXG4gICAgLyoqXG4gICAgICogQG9wdGlvbmFsXG4gICAgICogU3BlY2lmaWVzIHRoZSBiZWhhdmlvdXIgd2hlbiBhbiBlcnJvciBvY2N1cmVzXG4gICAgICogJ25leHQnIHdpbGwgY2FsbCB0aGUgbmV4dCBtaWRkbGV3YXJlXG4gICAgICogJ2Vycm9yJyB3aWxsIHJlc3BvbmQgd2l0aCA1MDNcbiAgICAgKiAnZXhpdCcgd2lsbCBtYWtlIHRoZSBzZXJ2ZXIgZXhpdFxuICAgICAqIERlZmF1bHQ6ICdlcnJvcidcbiAgICAgKi9cbiAgICBvbkVycm9yPzogJ25leHQnIHwgJ2Vycm9yJyB8ICdleGl0JztcblxuICAgIC8qKlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqIFdldGhlciBvciBub3QgdG8gdHJuYXNwaWxlIHRoZSByZXN1bHRpbmcgc2NyaXB0LlxuICAgICAqIGlmIHRydWU6IENoYW5nZXMgZXMgbW9kdWxlcyB0byBzYXAudWkuZGVmaW5lKCkgYW5kIGNoYW5nZXMgaW1wb3J0cyBmcm9tICd2dWUnIHRvICd2dWVpNS9WdWUnXG4gICAgICogRGVmYXVsdDogdHJ1ZVxuICAgICAqL1xuICAgIHRyYW5zcGlsZVNjcmlwdD86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKiBpZiBzZXQgdG8gdHJ1ZSB0aGUgcmVzdWx0aW5nIGZpbGUgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIG5leHQgbWlkZGxld2FyZVxuICAgICAqIE9ubHkgd29ya3MgaWYgdGhlIG5leHQgbWlkZGxld2FyZSBjaGVja3MgZm9yIHJlcS5wYXNzZWRGaWxlXG4gICAgICogRGVmYXVsdDogZmFsc2VcbiAgICAgKi9cbiAgICBwYXNzZmlsZT86IGZhbHNlXG59YDtcblxuY29uc3QgdXNhZ2VUZXh0ID0gYElmIHlvdSB3YW50IHRvIHVzZSAudnVlIHNmYyBmaWxlcyBpbmNsdWRlIHRhc2sgYW5kIG1pZGRsZXdhcmUgaW4gdWk1LnlhbWxgO1xuY29uc3QgdXNhZ2UgPSBgYnVpbGRlcjpcbiAgc2VydmVyOlxuICAgIGN1c3RvbU1pZGRsZXdhcmU6XG4gICAgICAtIG5hbWU6IHZ1ZWk1LW1pZGRsZXdhcmUtc2ZjXG4gICAgICAgIGJlZm9yZU1pZGRsZXdhcmU6IHNlcnZlUmVzb3VyY2VzXG4gICAgICAgICAgIyBZb3VyIGNvbmZpZ3VyYXRpb25zYDtcbjwvc2NyaXB0PiJdfQ==