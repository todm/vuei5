sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/Vue", "vuei5/UI5Control", "../common/CodeBlock"], function (module, exports, require, __destructureImport0, __destructureImport1, __defaultImport2, __defaultImport3) {
  var _resolveComponent = __destructureImport0.resolveComponent;
  var _createVNode = __destructureImport0.createVNode;
  var _withCtx = __destructureImport0.withCtx;
  var _Fragment = __destructureImport0.Fragment;
  var _openBlock = __destructureImport0.openBlock;
  var _createElementBlock = __destructureImport0.createElementBlock;
  var ref = __destructureImport1.ref;
  var inject = __destructureImport1.inject;
  var ui5 = typeof __defaultImport2 === "object" && __defaultImport2.__esModule ? __defaultImport2.default : __defaultImport2;
  var CodeBlock = typeof __defaultImport3 === "object" && __defaultImport3.__esModule ? __defaultImport3.default : __defaultImport3;
  const __sfc__ = {
    components: {
      Panel: ui5("sap/m/Panel"),
      VBox: ui5("sap/m/VBox"),
      Button: ui5("sap/m/Button"),
      Text: ui5("sap/m/Text"),
      CodeBlock: CodeBlock
    },

    setup(props, ctx) {
      const code = `<template>
  <Text :text="$i18n('propertyId')"/>
</template>
<script>
//...
const text = this.$i18n('propertyId');

// or use inject if you don't have access to this
const translate = inject('$i18n');
const text = translate('propertyId');
<\/script>`;
      const injectedTranslationFunction = inject("$i18n");

      function alertText() {
        alert(injectedTranslationFunction("text1"));
      }

      return {
        code,
        alertText
      };
    }

  };
  __sfc__.__scopeId = "data-v-yv5dsbl5ptf";
  __sfc__.__file = "";

  __sfc__.render = (_ctx, _cache) => {
    const _component_Text = _resolveComponent("Text");

    const _component_Button = _resolveComponent("Button");

    const _component_VBox = _resolveComponent("VBox");

    const _component_Panel = _resolveComponent("Panel");

    const _component_CodeBlock = _resolveComponent("CodeBlock");

    return _openBlock(), _createElementBlock(_Fragment, null, [_createVNode(_component_Panel, null, {
      default: _withCtx(() => [_createVNode(_component_VBox, null, {
        default: _withCtx(() => [_createVNode(_component_Text, {
          text: "Translatable texts from i18n properties files"
        }), _createVNode(_component_Text, {
          text: _ctx.$i18n('text1')
        }, null, 8
        /* PROPS */
        , ["text"]), _createVNode(_component_Button, {
          text: "Alert Translation",
          onPress: _ctx.alertText
        }, null, 8
        /* PROPS */
        , ["onPress"])]),
        _: 1
        /* STABLE */

      })]),
      _: 1
      /* STABLE */

    }), _createVNode(_component_Panel, null, {
      default: _withCtx(() => [_createVNode(_component_VBox, null, {
        default: _withCtx(() => [_createVNode(_component_Text, {
          text: "You can use i18n property files in your templates and in your script"
        }), _createVNode(_component_CodeBlock, {
          lang: "html",
          code: _ctx.code
        }, null, 8
        /* PROPS */
        , ["code"])]),
        _: 1
        /* STABLE */

      })]),
      _: 1
      /* STABLE */

    })], 64
    /* STABLE_FRAGMENT */
    );
  };

  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9leGFtcGxlcy9JMThuLnZ1ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O2tCQXVCZTtBQUNiLElBQUEsVUFBVSxFQUFFO0FBQ1YsTUFBQSxLQUFLLEVBQUUsR0FBRyxDQURBLGFBQ0EsQ0FEQTtBQUVWLE1BQUEsSUFBSSxFQUFFLEdBQUcsQ0FGQyxZQUVELENBRkM7QUFHVixNQUFBLE1BQU0sRUFBRSxHQUFHLENBSEQsY0FHQyxDQUhEO0FBSVYsTUFBQSxJQUFJLEVBQUUsR0FBRyxDQUpDLFlBSUQsQ0FKQztBQUtWLE1BQUEsU0FBUyxFQUFFO0FBTEQsS0FEQzs7QUFTYixJQUFBLEtBQUssQ0FBQSxLQUFBLEVBQUEsR0FBQSxFQUFhO0FBQ2hCLFlBQU0sSUFBRyxHQUFLO0FBQ2hCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBVEksV0FBQTtBQVlBLFlBQU0sMkJBQTBCLEdBQUksTUFBTSxDQUExQyxPQUEwQyxDQUExQzs7QUFFQSxlQUFBLFNBQUEsR0FBcUI7QUFDbkIsUUFBQSxLQUFLLENBQUMsMkJBQTJCLENBQWpDLE9BQWlDLENBQTVCLENBQUw7QUFDRjs7QUFFQSxhQUFPO0FBQUEsUUFBQSxJQUFBO0FBRUwsUUFBQTtBQUZLLE9BQVA7QUFJRDs7QUFoQ1ksRzs7Ozs7QUFKYixVQUFLLGVBQWdCLEdBQUcsaUJBQWEsQ0FBckMsTUFBcUMsQ0FBckM7O0FBQ0EsVUFBTSxpQkFBaUIsR0FBRyxpQkFBTSxDQUFoQyxRQUFnQyxDQUFoQzs7QUFDQSxVQUFNLGVBQWUsR0FBRyxpQkFBaUIsQ0FBekMsTUFBeUMsQ0FBekM7Ozs7QUFFQSxVQUFNLG9CQUFPLEdBQUEsaUJBQUEsQ0FBYixXQUFhLENBQWI7O1dBRU8sVUFBVyxJQUFJLG1CQUFLLENBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxDQUN6QixZQUFZLENBQUEsZ0JBQUEsRUFBQSxJQUFBLEVBQVc7QUFDckIsTUFBQSxPQUFPLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FDdEIsWUFBWSxDQUFBLGVBQUEsRUFBQSxJQUFBLEVBQU87QUFDakIsUUFBQSxPQUFPLEVBQUUsUUFBSSxDQUFBLE1BQUEsQ0FDcEIsWUFBQSxDQUFBLGVBQUEsRUFBQTtBQUFBLFVBQUEsSUFBQSxFQUFBO0FBQUEsU0FBQSxDQURvQixFO0FBR1YsVUFBQSxJQUFLLEVBQUUsSUFBQSxDQUFBLEtBQUEsQ0FBQSxPQUFBO1dBQ0wsSSxFQUFNO0FBQUU7VUFBSSxDQUpKLE1BSUksQyxDQUpKLEVBS1gsWUFBWSxDQUFBLGlCQUFBLEVBQVk7QUFDMUIsVUFBQSxJQUFBLEVBRDBCLG1CQUFBO0FBRTdCLFVBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQTtBQUY2QixTQUFaLEVBQUEsSUFBQSxFQUdwQjtBQUFBO0FBSG9CLFVBR3BCLENBVHVCLFNBU3ZCLENBSG9CLENBTEQsQ0FBQSxDQURJOzs7O0FBQUEsT0FBUCxDQURVLENBQVAsQ0FESTtBQWdCckIsTUFBQSxDQUFDLEVBQUU7QUFBRTs7QUFoQmdCLEtBQVgsQ0FEYSxFO0FBb0J2QixNQUFBLE9BQU8sRUFBRSxRQUFRLENBQUMsTUFBTSxDO0FBRXBCLFFBQUEsT0FBTyxFQUFFLFFBQU0sQ0FBQSxNQUFBLENBQ2IsWUFBWSxDQUFBLGVBQUEsRUFBa0I7QUFBRSxVQUFBLElBQUksRUFBQztBQUFQLFNBQWxCLENBREMsRUFFckIsWUFBQSxDQUFBLG9CQUFBLEVBQUE7Z0JBQUEsTUFBQTtBQUVPLFVBQUEsSUFBQSxFQUFBLElBQUEsQ0FBQTtBQUZQLFNBQUEsRUFBQSxJQUFBLEVBR007QUFBQTtBQUhOLFVBR00sQ0FMZSxNQUtmLENBSE4sQ0FGcUIsQ0FBQSxDO0FBT3JCLFFBQUEsQ0FBQSxFQUFBO0FBQUE7O1FBVDBCLENBQVAsQzs7OztNQXBCTSxDQUFBLEU7O0FBQUEsSyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPFBhbmVsPlxuICAgIDxWQm94PlxuICAgICAgPFRleHQgdGV4dD1cIlRyYW5zbGF0YWJsZSB0ZXh0cyBmcm9tIGkxOG4gcHJvcGVydGllcyBmaWxlc1wiIC8+XG4gICAgICA8VGV4dCA6dGV4dD1cIiRpMThuKCd0ZXh0MScpXCIgLz5cbiAgICAgIDxCdXR0b24gdGV4dD1cIkFsZXJ0IFRyYW5zbGF0aW9uXCIgQHByZXNzPVwiYWxlcnRUZXh0XCIgLz5cbiAgICA8L1ZCb3g+XG4gIDwvUGFuZWw+XG4gIDxQYW5lbD5cbiAgICA8VkJveD5cbiAgICAgIDxUZXh0XG4gICAgICAgIHRleHQ9XCJZb3UgY2FuIHVzZSBpMThuIHByb3BlcnR5IGZpbGVzIGluIHlvdXIgdGVtcGxhdGVzIGFuZCBpbiB5b3VyIHNjcmlwdFwiXG4gICAgICAvPlxuICAgICAgPENvZGVCbG9jayBsYW5nPVwiaHRtbFwiIDpjb2RlPVwiY29kZVwiIC8+XG4gICAgPC9WQm94PlxuICA8L1BhbmVsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IHJlZiwgaW5qZWN0IH0gZnJvbSBcInZ1ZWk1L1Z1ZVwiO1xuaW1wb3J0IHVpNSBmcm9tIFwidnVlaTUvVUk1Q29udHJvbFwiO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwiLi4vY29tbW9uL0NvZGVCbG9ja1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBQYW5lbDogdWk1KFwic2FwL20vUGFuZWxcIiksXG4gICAgVkJveDogdWk1KFwic2FwL20vVkJveFwiKSxcbiAgICBCdXR0b246IHVpNShcInNhcC9tL0J1dHRvblwiKSxcbiAgICBUZXh0OiB1aTUoXCJzYXAvbS9UZXh0XCIpLFxuICAgIENvZGVCbG9jazogQ29kZUJsb2NrXG4gIH0sXG5cbiAgc2V0dXAocHJvcHMsIGN0eCkge1xuICAgIGNvbnN0IGNvZGUgPSBgPHRlbXBsYXRlPlxuICA8VGV4dCA6dGV4dD1cIiRpMThuKCdwcm9wZXJ0eUlkJylcIi8+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbi8vLi4uXG5jb25zdCB0ZXh0ID0gdGhpcy4kaTE4bigncHJvcGVydHlJZCcpO1xuXG4vLyBvciB1c2UgaW5qZWN0IGlmIHlvdSBkb24ndCBoYXZlIGFjY2VzcyB0byB0aGlzXG5jb25zdCB0cmFuc2xhdGUgPSBpbmplY3QoJyRpMThuJyk7XG5jb25zdCB0ZXh0ID0gdHJhbnNsYXRlKCdwcm9wZXJ0eUlkJyk7XG48XFwvc2NyaXB0PmA7XG5cbiAgICBjb25zdCBpbmplY3RlZFRyYW5zbGF0aW9uRnVuY3Rpb24gPSBpbmplY3QoXCIkaTE4blwiKTtcblxuICAgIGZ1bmN0aW9uIGFsZXJ0VGV4dCgpIHtcbiAgICAgIGFsZXJ0KGluamVjdGVkVHJhbnNsYXRpb25GdW5jdGlvbihcInRleHQxXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29kZSxcbiAgICAgIGFsZXJ0VGV4dFxuICAgIH1cbiAgfSxcbn07XG48L3NjcmlwdD4iXSwic291cmNlUm9vdCI6IiJ9