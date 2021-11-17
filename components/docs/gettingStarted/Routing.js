sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/UI5html", "vuei5/UI5Control", "../../common/CodeBlockH"], function (module, exports, require, __destructureImport0, __defaultImport1, __defaultImport2, __defaultImport3) {
  var _createElementVNode = __destructureImport0.createElementVNode;
  var _createTextVNode = __destructureImport0.createTextVNode;
  var _unref = __destructureImport0.unref;
  var _createVNode = __destructureImport0.createVNode;
  var _withCtx = __destructureImport0.withCtx;
  var _resolveComponent = __destructureImport0.resolveComponent;
  var _openBlock = __destructureImport0.openBlock;
  var _createBlock = __destructureImport0.createBlock;
  var ui5html = typeof __defaultImport1 === "object" && __defaultImport1.__esModule ? __defaultImport1.default : __defaultImport1;
  var ui5 = typeof __defaultImport2 === "object" && __defaultImport2.__esModule ? __defaultImport2.default : __defaultImport2;
  var CodeBlock = typeof __defaultImport3 === "object" && __defaultImport3.__esModule ? __defaultImport3.default : __defaultImport3;

  const _hoisted_1 = /*#__PURE__*/_createElementVNode("h1", null, "Routing and i18n", -1
  /* HOISTED */
  );

  const _hoisted_2 = /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" Routing and translations are two functions directly imported from ui5. This means that they can be configured the usual way (in "), /*#__PURE__*/_createElementVNode("code", null, "manifest.json"), /*#__PURE__*/_createTextVNode(" etc.). If you use VUEIComponent both routing and translation will be setup automatically. If you use the Launcher function manually you have to pass it the nessessary references to the router and the translation function. ")], -1
  /* HOISTED */
  );

  const _hoisted_3 = /*#__PURE__*/_createElementVNode("h2", null, "Translations", -1
  /* HOISTED */
  );

  const _hoisted_4 = /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" Translations are available in each component via the "), /*#__PURE__*/_createElementVNode("code", null, "$i18n"), /*#__PURE__*/_createTextVNode(" function ("), /*#__PURE__*/_createElementVNode("code", null, "this.$i18n"), /*#__PURE__*/_createTextVNode("). You can also use inject to get the function into your script. Unless configured diffrently this function will take the text id and arguments and returns the translated text. If you want to change that behaviour set the "), /*#__PURE__*/_createElementVNode("code", null, "i18nFunction"), /*#__PURE__*/_createTextVNode(" property in the vuei5 config to the function you want to use to translate. ")], -1
  /* HOISTED */
  );

  const _hoisted_5 = /*#__PURE__*/_createElementVNode("h2", null, "Routing", -1
  /* HOISTED */
  );

  const _hoisted_6 = /*#__PURE__*/_createElementVNode("p", null, " If a router is set up in a project you can specify an outlet with the Router component. Supply it with a configuration to specify the components. ", -1
  /* HOISTED */
  );

  const _hoisted_7 = /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" The specified components will then be rendered in place of the Router component if the current route matches the specified route pattern. Any route parameters will be passed to the component under the "), /*#__PURE__*/_createElementVNode("code", null, "arguments"), /*#__PURE__*/_createTextVNode(" prop. Changes to the current router will trigger the "), /*#__PURE__*/_createElementVNode("code", null, "@change"), /*#__PURE__*/_createTextVNode(" event. If you want access to the ui5 router inside of your project you can inject a reference to it with "), /*#__PURE__*/_createElementVNode("code", null, "inject('$ui5Router')")], -1
  /* HOISTED */
  );

  const __sfc__ = {
    setup(__props) {
      const translate = `<template>
  <!-- In template you can use the function directly -->
  <Text :text="$i18n('myTextId')" />
</template>
<script>
  import {inject} from 'vuei5/Vue';
  export default {
    beforeMount() {
      console.log(this.$i18n('myTextId'));
    },
    setup() {
      const translate = inject('$i18n');
      const res = translate('myTextId');
    }
  }
<\/script>`;
      const manifest = `# manifest.json
{"sap.ui5": {
    "routing": {
      "routes": [
        {
          "pattern": "",
          "name": "home"
        },
        {
          "pattern": "examples/:example:",
          "name": "examples"
        },
        # ...
      ]
    }
}}`;
      const routerComponent = `// SomeComponent.vue
<template>
  <Router :config="config" />
</template>
<script setup>
  import Router from 'vuei5/Router';
  import Home from './pages/Home';
  import Examples from './pages/Examples';

  const config = {
    // routeName: VueComponent
    'home': Home,
    'examples': Examples
  }
<\/script>`;
      return (_ctx, _cache) => {
        const _component_m58Panel = _resolveComponent("m:Panel");

        return _openBlock(), _createBlock(_component_m58Panel, null, {
          default: _withCtx(() => [_createVNode(_unref(ui5html), {
            class: "myTest"
          }, {
            default: _withCtx(() => [_hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _createVNode(_unref(CodeBlock), {
              code: translate,
              lang: "html"
            }), _hoisted_5, _hoisted_6, _createVNode(_unref(CodeBlock), {
              code: manifest,
              lang: "yaml"
            }), _createVNode(_unref(CodeBlock), {
              code: routerComponent,
              lang: "html"
            }), _hoisted_7]),
            _: 1
            /* STABLE */

          })]),
          _: 1
          /* STABLE */

        });
      };
    }

  };
  __sfc__.__scopeId = "data-v-xjznhh8vkm8";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9kb2NzL2dldHRpbmdTdGFydGVkL1JvdXRpbmcudnVlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxZQUFNLFNBQVMsR0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEEsV0FBQTtBQWlCQSxZQUFNLFFBQVEsR0FBSTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEEsR0FBQTtBQWlCQSxZQUFNLGVBQWUsR0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBLFdBQUEiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxtOlBhbmVsPlxuICAgIDx1aTVodG1sIGNsYXNzPVwibXlUZXN0XCI+XG4gICAgICA8aDE+Um91dGluZyBhbmQgaTE4bjwvaDE+XG5cbiAgICAgIDxwPlxuICAgICAgICBSb3V0aW5nIGFuZCB0cmFuc2xhdGlvbnMgYXJlIHR3byBmdW5jdGlvbnMgZGlyZWN0bHkgaW1wb3J0ZWQgZnJvbSB1aTUuXG4gICAgICAgIFRoaXMgbWVhbnMgdGhhdCB0aGV5IGNhbiBiZSBjb25maWd1cmVkIHRoZSB1c3VhbCB3YXkgKGluIDxjb2RlPm1hbmlmZXN0Lmpzb248L2NvZGU+XG4gICAgICAgIGV0Yy4pLiBJZiB5b3UgdXNlIFZVRUlDb21wb25lbnQgYm90aCByb3V0aW5nIGFuZCB0cmFuc2xhdGlvbiB3aWxsIGJlXG4gICAgICAgIHNldHVwIGF1dG9tYXRpY2FsbHkuIElmIHlvdSB1c2UgdGhlIExhdW5jaGVyIGZ1bmN0aW9uIG1hbnVhbGx5IHlvdSBoYXZlXG4gICAgICAgIHRvIHBhc3MgaXQgdGhlIG5lc3Nlc3NhcnkgcmVmZXJlbmNlcyB0byB0aGUgcm91dGVyIGFuZCB0aGUgdHJhbnNsYXRpb25cbiAgICAgICAgZnVuY3Rpb24uXG4gICAgICA8L3A+XG4gICAgICA8aDI+VHJhbnNsYXRpb25zPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBUcmFuc2xhdGlvbnMgYXJlIGF2YWlsYWJsZSBpbiBlYWNoIGNvbXBvbmVudCB2aWEgdGhlIDxjb2RlPiRpMThuPC9jb2RlPiBmdW5jdGlvblxuICAgICAgICAoPGNvZGU+dGhpcy4kaTE4bjwvY29kZT4pLiBZb3UgY2FuIGFsc28gdXNlIGluamVjdCB0byBnZXQgdGhlIGZ1bmN0aW9uIGludG8geW91clxuICAgICAgICBzY3JpcHQuIFVubGVzcyBjb25maWd1cmVkIGRpZmZyZW50bHkgdGhpcyBmdW5jdGlvbiB3aWxsIHRha2UgdGhlIHRleHQgaWRcbiAgICAgICAgYW5kIGFyZ3VtZW50cyBhbmQgcmV0dXJucyB0aGUgdHJhbnNsYXRlZCB0ZXh0LiBJZiB5b3Ugd2FudCB0byBjaGFuZ2VcbiAgICAgICAgdGhhdCBiZWhhdmlvdXIgc2V0IHRoZSA8Y29kZT5pMThuRnVuY3Rpb248L2NvZGU+IHByb3BlcnR5IGluIHRoZSB2dWVpNSBjb25maWcgdG8gdGhlXG4gICAgICAgIGZ1bmN0aW9uIHlvdSB3YW50IHRvIHVzZSB0byB0cmFuc2xhdGUuXG4gICAgICA8L3A+XG5cbiAgICAgIDxDb2RlQmxvY2sgOmNvZGU9XCJ0cmFuc2xhdGVcIiBsYW5nPVwiaHRtbFwiIC8+XG5cbiAgICAgIDxoMj5Sb3V0aW5nPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBJZiBhIHJvdXRlciBpcyBzZXQgdXAgaW4gYSBwcm9qZWN0IHlvdSBjYW4gc3BlY2lmeSBhbiBvdXRsZXQgd2l0aCB0aGVcbiAgICAgICAgUm91dGVyIGNvbXBvbmVudC4gU3VwcGx5IGl0IHdpdGggYSBjb25maWd1cmF0aW9uIHRvIHNwZWNpZnkgdGhlXG4gICAgICAgIGNvbXBvbmVudHMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxDb2RlQmxvY2sgOmNvZGU9XCJtYW5pZmVzdFwiIGxhbmc9XCJ5YW1sXCIgLz5cbiAgICAgIDxDb2RlQmxvY2sgOmNvZGU9XCJyb3V0ZXJDb21wb25lbnRcIiBsYW5nPVwiaHRtbFwiIC8+XG4gICAgICA8cD5cbiAgICAgICAgVGhlIHNwZWNpZmllZCBjb21wb25lbnRzIHdpbGwgdGhlbiBiZSByZW5kZXJlZCBpbiBwbGFjZSBvZiB0aGUgUm91dGVyXG4gICAgICAgIGNvbXBvbmVudCBpZiB0aGUgY3VycmVudCByb3V0ZSBtYXRjaGVzIHRoZSBzcGVjaWZpZWQgcm91dGUgcGF0dGVybi4gQW55XG4gICAgICAgIHJvdXRlIHBhcmFtZXRlcnMgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCB1bmRlciB0aGUgPGNvZGU+YXJndW1lbnRzPC9jb2RlPlxuICAgICAgICBwcm9wLiBDaGFuZ2VzIHRvIHRoZSBjdXJyZW50IHJvdXRlciB3aWxsIHRyaWdnZXIgdGhlIDxjb2RlPkBjaGFuZ2U8L2NvZGU+IGV2ZW50LiBJZlxuICAgICAgICB5b3Ugd2FudCBhY2Nlc3MgdG8gdGhlIHVpNSByb3V0ZXIgaW5zaWRlIG9mIHlvdXIgcHJvamVjdCB5b3UgY2FuIGluamVjdFxuICAgICAgICBhIHJlZmVyZW5jZSB0byBpdCB3aXRoIDxjb2RlPmluamVjdCgnJHVpNVJvdXRlcicpPC9jb2RlPlxuICAgICAgPC9wPlxuICAgIDwvdWk1aHRtbD5cbiAgPC9tOlBhbmVsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB1aTVodG1sIGZyb20gXCJ2dWVpNS9VSTVodG1sXCI7XG5pbXBvcnQgdWk1IGZyb20gXCJ2dWVpNS9VSTVDb250cm9sXCI7XG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gXCIuLi8uLi9jb21tb24vQ29kZUJsb2NrSFwiO1xuXG5jb25zdCB0cmFuc2xhdGUgPSBgPHRlbXBsYXRlPlxuICA8IS0tIEluIHRlbXBsYXRlIHlvdSBjYW4gdXNlIHRoZSBmdW5jdGlvbiBkaXJlY3RseSAtLT5cbiAgPFRleHQgOnRleHQ9XCIkaTE4bignbXlUZXh0SWQnKVwiIC8+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IHtpbmplY3R9IGZyb20gJ3Z1ZWk1L1Z1ZSc7XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBiZWZvcmVNb3VudCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuJGkxOG4oJ215VGV4dElkJykpO1xuICAgIH0sXG4gICAgc2V0dXAoKSB7XG4gICAgICBjb25zdCB0cmFuc2xhdGUgPSBpbmplY3QoJyRpMThuJyk7XG4gICAgICBjb25zdCByZXMgPSB0cmFuc2xhdGUoJ215VGV4dElkJyk7XG4gICAgfVxuICB9XG48XFwvc2NyaXB0PmA7XG5cbmNvbnN0IG1hbmlmZXN0ID0gYCMgbWFuaWZlc3QuanNvblxue1wic2FwLnVpNVwiOiB7XG4gICAgXCJyb3V0aW5nXCI6IHtcbiAgICAgIFwicm91dGVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwicGF0dGVyblwiOiBcIlwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImhvbWVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwYXR0ZXJuXCI6IFwiZXhhbXBsZXMvOmV4YW1wbGU6XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZXhhbXBsZXNcIlxuICAgICAgICB9LFxuICAgICAgICAjIC4uLlxuICAgICAgXVxuICAgIH1cbn19YDtcblxuY29uc3Qgcm91dGVyQ29tcG9uZW50ID0gYC8vIFNvbWVDb21wb25lbnQudnVlXG48dGVtcGxhdGU+XG4gIDxSb3V0ZXIgOmNvbmZpZz1cImNvbmZpZ1wiIC8+XG48L3RlbXBsYXRlPlxuPHNjcmlwdCBzZXR1cD5cbiAgaW1wb3J0IFJvdXRlciBmcm9tICd2dWVpNS9Sb3V0ZXInO1xuICBpbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL0hvbWUnO1xuICBpbXBvcnQgRXhhbXBsZXMgZnJvbSAnLi9wYWdlcy9FeGFtcGxlcyc7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIC8vIHJvdXRlTmFtZTogVnVlQ29tcG9uZW50XG4gICAgJ2hvbWUnOiBIb21lLFxuICAgICdleGFtcGxlcyc6IEV4YW1wbGVzXG4gIH1cbjxcXC9zY3JpcHQ+YDtcbjwvc2NyaXB0PiJdfQ==