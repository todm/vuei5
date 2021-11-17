sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/UI5html"], function (module, exports, require, __destructureImport0, __defaultImport1) {
  var _createCommentVNode = __destructureImport0.createCommentVNode;
  var _unref = __destructureImport0.unref;
  var _createElementVNode = __destructureImport0.createElementVNode;
  var _normalizeClass = __destructureImport0.normalizeClass;
  var _withCtx = __destructureImport0.withCtx;
  var _openBlock = __destructureImport0.openBlock;
  var _createBlock = __destructureImport0.createBlock;
  var UI5html = typeof __defaultImport1 === "object" && __defaultImport1.__esModule ? __defaultImport1.default : __defaultImport1;
  const _hoisted_1 = ["innerHTML"];
  const __sfc__ = {
    props: ['code', 'lang'],

    setup(__props) {
      const props = __props;
      const content = window.Prism ? Prism.highlight(props.code, Prism.languages[props.lang], props.lang) : props.code;
      return (_ctx, _cache) => {
        return _openBlock(), _createBlock(_unref(UI5html), null, {
          default: _withCtx(() => [_createCommentVNode(" <div v-html=\"content\" style=\"background-color: #ededed; padding: 1rem; white-space: pre; width: min-content; margin: 1rem; font-family: monospace\"/> "), _createElementVNode("pre", {
            class: _normalizeClass({
              ['language-' + __props.lang]: true
            })
          }, [_createElementVNode("code", {
            innerHTML: _unref(content)
          }, null, 8
          /* PROPS */
          , _hoisted_1)], 2
          /* CLASS */
          )]),
          _: 1
          /* STABLE */

        });
      };
    }

  };
  __sfc__.__scopeId = "data-v-8vo3t9dximn";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9jb21tb24vQ29kZUJsb2NrLnZ1ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVdBLFlBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBTixLQUFBLEdBQWUsS0FBSyxDQUFMLFNBQUEsQ0FBZ0IsS0FBSyxDQUFyQixJQUFBLEVBQTRCLEtBQUssQ0FBTCxTQUFBLENBQWdCLEtBQUssQ0FBakQsSUFBNEIsQ0FBNUIsRUFBeUQsS0FBSyxDQUE3RSxJQUFlLENBQWYsR0FBc0YsS0FBSyxDQUEzRyxJQUFBIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8VUk1aHRtbD5cbiAgICA8IS0tIDxkaXYgdi1odG1sPVwiY29udGVudFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDsgcGFkZGluZzogMXJlbTsgd2hpdGUtc3BhY2U6IHByZTsgd2lkdGg6IG1pbi1jb250ZW50OyBtYXJnaW46IDFyZW07IGZvbnQtZmFtaWx5OiBtb25vc3BhY2VcIi8+IC0tPlxuICAgIDxwcmUgOmNsYXNzPVwie1snbGFuZ3VhZ2UtJytsYW5nXTogdHJ1ZX1cIj48Y29kZSAgdi1odG1sPVwiY29udGVudFwiPjwvY29kZT48L3ByZT5cbiAgPC9VSTVodG1sPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCBVSTVodG1sIGZyb20gXCJ2dWVpNS9VSTVodG1sXCI7XG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKFsnY29kZScsICdsYW5nJ10pO1xuXG5jb25zdCBjb250ZW50ID0gd2luZG93LlByaXNtID8gUHJpc20uaGlnaGxpZ2h0KHByb3BzLmNvZGUsIFByaXNtLmxhbmd1YWdlc1twcm9wcy5sYW5nXSwgcHJvcHMubGFuZykgOiBwcm9wcy5jb2RlO1xuPC9zY3JpcHQ+Il19