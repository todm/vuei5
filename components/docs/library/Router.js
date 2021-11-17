sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/Vue", "../../common/APIObject"], function (module, exports, require, __destructureImport0, __destructureImport1, __defaultImport2) {
  var _unref = __destructureImport0.unref;
  var _openBlock = __destructureImport0.openBlock;
  var _createBlock = __destructureImport0.createBlock;
  var ref = __destructureImport1.ref;
  var inject = __destructureImport1.inject;
  var onMounted = __destructureImport1.onMounted;
  var APIObject = typeof __defaultImport2 === "object" && __defaultImport2.__esModule ? __defaultImport2.default : __defaultImport2;
  const __sfc__ = {
    setup(__props) {
      const headerProperties = [["Module", "vuei5/Router"], ["Type", "Component"]];
      const overview = `The Router component will let you render components dependent on the current ui5 route. This component will use the router integrated in ui5. Define your routes in your manifest file.`;
      const signatureText = ``;
      const signature = `
// Component Props
interface props {
    config: {
        [key: string]: Object; // Vue component
    };
}

// Component Emits / Events
interface emits {
    @change: (name: string, parameters: Object) => void;    
}`;
      const usageText = `Add the component where you want your Routes to render and supply it with a configuration.`;
      const usage = `<template>
    <Router :config="routerConfig" @change="routerChange" />
</template>
<script setup>
    import Router from 'vuei5/Router';
    import HomeComponent from './components/Home';
    import AboutComponent from './components/About';

    const routerConfig = {
        // the key must match the name of your route
        'home': HomeComponent,
        'about': AboutComponent
    }

    function routerChange(name, parameters) {
        console.log(name, parameters);
    }
<\/script>

The Router will pass the parameters as props to the rendered components. They will be put in the arguments prop.
<script>
    export default {
        props: ['arguments'],
        // ...
    }
<\script>`;
      return (_ctx, _cache) => {
        return _openBlock(), _createBlock(_unref(APIObject), {
          headerProperties: headerProperties,
          overview: overview,
          signature: signature,
          usageText: usageText,
          usage: usage,
          usageLang: "html"
        });
      };
    }

  };
  __sfc__.__scopeId = "data-v-xnp1gjrsof";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9kb2NzL2xpYnJhcnkvUm91dGVyLnZ1ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFlQSxZQUFNLGdCQUFnQixHQUFHLENBQ3ZCLENBQUEsUUFBQSxFQUR1QixjQUN2QixDQUR1QixFQUV2QixDQUFBLE1BQUEsRUFGRixXQUVFLENBRnVCLENBQXpCO0FBS0EsWUFBTSxRQUFRLEdBQWQseUxBQUE7QUFFQSxZQUFNLGFBQWEsR0FBbkIsRUFBQTtBQUNBLFlBQU0sU0FBUyxHQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkEsRUFBQTtBQWFBLFlBQU0sU0FBUyxHQUFmLDRGQUFBO0FBQ0EsWUFBTSxLQUFLLEdBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkEsVUFBQSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPEFQSU9iamVjdFxuICAgIDpoZWFkZXJQcm9wZXJ0aWVzPVwiaGVhZGVyUHJvcGVydGllc1wiXG4gICAgOm92ZXJ2aWV3PVwib3ZlcnZpZXdcIlxuICAgIDpzaWduYXR1cmU9XCJzaWduYXR1cmVcIlxuICAgIDp1c2FnZVRleHQ9XCJ1c2FnZVRleHRcIlxuICAgIDp1c2FnZT1cInVzYWdlXCJcbiAgICB1c2FnZUxhbmc9XCJodG1sXCJcbiAgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyByZWYsIGluamVjdCwgb25Nb3VudGVkIH0gZnJvbSBcInZ1ZWk1L1Z1ZVwiO1xuaW1wb3J0IEFQSU9iamVjdCBmcm9tIFwiLi4vLi4vY29tbW9uL0FQSU9iamVjdFwiO1xuXG5jb25zdCBoZWFkZXJQcm9wZXJ0aWVzID0gW1xuICBbXCJNb2R1bGVcIiwgXCJ2dWVpNS9Sb3V0ZXJcIl0sXG4gIFtcIlR5cGVcIiwgXCJDb21wb25lbnRcIl1cbl1cblxuY29uc3Qgb3ZlcnZpZXcgPSBgVGhlIFJvdXRlciBjb21wb25lbnQgd2lsbCBsZXQgeW91IHJlbmRlciBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgY3VycmVudCB1aTUgcm91dGUuIFRoaXMgY29tcG9uZW50IHdpbGwgdXNlIHRoZSByb3V0ZXIgaW50ZWdyYXRlZCBpbiB1aTUuIERlZmluZSB5b3VyIHJvdXRlcyBpbiB5b3VyIG1hbmlmZXN0IGZpbGUuYDtcblxuY29uc3Qgc2lnbmF0dXJlVGV4dCA9IGBgO1xuY29uc3Qgc2lnbmF0dXJlID0gYFxuLy8gQ29tcG9uZW50IFByb3BzXG5pbnRlcmZhY2UgcHJvcHMge1xuICAgIGNvbmZpZzoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBPYmplY3Q7IC8vIFZ1ZSBjb21wb25lbnRcbiAgICB9O1xufVxuXG4vLyBDb21wb25lbnQgRW1pdHMgLyBFdmVudHNcbmludGVyZmFjZSBlbWl0cyB7XG4gICAgQGNoYW5nZTogKG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogT2JqZWN0KSA9PiB2b2lkOyAgICBcbn1gO1xuXG5jb25zdCB1c2FnZVRleHQgPSBgQWRkIHRoZSBjb21wb25lbnQgd2hlcmUgeW91IHdhbnQgeW91ciBSb3V0ZXMgdG8gcmVuZGVyIGFuZCBzdXBwbHkgaXQgd2l0aCBhIGNvbmZpZ3VyYXRpb24uYDtcbmNvbnN0IHVzYWdlID0gYDx0ZW1wbGF0ZT5cbiAgICA8Um91dGVyIDpjb25maWc9XCJyb3V0ZXJDb25maWdcIiBAY2hhbmdlPVwicm91dGVyQ2hhbmdlXCIgLz5cbjwvdGVtcGxhdGU+XG48c2NyaXB0IHNldHVwPlxuICAgIGltcG9ydCBSb3V0ZXIgZnJvbSAndnVlaTUvUm91dGVyJztcbiAgICBpbXBvcnQgSG9tZUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG4gICAgaW1wb3J0IEFib3V0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9BYm91dCc7XG5cbiAgICBjb25zdCByb3V0ZXJDb25maWcgPSB7XG4gICAgICAgIC8vIHRoZSBrZXkgbXVzdCBtYXRjaCB0aGUgbmFtZSBvZiB5b3VyIHJvdXRlXG4gICAgICAgICdob21lJzogSG9tZUNvbXBvbmVudCxcbiAgICAgICAgJ2Fib3V0JzogQWJvdXRDb21wb25lbnRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByb3V0ZXJDaGFuZ2UobmFtZSwgcGFyYW1ldGVycykge1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCBwYXJhbWV0ZXJzKTtcbiAgICB9XG48XFwvc2NyaXB0PlxuXG5UaGUgUm91dGVyIHdpbGwgcGFzcyB0aGUgcGFyYW1ldGVycyBhcyBwcm9wcyB0byB0aGUgcmVuZGVyZWQgY29tcG9uZW50cy4gVGhleSB3aWxsIGJlIHB1dCBpbiB0aGUgYXJndW1lbnRzIHByb3AuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IFsnYXJndW1lbnRzJ10sXG4gICAgICAgIC8vIC4uLlxuICAgIH1cbjxcXHNjcmlwdD5gO1xuPC9zY3JpcHQ+Il19