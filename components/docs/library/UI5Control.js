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
      const headerProperties = [["Module", "vuei5/UI5Control"], ["Type", "Function"]];
      const overview = `The UI5Control function is used to wrap UI5 controls in vue components wich can be used in your vue app.`;
      const signatureText = ``;
      const signature = `function UI5Control(ui5Component: string | sap.ui.core.Control): Object;`;
      const usageText = `Simply call the function in a vue component and pass it a ui5 control to 'convert' it to a vue component. If you pass it a string the function will use 'sap.ui.requireSync(ui5Control)' to load the control. The controls can then be used in the template of the component.`;
      const usage = `<script>
  import UI5Control from 'vuei5/UI5Control';
  import Text from 'sap/m/Text';
  export default {
      components: {
          'Text': UI5Control(Text),
          'VBox': UI5Control(VBox)
      }
  }
<\/script>

If you are in a script setup tag assign the result to a constant:

<script setup>
  import UI5Control from 'vuei5/UI5Control';
  const Text =  UI5Control("sap/m/Text");
<\/script>

Just use the components in your vue template
<template>
  <VBox>
    <Text text="Hello World"/>
  </VBox>
</template>
`;
      return (_ctx, _cache) => {
        return _openBlock(), _createBlock(_unref(APIObject), {
          headerProperties: headerProperties,
          overview: overview,
          signature: signature,
          usageText: usageText,
          usage: usage,
          usageLang: "html"
        });
      };
    }

  };
  __sfc__.__scopeId = "data-v-nx4nbioeq5";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9kb2NzL2xpYnJhcnkvVUk1Q29udHJvbC52dWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBZUEsWUFBTSxnQkFBZ0IsR0FBRyxDQUN2QixDQUFBLFFBQUEsRUFEdUIsa0JBQ3ZCLENBRHVCLEVBRXZCLENBQUEsTUFBQSxFQUZGLFVBRUUsQ0FGdUIsQ0FBekI7QUFLQSxZQUFNLFFBQVEsR0FBZCwwR0FBQTtBQUVBLFlBQU0sYUFBYSxHQUFuQixFQUFBO0FBQ0EsWUFBTSxTQUFTLEdBQWYsMEVBQUE7QUFFQSxZQUFNLFNBQVMsR0FBZiwrUUFBQTtBQUNBLFlBQU0sS0FBSyxHQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8QVBJT2JqZWN0XG4gICAgOmhlYWRlclByb3BlcnRpZXM9XCJoZWFkZXJQcm9wZXJ0aWVzXCJcbiAgICA6b3ZlcnZpZXc9XCJvdmVydmlld1wiXG4gICAgOnNpZ25hdHVyZT1cInNpZ25hdHVyZVwiXG4gICAgOnVzYWdlVGV4dD1cInVzYWdlVGV4dFwiXG4gICAgOnVzYWdlPVwidXNhZ2VcIlxuICAgIHVzYWdlTGFuZz1cImh0bWxcIlxuICAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiwgaW5qZWN0LCBvbk1vdW50ZWQgfSBmcm9tIFwidnVlaTUvVnVlXCI7XG5pbXBvcnQgQVBJT2JqZWN0IGZyb20gXCIuLi8uLi9jb21tb24vQVBJT2JqZWN0XCI7XG5cbmNvbnN0IGhlYWRlclByb3BlcnRpZXMgPSBbXG4gIFtcIk1vZHVsZVwiLCBcInZ1ZWk1L1VJNUNvbnRyb2xcIl0sXG4gIFtcIlR5cGVcIiwgXCJGdW5jdGlvblwiXVxuXVxuXG5jb25zdCBvdmVydmlldyA9IGBUaGUgVUk1Q29udHJvbCBmdW5jdGlvbiBpcyB1c2VkIHRvIHdyYXAgVUk1IGNvbnRyb2xzIGluIHZ1ZSBjb21wb25lbnRzIHdpY2ggY2FuIGJlIHVzZWQgaW4geW91ciB2dWUgYXBwLmA7XG5cbmNvbnN0IHNpZ25hdHVyZVRleHQgPSBgYDtcbmNvbnN0IHNpZ25hdHVyZSA9IGBmdW5jdGlvbiBVSTVDb250cm9sKHVpNUNvbXBvbmVudDogc3RyaW5nIHwgc2FwLnVpLmNvcmUuQ29udHJvbCk6IE9iamVjdDtgO1xuXG5jb25zdCB1c2FnZVRleHQgPSBgU2ltcGx5IGNhbGwgdGhlIGZ1bmN0aW9uIGluIGEgdnVlIGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhIHVpNSBjb250cm9sIHRvICdjb252ZXJ0JyBpdCB0byBhIHZ1ZSBjb21wb25lbnQuIElmIHlvdSBwYXNzIGl0IGEgc3RyaW5nIHRoZSBmdW5jdGlvbiB3aWxsIHVzZSAnc2FwLnVpLnJlcXVpcmVTeW5jKHVpNUNvbnRyb2wpJyB0byBsb2FkIHRoZSBjb250cm9sLiBUaGUgY29udHJvbHMgY2FuIHRoZW4gYmUgdXNlZCBpbiB0aGUgdGVtcGxhdGUgb2YgdGhlIGNvbXBvbmVudC5gO1xuY29uc3QgdXNhZ2UgPSBgPHNjcmlwdD5cbiAgaW1wb3J0IFVJNUNvbnRyb2wgZnJvbSAndnVlaTUvVUk1Q29udHJvbCc7XG4gIGltcG9ydCBUZXh0IGZyb20gJ3NhcC9tL1RleHQnO1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgJ1RleHQnOiBVSTVDb250cm9sKFRleHQpLFxuICAgICAgICAgICdWQm94JzogVUk1Q29udHJvbChWQm94KVxuICAgICAgfVxuICB9XG48XFwvc2NyaXB0PlxuXG5JZiB5b3UgYXJlIGluIGEgc2NyaXB0IHNldHVwIHRhZyBhc3NpZ24gdGhlIHJlc3VsdCB0byBhIGNvbnN0YW50OlxuXG48c2NyaXB0IHNldHVwPlxuICBpbXBvcnQgVUk1Q29udHJvbCBmcm9tICd2dWVpNS9VSTVDb250cm9sJztcbiAgY29uc3QgVGV4dCA9ICBVSTVDb250cm9sKFwic2FwL20vVGV4dFwiKTtcbjxcXC9zY3JpcHQ+XG5cbkp1c3QgdXNlIHRoZSBjb21wb25lbnRzIGluIHlvdXIgdnVlIHRlbXBsYXRlXG48dGVtcGxhdGU+XG4gIDxWQm94PlxuICAgIDxUZXh0IHRleHQ9XCJIZWxsbyBXb3JsZFwiLz5cbiAgPC9WQm94PlxuPC90ZW1wbGF0ZT5cbmA7XG48L3NjcmlwdD4iXX0=