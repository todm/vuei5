sap.ui.define(["module", "exports", "require", "vuei5/Vue"], function (module, exports, require, __destructureImport0) {
  var _unref = __destructureImport0.unref;
  var _createElementVNode = __destructureImport0.createElementVNode;
  var _normalizeClass = __destructureImport0.normalizeClass;
  var _openBlock = __destructureImport0.openBlock;
  var _createElementBlock = __destructureImport0.createElementBlock;
  const _hoisted_1 = ["innerHTML"];
  const __sfc__ = {
    props: ["code", "lang"],

    setup(__props) {
      const props = __props;
      const content = window.Prism ? Prism.highlight(props.code, Prism.languages[props.lang], props.lang) : props.code;
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock("pre", {
          class: _normalizeClass({
            ['language-' + __props.lang]: true
          })
        }, [_createElementVNode("code", {
          innerHTML: _unref(content)
        }, null, 8
        /* PROPS */
        , _hoisted_1)], 2
        /* CLASS */
        );
      };
    }

  };
  __sfc__.__scopeId = "data-v-h0ve53x1vdw";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9jb21tb24vQ29kZUJsb2NrSC52dWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxZQUFNLE9BQU8sR0FBRyxNQUFNLENBQU4sS0FBQSxHQUNaLEtBQUssQ0FBTCxTQUFBLENBQWdCLEtBQUssQ0FBckIsSUFBQSxFQUE0QixLQUFLLENBQUwsU0FBQSxDQUFnQixLQUFLLENBQWpELElBQTRCLENBQTVCLEVBQXlELEtBQUssQ0FEbEQsSUFDWixDQURZLEdBRVosS0FBSyxDQUZULElBQUEiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxwcmVcbiAgICA6Y2xhc3M9XCJ7IFsnbGFuZ3VhZ2UtJyArIGxhbmddOiB0cnVlIH1cIlxuICA+PGNvZGUgIHYtaHRtbD1cImNvbnRlbnRcIj48L2NvZGU+PC9wcmU+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyhbXCJjb2RlXCIsIFwibGFuZ1wiXSk7XG5cbmNvbnN0IGNvbnRlbnQgPSB3aW5kb3cuUHJpc21cbiAgPyBQcmlzbS5oaWdobGlnaHQocHJvcHMuY29kZSwgUHJpc20ubGFuZ3VhZ2VzW3Byb3BzLmxhbmddLCBwcm9wcy5sYW5nKVxuICA6IHByb3BzLmNvZGU7XG48L3NjcmlwdD4iXX0=