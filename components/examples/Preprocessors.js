sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/UI5Control", "../common/CodeBlock"], function (module, exports, require, __destructureImport0, __defaultImport1, __defaultImport2) {
  var _unref = __destructureImport0.unref;
  var _createVNode = __destructureImport0.createVNode;
  var _withCtx = __destructureImport0.withCtx;
  var _Fragment = __destructureImport0.Fragment;
  var _openBlock = __destructureImport0.openBlock;
  var _createElementBlock = __destructureImport0.createElementBlock;
  var ui5 = typeof __defaultImport1 === "object" && __defaultImport1.__esModule ? __defaultImport1.default : __defaultImport1;
  var CodeBlock = typeof __defaultImport2 === "object" && __defaultImport2.__esModule ? __defaultImport2.default : __defaultImport2;
  const __sfc__ = {
    setup(__props) {
      const Panel = ui5("sap/m/Panel");
      const VBox = ui5("sap/m/VBox");
      const Text = ui5("sap/m/Text");
      const code = `<template lang="pug">
Panel
    VBox
        Text(text="This component uses Pug as a template preprocessor")
</template>
<style lang=scss>
$textColor: red;
.myContainer {
    div {
        color: $textColor;
    }
}
</style>`;
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock(_Fragment, null, [_createVNode(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_unref(VBox), null, {
            default: _withCtx(() => [_createVNode(_unref(Text), {
              text: "This component uses Pug as a template preprocessor"
            }), _createVNode(_unref(VBox), {
              class: "myContainer"
            }, {
              default: _withCtx(() => [_createVNode(_unref(Text), {
                text: "It also uses scss as a style preprocessor"
              }), _createVNode(_unref(Text), {
                text: "Wich makes stuff like nesting and variables possible"
              })]),
              _: 1
              /* STABLE */

            })]),
            _: 1
            /* STABLE */

          })]),
          _: 1
          /* STABLE */

        }), _createVNode(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_unref(CodeBlock), {
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
  __sfc__.__scopeId = "data-v-1eewjrsni6j";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9leGFtcGxlcy9QcmVwcm9jZXNzb3JzLnZ1ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBYUEsWUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFqQixhQUFpQixDQUFqQjtBQUNBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEI7QUFDQSxZQUFNLElBQUksR0FBRyxHQUFHLENBQWhCLFlBQWdCLENBQWhCO0FBR0EsWUFBTSxJQUFJLEdBQUk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEEsU0FBQSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG5QYW5lbFxuICAgIFZCb3hcbiAgICAgICAgVGV4dCh0ZXh0PVwiVGhpcyBjb21wb25lbnQgdXNlcyBQdWcgYXMgYSB0ZW1wbGF0ZSBwcmVwcm9jZXNzb3JcIilcbiAgICAgICAgVkJveChjbGFzcz1cIm15Q29udGFpbmVyXCIpXG4gICAgICAgICAgICBUZXh0KHRleHQ9XCJJdCBhbHNvIHVzZXMgc2NzcyBhcyBhIHN0eWxlIHByZXByb2Nlc3NvclwiKVxuICAgICAgICAgICAgVGV4dCh0ZXh0PVwiV2ljaCBtYWtlcyBzdHVmZiBsaWtlIG5lc3RpbmcgYW5kIHZhcmlhYmxlcyBwb3NzaWJsZVwiKVxuUGFuZWxcbiAgICBDb2RlQmxvY2sobGFuZz1cImh0bWxcIiwgOmNvZGU9XCJjb2RlXCIpXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHVpNSBmcm9tIFwidnVlaTUvVUk1Q29udHJvbFwiO1xuY29uc3QgUGFuZWwgPSB1aTUoXCJzYXAvbS9QYW5lbFwiKTtcbmNvbnN0IFZCb3ggPSB1aTUoXCJzYXAvbS9WQm94XCIpO1xuY29uc3QgVGV4dCA9IHVpNShcInNhcC9tL1RleHRcIik7XG5cbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIi4uL2NvbW1vbi9Db2RlQmxvY2tcIjtcbmNvbnN0IGNvZGUgPSBgPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cblBhbmVsXG4gICAgVkJveFxuICAgICAgICBUZXh0KHRleHQ9XCJUaGlzIGNvbXBvbmVudCB1c2VzIFB1ZyBhcyBhIHRlbXBsYXRlIHByZXByb2Nlc3NvclwiKVxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPXNjc3M+XG4kdGV4dENvbG9yOiByZWQ7XG4ubXlDb250YWluZXIge1xuICAgIGRpdiB7XG4gICAgICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIH1cbn1cbjwvc3R5bGU+YDtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cbiR0ZXh0Q29sb3I6IHJlZDtcbi5teUNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIC5zYXBNVGV4dCB7XG4gICAgICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIH1cbn1cbjwvc3R5bGU+Il19