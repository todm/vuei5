sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/Vue", "vuei5/UI5Control"], function (module, exports, require, __destructureImport0, __destructureImport1, __defaultImport2) {
  var _unref = __destructureImport0.unref;
  var _createVNode = __destructureImport0.createVNode;
  var _withCtx = __destructureImport0.withCtx;
  var _openBlock = __destructureImport0.openBlock;
  var _createBlock = __destructureImport0.createBlock;
  var ref = __destructureImport1.ref;
  var inject = __destructureImport1.inject;
  var computed = __destructureImport1.computed;
  var ui5 = typeof __defaultImport2 === "object" && __defaultImport2.__esModule ? __defaultImport2.default : __defaultImport2;
  const __sfc__ = {
    props: ['arguments'],

    setup(__props) {
      const props = __props;
      const strProps = computed(() => JSON.stringify(props, null));
      const ui5Router = inject("$ui5Router");
      const Panel = ui5("sap/m/Panel");
      const VBox = ui5("sap/m/VBox");
      const Button = ui5("sap/m/Button");
      const Text = ui5("sap/m/Text");
      const Input = ui5("sap/m/Input");
      const inp = ref(null);

      function navigate() {
        const p = inp.value.ui5Control.getValue();
        ui5Router.navTo('routerDemo', {
          myParameter: p
        });
      }

      return (_ctx, _cache) => {
        return _openBlock(), _createBlock(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_unref(VBox), null, {
            default: _withCtx(() => [_createVNode(_unref(Text), {
              text: "You can already see the router in action by switching between the examples"
            }), _createVNode(_unref(Text), {
              text: "Click on the button to set the parameter to the route"
            }), _createVNode(_unref(Input), {
              ref: (_value, _refs) => {
                _refs['inp'] = _value;
                inp.value = _value;
              },
              value: "My Parameter Input"
            }, null, 512
            /* NEED_PATCH */
            ), _createVNode(_unref(Button), {
              text: "Navigate with parameter",
              onPress: navigate
            }), _createVNode(_unref(Text), {
              text: 'Props passed to the component: ' + _unref(strProps)
            }, null, 8
            /* PROPS */
            , ["text"])]),
            _: 1
            /* STABLE */

          })]),
          _: 1
          /* STABLE */

        });
      };
    }

  };
  __sfc__.__scopeId = "data-v-8w3t8363yfr";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9leGFtcGxlcy9Sb3V0ZXJEZW1vLnZ1ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSxZQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUosU0FBQSxDQUFBLEtBQUEsRUFBaEMsSUFBZ0MsQ0FBUCxDQUF6QjtBQUVBLFlBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBeEIsWUFBd0IsQ0FBeEI7QUFFQSxZQUFNLEtBQUssR0FBRyxHQUFHLENBQWpCLGFBQWlCLENBQWpCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFoQixZQUFnQixDQUFoQjtBQUNBLFlBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBbEIsY0FBa0IsQ0FBbEI7QUFDQSxZQUFNLElBQUksR0FBRyxHQUFHLENBQWhCLFlBQWdCLENBQWhCO0FBQ0EsWUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFqQixhQUFpQixDQUFqQjtBQUVBLFlBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBZixJQUFlLENBQWY7O0FBRUEsZUFBQSxRQUFBLEdBQW9CO0FBQ2xCLGNBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBSCxLQUFBLENBQUEsVUFBQSxDQUFWLFFBQVUsRUFBVjtBQUNBLFFBQUEsU0FBUyxDQUFULEtBQUEsQ0FBQSxZQUFBLEVBQThCO0FBQUMsVUFBQSxXQUFXLEVBQUU7QUFBZCxTQUE5QjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8UGFuZWw+XG4gICAgPFZCb3g+XG4gICAgICA8VGV4dCB0ZXh0PVwiWW91IGNhbiBhbHJlYWR5IHNlZSB0aGUgcm91dGVyIGluIGFjdGlvbiBieSBzd2l0Y2hpbmcgYmV0d2VlbiB0aGUgZXhhbXBsZXNcIiAvPlxuICAgICAgPFRleHQgdGV4dD1cIkNsaWNrIG9uIHRoZSBidXR0b24gdG8gc2V0IHRoZSBwYXJhbWV0ZXIgdG8gdGhlIHJvdXRlXCIgLz5cblxuICAgICAgPElucHV0IHJlZj1cImlucFwiIHZhbHVlPVwiTXkgUGFyYW1ldGVyIElucHV0XCIvPlxuICAgICAgPEJ1dHRvbiB0ZXh0PVwiTmF2aWdhdGUgd2l0aCBwYXJhbWV0ZXJcIiBAcHJlc3M9XCJuYXZpZ2F0ZVwiLz5cbiAgICAgIDxUZXh0IDp0ZXh0PVwiJ1Byb3BzIHBhc3NlZCB0byB0aGUgY29tcG9uZW50OiAnICsgc3RyUHJvcHNcIiAvPlxuXG4gICAgPC9WQm94PlxuICA8L1BhbmVsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiwgaW5qZWN0LCBjb21wdXRlZCB9IGZyb20gXCJ2dWVpNS9WdWVcIjtcbmltcG9ydCB1aTUgZnJvbSBcInZ1ZWk1L1VJNUNvbnRyb2xcIjtcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyhbJ2FyZ3VtZW50cyddKTtcbmNvbnN0IHN0clByb3BzID0gY29tcHV0ZWQoKCkgPT4gSlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwpKTtcblxuY29uc3QgdWk1Um91dGVyID0gaW5qZWN0KFwiJHVpNVJvdXRlclwiKTtcblxuY29uc3QgUGFuZWwgPSB1aTUoXCJzYXAvbS9QYW5lbFwiKTtcbmNvbnN0IFZCb3ggPSB1aTUoXCJzYXAvbS9WQm94XCIpO1xuY29uc3QgQnV0dG9uID0gdWk1KFwic2FwL20vQnV0dG9uXCIpO1xuY29uc3QgVGV4dCA9IHVpNShcInNhcC9tL1RleHRcIik7XG5jb25zdCBJbnB1dCA9IHVpNShcInNhcC9tL0lucHV0XCIpO1xuXG5jb25zdCBpbnAgPSByZWYobnVsbCk7XG5cbmZ1bmN0aW9uIG5hdmlnYXRlKCkge1xuICBjb25zdCBwID0gaW5wLnZhbHVlLnVpNUNvbnRyb2wuZ2V0VmFsdWUoKTtcbiAgdWk1Um91dGVyLm5hdlRvKCdyb3V0ZXJEZW1vJywge215UGFyYW1ldGVyOiBwfSk7XG59XG48L3NjcmlwdD4iXX0=