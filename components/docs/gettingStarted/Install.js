sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/UI5html", "vuei5/UI5Control", "../../common/CodeBlockH", "vuei5/Vue"], function (module, exports, require, __destructureImport0, __defaultImport1, __defaultImport2, __defaultImport3, __destructureImport4) {
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
  var inject = __destructureImport4.inject;

  const _hoisted_1 = /*#__PURE__*/_createElementVNode("h1", null, "Installing Vuei5", -1
  /* HOISTED */
  );

  const _hoisted_2 = /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" Vuei5 is built for @ui5/cli. While you can import and use the vuei5 resources in any project, regardless of the build tool, you can only use the included "), /*#__PURE__*/_createElementVNode("code", null, ".vue"), /*#__PURE__*/_createTextVNode(" single-file-component compiler in a @ui5/cli project. If you can't or don't want to use .vue sfc's you can still write your components in normal javascript files and write your templates as strings or implement the render functions manually. ")], -1
  /* HOISTED */
  );

  const _hoisted_3 = /*#__PURE__*/_createElementVNode("br", null, null, -1
  /* HOISTED */
  );

  const _hoisted_4 = /*#__PURE__*/_createElementVNode("p", null, " If you have a UI5 CLI Project ready you can start by installing vuei5 as a dependency with npm or yarn. ", -1
  /* HOISTED */
  );

  const _hoisted_5 = /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode("Then add the package as a ui5 dependency in your "), /*#__PURE__*/_createElementVNode("code", null, "package.json"), /*#__PURE__*/_createTextVNode(" file.")], -1
  /* HOISTED */
  );

  const _hoisted_6 = /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" The vuei5 resources should now be included in your ui5 project. If you want to use "), /*#__PURE__*/_createElementVNode("code", null, ".vue"), /*#__PURE__*/_createTextVNode(" sfc files the next step is to inlude the compiler in your ui5 configuration file. ")], -1
  /* HOISTED */
  );

  const _hoisted_7 = /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode("Include the task and the middleware into "), /*#__PURE__*/_createElementVNode("code", null, "ui5.yaml")], -1
  /* HOISTED */
  );

  const _hoisted_8 = /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" All files ending with "), /*#__PURE__*/_createElementVNode("code", null, ".vue"), /*#__PURE__*/_createTextVNode(" should now be transformed to regular "), /*#__PURE__*/_createElementVNode("code", null, ".js"), /*#__PURE__*/_createTextVNode(" files. ")], -1
  /* HOISTED */
  );

  const _hoisted_9 = /*#__PURE__*/_createElementVNode("h2", null, "Integrateing vuei5 in your ui5 app", -1
  /* HOISTED */
  );

  const _hoisted_10 = /*#__PURE__*/_createElementVNode("p", null, " There are two ways to integrate vuei5 in a ui5 project. You can let vuei5 take over the whole app or bind it to a existing ui5 control and let it take over only part(s) of the app. ", -1
  /* HOISTED */
  );

  const _hoisted_11 = /*#__PURE__*/_createElementVNode("h3", null, "Initializing vuei5 for the whole app", -1
  /* HOISTED */
  );

  const _hoisted_12 = /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" To let vue control the whole app you need to modify your "), /*#__PURE__*/_createElementVNode("code", null, "Component.js"), /*#__PURE__*/_createTextVNode(" file. Just change the default "), /*#__PURE__*/_createElementVNode("code", null, "UIComponent"), /*#__PURE__*/_createTextVNode(" to the vuei5 "), /*#__PURE__*/_createElementVNode("code", null, "VUEIComponent"), /*#__PURE__*/_createTextVNode(". Here you can also add some configuration to your vue instance. You can also still add your usual ui5 configuration since VUEIComponent extends UIComponent. ")], -1
  /* HOISTED */
  );

  const _hoisted_13 = /*#__PURE__*/_createElementVNode("p", null, " To make the app work you at least have to specify the root vue component to render on the page. ", -1
  /* HOISTED */
  );

  const _hoisted_14 = /*#__PURE__*/_createElementVNode("h3", null, "Initializing vuei5 for part of the app", -1
  /* HOISTED */
  );

  const _hoisted_15 = /*#__PURE__*/_createElementVNode("p", null, " To let vue control only part of the app you need to launch it inside of a controller while passing it a reference to the parent element. ", -1
  /* HOISTED */
  );

  const __sfc__ = {
    setup(__props) {
      const PanelgeJson = `"ui5": {
  "dependencies": [
    # ...
    "@todms/vuei5"
  ]
}`;
      const ui5Yaml = `# ui5.yaml
builder:
  customTasks:
    - name: vuei5-task-sfc
      beforeTask: generateComponentPreload
server:
  customMiddleware:
    - name: vuei5-middleware-sfc
      beforeMiddleware: serveResources
`;
      const componentjs = `//Component.js

sap.ui.define(
  [
    "vuei5/VUEIComponent",
    "./components/Home", // also import your root vue component
  ],
  function (VUEIComponent, Home) {
    "use strict";

    // Simply replace UIComponent with VUEIComponent.
    return VUEIComponent.extend("vuei5.demo.Component", {
      metadata: {
        manifest: "json",
      },

      vuei5: {
        vueRoot: Home,
      },
    });
  }
);`;
      const launcher = `// App.controller.js

sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "vuei5/Launcher", //import vuei5 Launcher
    "../components/Home", //import your root vue component
    //...
  ],
  function (Controller, vuei5Launcher, Home) {
    return Controller.extend("vuei5.demo.controller.App", {
      //...

      onInit: function () {
        // get your parent ui5 element
        const element = this.byId("myParentElement");

        vuei5Launcher(element, Home, {
          /* Options */
        });
      },

      //...
    });
  }
);`;
      const packageJson = `"ui5": {
  "dependencies": [
    #...
    "@todms/vuei5",
  ]
}`;
      return (_ctx, _cache) => {
        const _component_m58Panel = _resolveComponent("m:Panel");

        return _openBlock(), _createBlock(_component_m58Panel, null, {
          default: _withCtx(() => [_createVNode(_unref(ui5html), {
            class: "myTest"
          }, {
            default: _withCtx(() => [_hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _createVNode(_unref(CodeBlock), {
              code: "npm install @todms/vuei5 --save-dev",
              lang: "text"
            }), _hoisted_5, _createVNode(_unref(CodeBlock), {
              code: packageJson,
              lang: "yaml"
            }), _hoisted_6, _hoisted_7, _createVNode(_unref(CodeBlock), {
              code: ui5Yaml,
              lang: "yaml"
            }), _hoisted_8, _hoisted_9, _hoisted_10, _hoisted_11, _hoisted_12, _hoisted_13, _createVNode(_unref(CodeBlock), {
              lang: "js",
              code: componentjs
            }), _hoisted_14, _hoisted_15, _createVNode(_unref(CodeBlock), {
              lang: "js",
              code: launcher
            })]),
            _: 1
            /* STABLE */

          })]),
          _: 1
          /* STABLE */

        });
      };
    }

  };
  __sfc__.__scopeId = "data-v-x9wds0cie5g";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9kb2NzL2dldHRpbmdTdGFydGVkL0luc3RhbGwudnVlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFFQSxZQUFNLFdBQVcsR0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUpBLEVBQUE7QUFPQSxZQUFNLE9BQU8sR0FBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsQ0FBQTtBQVdBLFlBQU0sV0FBVyxHQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkEsR0FBQTtBQXVCQSxZQUFNLFFBQVEsR0FBSTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkEsR0FBQTtBQTJCQSxZQUFNLFdBQVcsR0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUpBLEVBQUEiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxtOlBhbmVsPlxuICAgIDx1aTVodG1sIGNsYXNzPVwibXlUZXN0XCI+XG4gICAgICA8aDE+SW5zdGFsbGluZyBWdWVpNTwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgVnVlaTUgaXMgYnVpbHQgZm9yIEB1aTUvY2xpLiBXaGlsZSB5b3UgY2FuIGltcG9ydCBhbmQgdXNlIHRoZSB2dWVpNVxuICAgICAgICByZXNvdXJjZXMgaW4gYW55IHByb2plY3QsIHJlZ2FyZGxlc3Mgb2YgdGhlIGJ1aWxkIHRvb2wsIHlvdSBjYW4gb25seSB1c2VcbiAgICAgICAgdGhlIGluY2x1ZGVkIDxjb2RlPi52dWU8L2NvZGU+IHNpbmdsZS1maWxlLWNvbXBvbmVudCBjb21waWxlciBpbiBhIEB1aTUvY2xpIHByb2plY3QuXG4gICAgICAgIElmIHlvdSBjYW4ndCBvciBkb24ndCB3YW50IHRvIHVzZSAudnVlIHNmYydzIHlvdSBjYW4gc3RpbGwgd3JpdGUgeW91clxuICAgICAgICBjb21wb25lbnRzIGluIG5vcm1hbCBqYXZhc2NyaXB0IGZpbGVzIGFuZCB3cml0ZSB5b3VyIHRlbXBsYXRlcyBhc1xuICAgICAgICBzdHJpbmdzIG9yIGltcGxlbWVudCB0aGUgcmVuZGVyIGZ1bmN0aW9ucyBtYW51YWxseS5cbiAgICAgIDwvcD5cbiAgICAgIDxiciAvPlxuICAgICAgPHA+XG4gICAgICAgIElmIHlvdSBoYXZlIGEgVUk1IENMSSBQcm9qZWN0IHJlYWR5IHlvdSBjYW4gc3RhcnQgYnkgaW5zdGFsbGluZyB2dWVpNSBhc1xuICAgICAgICBhIGRlcGVuZGVuY3kgd2l0aCBucG0gb3IgeWFybi5cbiAgICAgIDwvcD5cbiAgICAgIDxDb2RlQmxvY2sgY29kZT1cIm5wbSBpbnN0YWxsIEB0b2Rtcy92dWVpNSAtLXNhdmUtZGV2XCIgbGFuZz1cInRleHRcIiAvPlxuICAgICAgPHA+VGhlbiBhZGQgdGhlIHBhY2thZ2UgYXMgYSB1aTUgZGVwZW5kZW5jeSBpbiB5b3VyIDxjb2RlPnBhY2thZ2UuanNvbjwvY29kZT4gZmlsZS48L3A+XG4gICAgICA8Q29kZUJsb2NrIDpjb2RlPVwicGFja2FnZUpzb25cIiBsYW5nPVwieWFtbFwiIC8+XG4gICAgICA8cD5cbiAgICAgICAgVGhlIHZ1ZWk1IHJlc291cmNlcyBzaG91bGQgbm93IGJlIGluY2x1ZGVkIGluIHlvdXIgdWk1IHByb2plY3QuIElmIHlvdVxuICAgICAgICB3YW50IHRvIHVzZSA8Y29kZT4udnVlPC9jb2RlPiBzZmMgZmlsZXMgdGhlIG5leHQgc3RlcCBpcyB0byBpbmx1ZGUgdGhlIGNvbXBpbGVyIGluXG4gICAgICAgIHlvdXIgdWk1IGNvbmZpZ3VyYXRpb24gZmlsZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPkluY2x1ZGUgdGhlIHRhc2sgYW5kIHRoZSBtaWRkbGV3YXJlIGludG8gPGNvZGU+dWk1LnlhbWw8L2NvZGU+PC9wPlxuICAgICAgPENvZGVCbG9jayA6Y29kZT1cInVpNVlhbWxcIiBsYW5nPVwieWFtbFwiIC8+XG4gICAgICA8cD5cbiAgICAgICAgQWxsIGZpbGVzIGVuZGluZyB3aXRoIDxjb2RlPi52dWU8L2NvZGU+IHNob3VsZCBub3cgYmUgdHJhbnNmb3JtZWQgdG8gcmVndWxhciA8Y29kZT4uanM8L2NvZGU+XG4gICAgICAgIGZpbGVzLlxuICAgICAgPC9wPlxuXG4gICAgICA8aDI+SW50ZWdyYXRlaW5nIHZ1ZWk1IGluIHlvdXIgdWk1IGFwcDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgVGhlcmUgYXJlIHR3byB3YXlzIHRvIGludGVncmF0ZSB2dWVpNSBpbiBhIHVpNSBwcm9qZWN0LiBZb3UgY2FuIGxldFxuICAgICAgICB2dWVpNSB0YWtlIG92ZXIgdGhlIHdob2xlIGFwcCBvciBiaW5kIGl0IHRvIGEgZXhpc3RpbmcgdWk1IGNvbnRyb2wgYW5kXG4gICAgICAgIGxldCBpdCB0YWtlIG92ZXIgb25seSBwYXJ0KHMpIG9mIHRoZSBhcHAuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMz5Jbml0aWFsaXppbmcgdnVlaTUgZm9yIHRoZSB3aG9sZSBhcHA8L2gzPlxuICAgICAgPHA+XG4gICAgICAgIFRvIGxldCB2dWUgY29udHJvbCB0aGUgd2hvbGUgYXBwIHlvdSBuZWVkIHRvIG1vZGlmeSB5b3VyIDxjb2RlPkNvbXBvbmVudC5qczwvY29kZT5cbiAgICAgICAgZmlsZS4gSnVzdCBjaGFuZ2UgdGhlIGRlZmF1bHQgPGNvZGU+VUlDb21wb25lbnQ8L2NvZGU+IHRvIHRoZSB2dWVpNSA8Y29kZT5WVUVJQ29tcG9uZW50PC9jb2RlPi5cbiAgICAgICAgSGVyZSB5b3UgY2FuIGFsc28gYWRkIHNvbWUgY29uZmlndXJhdGlvbiB0byB5b3VyIHZ1ZSBpbnN0YW5jZS4gWW91IGNhblxuICAgICAgICBhbHNvIHN0aWxsIGFkZCB5b3VyIHVzdWFsIHVpNSBjb25maWd1cmF0aW9uIHNpbmNlIFZVRUlDb21wb25lbnQgZXh0ZW5kc1xuICAgICAgICBVSUNvbXBvbmVudC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBUbyBtYWtlIHRoZSBhcHAgd29yayB5b3UgYXQgbGVhc3QgaGF2ZSB0byBzcGVjaWZ5IHRoZSByb290IHZ1ZSBjb21wb25lbnRcbiAgICAgICAgdG8gcmVuZGVyIG9uIHRoZSBwYWdlLlxuICAgICAgPC9wPlxuICAgICAgPENvZGVCbG9jayBsYW5nPVwianNcIiA6Y29kZT1cImNvbXBvbmVudGpzXCIgLz5cblxuICAgICAgPGgzPkluaXRpYWxpemluZyB2dWVpNSBmb3IgcGFydCBvZiB0aGUgYXBwPC9oMz5cbiAgICAgIDxwPlxuICAgICAgICBUbyBsZXQgdnVlIGNvbnRyb2wgb25seSBwYXJ0IG9mIHRoZSBhcHAgeW91IG5lZWQgdG8gbGF1bmNoIGl0IGluc2lkZSBvZlxuICAgICAgICBhIGNvbnRyb2xsZXIgd2hpbGUgcGFzc2luZyBpdCBhIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gICAgICA8L3A+XG4gICAgICA8Q29kZUJsb2NrIGxhbmc9XCJqc1wiIDpjb2RlPVwibGF1bmNoZXJcIiAvPlxuICAgIDwvdWk1aHRtbD5cbiAgPC9tOlBhbmVsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB1aTVodG1sIGZyb20gXCJ2dWVpNS9VSTVodG1sXCI7XG5pbXBvcnQgdWk1IGZyb20gXCJ2dWVpNS9VSTVDb250cm9sXCI7XG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gXCIuLi8uLi9jb21tb24vQ29kZUJsb2NrSFwiO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ3Z1ZWk1L1Z1ZSc7XG5cbmNvbnN0IFBhbmVsZ2VKc29uID0gYFwidWk1XCI6IHtcbiAgXCJkZXBlbmRlbmNpZXNcIjogW1xuICAgICMgLi4uXG4gICAgXCJAdG9kbXMvdnVlaTVcIlxuICBdXG59YDtcblxuY29uc3QgdWk1WWFtbCA9IGAjIHVpNS55YW1sXG5idWlsZGVyOlxuICBjdXN0b21UYXNrczpcbiAgICAtIG5hbWU6IHZ1ZWk1LXRhc2stc2ZjXG4gICAgICBiZWZvcmVUYXNrOiBnZW5lcmF0ZUNvbXBvbmVudFByZWxvYWRcbnNlcnZlcjpcbiAgY3VzdG9tTWlkZGxld2FyZTpcbiAgICAtIG5hbWU6IHZ1ZWk1LW1pZGRsZXdhcmUtc2ZjXG4gICAgICBiZWZvcmVNaWRkbGV3YXJlOiBzZXJ2ZVJlc291cmNlc1xuYDtcblxuY29uc3QgY29tcG9uZW50anMgPSBgLy9Db21wb25lbnQuanNcblxuc2FwLnVpLmRlZmluZShcbiAgW1xuICAgIFwidnVlaTUvVlVFSUNvbXBvbmVudFwiLFxuICAgIFwiLi9jb21wb25lbnRzL0hvbWVcIiwgLy8gYWxzbyBpbXBvcnQgeW91ciByb290IHZ1ZSBjb21wb25lbnRcbiAgXSxcbiAgZnVuY3Rpb24gKFZVRUlDb21wb25lbnQsIEhvbWUpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIFNpbXBseSByZXBsYWNlIFVJQ29tcG9uZW50IHdpdGggVlVFSUNvbXBvbmVudC5cbiAgICByZXR1cm4gVlVFSUNvbXBvbmVudC5leHRlbmQoXCJ2dWVpNS5kZW1vLkNvbXBvbmVudFwiLCB7XG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICBtYW5pZmVzdDogXCJqc29uXCIsXG4gICAgICB9LFxuXG4gICAgICB2dWVpNToge1xuICAgICAgICB2dWVSb290OiBIb21lLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuKTtgO1xuXG5jb25zdCBsYXVuY2hlciA9IGAvLyBBcHAuY29udHJvbGxlci5qc1xuXG5zYXAudWkuZGVmaW5lKFxuICBbXG4gICAgXCJzYXAvdWkvY29yZS9tdmMvQ29udHJvbGxlclwiLFxuICAgIFwidnVlaTUvTGF1bmNoZXJcIiwgLy9pbXBvcnQgdnVlaTUgTGF1bmNoZXJcbiAgICBcIi4uL2NvbXBvbmVudHMvSG9tZVwiLCAvL2ltcG9ydCB5b3VyIHJvb3QgdnVlIGNvbXBvbmVudFxuICAgIC8vLi4uXG4gIF0sXG4gIGZ1bmN0aW9uIChDb250cm9sbGVyLCB2dWVpNUxhdW5jaGVyLCBIb21lKSB7XG4gICAgcmV0dXJuIENvbnRyb2xsZXIuZXh0ZW5kKFwidnVlaTUuZGVtby5jb250cm9sbGVyLkFwcFwiLCB7XG4gICAgICAvLy4uLlxuXG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZ2V0IHlvdXIgcGFyZW50IHVpNSBlbGVtZW50XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmJ5SWQoXCJteVBhcmVudEVsZW1lbnRcIik7XG5cbiAgICAgICAgdnVlaTVMYXVuY2hlcihlbGVtZW50LCBIb21lLCB7XG4gICAgICAgICAgLyogT3B0aW9ucyAqL1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIC8vLi4uXG4gICAgfSk7XG4gIH1cbik7YDtcblxuY29uc3QgcGFja2FnZUpzb24gPSBgXCJ1aTVcIjoge1xuICBcImRlcGVuZGVuY2llc1wiOiBbXG4gICAgIy4uLlxuICAgIFwiQHRvZG1zL3Z1ZWk1XCIsXG4gIF1cbn1gXG48L3NjcmlwdD4iXX0=