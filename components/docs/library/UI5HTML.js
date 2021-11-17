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
      const headerProperties = [["Module", "vuei5/UI5html"], ["Type", "Component"]];
      const overview = `The UI5html component will allow you to use regular HTML elements in your app. They will seamlessly integrate with your app and inherit the ui5 styling.`;
      const signatureText = ``;
      const signature = `
// Component Props
interface props {}

// Component Emits / Events
interface emits {}

// Slots
interface slots {
    default: [HTMLElements]
}`;
      const usageText = `Add the component where you want your HTML to be rendered and fill it with your html elements`;
      const usage = `<template>
    <UI5html>
        <h1>{{count}}</h1>
        <button @click="count++">Increment</button>
    </UI5html>
</template>
<script setup>
    import UI5html from 'vuei5/UI5html';
    import {ref} from 'vuei5/Vue';

    const count = ref(0);
<\/script>`;
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
  __sfc__.__scopeId = "data-v-ix4hcp2pxts";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9kb2NzL2xpYnJhcnkvVUk1SFRNTC52dWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBZUEsWUFBTSxnQkFBZ0IsR0FBRyxDQUN2QixDQUFBLFFBQUEsRUFEdUIsZUFDdkIsQ0FEdUIsRUFFdkIsQ0FBQSxNQUFBLEVBRkYsV0FFRSxDQUZ1QixDQUF6QjtBQUtBLFlBQU0sUUFBUSxHQUFkLDBKQUFBO0FBRUEsWUFBTSxhQUFhLEdBQW5CLEVBQUE7QUFDQSxZQUFNLFNBQVMsR0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQSxFQUFBO0FBWUEsWUFBTSxTQUFTLEdBQWYsK0ZBQUE7QUFDQSxZQUFNLEtBQUssR0FBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkEsV0FBQSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPEFQSU9iamVjdFxuICAgIDpoZWFkZXJQcm9wZXJ0aWVzPVwiaGVhZGVyUHJvcGVydGllc1wiXG4gICAgOm92ZXJ2aWV3PVwib3ZlcnZpZXdcIlxuICAgIDpzaWduYXR1cmU9XCJzaWduYXR1cmVcIlxuICAgIDp1c2FnZVRleHQ9XCJ1c2FnZVRleHRcIlxuICAgIDp1c2FnZT1cInVzYWdlXCJcbiAgICB1c2FnZUxhbmc9XCJodG1sXCJcbiAgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyByZWYsIGluamVjdCwgb25Nb3VudGVkIH0gZnJvbSBcInZ1ZWk1L1Z1ZVwiO1xuaW1wb3J0IEFQSU9iamVjdCBmcm9tIFwiLi4vLi4vY29tbW9uL0FQSU9iamVjdFwiO1xuXG5jb25zdCBoZWFkZXJQcm9wZXJ0aWVzID0gW1xuICBbXCJNb2R1bGVcIiwgXCJ2dWVpNS9VSTVodG1sXCJdLFxuICBbXCJUeXBlXCIsIFwiQ29tcG9uZW50XCJdXG5dXG5cbmNvbnN0IG92ZXJ2aWV3ID0gYFRoZSBVSTVodG1sIGNvbXBvbmVudCB3aWxsIGFsbG93IHlvdSB0byB1c2UgcmVndWxhciBIVE1MIGVsZW1lbnRzIGluIHlvdXIgYXBwLiBUaGV5IHdpbGwgc2VhbWxlc3NseSBpbnRlZ3JhdGUgd2l0aCB5b3VyIGFwcCBhbmQgaW5oZXJpdCB0aGUgdWk1IHN0eWxpbmcuYDtcblxuY29uc3Qgc2lnbmF0dXJlVGV4dCA9IGBgO1xuY29uc3Qgc2lnbmF0dXJlID0gYFxuLy8gQ29tcG9uZW50IFByb3BzXG5pbnRlcmZhY2UgcHJvcHMge31cblxuLy8gQ29tcG9uZW50IEVtaXRzIC8gRXZlbnRzXG5pbnRlcmZhY2UgZW1pdHMge31cblxuLy8gU2xvdHNcbmludGVyZmFjZSBzbG90cyB7XG4gICAgZGVmYXVsdDogW0hUTUxFbGVtZW50c11cbn1gO1xuXG5jb25zdCB1c2FnZVRleHQgPSBgQWRkIHRoZSBjb21wb25lbnQgd2hlcmUgeW91IHdhbnQgeW91ciBIVE1MIHRvIGJlIHJlbmRlcmVkIGFuZCBmaWxsIGl0IHdpdGggeW91ciBodG1sIGVsZW1lbnRzYDtcbmNvbnN0IHVzYWdlID0gYDx0ZW1wbGF0ZT5cbiAgICA8VUk1aHRtbD5cbiAgICAgICAgPGgxPnt7Y291bnR9fTwvaDE+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwiY291bnQrK1wiPkluY3JlbWVudDwvYnV0dG9uPlxuICAgIDwvVUk1aHRtbD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0IHNldHVwPlxuICAgIGltcG9ydCBVSTVodG1sIGZyb20gJ3Z1ZWk1L1VJNWh0bWwnO1xuICAgIGltcG9ydCB7cmVmfSBmcm9tICd2dWVpNS9WdWUnO1xuXG4gICAgY29uc3QgY291bnQgPSByZWYoMCk7XG48XFwvc2NyaXB0PmA7XG48L3NjcmlwdD4iXX0=