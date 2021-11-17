sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/UI5Control", "../common/CodeBlock"], function (module, exports, require, __destructureImport0, __defaultImport1, __defaultImport2) {
  var _resolveComponent = __destructureImport0.resolveComponent;
  var _createVNode = __destructureImport0.createVNode;
  var _withCtx = __destructureImport0.withCtx;
  var _unref = __destructureImport0.unref;
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
      const code = `return VUEIComponent.extend("test.Component", {
    vuei5: {
        vueRoot: MainComponent,
        components: {
            // 'Avatar': 'sap/m/Avatar',
            // 'Panel': 'sap/m/Panel',
            // 'Text': 'sap/m/Text',
            ...UI5Library("sap/m/library", 'm:', [
                'Avatar',
                'Panel',
                'Text',
            ])
        }
    },`;
      const code2 = `Launcher(ui5Root, vueRoot, {
    components: {
        'Button': 'sap/m/Button',
        // ...
    }
})`;
      return (_ctx, _cache) => {
        const _component_m58Avatar = _resolveComponent("m:Avatar");

        const _component_m58Text = _resolveComponent("m:Text");

        const _component_m58Panel = _resolveComponent("m:Panel");

        return _openBlock(), _createElementBlock(_Fragment, null, [_createVNode(_component_m58Panel, null, {
          default: _withCtx(() => [_createVNode(_component_m58Avatar), _createVNode(_component_m58Text, {
            text: "All components on this page were registered globally"
          })]),
          _: 1
          /* STABLE */

        }), _createVNode(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_unref(VBox), null, {
            default: _withCtx(() => [_createVNode(_unref(Text), {
              text: "You can define global components in Component.js or in the Launcher options"
            }), _createVNode(_unref(CodeBlock), {
              lang: "js",
              code: code
            }), _createVNode(_unref(CodeBlock), {
              lang: "js",
              code: code2
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
  __sfc__.__scopeId = "data-v-y7fcz27wu3e";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9leGFtcGxlcy9HbG9iYWxDb21wb25lbnRzLnZ1ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQWtCQSxZQUFNLEtBQUssR0FBRyxHQUFHLENBQWpCLGFBQWlCLENBQWpCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFoQixZQUFnQixDQUFoQjtBQUNBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEI7QUFHQSxZQUFNLElBQUksR0FBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLE9BQUE7QUFlQSxZQUFNLEtBQUssR0FBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBSkEsR0FBQSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPG06UGFuZWw+XG4gICAgPG06QXZhdGFyIC8+XG4gICAgPG06VGV4dCB0ZXh0PVwiQWxsIGNvbXBvbmVudHMgb24gdGhpcyBwYWdlIHdlcmUgcmVnaXN0ZXJlZCBnbG9iYWxseVwiIC8+XG4gIDwvbTpQYW5lbD5cbiAgPFBhbmVsPlxuICAgIDxWQm94PlxuICAgICAgPFRleHRcbiAgICAgICAgdGV4dD1cIllvdSBjYW4gZGVmaW5lIGdsb2JhbCBjb21wb25lbnRzIGluIENvbXBvbmVudC5qcyBvciBpbiB0aGUgTGF1bmNoZXIgb3B0aW9uc1wiXG4gICAgICAvPlxuICAgICAgPENvZGVCbG9jayBsYW5nPVwianNcIiA6Y29kZT1cImNvZGVcIiAvPlxuICAgICAgPENvZGVCbG9jayBsYW5nPVwianNcIiA6Y29kZT1cImNvZGUyXCIgLz5cbiAgICA8L1ZCb3g+XG4gIDwvUGFuZWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHVpNSBmcm9tIFwidnVlaTUvVUk1Q29udHJvbFwiO1xuY29uc3QgUGFuZWwgPSB1aTUoXCJzYXAvbS9QYW5lbFwiKTtcbmNvbnN0IFZCb3ggPSB1aTUoXCJzYXAvbS9WQm94XCIpO1xuY29uc3QgVGV4dCA9IHVpNShcInNhcC9tL1RleHRcIik7XG5cbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIi4uL2NvbW1vbi9Db2RlQmxvY2tcIjtcbmNvbnN0IGNvZGUgPSBgcmV0dXJuIFZVRUlDb21wb25lbnQuZXh0ZW5kKFwidGVzdC5Db21wb25lbnRcIiwge1xuICAgIHZ1ZWk1OiB7XG4gICAgICAgIHZ1ZVJvb3Q6IE1haW5Db21wb25lbnQsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIC8vICdBdmF0YXInOiAnc2FwL20vQXZhdGFyJyxcbiAgICAgICAgICAgIC8vICdQYW5lbCc6ICdzYXAvbS9QYW5lbCcsXG4gICAgICAgICAgICAvLyAnVGV4dCc6ICdzYXAvbS9UZXh0JyxcbiAgICAgICAgICAgIC4uLlVJNUxpYnJhcnkoXCJzYXAvbS9saWJyYXJ5XCIsICdtOicsIFtcbiAgICAgICAgICAgICAgICAnQXZhdGFyJyxcbiAgICAgICAgICAgICAgICAnUGFuZWwnLFxuICAgICAgICAgICAgICAgICdUZXh0JyxcbiAgICAgICAgICAgIF0pXG4gICAgICAgIH1cbiAgICB9LGA7XG5cbmNvbnN0IGNvZGUyID0gYExhdW5jaGVyKHVpNVJvb3QsIHZ1ZVJvb3QsIHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICdCdXR0b24nOiAnc2FwL20vQnV0dG9uJyxcbiAgICAgICAgLy8gLi4uXG4gICAgfVxufSlgO1xuPC9zY3JpcHQ+Il19