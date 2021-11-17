sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/Vue", "vuei5/UI5Control", "../common/CodeBlock"], function (module, exports, require, __destructureImport0, __destructureImport1, __defaultImport2, __defaultImport3) {
  var _unref = __destructureImport0.unref;
  var _createVNode = __destructureImport0.createVNode;
  var _withCtx = __destructureImport0.withCtx;
  var _Fragment = __destructureImport0.Fragment;
  var _openBlock = __destructureImport0.openBlock;
  var _createElementBlock = __destructureImport0.createElementBlock;
  var ref = __destructureImport1.ref;
  var ui5 = typeof __defaultImport2 === "object" && __defaultImport2.__esModule ? __defaultImport2.default : __defaultImport2;
  var CodeBlock = typeof __defaultImport3 === "object" && __defaultImport3.__esModule ? __defaultImport3.default : __defaultImport3;
  const __sfc__ = {
    setup(__props) {
      const Panel = ui5("sap/m/Panel");
      const VBox = ui5("sap/m/VBox");
      const Input = ui5("sap/m/Input");
      const Button = ui5("sap/m/Button");
      const Text = ui5("sap/m/Text");
      const initTitle = "Model text";
      const modelText = ref(initTitle);

      function resetTitle() {
        modelText.value = initTitle;
      }

      const code = `<Input v-model="modelText" />`;
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock(_Fragment, null, [_createVNode(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_unref(VBox), null, {
            default: _withCtx(() => [_createVNode(_unref(Text), {
              text: "Change the input to change the Text, button to reset."
            }), _createVNode(_unref(Text), {
              text: modelText.value
            }, null, 8
            /* PROPS */
            , ["text"]), _createVNode(_unref(Input), {
              modelValue: modelText.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => modelText.value = $event)
            }, null, 8
            /* PROPS */
            , ["modelValue"]), _createVNode(_unref(Input), {
              value: modelText.value,
              "onUpdate:value": _cache[1] || (_cache[1] = $event => modelText.value = $event)
            }, null, 8
            /* PROPS */
            , ["value"]), _createVNode(_unref(Button), {
              text: "Reset",
              onPress: resetTitle
            })]),
            _: 1
            /* STABLE */

          })]),
          _: 1
          /* STABLE */

        }), _createVNode(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_unref(Text), {
            text: "You can use v-model for two way binding"
          }), _createVNode(_unref(CodeBlock), {
            lang: "html",
            code: code
          })]),
          _: 1
          /* STABLE */

        })], 64
        /* STABLE_FRAGMENT */
        );
      };
    }

  };
  __sfc__.__scopeId = "data-v-43ta4gjmon2";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9leGFtcGxlcy9Nb2RlbC52dWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFxQkEsWUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFqQixhQUFpQixDQUFqQjtBQUNBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEI7QUFDQSxZQUFNLEtBQUssR0FBRyxHQUFHLENBQWpCLGFBQWlCLENBQWpCO0FBQ0EsWUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFsQixjQUFrQixDQUFsQjtBQUNBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEI7QUFFQSxZQUFNLFNBQVMsR0FBZixZQUFBO0FBQ0EsWUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFyQixTQUFxQixDQUFyQjs7QUFDQSxlQUFBLFVBQUEsR0FBcUI7QUFDakIsUUFBQSxTQUFTLENBQVQsS0FBQSxHQUFBLFNBQUE7QUFDSDs7QUFFRCxZQUFNLElBQUksR0FBViwrQkFBQSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPFBhbmVsPlxuICAgIDxWQm94PlxuICAgICAgPFRleHQgdGV4dD1cIkNoYW5nZSB0aGUgaW5wdXQgdG8gY2hhbmdlIHRoZSBUZXh0LCBidXR0b24gdG8gcmVzZXQuXCIgLz5cbiAgICAgIDxUZXh0IDp0ZXh0PVwibW9kZWxUZXh0XCIvPlxuICAgICAgPElucHV0IHYtbW9kZWw9XCJtb2RlbFRleHRcIi8+XG4gICAgICA8SW5wdXQgdi1tb2RlbDp2YWx1ZT1cIm1vZGVsVGV4dFwiLz5cbiAgICAgIDxCdXR0b24gdGV4dD1cIlJlc2V0XCIgQHByZXNzPVwicmVzZXRUaXRsZVwiLz5cbiAgICA8L1ZCb3g+XG4gIDwvUGFuZWw+XG4gIDxQYW5lbD5cbiAgICA8VGV4dCB0ZXh0PVwiWW91IGNhbiB1c2Ugdi1tb2RlbCBmb3IgdHdvIHdheSBiaW5kaW5nXCIvPlxuICAgIDxDb2RlQmxvY2sgbGFuZz1cImh0bWxcIiA6Y29kZT1cImNvZGVcIi8+XG4gIDwvUGFuZWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgcmVmIH0gZnJvbSBcInZ1ZWk1L1Z1ZVwiO1xuaW1wb3J0IHVpNSBmcm9tIFwidnVlaTUvVUk1Q29udHJvbFwiO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwiLi4vY29tbW9uL0NvZGVCbG9ja1wiO1xuXG5jb25zdCBQYW5lbCA9IHVpNShcInNhcC9tL1BhbmVsXCIpO1xuY29uc3QgVkJveCA9IHVpNShcInNhcC9tL1ZCb3hcIik7XG5jb25zdCBJbnB1dCA9IHVpNShcInNhcC9tL0lucHV0XCIpO1xuY29uc3QgQnV0dG9uID0gdWk1KFwic2FwL20vQnV0dG9uXCIpO1xuY29uc3QgVGV4dCA9IHVpNShcInNhcC9tL1RleHRcIik7XG5cbmNvbnN0IGluaXRUaXRsZSA9IFwiTW9kZWwgdGV4dFwiO1xuY29uc3QgbW9kZWxUZXh0ID0gcmVmKGluaXRUaXRsZSk7XG5mdW5jdGlvbiByZXNldFRpdGxlKCl7XG4gICAgbW9kZWxUZXh0LnZhbHVlID0gaW5pdFRpdGxlO1xufVxuXG5jb25zdCBjb2RlID0gYDxJbnB1dCB2LW1vZGVsPVwibW9kZWxUZXh0XCIgLz5gXG48L3NjcmlwdD4iXX0=