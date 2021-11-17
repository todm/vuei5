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
      const headerProperties = [["Module", "vuei5/Utils"], ["Type", "Module"]];
      const overview = `The Utils module provides useful functions (currently only one)`;
      const signatureText = ``;
      const signature = `// These functions are currently available in utils:

modelToRefs(model: sap.ui.model.Model, prefix?: string = ""): [vue.ref];
`;
      const usageText = `Simply import the module and use the function`;
      const usage = `import {modelToRefs} from 'vuei5/Utils';
const refs = modelToRefs(myJSONModel);

return {...refs};
`;
      return (_ctx, _cache) => {
        return _openBlock(), _createBlock(_unref(APIObject), {
          headerProperties: headerProperties,
          overview: overview,
          signature: signature,
          usageText: usageText,
          usage: usage
        });
      };
    }

  };
  __sfc__.__scopeId = "data-v-5o3hmwtzro9";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9kb2NzL2xpYnJhcnkvVXRpbHMudnVlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQWNBLFlBQU0sZ0JBQWdCLEdBQUcsQ0FDdkIsQ0FBQSxRQUFBLEVBRHVCLGFBQ3ZCLENBRHVCLEVBRXZCLENBQUEsTUFBQSxFQUZGLFFBRUUsQ0FGdUIsQ0FBekI7QUFLQSxZQUFNLFFBQVEsR0FBZCxpRUFBQTtBQUVBLFlBQU0sYUFBYSxHQUFuQixFQUFBO0FBQ0EsWUFBTSxTQUFTLEdBQUk7QUFDbkI7QUFDQTtBQUZBLENBQUE7QUFLQSxZQUFNLFNBQVMsR0FBZiwrQ0FBQTtBQUNBLFlBQU0sS0FBSyxHQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBSEEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPEFQSU9iamVjdFxuICAgIDpoZWFkZXJQcm9wZXJ0aWVzPVwiaGVhZGVyUHJvcGVydGllc1wiXG4gICAgOm92ZXJ2aWV3PVwib3ZlcnZpZXdcIlxuICAgIDpzaWduYXR1cmU9XCJzaWduYXR1cmVcIlxuICAgIDp1c2FnZVRleHQ9XCJ1c2FnZVRleHRcIlxuICAgIDp1c2FnZT1cInVzYWdlXCJcbiAgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyByZWYsIGluamVjdCwgb25Nb3VudGVkIH0gZnJvbSBcInZ1ZWk1L1Z1ZVwiO1xuaW1wb3J0IEFQSU9iamVjdCBmcm9tIFwiLi4vLi4vY29tbW9uL0FQSU9iamVjdFwiO1xuXG5jb25zdCBoZWFkZXJQcm9wZXJ0aWVzID0gW1xuICBbXCJNb2R1bGVcIiwgXCJ2dWVpNS9VdGlsc1wiXSxcbiAgW1wiVHlwZVwiLCBcIk1vZHVsZVwiXVxuXVxuXG5jb25zdCBvdmVydmlldyA9IGBUaGUgVXRpbHMgbW9kdWxlIHByb3ZpZGVzIHVzZWZ1bCBmdW5jdGlvbnMgKGN1cnJlbnRseSBvbmx5IG9uZSlgO1xuXG5jb25zdCBzaWduYXR1cmVUZXh0ID0gYGA7XG5jb25zdCBzaWduYXR1cmUgPSBgLy8gVGhlc2UgZnVuY3Rpb25zIGFyZSBjdXJyZW50bHkgYXZhaWxhYmxlIGluIHV0aWxzOlxuXG5tb2RlbFRvUmVmcyhtb2RlbDogc2FwLnVpLm1vZGVsLk1vZGVsLCBwcmVmaXg/OiBzdHJpbmcgPSBcIlwiKTogW3Z1ZS5yZWZdO1xuYDtcblxuY29uc3QgdXNhZ2VUZXh0ID0gYFNpbXBseSBpbXBvcnQgdGhlIG1vZHVsZSBhbmQgdXNlIHRoZSBmdW5jdGlvbmA7XG5jb25zdCB1c2FnZSA9IGBpbXBvcnQge21vZGVsVG9SZWZzfSBmcm9tICd2dWVpNS9VdGlscyc7XG5jb25zdCByZWZzID0gbW9kZWxUb1JlZnMobXlKU09OTW9kZWwpO1xuXG5yZXR1cm4gey4uLnJlZnN9O1xuYDtcbjwvc2NyaXB0PiJdfQ==