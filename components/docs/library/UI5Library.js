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
      const headerProperties = [["Module", "vuei5/UI5Library"], ["Type", "Function"]];
      const overview = `The UI5Library function is used to wrap the UI5 controls of a whole ui5 control library in vue components wich can be used in your vue app. This function can be used if many controls of a library need to be imported and you don't want to import them all by hand. Using this function could lead to performance problems since some libraries contain a lot of controls.`;
      const signatureText = ``;
      const signature = `function UI5Library(library: string | sap.library, prefix?: string = '', selective?: string[]): Object;`;
      const usageText = `Simply call the function in a vue component and pass it a ui5 library to 'convert' it to a vue component. If you pass it a string the function will use 'sap.ui.requireSync(ui5Control)' to load the library. The controls can then be used in the template of the component. You can define a prefix to avoid collisions. You can also define an array containing the controls you want to use wich will make the function run much quicker since not all controls need to be wrapped.`;
      const usage = `<script>
  import UI5Library from 'vuei5/UI5Library';
  import sapM from 'sap/m/library';
  export default {
      components: {
          ...UI5Library(sapM),
          ...UI5Library("sap/uxap/library", 'uxap:', ['ObjectPageLayout', 'ObjectPageHeader', /* ... */])
      }
  }
<\/script>
<template>
  <!-- All components from sap/m are available -->
  <VBox>
    <Text text="Hello World" />
  </VBox>

  <!-- All specified components from sap/uxap are available with a prefix -->
  <uxap:ObjectPageLayout>
    <!-- ... -->
  </uxap:ObjectPageLayout>
</template>

If you are in a <script setup> tag assign the results to a constant. Instead of defining a prefix rename the constant instead:

<script setup>
  import UI5Control from 'vuei5/UI5Control';
  const {Button, VBox, HBox: MyHBox} =  UI5Control("sapM");
<\/script>
<template>
  <VBox>
    <Text text="Hello World" />

    <MyHBox><!-- This control was renamed -->
    </MyHBox>
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
  __sfc__.__scopeId = "data-v-pocnxbeiox";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9kb2NzL2xpYnJhcnkvVUk1TGlicmFyeS52dWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBZUEsWUFBTSxnQkFBZ0IsR0FBRyxDQUN2QixDQUFBLFFBQUEsRUFEdUIsa0JBQ3ZCLENBRHVCLEVBRXZCLENBQUEsTUFBQSxFQUZGLFVBRUUsQ0FGdUIsQ0FBekI7QUFLQSxZQUFNLFFBQVEsR0FBZCwrV0FBQTtBQUVBLFlBQU0sYUFBYSxHQUFuQixFQUFBO0FBQ0EsWUFBTSxTQUFTLEdBQWYseUdBQUE7QUFFQSxZQUFNLFNBQVMsR0FBZix5ZEFBQTtBQUNBLFlBQU0sS0FBSyxHQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5DQSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8QVBJT2JqZWN0XG4gICAgOmhlYWRlclByb3BlcnRpZXM9XCJoZWFkZXJQcm9wZXJ0aWVzXCJcbiAgICA6b3ZlcnZpZXc9XCJvdmVydmlld1wiXG4gICAgOnNpZ25hdHVyZT1cInNpZ25hdHVyZVwiXG4gICAgOnVzYWdlVGV4dD1cInVzYWdlVGV4dFwiXG4gICAgOnVzYWdlPVwidXNhZ2VcIlxuICAgIHVzYWdlTGFuZz1cImh0bWxcIlxuICAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiwgaW5qZWN0LCBvbk1vdW50ZWQgfSBmcm9tIFwidnVlaTUvVnVlXCI7XG5pbXBvcnQgQVBJT2JqZWN0IGZyb20gXCIuLi8uLi9jb21tb24vQVBJT2JqZWN0XCI7XG5cbmNvbnN0IGhlYWRlclByb3BlcnRpZXMgPSBbXG4gIFtcIk1vZHVsZVwiLCBcInZ1ZWk1L1VJNUxpYnJhcnlcIl0sXG4gIFtcIlR5cGVcIiwgXCJGdW5jdGlvblwiXSxcbl07XG5cbmNvbnN0IG92ZXJ2aWV3ID0gYFRoZSBVSTVMaWJyYXJ5IGZ1bmN0aW9uIGlzIHVzZWQgdG8gd3JhcCB0aGUgVUk1IGNvbnRyb2xzIG9mIGEgd2hvbGUgdWk1IGNvbnRyb2wgbGlicmFyeSBpbiB2dWUgY29tcG9uZW50cyB3aWNoIGNhbiBiZSB1c2VkIGluIHlvdXIgdnVlIGFwcC4gVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCBpZiBtYW55IGNvbnRyb2xzIG9mIGEgbGlicmFyeSBuZWVkIHRvIGJlIGltcG9ydGVkIGFuZCB5b3UgZG9uJ3Qgd2FudCB0byBpbXBvcnQgdGhlbSBhbGwgYnkgaGFuZC4gVXNpbmcgdGhpcyBmdW5jdGlvbiBjb3VsZCBsZWFkIHRvIHBlcmZvcm1hbmNlIHByb2JsZW1zIHNpbmNlIHNvbWUgbGlicmFyaWVzIGNvbnRhaW4gYSBsb3Qgb2YgY29udHJvbHMuYDtcblxuY29uc3Qgc2lnbmF0dXJlVGV4dCA9IGBgO1xuY29uc3Qgc2lnbmF0dXJlID0gYGZ1bmN0aW9uIFVJNUxpYnJhcnkobGlicmFyeTogc3RyaW5nIHwgc2FwLmxpYnJhcnksIHByZWZpeD86IHN0cmluZyA9ICcnLCBzZWxlY3RpdmU/OiBzdHJpbmdbXSk6IE9iamVjdDtgO1xuXG5jb25zdCB1c2FnZVRleHQgPSBgU2ltcGx5IGNhbGwgdGhlIGZ1bmN0aW9uIGluIGEgdnVlIGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhIHVpNSBsaWJyYXJ5IHRvICdjb252ZXJ0JyBpdCB0byBhIHZ1ZSBjb21wb25lbnQuIElmIHlvdSBwYXNzIGl0IGEgc3RyaW5nIHRoZSBmdW5jdGlvbiB3aWxsIHVzZSAnc2FwLnVpLnJlcXVpcmVTeW5jKHVpNUNvbnRyb2wpJyB0byBsb2FkIHRoZSBsaWJyYXJ5LiBUaGUgY29udHJvbHMgY2FuIHRoZW4gYmUgdXNlZCBpbiB0aGUgdGVtcGxhdGUgb2YgdGhlIGNvbXBvbmVudC4gWW91IGNhbiBkZWZpbmUgYSBwcmVmaXggdG8gYXZvaWQgY29sbGlzaW9ucy4gWW91IGNhbiBhbHNvIGRlZmluZSBhbiBhcnJheSBjb250YWluaW5nIHRoZSBjb250cm9scyB5b3Ugd2FudCB0byB1c2Ugd2ljaCB3aWxsIG1ha2UgdGhlIGZ1bmN0aW9uIHJ1biBtdWNoIHF1aWNrZXIgc2luY2Ugbm90IGFsbCBjb250cm9scyBuZWVkIHRvIGJlIHdyYXBwZWQuYDtcbmNvbnN0IHVzYWdlID0gYDxzY3JpcHQ+XG4gIGltcG9ydCBVSTVMaWJyYXJ5IGZyb20gJ3Z1ZWk1L1VJNUxpYnJhcnknO1xuICBpbXBvcnQgc2FwTSBmcm9tICdzYXAvbS9saWJyYXJ5JztcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgIC4uLlVJNUxpYnJhcnkoc2FwTSksXG4gICAgICAgICAgLi4uVUk1TGlicmFyeShcInNhcC91eGFwL2xpYnJhcnlcIiwgJ3V4YXA6JywgWydPYmplY3RQYWdlTGF5b3V0JywgJ09iamVjdFBhZ2VIZWFkZXInLCAvKiAuLi4gKi9dKVxuICAgICAgfVxuICB9XG48XFwvc2NyaXB0PlxuPHRlbXBsYXRlPlxuICA8IS0tIEFsbCBjb21wb25lbnRzIGZyb20gc2FwL20gYXJlIGF2YWlsYWJsZSAtLT5cbiAgPFZCb3g+XG4gICAgPFRleHQgdGV4dD1cIkhlbGxvIFdvcmxkXCIgLz5cbiAgPC9WQm94PlxuXG4gIDwhLS0gQWxsIHNwZWNpZmllZCBjb21wb25lbnRzIGZyb20gc2FwL3V4YXAgYXJlIGF2YWlsYWJsZSB3aXRoIGEgcHJlZml4IC0tPlxuICA8dXhhcDpPYmplY3RQYWdlTGF5b3V0PlxuICAgIDwhLS0gLi4uIC0tPlxuICA8L3V4YXA6T2JqZWN0UGFnZUxheW91dD5cbjwvdGVtcGxhdGU+XG5cbklmIHlvdSBhcmUgaW4gYSA8c2NyaXB0IHNldHVwPiB0YWcgYXNzaWduIHRoZSByZXN1bHRzIHRvIGEgY29uc3RhbnQuIEluc3RlYWQgb2YgZGVmaW5pbmcgYSBwcmVmaXggcmVuYW1lIHRoZSBjb25zdGFudCBpbnN0ZWFkOlxuXG48c2NyaXB0IHNldHVwPlxuICBpbXBvcnQgVUk1Q29udHJvbCBmcm9tICd2dWVpNS9VSTVDb250cm9sJztcbiAgY29uc3Qge0J1dHRvbiwgVkJveCwgSEJveDogTXlIQm94fSA9ICBVSTVDb250cm9sKFwic2FwTVwiKTtcbjxcXC9zY3JpcHQ+XG48dGVtcGxhdGU+XG4gIDxWQm94PlxuICAgIDxUZXh0IHRleHQ9XCJIZWxsbyBXb3JsZFwiIC8+XG5cbiAgICA8TXlIQm94PjwhLS0gVGhpcyBjb250cm9sIHdhcyByZW5hbWVkIC0tPlxuICAgIDwvTXlIQm94PlxuICA8L1ZCb3g+XG48L3RlbXBsYXRlPlxuYDtcbjwvc2NyaXB0PiJdfQ==