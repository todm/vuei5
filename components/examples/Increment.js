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
      const Button = ui5("sap/m/Button");
      const Text = ui5("sap/m/Text");
      const count = ref(0);
      const code = `<template>
  <Text :text="count"/>
  <Button @press="increment"/>
</template>
<script setup>
  import {ref} from 'vuei5/Vue';
  import ui5Control from 'vuei5/UI5Control';
  const Text = ui5Control('sap/m/Text');
  const Button = ui5Control('sap/m/Button');

  const count = ref(0);
  function increment() {
    count.value++;
  }
<\/script>`;
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock(_Fragment, null, [_createVNode(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_unref(VBox), null, {
            default: _withCtx(() => [_createVNode(_unref(Text), {
              text: "Click on the button to increment the number."
            }), _createVNode(_unref(Button), {
              text: 'Current value: ' + count.value,
              onPress: _cache[0] || (_cache[0] = $event => count.value++)
            }, null, 8
            /* PROPS */
            , ["text"])]),
            _: 1
            /* STABLE */

          })]),
          _: 1
          /* STABLE */

        }), _createVNode(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_unref(VBox), null, {
            default: _withCtx(() => [_createVNode(_unref(Text), {
              text: "You can interact with vuei5 components the same way as with normal components. Just use v-bing and v-on"
            }), _createVNode(_unref(CodeBlock), {
              lang: "html",
              code: code
            })]),
            _: 1
            /* STABLE */

          })]),
          _: 1
          /* STABLE */

        })], 64
        /* STABLE_FRAGMENT */
        );
      };
    }

  };
  __sfc__.__scopeId = "data-v-pxo626f0bsf";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9leGFtcGxlcy9JbmNyZW1lbnQudnVlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBb0JBLFlBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBakIsYUFBaUIsQ0FBakI7QUFDQSxZQUFNLElBQUksR0FBRyxHQUFHLENBQWhCLFlBQWdCLENBQWhCO0FBQ0EsWUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFsQixjQUFrQixDQUFsQjtBQUNBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEI7QUFFQSxZQUFNLEtBQUssR0FBRyxHQUFHLENBQWpCLENBQWlCLENBQWpCO0FBRUEsWUFBTSxJQUFJLEdBQUk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBLFdBQUEiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxQYW5lbD5cbiAgICA8VkJveD5cbiAgICAgIDxUZXh0IHRleHQ9XCJDbGljayBvbiB0aGUgYnV0dG9uIHRvIGluY3JlbWVudCB0aGUgbnVtYmVyLlwiIC8+XG4gICAgICA8QnV0dG9uIDp0ZXh0PVwiJ0N1cnJlbnQgdmFsdWU6ICcgKyBjb3VudFwiIEBwcmVzcz1cImNvdW50KytcIi8+XG4gICAgPC9WQm94PlxuICA8L1BhbmVsPlxuICA8UGFuZWw+XG4gICAgPFZCb3g+XG4gICAgICA8VGV4dCB0ZXh0PVwiWW91IGNhbiBpbnRlcmFjdCB3aXRoIHZ1ZWk1IGNvbXBvbmVudHMgdGhlIHNhbWUgd2F5IGFzIHdpdGggbm9ybWFsIGNvbXBvbmVudHMuIEp1c3QgdXNlIHYtYmluZyBhbmQgdi1vblwiLz5cbiAgICAgIDxDb2RlQmxvY2sgbGFuZz1cImh0bWxcIiA6Y29kZT1cImNvZGVcIi8+XG4gICAgPC9WQm94PlxuICA8L1BhbmVsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVpNS9WdWVcIjtcbmltcG9ydCB1aTUgZnJvbSBcInZ1ZWk1L1VJNUNvbnRyb2xcIjtcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIi4uL2NvbW1vbi9Db2RlQmxvY2tcIjtcblxuY29uc3QgUGFuZWwgPSB1aTUoXCJzYXAvbS9QYW5lbFwiKTtcbmNvbnN0IFZCb3ggPSB1aTUoXCJzYXAvbS9WQm94XCIpO1xuY29uc3QgQnV0dG9uID0gdWk1KFwic2FwL20vQnV0dG9uXCIpO1xuY29uc3QgVGV4dCA9IHVpNShcInNhcC9tL1RleHRcIik7XG5cbmNvbnN0IGNvdW50ID0gcmVmKDApO1xuXG5jb25zdCBjb2RlID0gYDx0ZW1wbGF0ZT5cbiAgPFRleHQgOnRleHQ9XCJjb3VudFwiLz5cbiAgPEJ1dHRvbiBAcHJlc3M9XCJpbmNyZW1lbnRcIi8+XG48L3RlbXBsYXRlPlxuPHNjcmlwdCBzZXR1cD5cbiAgaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZWk1L1Z1ZSc7XG4gIGltcG9ydCB1aTVDb250cm9sIGZyb20gJ3Z1ZWk1L1VJNUNvbnRyb2wnO1xuICBjb25zdCBUZXh0ID0gdWk1Q29udHJvbCgnc2FwL20vVGV4dCcpO1xuICBjb25zdCBCdXR0b24gPSB1aTVDb250cm9sKCdzYXAvbS9CdXR0b24nKTtcblxuICBjb25zdCBjb3VudCA9IHJlZigwKTtcbiAgZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuICAgIGNvdW50LnZhbHVlKys7XG4gIH1cbjxcXC9zY3JpcHQ+YDtcbjwvc2NyaXB0PiJdfQ==