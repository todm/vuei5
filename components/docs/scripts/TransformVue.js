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
      const headerProperties = [["Module", "scripts/transformVue.js"], ["Type", "node script"]];
      const overview = `The transformVue script will transform the vuejs version from node_modules to a ui5 compatible module and write it to the vui5 resources. By default a prod version of vue will be downloaded. If you want to use the development version of vue add --dev to the call.`;
      const signatureText = ``;
      const signature = `// $ node scripts/transformVue.js [--dev]
transformVue(isProd?: boolean = true, writeFile?:boolean = true, enableLogger?:boolean = false);`;
      const usageText = ``;
      const usage = `node scripts/transformVue.js
# or
node scripts/transformVue.js --dev`;
      return (_ctx, _cache) => {
        return _openBlock(), _createBlock(_unref(APIObject), {
          headerProperties: headerProperties,
          overview: overview,
          signature: signature,
          usageText: usageText,
          usage: usage,
          usageLang: "text"
        });
      };
    }

  };
  __sfc__.__scopeId = "data-v-tb18qk355j";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9kb2NzL3NjcmlwdHMvVHJhbnNmb3JtVnVlLnZ1ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFlQSxZQUFNLGdCQUFnQixHQUFHLENBQ3ZCLENBQUEsUUFBQSxFQUR1Qix5QkFDdkIsQ0FEdUIsRUFFdkIsQ0FBQSxNQUFBLEVBRkYsYUFFRSxDQUZ1QixDQUF6QjtBQUtBLFlBQU0sUUFBUSxHQUFkLHlRQUFBO0FBRUEsWUFBTSxhQUFhLEdBQW5CLEVBQUE7QUFDQSxZQUFNLFNBQVMsR0FBSTtBQUFuQixpR0FBQTtBQUdBLFlBQU0sU0FBUyxHQUFmLEVBQUE7QUFDQSxZQUFNLEtBQUssR0FBSTtBQUNmO0FBREEsbUNBQUEiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxBUElPYmplY3RcbiAgICA6aGVhZGVyUHJvcGVydGllcz1cImhlYWRlclByb3BlcnRpZXNcIlxuICAgIDpvdmVydmlldz1cIm92ZXJ2aWV3XCJcbiAgICA6c2lnbmF0dXJlPVwic2lnbmF0dXJlXCJcbiAgICA6dXNhZ2VUZXh0PVwidXNhZ2VUZXh0XCJcbiAgICA6dXNhZ2U9XCJ1c2FnZVwiXG4gICAgdXNhZ2VMYW5nPVwidGV4dFwiXG4gIC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgcmVmLCBpbmplY3QsIG9uTW91bnRlZCB9IGZyb20gXCJ2dWVpNS9WdWVcIjtcbmltcG9ydCBBUElPYmplY3QgZnJvbSBcIi4uLy4uL2NvbW1vbi9BUElPYmplY3RcIjtcblxuY29uc3QgaGVhZGVyUHJvcGVydGllcyA9IFtcbiAgW1wiTW9kdWxlXCIsIFwic2NyaXB0cy90cmFuc2Zvcm1WdWUuanNcIl0sXG4gIFtcIlR5cGVcIiwgXCJub2RlIHNjcmlwdFwiXVxuXVxuXG5jb25zdCBvdmVydmlldyA9IGBUaGUgdHJhbnNmb3JtVnVlIHNjcmlwdCB3aWxsIHRyYW5zZm9ybSB0aGUgdnVlanMgdmVyc2lvbiBmcm9tIG5vZGVfbW9kdWxlcyB0byBhIHVpNSBjb21wYXRpYmxlIG1vZHVsZSBhbmQgd3JpdGUgaXQgdG8gdGhlIHZ1aTUgcmVzb3VyY2VzLiBCeSBkZWZhdWx0IGEgcHJvZCB2ZXJzaW9uIG9mIHZ1ZSB3aWxsIGJlIGRvd25sb2FkZWQuIElmIHlvdSB3YW50IHRvIHVzZSB0aGUgZGV2ZWxvcG1lbnQgdmVyc2lvbiBvZiB2dWUgYWRkIC0tZGV2IHRvIHRoZSBjYWxsLmA7XG5cbmNvbnN0IHNpZ25hdHVyZVRleHQgPSBgYDtcbmNvbnN0IHNpZ25hdHVyZSA9IGAvLyAkIG5vZGUgc2NyaXB0cy90cmFuc2Zvcm1WdWUuanMgWy0tZGV2XVxudHJhbnNmb3JtVnVlKGlzUHJvZD86IGJvb2xlYW4gPSB0cnVlLCB3cml0ZUZpbGU/OmJvb2xlYW4gPSB0cnVlLCBlbmFibGVMb2dnZXI/OmJvb2xlYW4gPSBmYWxzZSk7YDtcblxuY29uc3QgdXNhZ2VUZXh0ID0gYGA7XG5jb25zdCB1c2FnZSA9IGBub2RlIHNjcmlwdHMvdHJhbnNmb3JtVnVlLmpzXG4jIG9yXG5ub2RlIHNjcmlwdHMvdHJhbnNmb3JtVnVlLmpzIC0tZGV2YDtcbjwvc2NyaXB0PiJdfQ==