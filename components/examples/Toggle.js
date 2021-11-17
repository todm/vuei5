sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/Vue", "vuei5/UI5Control", "../common/CodeBlock"], function (module, exports, require, __destructureImport0, __destructureImport1, __defaultImport2, __defaultImport3) {
  var _unref = __destructureImport0.unref;
  var _createVNode = __destructureImport0.createVNode;
  var _openBlock = __destructureImport0.openBlock;
  var _createBlock = __destructureImport0.createBlock;
  var _createCommentVNode = __destructureImport0.createCommentVNode;
  var _withCtx = __destructureImport0.withCtx;
  var _Fragment = __destructureImport0.Fragment;
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
  <Text text="Main Text" v-if="isVisible" />
  <Text text="Alternative Text" v-else />

  <Text text="Toggle Text with :visible" :visible="isVisible" />
</template>`;
      const vifVisible = ref(true);
      const visible = ref(true);
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock(_Fragment, null, [_createVNode(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_unref(VBox), null, {
            default: _withCtx(() => [_createVNode(_unref(Text), {
              text: "Click on the buttons to toggle the corresponding texts. Demonstrates v-if and binding to :visible"
            }), _createVNode(_unref(HBox), {
              alignItems: "Center"
            }, {
              default: _withCtx(() => [_createVNode(_unref(Button), {
                text: "Toggle Text with v-if",
                onPress: _cache[0] || (_cache[0] = $event => vifVisible.value = !vifVisible.value)
              }), vifVisible.value ? (_openBlock(), _createBlock(_unref(Text), {
                key: 0,
                text: "V-If"
              })) : (_openBlock(), _createBlock(_unref(Text), {
                key: 1,
                text: "V-Else"
              }))]),
              _: 1
              /* STABLE */

            }), _createVNode(_unref(HBox), {
              alignItems: "Center"
            }, {
              default: _withCtx(() => [_createVNode(_unref(Button), {
                text: "Toggle Text with visible property",
                onPress: _cache[1] || (_cache[1] = $event => visible.value = !visible.value)
              }), _createVNode(_unref(Text), {
                text: "Hello World",
                visible: visible.value
              }, null, 8
              /* PROPS */
              , ["visible"])]),
              _: 1
              /* STABLE */

            })]),
            _: 1
            /* STABLE */

          })]),
          _: 1
          /* STABLE */

        }), _createVNode(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_unref(VBox), null, {
            default: _withCtx(() => [_createVNode(_unref(Text), {
              text: "You can use v-if to toggle an element. Instead of using v-show use :visible when using ui5 controls"
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
  __sfc__.__scopeId = "data-v-gfxf0g7atah";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9leGFtcGxlcy9Ub2dnbGUudnVlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUF1Q0EsWUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFqQixhQUFpQixDQUFqQjtBQUNBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEI7QUFDQSxZQUFNLElBQUksR0FBRyxHQUFHLENBQWhCLFlBQWdCLENBQWhCO0FBQ0EsWUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFsQixjQUFrQixDQUFsQjtBQUNBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEI7QUFFQSxZQUFNLElBQUksR0FBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBSkEsWUFBQTtBQU9BLFlBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBdEIsSUFBc0IsQ0FBdEI7QUFDQSxZQUFNLE9BQU8sR0FBRyxHQUFHLENBQW5CLElBQW1CLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8UGFuZWw+XG4gICAgPFZCb3g+XG4gICAgICA8VGV4dFxuICAgICAgICB0ZXh0PVwiQ2xpY2sgb24gdGhlIGJ1dHRvbnMgdG8gdG9nZ2xlIHRoZSBjb3JyZXNwb25kaW5nIHRleHRzLiBEZW1vbnN0cmF0ZXMgdi1pZiBhbmQgYmluZGluZyB0byA6dmlzaWJsZVwiXG4gICAgICAvPlxuXG4gICAgICA8SEJveCBhbGlnbkl0ZW1zPVwiQ2VudGVyXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0ZXh0PVwiVG9nZ2xlIFRleHQgd2l0aCB2LWlmXCJcbiAgICAgICAgICBAcHJlc3M9XCJ2aWZWaXNpYmxlID0gIXZpZlZpc2libGVcIlxuICAgICAgICAvPlxuICAgICAgICA8VGV4dCB0ZXh0PVwiVi1JZlwiIHYtaWY9XCJ2aWZWaXNpYmxlXCIgLz5cbiAgICAgICAgPFRleHQgdGV4dD1cIlYtRWxzZVwiIHYtZWxzZSAvPlxuICAgICAgPC9IQm94PlxuICAgICAgPEhCb3ggYWxpZ25JdGVtcz1cIkNlbnRlclwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdGV4dD1cIlRvZ2dsZSBUZXh0IHdpdGggdmlzaWJsZSBwcm9wZXJ0eVwiXG4gICAgICAgICAgQHByZXNzPVwidmlzaWJsZSA9ICF2aXNpYmxlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQgdGV4dD1cIkhlbGxvIFdvcmxkXCIgOnZpc2libGU9XCJ2aXNpYmxlXCIgLz5cbiAgICAgIDwvSEJveD5cbiAgICA8L1ZCb3g+XG4gIDwvUGFuZWw+XG4gIDxQYW5lbD5cbiAgICA8VkJveD5cbiAgICAgIDxUZXh0XG4gICAgICAgIHRleHQ9XCJZb3UgY2FuIHVzZSB2LWlmIHRvIHRvZ2dsZSBhbiBlbGVtZW50LiBJbnN0ZWFkIG9mIHVzaW5nIHYtc2hvdyB1c2UgOnZpc2libGUgd2hlbiB1c2luZyB1aTUgY29udHJvbHNcIlxuICAgICAgLz5cbiAgICAgIDxDb2RlQmxvY2sgbGFuZz1cImh0bWxcIiA6Y29kZT1cImNvZGVcIiAvPlxuICAgIDwvVkJveD5cbiAgPC9QYW5lbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlaTUvVnVlXCI7XG5pbXBvcnQgdWk1IGZyb20gXCJ2dWVpNS9VSTVDb250cm9sXCI7XG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gXCIuLi9jb21tb24vQ29kZUJsb2NrXCI7XG5cbmNvbnN0IFBhbmVsID0gdWk1KFwic2FwL20vUGFuZWxcIik7XG5jb25zdCBWQm94ID0gdWk1KFwic2FwL20vVkJveFwiKTtcbmNvbnN0IEhCb3ggPSB1aTUoXCJzYXAvbS9IQm94XCIpO1xuY29uc3QgQnV0dG9uID0gdWk1KFwic2FwL20vQnV0dG9uXCIpO1xuY29uc3QgVGV4dCA9IHVpNShcInNhcC9tL1RleHRcIik7XG5cbmNvbnN0IGNvZGUgPSBgPHRlbXBsYXRlPlxuICA8VGV4dCB0ZXh0PVwiTWFpbiBUZXh0XCIgdi1pZj1cImlzVmlzaWJsZVwiIC8+XG4gIDxUZXh0IHRleHQ9XCJBbHRlcm5hdGl2ZSBUZXh0XCIgdi1lbHNlIC8+XG5cbiAgPFRleHQgdGV4dD1cIlRvZ2dsZSBUZXh0IHdpdGggOnZpc2libGVcIiA6dmlzaWJsZT1cImlzVmlzaWJsZVwiIC8+XG48L3RlbXBsYXRlPmA7XG5cbmNvbnN0IHZpZlZpc2libGUgPSByZWYodHJ1ZSk7XG5jb25zdCB2aXNpYmxlID0gcmVmKHRydWUpO1xuPC9zY3JpcHQ+Il19