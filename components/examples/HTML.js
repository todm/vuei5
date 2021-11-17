sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/Vue", "vuei5/UI5Control", "vuei5/UI5html", "../common/CodeBlock"], function (module, exports, require, __destructureImport0, __destructureImport1, __defaultImport2, __defaultImport3, __defaultImport4) {
  var _unref = __destructureImport0.unref;
  var _createVNode = __destructureImport0.createVNode;
  var _toDisplayString = __destructureImport0.toDisplayString;
  var _createElementVNode = __destructureImport0.createElementVNode;
  var _withCtx = __destructureImport0.withCtx;
  var _resolveComponent = __destructureImport0.resolveComponent;
  var _Fragment = __destructureImport0.Fragment;
  var _openBlock = __destructureImport0.openBlock;
  var _createElementBlock = __destructureImport0.createElementBlock;
  var ref = __destructureImport1.ref;
  var ui5 = typeof __defaultImport2 === "object" && __defaultImport2.__esModule ? __defaultImport2.default : __defaultImport2;
  var UI5Html = typeof __defaultImport3 === "object" && __defaultImport3.__esModule ? __defaultImport3.default : __defaultImport3;
  var CodeBlock = typeof __defaultImport4 === "object" && __defaultImport4.__esModule ? __defaultImport4.default : __defaultImport4;
  const _hoisted_1 = {
    class: "test"
  };

  const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", {
    class: "test"
  }, null, -1
  /* HOISTED */
  );

  const _hoisted_3 = /*#__PURE__*/_createElementVNode("pre", null, null, -1
  /* HOISTED */
  );

  const _hoisted_4 = /*#__PURE__*/_createElementVNode("h1", null, "Ok", -1
  /* HOISTED */
  );

  const __sfc__ = {
    setup(__props) {
      const Panel = ui5("sap/m/Panel");
      const Text = ui5("sap/m/Text");
      const code = `<template>
    <UI5html>
        <h1>Seamless HTML</h1>
    </UI5html>
</template>`;
      const count = ref(0);

      function increment() {
        count.value++;
      }

      return (_ctx, _cache) => {
        const _component_VBox = _resolveComponent("VBox");

        return _openBlock(), _createElementBlock(_Fragment, null, [_createVNode(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_unref(Text), {
            class: "Hello",
            text: "You can seamlessly integrate HTML in your vue components by using the UI5Html control. The below example is written in html. The global ui5 styling is applied",
            debug: false
          }), _createVNode(_unref(UI5Html), null, {
            default: _withCtx(() => [_createElementVNode("h1", _hoisted_1, "Counter in html: " + _toDisplayString(count.value), 1
            /* TEXT */
            ), _createElementVNode("button", {
              class: "test",
              onClick: increment
            }, "Increment"), _hoisted_2, _hoisted_3, _hoisted_4]),
            _: 1
            /* STABLE */

          })]),
          _: 1
          /* STABLE */

        }), _createVNode(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_component_VBox, null, {
            default: _withCtx(() => [_createVNode(_unref(Text), {
              text: "Simply import vuei5/UI5html and place your html as a child of that component"
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
  __sfc__.__scopeId = "data-v-up2n7zkbtm";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9leGFtcGxlcy9IVE1MLnZ1ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkEsWUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFqQixhQUFpQixDQUFqQjtBQUNBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEI7QUFHQSxZQUFNLElBQUksR0FBSTtBQUNkO0FBQ0E7QUFDQTtBQUhBLFlBQUE7QUFNQSxZQUFNLEtBQUssR0FBRyxHQUFHLENBQWpCLENBQWlCLENBQWpCOztBQUVBLGVBQUEsU0FBQSxHQUFxQjtBQUNuQixRQUFBLEtBQUssQ0FBTCxLQUFBO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxQYW5lbD5cbiAgICA8VGV4dFxuICAgICAgY2xhc3M9XCJIZWxsb1wiXG4gICAgICB0ZXh0PVwiWW91IGNhbiBzZWFtbGVzc2x5IGludGVncmF0ZSBIVE1MIGluIHlvdXIgdnVlIGNvbXBvbmVudHMgYnkgdXNpbmcgdGhlIFVJNUh0bWwgY29udHJvbC4gVGhlIGJlbG93IGV4YW1wbGUgaXMgd3JpdHRlbiBpbiBodG1sLiBUaGUgZ2xvYmFsIHVpNSBzdHlsaW5nIGlzIGFwcGxpZWRcIlxuICAgICAgOmRlYnVnPVwiZmFsc2VcIlxuICAgIC8+XG4gICAgPFVJNUh0bWw+XG4gICAgICA8aDEgY2xhc3M9XCJ0ZXN0XCI+Q291bnRlciBpbiBodG1sOiB7eyBjb3VudCB9fTwvaDE+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwidGVzdFwiIEBjbGljaz1cImluY3JlbWVudFwiPkluY3JlbWVudDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzcz1cInRlc3RcIj48L2Rpdj5cbiAgICAgIDxwcmU+PC9wcmU+XG4gICAgICA8aDE+T2s8L2gxPlxuICAgIDwvVUk1SHRtbD5cbiAgPC9QYW5lbD5cbiAgPFBhbmVsPlxuICAgIDxWQm94PlxuICAgICAgPFRleHRcbiAgICAgICAgdGV4dD1cIlNpbXBseSBpbXBvcnQgdnVlaTUvVUk1aHRtbCBhbmQgcGxhY2UgeW91ciBodG1sIGFzIGEgY2hpbGQgb2YgdGhhdCBjb21wb25lbnRcIlxuICAgICAgLz5cbiAgICAgIDxDb2RlQmxvY2sgbGFuZz1cImh0bWxcIiA6Y29kZT1cImNvZGVcIiAvPlxuICAgIDwvVkJveD5cbiAgPC9QYW5lbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlaTUvVnVlXCI7XG5pbXBvcnQgdWk1IGZyb20gXCJ2dWVpNS9VSTVDb250cm9sXCI7XG5pbXBvcnQgVUk1SHRtbCBmcm9tIFwidnVlaTUvVUk1aHRtbFwiO1xuY29uc3QgUGFuZWwgPSB1aTUoXCJzYXAvbS9QYW5lbFwiKTtcbmNvbnN0IFRleHQgPSB1aTUoXCJzYXAvbS9UZXh0XCIpO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwiLi4vY29tbW9uL0NvZGVCbG9ja1wiO1xuXG5jb25zdCBjb2RlID0gYDx0ZW1wbGF0ZT5cbiAgICA8VUk1aHRtbD5cbiAgICAgICAgPGgxPlNlYW1sZXNzIEhUTUw8L2gxPlxuICAgIDwvVUk1aHRtbD5cbjwvdGVtcGxhdGU+YFxuXG5jb25zdCBjb3VudCA9IHJlZigwKTtcblxuZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuICBjb3VudC52YWx1ZSsrO1xufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+Il19