sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/UI5html", "vuei5/UI5Control", "../../common/CodeBlockH"], function (module, exports, require, __destructureImport0, __defaultImport1, __defaultImport2, __defaultImport3) {
  var _createElementVNode = __destructureImport0.createElementVNode;
  var _createTextVNode = __destructureImport0.createTextVNode;
  var _unref = __destructureImport0.unref;
  var _createVNode = __destructureImport0.createVNode;
  var _withCtx = __destructureImport0.withCtx;
  var _resolveComponent = __destructureImport0.resolveComponent;
  var _openBlock = __destructureImport0.openBlock;
  var _createBlock = __destructureImport0.createBlock;
  var _pushScopeId = __destructureImport0.pushScopeId;
  var _popScopeId = __destructureImport0.popScopeId;
  var ui5html = typeof __defaultImport1 === "object" && __defaultImport1.__esModule ? __defaultImport1.default : __defaultImport1;
  var ui5 = typeof __defaultImport2 === "object" && __defaultImport2.__esModule ? __defaultImport2.default : __defaultImport2;
  var CodeBlock = typeof __defaultImport3 === "object" && __defaultImport3.__esModule ? __defaultImport3.default : __defaultImport3;

  const _withScopeId = n => (_pushScopeId("data-v-icph38kwnqk"), n = n(), _popScopeId(), n);

  const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("h1", null, "Writing Components", -1
  /* HOISTED */
  ));

  const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" You can write components both in vanilla javascript files and in "), /*#__PURE__*/_createElementVNode("code", null, ".vue"), /*#__PURE__*/_createTextVNode(" sfc files. Follow the regular vuejs component syntax. Vuei5 uses vuejs 3 so both the options and the composition api can be used to define your components behaviour. The sfc compiler also supports the use of the new "), /*#__PURE__*/_createElementVNode("code", null, "<script setup>"), /*#__PURE__*/_createTextVNode(" wich allows you to use the composition api with a bit of syntactical sugar. ")], -1
  /* HOISTED */
  ));

  const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("h2", null, "Use ES Modules in sfc files", -1
  /* HOISTED */
  ));

  const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createElementVNode("b", null, "It is mandatory to use ESModules in a .vue file."), /*#__PURE__*/_createTextVNode(), /*#__PURE__*/_createElementVNode("br"), /*#__PURE__*/_createTextVNode("This is because the sfc compiler will use es modules to import the functions required for the render functions. Using the normal "), /*#__PURE__*/_createElementVNode("code", null, "sap.ui.define()"), /*#__PURE__*/_createTextVNode(" function to define your component would mix two diffrent import styles together wich will most likeley result in errors. Simply use the esm import / export syntax for all of your imports in an sfc file. They will automatically be transformed to regular ui5 modules by the sfc task/middleware. ")], -1
  /* HOISTED */
  ));

  const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, " Regular js files will not be touched by the sfc task and can therefore still use the regular ui5 module system. ", -1
  /* HOISTED */
  ));

  const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("div", {
    class: "infobox"
  }, [/*#__PURE__*/_createElementVNode("ul", null, [/*#__PURE__*/_createElementVNode("li", null, "✔ Use ESM import/export in .vue files"), /*#__PURE__*/_createElementVNode("li", null, [/*#__PURE__*/_createTextVNode("✔ Use "), /*#__PURE__*/_createElementVNode("code", null, "sap.ui.define()"), /*#__PURE__*/_createTextVNode(" in .js files")]), /*#__PURE__*/_createElementVNode("li", null, [/*#__PURE__*/_createTextVNode("❌ DON'T use "), /*#__PURE__*/_createElementVNode("code", null, "sap.ui.define()"), /*#__PURE__*/_createTextVNode(" in .vue files")]), /*#__PURE__*/_createElementVNode("li", null, " ⚠ Only use ESM import/export in .js files if you configured it yourself ")])], -1
  /* HOISTED */
  ));

  const _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("h2", null, "Using ui5 controls in vue components", -1
  /* HOISTED */
  ));

  const _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, " One thing you probably want to do is using ui5 controls in your vuei5 app... ", -1
  /* HOISTED */
  ));

  const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" To do so you can use the "), /*#__PURE__*/_createElementVNode("code", null, "UI5Control"), /*#__PURE__*/_createTextVNode(" function wich will load the ui5 control and wrap it in a vue component. The component can then be used inside a vue template with most of the usual features lika binding and events. ")], -1
  /* HOISTED */
  ));

  const _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" You can pass both a imported ui5 control or a string containing the import path to the function. Passing a string will import the control using "), /*#__PURE__*/_createElementVNode("code", null, "sap.ui.requireSync()"), /*#__PURE__*/_createTextVNode(". So while it will greatly reduce the amount of code it will also import all controls synchronously wich is fine most of the time but something to keep in mind. ")], -1
  /* HOISTED */
  ));

  const _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" To make the ui5 control available in your component simply call the function and add the result to your components object. If you are using "), /*#__PURE__*/_createElementVNode("code", null, "<script setup>"), /*#__PURE__*/_createTextVNode(" simply assign the result to a constant wich will make it available automatically. If you want to create multiple components at the same time you can also use the "), /*#__PURE__*/_createElementVNode("code", null, "UI5Library"), /*#__PURE__*/_createTextVNode(" function. But since you propably won't use all controls in a library importing all components may cause unnessessary loading times. ")], -1
  /* HOISTED */
  ));

  const _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("h2", null, "Global Components", -1
  /* HOISTED */
  ));

  const _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, " If you use a component often in your app you can register it globally. This will reduce the amount of code you have to write and possibly increase render times since all components are available at start (but maybe not). ", -1
  /* HOISTED */
  ));

  const _hoisted_14 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, " To register components globally add them in your vuei5 configuration. The components should then be available globally under the name given in the components object. ", -1
  /* HOISTED */
  ));

  const _hoisted_15 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("h2", null, "Props, Binding, Events etc.", -1
  /* HOISTED */
  ));

  const _hoisted_16 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" Interacting with ui5 vue components is, with a few exceptions, the same as interacting with any other vue component. You pass the control options as props, bind data with "), /*#__PURE__*/_createElementVNode("code", null, "v-bind"), /*#__PURE__*/_createTextVNode(" or "), /*#__PURE__*/_createElementVNode("code", null, ":"), /*#__PURE__*/_createTextVNode(" use "), /*#__PURE__*/_createElementVNode("code", null, "v-if"), /*#__PURE__*/_createTextVNode(", "), /*#__PURE__*/_createElementVNode("code", null, "v-for"), /*#__PURE__*/_createTextVNode(" and listen to events with "), /*#__PURE__*/_createElementVNode("code", null, "v-on"), /*#__PURE__*/_createTextVNode(" or "), /*#__PURE__*/_createElementVNode("code", null, "@"), /*#__PURE__*/_createTextVNode(". "), /*#__PURE__*/_createElementVNode("code", null, "v-model"), /*#__PURE__*/_createTextVNode(" for twoway binding is also possible. ")], -1
  /* HOISTED */
  ));

  const _hoisted_17 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" Vuejs has a few keywords that wont be passable as props. The component will also only accept props that are defined in the controls metadata. You can however force a prop to be passed to the control by prefixing it with "), /*#__PURE__*/_createElementVNode("code", null, "ui5--"), /*#__PURE__*/_createTextVNode(". If you have problems with props beeing passed to the control the prefix may be a solution. ")], -1
  /* HOISTED */
  ));

  const _hoisted_18 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("h2", null, "Vue imports", -1
  /* HOISTED */
  ));

  const _hoisted_19 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" Some functions have to be imported from the vue package. Vue can be imported with "), /*#__PURE__*/_createElementVNode("code", null, "'vuei5/Vue'")], -1
  /* HOISTED */
  ));

  const _hoisted_20 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" By default the sfc task will also replace all imports that import from "), /*#__PURE__*/_createElementVNode("code", null, "'vue'"), /*#__PURE__*/_createTextVNode(" with the correct import. If you redefine the sfc babel pipeline or use normal .js files this functionality will not be available. ")], -1
  /* HOISTED */
  ));

  const _hoisted_21 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("h2", null, "Slots and aggregations", -1
  /* HOISTED */
  ));

  const _hoisted_22 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, " When using ui5 you often have to nest controls inside of each other. This will work the same way in vuei5. Simply add the controls as children. ", -1
  /* HOISTED */
  ));

  const _hoisted_23 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, [/*#__PURE__*/_createTextVNode(" Without any configuration the controls will be added with a default aggregation. To change the aggregation either use a template with a "), /*#__PURE__*/_createElementVNode("code", null, "v-slot"), /*#__PURE__*/_createTextVNode(" tag or add the "), /*#__PURE__*/_createElementVNode("code", null, "ui5--aggregation"), /*#__PURE__*/_createTextVNode(" property wich will target a single control. ")], -1
  /* HOISTED */
  ));

  const _hoisted_24 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("h2", null, "Style", -1
  /* HOISTED */
  ));

  const _hoisted_25 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, " Style tags in templates will be added to the page as a head style tag. You can also specify a css file in the task configuration, wich will collect all component styles, but it has to be included manually in the app. ", -1
  /* HOISTED */
  ));

  const _hoisted_26 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, " When using scoped styles on a ui5 control the scope id will be applied to all html elements of that control. ", -1
  /* HOISTED */
  ));

  const _hoisted_27 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("h2", null, "Preprocessors", -1
  /* HOISTED */
  ));

  const _hoisted_28 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("p", null, " You can use preprocessors like less, scss, pug if you define the lang property in your sfc files. Make sure that you have installed the required packages that will transform your specified preprocessor. ", -1
  /* HOISTED */
  ));

  const __sfc__ = {
    setup(__props) {
      const controlimport = `<script>
import ui5Control from 'vuei5/UI5Control';
import Button from 'sap/m/Button';

export default {
  components: {
    'Button': ui5Control(Button),
    'Text': ui5Control("sap/m/Text")
  },
  setup() {
    // ...
  }
}
<\/script>

<script setup>
import ui5Control from 'vuei5/UI5Control';
import SapMButton from 'sap/m/Button';

const Button = ui5Control(SapMButton);
const Text = ui5Control("sap/m/Text");

// ...
<\/script>

<template>
  <Button text="Click Me" @press="onPress"/>
  <Text :text="myVar"/>
</template>`;
      const interaction = `<template>
  <Button :text="myData" @press="myPressListener"/>
  <Text v-for="k,i in myArray" :key="i"/>
  <Input v-model:value />
</template>`;
      const prefixProps = `<!-- 'key' is reserved by vue so the ui5-- prefix is required to pass it to the ui5 control -->
<IconTabFilter ui5--key="home" text="Home" />`;
      const aggregations = `<template>
  <Table>
    <template v-slot:columns>
      <!-- All controls in the v-slot template will be added with the columns aggregation -->
      <Column><Label text="ID" /></Column>
      <Column><Label text="Name" /></Column>
      <Column><Label text="Age" /></Column>
    </template>

    <!-- the ui5--aggregation prop specifies the aggregation for this single control -->
    <ColumnListItem v-for="data in tableData" :key="data.id" ui5--aggregation="items">
      <Text :text="data.id"/>
      <Text :text="data.name"/>
      <Text :text="data.age"/>
    </ColumnListItem>
  </Table>
</template>`;
      const vueImport = `// ref will directly be imported from the vue file
import {ref} from 'vuei5/Vue'

// the import source will be rewritten to the correct path vuei5/Vue
import {ref} from 'vue'`;
      const globalComponents = `sap.ui.define([
  /*...*/,
  'sap/m/Button',
  'vuei5/UI5Control',
  'vuei5/UI5Library',
], fuction(/*...*/, SapMButton, ui5Control, ui5Lib) {
  VUEIComponent.extend("vuei5.demo.Component", {
    vuei5: {
      vueRoot: Home,
      components: {
        // You can add vuei5 components globally to your project
        'Text': 'sap/m/Text', // by string (with requireSync())
        'Button': SapMButton, // by ui5 control
        'Panel': ui5Control('sap/m/Panel'), // by vue component
        ...ui5Lib('sap/uxap/library', 'uxap:') // by full library
      }
    },
    // ...`;
      return (_ctx, _cache) => {
        const _component_m58Panel = _resolveComponent("m:Panel");

        return _openBlock(), _createBlock(_component_m58Panel, {
          id: "myPanel"
        }, {
          default: _withCtx(() => [_createVNode(_unref(ui5html), null, {
            default: _withCtx(() => [_hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, _hoisted_10, _hoisted_11, _createVNode(_unref(CodeBlock), {
              lang: "html",
              code: controlimport
            }), _hoisted_12, _hoisted_13, _hoisted_14, _createVNode(_unref(CodeBlock), {
              lang: "js",
              code: globalComponents
            }), _hoisted_15, _hoisted_16, _createVNode(_unref(CodeBlock), {
              lang: "html",
              code: interaction
            }), _hoisted_17, _createVNode(_unref(CodeBlock), {
              lang: "html",
              code: prefixProps
            }), _hoisted_18, _hoisted_19, _hoisted_20, _createVNode(_unref(CodeBlock), {
              lang: "js",
              code: vueImport
            }), _hoisted_21, _hoisted_22, _hoisted_23, _createVNode(_unref(CodeBlock), {
              lang: "html",
              code: aggregations
            }), _hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28]),
            _: 1
            /* STABLE */

          })]),
          _: 1
          /* STABLE */

        });
      };
    }

  };
  __sfc__.__scopeId = "data-v-icph38kwnqk";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9kb2NzL2dldHRpbmdTdGFydGVkL0NvbXBvbmVudHMudnVlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStKQSxZQUFNLGFBQWEsR0FBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkEsWUFBQTtBQThCQSxZQUFNLFdBQVcsR0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFIQSxZQUFBO0FBTUEsWUFBTSxXQUFXLEdBQUk7QUFBckIsOENBQUE7QUFHQSxZQUFNLFlBQVksR0FBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQSxZQUFBO0FBa0JBLFlBQU0sU0FBUyxHQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUhBLHdCQUFBO0FBTUEsWUFBTSxnQkFBZ0IsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQSxXQUFBIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8bTpQYW5lbCBpZD1cIm15UGFuZWxcIj5cbiAgICA8dWk1aHRtbD5cbiAgICAgIDxoMT5Xcml0aW5nIENvbXBvbmVudHM8L2gxPlxuXG4gICAgICA8cD5cbiAgICAgICAgWW91IGNhbiB3cml0ZSBjb21wb25lbnRzIGJvdGggaW4gdmFuaWxsYSBqYXZhc2NyaXB0IGZpbGVzIGFuZCBpbiA8Y29kZT4udnVlPC9jb2RlPlxuICAgICAgICBzZmMgZmlsZXMuIEZvbGxvdyB0aGUgcmVndWxhciB2dWVqcyBjb21wb25lbnQgc3ludGF4LiBWdWVpNSB1c2VzIHZ1ZWpzIDNcbiAgICAgICAgc28gYm90aCB0aGUgb3B0aW9ucyBhbmQgdGhlIGNvbXBvc2l0aW9uIGFwaSBjYW4gYmUgdXNlZCB0byBkZWZpbmUgeW91clxuICAgICAgICBjb21wb25lbnRzIGJlaGF2aW91ci4gVGhlIHNmYyBjb21waWxlciBhbHNvIHN1cHBvcnRzIHRoZSB1c2Ugb2YgdGhlIG5ld1xuICAgICAgICA8Y29kZT4mbHQ7c2NyaXB0IHNldHVwJmd0OzwvY29kZT4gd2ljaCBhbGxvd3MgeW91IHRvIHVzZSB0aGUgY29tcG9zaXRpb24gYXBpIHdpdGggYVxuICAgICAgICBiaXQgb2Ygc3ludGFjdGljYWwgc3VnYXIuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMj5Vc2UgRVMgTW9kdWxlcyBpbiBzZmMgZmlsZXM8L2gyPlxuXG4gICAgICA8cD5cbiAgICAgICAgPGI+SXQgaXMgbWFuZGF0b3J5IHRvIHVzZSBFU01vZHVsZXMgaW4gYSAudnVlIGZpbGUuPC9iPiA8YnIgLz5UaGlzIGlzXG4gICAgICAgIGJlY2F1c2UgdGhlIHNmYyBjb21waWxlciB3aWxsIHVzZSBlcyBtb2R1bGVzIHRvIGltcG9ydCB0aGUgZnVuY3Rpb25zXG4gICAgICAgIHJlcXVpcmVkIGZvciB0aGUgcmVuZGVyIGZ1bmN0aW9ucy4gVXNpbmcgdGhlIG5vcm1hbCA8Y29kZT5zYXAudWkuZGVmaW5lKCk8L2NvZGU+XG4gICAgICAgIGZ1bmN0aW9uIHRvIGRlZmluZSB5b3VyIGNvbXBvbmVudCB3b3VsZCBtaXggdHdvIGRpZmZyZW50IGltcG9ydCBzdHlsZXNcbiAgICAgICAgdG9nZXRoZXIgd2ljaCB3aWxsIG1vc3QgbGlrZWxleSByZXN1bHQgaW4gZXJyb3JzLiBTaW1wbHkgdXNlIHRoZSBlc21cbiAgICAgICAgaW1wb3J0IC8gZXhwb3J0IHN5bnRheCBmb3IgYWxsIG9mIHlvdXIgaW1wb3J0cyBpbiBhbiBzZmMgZmlsZS4gVGhleSB3aWxsXG4gICAgICAgIGF1dG9tYXRpY2FsbHkgYmUgdHJhbnNmb3JtZWQgdG8gcmVndWxhciB1aTUgbW9kdWxlcyBieSB0aGUgc2ZjXG4gICAgICAgIHRhc2svbWlkZGxld2FyZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBSZWd1bGFyIGpzIGZpbGVzIHdpbGwgbm90IGJlIHRvdWNoZWQgYnkgdGhlIHNmYyB0YXNrIGFuZCBjYW4gdGhlcmVmb3JlXG4gICAgICAgIHN0aWxsIHVzZSB0aGUgcmVndWxhciB1aTUgbW9kdWxlIHN5c3RlbS5cbiAgICAgIDwvcD5cblxuICAgICAgPGRpdiBjbGFzcz1cImluZm9ib3hcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT7inJQgVXNlIEVTTSBpbXBvcnQvZXhwb3J0IGluIC52dWUgZmlsZXM8L2xpPlxuICAgICAgICAgIDxsaT7inJQgVXNlIDxjb2RlPnNhcC51aS5kZWZpbmUoKTwvY29kZT4gaW4gLmpzIGZpbGVzPC9saT5cbiAgICAgICAgICA8bGk+4p2MIERPTidUIHVzZSA8Y29kZT5zYXAudWkuZGVmaW5lKCk8L2NvZGU+IGluIC52dWUgZmlsZXM8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIOKaoCBPbmx5IHVzZSBFU00gaW1wb3J0L2V4cG9ydCBpbiAuanMgZmlsZXMgaWYgeW91IGNvbmZpZ3VyZWQgaXRcbiAgICAgICAgICAgIHlvdXJzZWxmXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aDI+VXNpbmcgdWk1IGNvbnRyb2xzIGluIHZ1ZSBjb21wb25lbnRzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBPbmUgdGhpbmcgeW91IHByb2JhYmx5IHdhbnQgdG8gZG8gaXMgdXNpbmcgdWk1IGNvbnRyb2xzIGluIHlvdXIgdnVlaTVcbiAgICAgICAgYXBwLi4uXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVG8gZG8gc28geW91IGNhbiB1c2UgdGhlIDxjb2RlPlVJNUNvbnRyb2w8L2NvZGU+IGZ1bmN0aW9uIHdpY2ggd2lsbCBsb2FkIHRoZSB1aTVcbiAgICAgICAgY29udHJvbCBhbmQgd3JhcCBpdCBpbiBhIHZ1ZSBjb21wb25lbnQuIFRoZSBjb21wb25lbnQgY2FuIHRoZW4gYmUgdXNlZFxuICAgICAgICBpbnNpZGUgYSB2dWUgdGVtcGxhdGUgd2l0aCBtb3N0IG9mIHRoZSB1c3VhbCBmZWF0dXJlcyBsaWthIGJpbmRpbmcgYW5kXG4gICAgICAgIGV2ZW50cy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBZb3UgY2FuIHBhc3MgYm90aCBhIGltcG9ydGVkIHVpNSBjb250cm9sIG9yIGEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlXG4gICAgICAgIGltcG9ydCBwYXRoIHRvIHRoZSBmdW5jdGlvbi4gUGFzc2luZyBhIHN0cmluZyB3aWxsIGltcG9ydCB0aGUgY29udHJvbFxuICAgICAgICB1c2luZyA8Y29kZT5zYXAudWkucmVxdWlyZVN5bmMoKTwvY29kZT4uIFNvIHdoaWxlIGl0IHdpbGwgZ3JlYXRseSByZWR1Y2UgdGhlIGFtb3VudFxuICAgICAgICBvZiBjb2RlIGl0IHdpbGwgYWxzbyBpbXBvcnQgYWxsIGNvbnRyb2xzIHN5bmNocm9ub3VzbHkgd2ljaCBpcyBmaW5lIG1vc3RcbiAgICAgICAgb2YgdGhlIHRpbWUgYnV0IHNvbWV0aGluZyB0byBrZWVwIGluIG1pbmQuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVG8gbWFrZSB0aGUgdWk1IGNvbnRyb2wgYXZhaWxhYmxlIGluIHlvdXIgY29tcG9uZW50IHNpbXBseSBjYWxsIHRoZVxuICAgICAgICBmdW5jdGlvbiBhbmQgYWRkIHRoZSByZXN1bHQgdG8geW91ciBjb21wb25lbnRzIG9iamVjdC4gSWYgeW91IGFyZSB1c2luZ1xuICAgICAgICA8Y29kZT4mbHQ7c2NyaXB0IHNldHVwJmd0OzwvY29kZT4gc2ltcGx5IGFzc2lnbiB0aGUgcmVzdWx0IHRvIGEgY29uc3RhbnQgd2ljaCB3aWxsXG4gICAgICAgIG1ha2UgaXQgYXZhaWxhYmxlIGF1dG9tYXRpY2FsbHkuIElmIHlvdSB3YW50IHRvIGNyZWF0ZSBtdWx0aXBsZVxuICAgICAgICBjb21wb25lbnRzIGF0IHRoZSBzYW1lIHRpbWUgeW91IGNhbiBhbHNvIHVzZSB0aGUgPGNvZGU+VUk1TGlicmFyeTwvY29kZT4gZnVuY3Rpb24uXG4gICAgICAgIEJ1dCBzaW5jZSB5b3UgcHJvcGFibHkgd29uJ3QgdXNlIGFsbCBjb250cm9scyBpbiBhIGxpYnJhcnkgaW1wb3J0aW5nIGFsbFxuICAgICAgICBjb21wb25lbnRzIG1heSBjYXVzZSB1bm5lc3Nlc3NhcnkgbG9hZGluZyB0aW1lcy5cbiAgICAgIDwvcD5cbiAgICAgIDxDb2RlQmxvY2sgbGFuZz1cImh0bWxcIiA6Y29kZT1cImNvbnRyb2xpbXBvcnRcIiAvPlxuXG4gICAgICA8aDI+R2xvYmFsIENvbXBvbmVudHM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIElmIHlvdSB1c2UgYSBjb21wb25lbnQgb2Z0ZW4gaW4geW91ciBhcHAgeW91IGNhbiByZWdpc3RlciBpdCBnbG9iYWxseS5cbiAgICAgICAgVGhpcyB3aWxsIHJlZHVjZSB0aGUgYW1vdW50IG9mIGNvZGUgeW91IGhhdmUgdG8gd3JpdGUgYW5kIHBvc3NpYmx5XG4gICAgICAgIGluY3JlYXNlIHJlbmRlciB0aW1lcyBzaW5jZSBhbGwgY29tcG9uZW50cyBhcmUgYXZhaWxhYmxlIGF0IHN0YXJ0IChidXRcbiAgICAgICAgbWF5YmUgbm90KS5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIFRvIHJlZ2lzdGVyIGNvbXBvbmVudHMgZ2xvYmFsbHkgYWRkIHRoZW0gaW4geW91ciB2dWVpNSBjb25maWd1cmF0aW9uLlxuICAgICAgICBUaGUgY29tcG9uZW50cyBzaG91bGQgdGhlbiBiZSBhdmFpbGFibGUgZ2xvYmFsbHkgdW5kZXIgdGhlIG5hbWUgZ2l2ZW4gaW5cbiAgICAgICAgdGhlIGNvbXBvbmVudHMgb2JqZWN0LlxuICAgICAgPC9wPlxuICAgICAgPENvZGVCbG9jayBsYW5nPVwianNcIiA6Y29kZT1cImdsb2JhbENvbXBvbmVudHNcIiAvPlxuXG4gICAgICA8aDI+UHJvcHMsIEJpbmRpbmcsIEV2ZW50cyBldGMuPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBJbnRlcmFjdGluZyB3aXRoIHVpNSB2dWUgY29tcG9uZW50cyBpcywgd2l0aCBhIGZldyBleGNlcHRpb25zLCB0aGUgc2FtZVxuICAgICAgICBhcyBpbnRlcmFjdGluZyB3aXRoIGFueSBvdGhlciB2dWUgY29tcG9uZW50LiBZb3UgcGFzcyB0aGUgY29udHJvbFxuICAgICAgICBvcHRpb25zIGFzIHByb3BzLCBiaW5kIGRhdGEgd2l0aCA8Y29kZT52LWJpbmQ8L2NvZGU+IG9yIDxjb2RlPjo8L2NvZGU+IHVzZSA8Y29kZT52LWlmPC9jb2RlPiwgPGNvZGU+di1mb3I8L2NvZGU+IGFuZCBsaXN0ZW5cbiAgICAgICAgdG8gZXZlbnRzIHdpdGggPGNvZGU+di1vbjwvY29kZT4gb3IgPGNvZGU+QDwvY29kZT4uIDxjb2RlPnYtbW9kZWw8L2NvZGU+IGZvciB0d293YXkgYmluZGluZyBpcyBhbHNvIHBvc3NpYmxlLlxuICAgICAgPC9wPlxuICAgICAgPENvZGVCbG9jayBsYW5nPVwiaHRtbFwiIDpjb2RlPVwiaW50ZXJhY3Rpb25cIiAvPlxuICAgICAgPHA+XG4gICAgICAgIFZ1ZWpzIGhhcyBhIGZldyBrZXl3b3JkcyB0aGF0IHdvbnQgYmUgcGFzc2FibGUgYXMgcHJvcHMuIFRoZSBjb21wb25lbnRcbiAgICAgICAgd2lsbCBhbHNvIG9ubHkgYWNjZXB0IHByb3BzIHRoYXQgYXJlIGRlZmluZWQgaW4gdGhlIGNvbnRyb2xzIG1ldGFkYXRhLlxuICAgICAgICBZb3UgY2FuIGhvd2V2ZXIgZm9yY2UgYSBwcm9wIHRvIGJlIHBhc3NlZCB0byB0aGUgY29udHJvbCBieSBwcmVmaXhpbmcgaXRcbiAgICAgICAgd2l0aCA8Y29kZT51aTUtLTwvY29kZT4uIElmIHlvdSBoYXZlIHByb2JsZW1zIHdpdGggcHJvcHMgYmVlaW5nIHBhc3NlZCB0byB0aGVcbiAgICAgICAgY29udHJvbCB0aGUgcHJlZml4IG1heSBiZSBhIHNvbHV0aW9uLlxuICAgICAgPC9wPlxuICAgICAgPENvZGVCbG9jayBsYW5nPVwiaHRtbFwiIDpjb2RlPVwicHJlZml4UHJvcHNcIiAvPlxuXG4gICAgICA8aDI+VnVlIGltcG9ydHM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFNvbWUgZnVuY3Rpb25zIGhhdmUgdG8gYmUgaW1wb3J0ZWQgZnJvbSB0aGUgdnVlIHBhY2thZ2UuIFZ1ZSBjYW4gYmVcbiAgICAgICAgaW1wb3J0ZWQgd2l0aCA8Y29kZT4ndnVlaTUvVnVlJzwvY29kZT5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBCeSBkZWZhdWx0IHRoZSBzZmMgdGFzayB3aWxsIGFsc28gcmVwbGFjZSBhbGwgaW1wb3J0cyB0aGF0IGltcG9ydCBmcm9tXG4gICAgICAgIDxjb2RlPid2dWUnPC9jb2RlPiB3aXRoIHRoZSBjb3JyZWN0IGltcG9ydC4gSWYgeW91IHJlZGVmaW5lIHRoZSBzZmMgYmFiZWwgcGlwZWxpbmUgb3JcbiAgICAgICAgdXNlIG5vcm1hbCAuanMgZmlsZXMgdGhpcyBmdW5jdGlvbmFsaXR5IHdpbGwgbm90IGJlIGF2YWlsYWJsZS5cbiAgICAgIDwvcD5cbiAgICAgIDxDb2RlQmxvY2sgbGFuZz1cImpzXCIgOmNvZGU9XCJ2dWVJbXBvcnRcIiAvPlxuXG4gICAgICA8aDI+U2xvdHMgYW5kIGFnZ3JlZ2F0aW9uczwvaDI+XG5cbiAgICAgIDxwPlxuICAgICAgICBXaGVuIHVzaW5nIHVpNSB5b3Ugb2Z0ZW4gaGF2ZSB0byBuZXN0IGNvbnRyb2xzIGluc2lkZSBvZiBlYWNoIG90aGVyLlxuICAgICAgICBUaGlzIHdpbGwgd29yayB0aGUgc2FtZSB3YXkgaW4gdnVlaTUuIFNpbXBseSBhZGQgdGhlIGNvbnRyb2xzIGFzXG4gICAgICAgIGNoaWxkcmVuLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdpdGhvdXQgYW55IGNvbmZpZ3VyYXRpb24gdGhlIGNvbnRyb2xzIHdpbGwgYmUgYWRkZWQgd2l0aCBhIGRlZmF1bHRcbiAgICAgICAgYWdncmVnYXRpb24uIFRvIGNoYW5nZSB0aGUgYWdncmVnYXRpb24gZWl0aGVyIHVzZSBhIHRlbXBsYXRlIHdpdGggYVxuICAgICAgICA8Y29kZT52LXNsb3Q8L2NvZGU+IHRhZyBvciBhZGQgdGhlIDxjb2RlPnVpNS0tYWdncmVnYXRpb248L2NvZGU+IHByb3BlcnR5IHdpY2ggd2lsbCB0YXJnZXRcbiAgICAgICAgYSBzaW5nbGUgY29udHJvbC5cbiAgICAgIDwvcD5cbiAgICAgIDxDb2RlQmxvY2sgbGFuZz1cImh0bWxcIiA6Y29kZT1cImFnZ3JlZ2F0aW9uc1wiIC8+XG5cbiAgICAgIDxoMj5TdHlsZTwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgU3R5bGUgdGFncyBpbiB0ZW1wbGF0ZXMgd2lsbCBiZSBhZGRlZCB0byB0aGUgcGFnZSBhcyBhIGhlYWQgc3R5bGUgdGFnLlxuICAgICAgICBZb3UgY2FuIGFsc28gc3BlY2lmeSBhIGNzcyBmaWxlIGluIHRoZSB0YXNrIGNvbmZpZ3VyYXRpb24sIHdpY2ggd2lsbFxuICAgICAgICBjb2xsZWN0IGFsbCBjb21wb25lbnQgc3R5bGVzLCBidXQgaXQgaGFzIHRvIGJlIGluY2x1ZGVkIG1hbnVhbGx5IGluIHRoZVxuICAgICAgICBhcHAuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgV2hlbiB1c2luZyBzY29wZWQgc3R5bGVzIG9uIGEgdWk1IGNvbnRyb2wgdGhlIHNjb3BlIGlkIHdpbGwgYmUgYXBwbGllZCB0byBhbGwgaHRtbFxuICAgICAgICBlbGVtZW50cyBvZiB0aGF0IGNvbnRyb2wuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMj5QcmVwcm9jZXNzb3JzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBZb3UgY2FuIHVzZSBwcmVwcm9jZXNzb3JzIGxpa2UgbGVzcywgc2NzcywgcHVnIGlmIHlvdVxuICAgICAgICBkZWZpbmUgdGhlIGxhbmcgcHJvcGVydHkgaW4geW91ciBzZmMgZmlsZXMuIE1ha2Ugc3VyZSB0aGF0IHlvdSBoYXZlXG4gICAgICAgIGluc3RhbGxlZCB0aGUgcmVxdWlyZWQgcGFja2FnZXMgdGhhdCB3aWxsIHRyYW5zZm9ybSB5b3VyIHNwZWNpZmllZFxuICAgICAgICBwcmVwcm9jZXNzb3IuXG4gICAgICA8L3A+XG4gICAgPC91aTVodG1sPlxuICA8L206UGFuZWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHVpNWh0bWwgZnJvbSBcInZ1ZWk1L1VJNWh0bWxcIjtcbmltcG9ydCB1aTUgZnJvbSBcInZ1ZWk1L1VJNUNvbnRyb2xcIjtcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIi4uLy4uL2NvbW1vbi9Db2RlQmxvY2tIXCI7XG5cbmNvbnN0IGNvbnRyb2xpbXBvcnQgPSBgPHNjcmlwdD5cbmltcG9ydCB1aTVDb250cm9sIGZyb20gJ3Z1ZWk1L1VJNUNvbnRyb2wnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdzYXAvbS9CdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICAnQnV0dG9uJzogdWk1Q29udHJvbChCdXR0b24pLFxuICAgICdUZXh0JzogdWk1Q29udHJvbChcInNhcC9tL1RleHRcIilcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgLy8gLi4uXG4gIH1cbn1cbjxcXC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgdWk1Q29udHJvbCBmcm9tICd2dWVpNS9VSTVDb250cm9sJztcbmltcG9ydCBTYXBNQnV0dG9uIGZyb20gJ3NhcC9tL0J1dHRvbic7XG5cbmNvbnN0IEJ1dHRvbiA9IHVpNUNvbnRyb2woU2FwTUJ1dHRvbik7XG5jb25zdCBUZXh0ID0gdWk1Q29udHJvbChcInNhcC9tL1RleHRcIik7XG5cbi8vIC4uLlxuPFxcL3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8QnV0dG9uIHRleHQ9XCJDbGljayBNZVwiIEBwcmVzcz1cIm9uUHJlc3NcIi8+XG4gIDxUZXh0IDp0ZXh0PVwibXlWYXJcIi8+XG48L3RlbXBsYXRlPmA7XG5cbmNvbnN0IGludGVyYWN0aW9uID0gYDx0ZW1wbGF0ZT5cbiAgPEJ1dHRvbiA6dGV4dD1cIm15RGF0YVwiIEBwcmVzcz1cIm15UHJlc3NMaXN0ZW5lclwiLz5cbiAgPFRleHQgdi1mb3I9XCJrLGkgaW4gbXlBcnJheVwiIDprZXk9XCJpXCIvPlxuICA8SW5wdXQgdi1tb2RlbDp2YWx1ZSAvPlxuPC90ZW1wbGF0ZT5gO1xuXG5jb25zdCBwcmVmaXhQcm9wcyA9IGA8IS0tICdrZXknIGlzIHJlc2VydmVkIGJ5IHZ1ZSBzbyB0aGUgdWk1LS0gcHJlZml4IGlzIHJlcXVpcmVkIHRvIHBhc3MgaXQgdG8gdGhlIHVpNSBjb250cm9sIC0tPlxuPEljb25UYWJGaWx0ZXIgdWk1LS1rZXk9XCJob21lXCIgdGV4dD1cIkhvbWVcIiAvPmA7XG5cbmNvbnN0IGFnZ3JlZ2F0aW9ucyA9IGA8dGVtcGxhdGU+XG4gIDxUYWJsZT5cbiAgICA8dGVtcGxhdGUgdi1zbG90OmNvbHVtbnM+XG4gICAgICA8IS0tIEFsbCBjb250cm9scyBpbiB0aGUgdi1zbG90IHRlbXBsYXRlIHdpbGwgYmUgYWRkZWQgd2l0aCB0aGUgY29sdW1ucyBhZ2dyZWdhdGlvbiAtLT5cbiAgICAgIDxDb2x1bW4+PExhYmVsIHRleHQ9XCJJRFwiIC8+PC9Db2x1bW4+XG4gICAgICA8Q29sdW1uPjxMYWJlbCB0ZXh0PVwiTmFtZVwiIC8+PC9Db2x1bW4+XG4gICAgICA8Q29sdW1uPjxMYWJlbCB0ZXh0PVwiQWdlXCIgLz48L0NvbHVtbj5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPCEtLSB0aGUgdWk1LS1hZ2dyZWdhdGlvbiBwcm9wIHNwZWNpZmllcyB0aGUgYWdncmVnYXRpb24gZm9yIHRoaXMgc2luZ2xlIGNvbnRyb2wgLS0+XG4gICAgPENvbHVtbkxpc3RJdGVtIHYtZm9yPVwiZGF0YSBpbiB0YWJsZURhdGFcIiA6a2V5PVwiZGF0YS5pZFwiIHVpNS0tYWdncmVnYXRpb249XCJpdGVtc1wiPlxuICAgICAgPFRleHQgOnRleHQ9XCJkYXRhLmlkXCIvPlxuICAgICAgPFRleHQgOnRleHQ9XCJkYXRhLm5hbWVcIi8+XG4gICAgICA8VGV4dCA6dGV4dD1cImRhdGEuYWdlXCIvPlxuICAgIDwvQ29sdW1uTGlzdEl0ZW0+XG4gIDwvVGFibGU+XG48L3RlbXBsYXRlPmA7XG5cbmNvbnN0IHZ1ZUltcG9ydCA9IGAvLyByZWYgd2lsbCBkaXJlY3RseSBiZSBpbXBvcnRlZCBmcm9tIHRoZSB2dWUgZmlsZVxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZWk1L1Z1ZSdcblxuLy8gdGhlIGltcG9ydCBzb3VyY2Ugd2lsbCBiZSByZXdyaXR0ZW4gdG8gdGhlIGNvcnJlY3QgcGF0aCB2dWVpNS9WdWVcbmltcG9ydCB7cmVmfSBmcm9tICd2dWUnYDtcblxuY29uc3QgZ2xvYmFsQ29tcG9uZW50cyA9IGBzYXAudWkuZGVmaW5lKFtcbiAgLyouLi4qLyxcbiAgJ3NhcC9tL0J1dHRvbicsXG4gICd2dWVpNS9VSTVDb250cm9sJyxcbiAgJ3Z1ZWk1L1VJNUxpYnJhcnknLFxuXSwgZnVjdGlvbigvKi4uLiovLCBTYXBNQnV0dG9uLCB1aTVDb250cm9sLCB1aTVMaWIpIHtcbiAgVlVFSUNvbXBvbmVudC5leHRlbmQoXCJ2dWVpNS5kZW1vLkNvbXBvbmVudFwiLCB7XG4gICAgdnVlaTU6IHtcbiAgICAgIHZ1ZVJvb3Q6IEhvbWUsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIC8vIFlvdSBjYW4gYWRkIHZ1ZWk1IGNvbXBvbmVudHMgZ2xvYmFsbHkgdG8geW91ciBwcm9qZWN0XG4gICAgICAgICdUZXh0JzogJ3NhcC9tL1RleHQnLCAvLyBieSBzdHJpbmcgKHdpdGggcmVxdWlyZVN5bmMoKSlcbiAgICAgICAgJ0J1dHRvbic6IFNhcE1CdXR0b24sIC8vIGJ5IHVpNSBjb250cm9sXG4gICAgICAgICdQYW5lbCc6IHVpNUNvbnRyb2woJ3NhcC9tL1BhbmVsJyksIC8vIGJ5IHZ1ZSBjb21wb25lbnRcbiAgICAgICAgLi4udWk1TGliKCdzYXAvdXhhcC9saWJyYXJ5JywgJ3V4YXA6JykgLy8gYnkgZnVsbCBsaWJyYXJ5XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyAuLi5gO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uc3BsaXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMHJlbSwgMWZyKSk7XG4gIGdhcDogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbmZvYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjM0OSk7XG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIGxpZ2h0Ymx1ZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMS41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbmZvYm94OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4oS577iPXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDJyZW07XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBvcGFjaXR5OiAwLjE7XG4gIHotaW5kZXg6IC0xO1xufVxuPC9zdHlsZT4iXX0=