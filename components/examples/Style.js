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
      const HBox = ui5("sap/m/HBox");
      const Button = ui5("sap/m/Button");
      const Text = ui5("sap/m/Text");
      const code = `<template>
    <Text text="This text is styled with global style" class="myClass"/>
</template>
<style>
    .myClass {
        color: red;
    }
</style>
<style scoped>
    /* Use the classes of the controls to target them.*/
    .sapMBtn {
      border-radius: 100%;
      overflow: hidden;
      box-shadow: 0 0 1rem lime;
      margin: 2rem;
    }
</style>
`;
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock(_Fragment, null, [_createVNode(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_unref(VBox), null, {
            default: _withCtx(() => [_createVNode(_unref(Text), {
              text: "This text is styled with global style",
              class: "myClass"
            }), _createVNode(_unref(Button), {
              text: "Scoped"
            }), _createVNode(_unref(Text), {
              text: "^ This button is styled with a scope. See the git button in the top right corner. It is not affected since the style is scoped to this component."
            })]),
            _: 1
            /* STABLE */

          })]),
          _: 1
          /* STABLE */

        }), _createVNode(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_unref(VBox), null, {
            default: _withCtx(() => [_createVNode(_unref(Text), {
              text: "Style tags in sfc files will be added via Javascript into your site. You can define a css file that will be filled instead during build."
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
  __sfc__.__scopeId = "data-v-duhlo6pz0o7";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9leGFtcGxlcy9TdHlsZS52dWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFzQkEsWUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFqQixhQUFpQixDQUFqQjtBQUNBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEI7QUFDQSxZQUFNLElBQUksR0FBRyxHQUFHLENBQWhCLFlBQWdCLENBQWhCO0FBQ0EsWUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFsQixjQUFrQixDQUFsQjtBQUNBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEI7QUFFQSxZQUFNLElBQUksR0FBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxQYW5lbD5cbiAgICA8VkJveD5cbiAgICAgIDxUZXh0IHRleHQ9XCJUaGlzIHRleHQgaXMgc3R5bGVkIHdpdGggZ2xvYmFsIHN0eWxlXCIgY2xhc3M9XCJteUNsYXNzXCIvPlxuICAgICAgPEJ1dHRvbiB0ZXh0PVwiU2NvcGVkXCIvPlxuICAgICAgPFRleHQgdGV4dD1cIl4gVGhpcyBidXR0b24gaXMgc3R5bGVkIHdpdGggYSBzY29wZS4gU2VlIHRoZSBnaXQgYnV0dG9uIGluIHRoZSB0b3AgcmlnaHQgY29ybmVyLiBJdCBpcyBub3QgYWZmZWN0ZWQgc2luY2UgdGhlIHN0eWxlIGlzIHNjb3BlZCB0byB0aGlzIGNvbXBvbmVudC5cIi8+XG4gICAgPC9WQm94PlxuICA8L1BhbmVsPlxuICA8UGFuZWw+XG4gICAgPFZCb3g+XG4gICAgICA8VGV4dFxuICAgICAgICB0ZXh0PVwiU3R5bGUgdGFncyBpbiBzZmMgZmlsZXMgd2lsbCBiZSBhZGRlZCB2aWEgSmF2YXNjcmlwdCBpbnRvIHlvdXIgc2l0ZS4gWW91IGNhbiBkZWZpbmUgYSBjc3MgZmlsZSB0aGF0IHdpbGwgYmUgZmlsbGVkIGluc3RlYWQgZHVyaW5nIGJ1aWxkLlwiXG4gICAgICAvPlxuICAgICAgPENvZGVCbG9jayBsYW5nPVwiaHRtbFwiIDpjb2RlPVwiY29kZVwiIC8+XG4gICAgPC9WQm94PlxuICA8L1BhbmVsPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlaTUvVnVlXCI7XG5pbXBvcnQgdWk1IGZyb20gXCJ2dWVpNS9VSTVDb250cm9sXCI7XG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gXCIuLi9jb21tb24vQ29kZUJsb2NrXCI7XG5cbmNvbnN0IFBhbmVsID0gdWk1KFwic2FwL20vUGFuZWxcIik7XG5jb25zdCBWQm94ID0gdWk1KFwic2FwL20vVkJveFwiKTtcbmNvbnN0IEhCb3ggPSB1aTUoXCJzYXAvbS9IQm94XCIpO1xuY29uc3QgQnV0dG9uID0gdWk1KFwic2FwL20vQnV0dG9uXCIpO1xuY29uc3QgVGV4dCA9IHVpNShcInNhcC9tL1RleHRcIik7XG5cbmNvbnN0IGNvZGUgPSBgPHRlbXBsYXRlPlxuICAgIDxUZXh0IHRleHQ9XCJUaGlzIHRleHQgaXMgc3R5bGVkIHdpdGggZ2xvYmFsIHN0eWxlXCIgY2xhc3M9XCJteUNsYXNzXCIvPlxuPC90ZW1wbGF0ZT5cbjxzdHlsZT5cbiAgICAubXlDbGFzcyB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuPC9zdHlsZT5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLyogVXNlIHRoZSBjbGFzc2VzIG9mIHRoZSBjb250cm9scyB0byB0YXJnZXQgdGhlbS4qL1xuICAgIC5zYXBNQnRuIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFyZW0gbGltZTtcbiAgICAgIG1hcmdpbjogMnJlbTtcbiAgICB9XG48L3N0eWxlPlxuYDtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICAubXlDbGFzcyB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuXG4gICAgXG48L3N0eWxlPlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5zYXBNQnRuIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFyZW0gbGltZTtcbiAgICAgIG1hcmdpbjogMnJlbTtcbiAgICB9XG48L3N0eWxlPiJdfQ==