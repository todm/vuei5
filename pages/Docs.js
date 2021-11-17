sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/Vue", "vuei5/UI5Control", "sap/ui/Device", "../components/docs/DocsStart", "../components/docs/library/Launcher", "../components/docs/library/VUEIComponent", "../components/docs/library/UI5Control", "../components/docs/library/UI5Library", "../components/docs/library/Router", "../components/docs/library/UI5HTML", "../components/docs/library/Utils", "../components/docs/ui5Task/SFCTask", "../components/docs/ui5Task/SFCMiddleware", "../components/docs/scripts/TransformVue", "../components/docs/gettingStarted/Install", "../components/docs/gettingStarted/Components", "../components/docs/gettingStarted/Routing"], function (module, exports, require, __destructureImport0, __destructureImport1, __defaultImport2, __defaultImport3, __defaultImport4, __defaultImport5, __defaultImport6, __defaultImport7, __defaultImport8, __defaultImport9, __defaultImport10, __defaultImport11, __defaultImport12, __defaultImport13, __defaultImport14, __defaultImport15, __defaultImport16, __defaultImport17) {
  var _renderList = __destructureImport0.renderList;
  var _Fragment = __destructureImport0.Fragment;
  var _openBlock = __destructureImport0.openBlock;
  var _createElementBlock = __destructureImport0.createElementBlock;
  var _unref = __destructureImport0.unref;
  var _resolveDynamicComponent = __destructureImport0.resolveDynamicComponent;
  var _createBlock = __destructureImport0.createBlock;
  var _withCtx = __destructureImport0.withCtx;
  var _createVNode = __destructureImport0.createVNode;
  var ref = __destructureImport1.ref;
  var inject = __destructureImport1.inject;
  var onMounted = __destructureImport1.onMounted;
  var ui5 = typeof __defaultImport2 === "object" && __defaultImport2.__esModule ? __defaultImport2.default : __defaultImport2;
  var Device = typeof __defaultImport3 === "object" && __defaultImport3.__esModule ? __defaultImport3.default : __defaultImport3;
  var DocsStart = typeof __defaultImport4 === "object" && __defaultImport4.__esModule ? __defaultImport4.default : __defaultImport4;
  var Launcher = typeof __defaultImport5 === "object" && __defaultImport5.__esModule ? __defaultImport5.default : __defaultImport5;
  var VUEIComponent = typeof __defaultImport6 === "object" && __defaultImport6.__esModule ? __defaultImport6.default : __defaultImport6;
  var UI5Control = typeof __defaultImport7 === "object" && __defaultImport7.__esModule ? __defaultImport7.default : __defaultImport7;
  var UI5Library = typeof __defaultImport8 === "object" && __defaultImport8.__esModule ? __defaultImport8.default : __defaultImport8;
  var Router = typeof __defaultImport9 === "object" && __defaultImport9.__esModule ? __defaultImport9.default : __defaultImport9;
  var UI5HTML = typeof __defaultImport10 === "object" && __defaultImport10.__esModule ? __defaultImport10.default : __defaultImport10;
  var Utils = typeof __defaultImport11 === "object" && __defaultImport11.__esModule ? __defaultImport11.default : __defaultImport11;
  var SFCTask = typeof __defaultImport12 === "object" && __defaultImport12.__esModule ? __defaultImport12.default : __defaultImport12;
  var SFCMiddleware = typeof __defaultImport13 === "object" && __defaultImport13.__esModule ? __defaultImport13.default : __defaultImport13;
  var TransformVue = typeof __defaultImport14 === "object" && __defaultImport14.__esModule ? __defaultImport14.default : __defaultImport14;
  var Install = typeof __defaultImport15 === "object" && __defaultImport15.__esModule ? __defaultImport15.default : __defaultImport15;
  var Components = typeof __defaultImport16 === "object" && __defaultImport16.__esModule ? __defaultImport16.default : __defaultImport16;
  var Routing = typeof __defaultImport17 === "object" && __defaultImport17.__esModule ? __defaultImport17.default : __defaultImport17;
  const __sfc__ = {
    props: ["arguments"],

    setup(__props) {
      const props = __props;
      const Page = ui5("sap/m/Page");
      const Split = ui5("sap/m/SplitContainer");
      const List = ui5("sap/m/List");
      const ListItem = ui5("sap/m/StandardListItem");
      const ListHead = ui5("sap/m/GroupHeaderListItem");
      const Title = ui5("sap/m/Title");
      const ui5Router = inject("$ui5Router");
      const splitContainer = ref();
      const pages = [{
        c: ListItem,
        type: "",
        name: "start",
        label: "Documentation",
        component: DocsStart
      }, {
        c: ListHead,
        label: "Getting Started"
      }, {
        c: ListItem,
        type: "",
        name: "install",
        label: "Installing Vuei5",
        component: Install
      }, {
        c: ListItem,
        type: "",
        name: "start_components",
        label: "Writing components",
        component: Components
      }, {
        c: ListItem,
        type: "",
        name: "start_routing",
        label: "Routing and i18n",
        component: Routing
      }, {
        c: ListHead,
        label: "Library"
      }, // { c: ListItem, type: "", name: "lib", label: "Library", component: Lib },
      {
        c: ListItem,
        type: "Class",
        name: "vueicomponent",
        label: "VUEIComponent",
        component: VUEIComponent
      }, {
        c: ListItem,
        type: "Function",
        name: "launcher",
        label: "Launcher",
        component: Launcher
      }, {
        c: ListItem,
        type: "Function",
        name: "ui5Control",
        label: "UI5Control",
        component: UI5Control
      }, {
        c: ListItem,
        type: "Function",
        name: "ui5Lib",
        label: "UI5Library",
        component: UI5Library
      }, {
        c: ListItem,
        type: "Component",
        name: "router",
        label: "Router",
        component: Router
      }, {
        c: ListItem,
        type: "Component",
        name: "ui5html",
        label: "UI5html",
        component: UI5HTML
      }, {
        c: ListItem,
        type: "Module",
        name: "utils",
        label: "Utils",
        component: Utils
      }, {
        c: ListHead,
        label: "Task and Middleware"
      }, {
        c: ListItem,
        type: "Task",
        name: "sfctask",
        label: "vuei5-task-sfc",
        component: SFCTask
      }, {
        c: ListItem,
        type: "Middleware",
        name: "sfcmiddleware",
        label: "vuei5-middleware-sfc",
        component: SFCMiddleware
      }, {
        c: ListHead,
        label: "Scripts"
      }, {
        c: ListItem,
        type: "Script",
        name: "transformVue",
        label: "transformVue",
        component: TransformVue
      }];
      const isMobile = Device.browser.mobile;
      onMounted(() => {
        nav(props.arguments.module);
      });

      function nav(to) {
        const sc = splitContainer.value.ui5Control;
        sc.toDetail(to);
        ui5Router.navTo("docs", {
          module: to
        });
      }

      function showMaster() {
        splitContainer.value.ui5Control.toMaster("splitMaster"); // splitContainer.value.ui5Control.showMaster();
      }

      return (_ctx, _cache) => {
        return _openBlock(), _createBlock(_unref(Split), {
          ref: (_value, _refs) => {
            _refs['splitContainer'] = _value;
            splitContainer.value = _value;
          }
        }, {
          detailPages: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(pages, p => {
            return _createVNode(_unref(Page), {
              key: p.name,
              title: p.label,
              id: p.name,
              titleAlignment: "Center",
              showNavButton: _unref(isMobile),
              onNavButtonPress: showMaster
            }, {
              default: _withCtx(() => [(_openBlock(), _createBlock(_resolveDynamicComponent(p.component)))]),
              _: 2
              /* DYNAMIC */

            }, 1032
            /* PROPS, DYNAMIC_SLOTS */
            , ["title", "id", "showNavButton"]);
          }), 64
          /* STABLE_FRAGMENT */
          ))]),
          masterPages: _withCtx(() => [_createVNode(_unref(List), {
            class: "overflowList",
            id: "splitMaster"
          }, {
            default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(pages, p => {
              return _createVNode(_resolveDynamicComponent(p.c), {
                key: p.name,
                title: p.label,
                type: p.name ? 'Navigation' : null,
                onPress: $event => nav(p.name),
                info: p.type
              }, null, 8
              /* PROPS */
              , ["title", "type", "onPress", "info"]);
            }), 64
            /* STABLE_FRAGMENT */
            ))]),
            _: 1
            /* STABLE */

          })]),
          _: 1
          /* STABLE */

        }, 512
        /* NEED_PATCH */
        );
      };
    }

  };
  __sfc__.__scopeId = "data-v-my4kotvw71";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvcGFnZXMvRG9jcy52dWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEI7QUFDQSxZQUFNLEtBQUssR0FBRyxHQUFHLENBQWpCLHNCQUFpQixDQUFqQjtBQUNBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEI7QUFDQSxZQUFNLFFBQVEsR0FBRyxHQUFHLENBQXBCLHdCQUFvQixDQUFwQjtBQUNBLFlBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBcEIsMkJBQW9CLENBQXBCO0FBQ0EsWUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFqQixhQUFpQixDQUFqQjtBQWtCQSxZQUFNLFNBQVMsR0FBRyxNQUFNLENBQXhCLFlBQXdCLENBQXhCO0FBQ0EsWUFBTSxjQUFjLEdBQUcsR0FBdkIsRUFBQTtBQUVBLFlBQU0sS0FBSyxHQUFHLENBQ1o7QUFDRSxRQUFBLENBQUMsRUFESCxRQUFBO0FBRUUsUUFBQSxJQUFJLEVBRk4sRUFBQTtBQUdFLFFBQUEsSUFBSSxFQUhOLE9BQUE7QUFJRSxRQUFBLEtBQUssRUFKUCxlQUFBO0FBS0UsUUFBQSxTQUFTLEVBQUU7QUFMYixPQURZLEVBUVo7QUFBRSxRQUFBLENBQUMsRUFBSCxRQUFBO0FBQWUsUUFBQSxLQUFLLEVBQUU7QUFBdEIsT0FSWSxFQVNaO0FBQ0UsUUFBQSxDQUFDLEVBREgsUUFBQTtBQUVFLFFBQUEsSUFBSSxFQUZOLEVBQUE7QUFHRSxRQUFBLElBQUksRUFITixTQUFBO0FBSUUsUUFBQSxLQUFLLEVBSlAsa0JBQUE7QUFLRSxRQUFBLFNBQVMsRUFBRTtBQUxiLE9BVFksRUFnQlo7QUFDRSxRQUFBLENBQUMsRUFESCxRQUFBO0FBRUUsUUFBQSxJQUFJLEVBRk4sRUFBQTtBQUdFLFFBQUEsSUFBSSxFQUhOLGtCQUFBO0FBSUUsUUFBQSxLQUFLLEVBSlAsb0JBQUE7QUFLRSxRQUFBLFNBQVMsRUFBRTtBQUxiLE9BaEJZLEVBdUJaO0FBQ0UsUUFBQSxDQUFDLEVBREgsUUFBQTtBQUVFLFFBQUEsSUFBSSxFQUZOLEVBQUE7QUFHRSxRQUFBLElBQUksRUFITixlQUFBO0FBSUUsUUFBQSxLQUFLLEVBSlAsa0JBQUE7QUFLRSxRQUFBLFNBQVMsRUFBRTtBQUxiLE9BdkJZLEVBOEJaO0FBQUUsUUFBQSxDQUFDLEVBQUgsUUFBQTtBQUFlLFFBQUEsS0FBSyxFQUFFO0FBQXRCLE9BOUJZLEVBK0JaO0FBQ0E7QUFDRSxRQUFBLENBQUMsRUFESCxRQUFBO0FBRUUsUUFBQSxJQUFJLEVBRk4sT0FBQTtBQUdFLFFBQUEsSUFBSSxFQUhOLGVBQUE7QUFJRSxRQUFBLEtBQUssRUFKUCxlQUFBO0FBS0UsUUFBQSxTQUFTLEVBQUU7QUFMYixPQWhDWSxFQXVDWjtBQUNFLFFBQUEsQ0FBQyxFQURILFFBQUE7QUFFRSxRQUFBLElBQUksRUFGTixVQUFBO0FBR0UsUUFBQSxJQUFJLEVBSE4sVUFBQTtBQUlFLFFBQUEsS0FBSyxFQUpQLFVBQUE7QUFLRSxRQUFBLFNBQVMsRUFBRTtBQUxiLE9BdkNZLEVBOENaO0FBQ0UsUUFBQSxDQUFDLEVBREgsUUFBQTtBQUVFLFFBQUEsSUFBSSxFQUZOLFVBQUE7QUFHRSxRQUFBLElBQUksRUFITixZQUFBO0FBSUUsUUFBQSxLQUFLLEVBSlAsWUFBQTtBQUtFLFFBQUEsU0FBUyxFQUFFO0FBTGIsT0E5Q1ksRUFxRFo7QUFDRSxRQUFBLENBQUMsRUFESCxRQUFBO0FBRUUsUUFBQSxJQUFJLEVBRk4sVUFBQTtBQUdFLFFBQUEsSUFBSSxFQUhOLFFBQUE7QUFJRSxRQUFBLEtBQUssRUFKUCxZQUFBO0FBS0UsUUFBQSxTQUFTLEVBQUU7QUFMYixPQXJEWSxFQTREWjtBQUNFLFFBQUEsQ0FBQyxFQURILFFBQUE7QUFFRSxRQUFBLElBQUksRUFGTixXQUFBO0FBR0UsUUFBQSxJQUFJLEVBSE4sUUFBQTtBQUlFLFFBQUEsS0FBSyxFQUpQLFFBQUE7QUFLRSxRQUFBLFNBQVMsRUFBRTtBQUxiLE9BNURZLEVBb0VaO0FBQ0UsUUFBQSxDQUFDLEVBREgsUUFBQTtBQUVFLFFBQUEsSUFBSSxFQUZOLFdBQUE7QUFHRSxRQUFBLElBQUksRUFITixTQUFBO0FBSUUsUUFBQSxLQUFLLEVBSlAsU0FBQTtBQUtFLFFBQUEsU0FBUyxFQUFFO0FBTGIsT0FwRVksRUE0RVo7QUFDRSxRQUFBLENBQUMsRUFESCxRQUFBO0FBRUUsUUFBQSxJQUFJLEVBRk4sUUFBQTtBQUdFLFFBQUEsSUFBSSxFQUhOLE9BQUE7QUFJRSxRQUFBLEtBQUssRUFKUCxPQUFBO0FBS0UsUUFBQSxTQUFTLEVBQUU7QUFMYixPQTVFWSxFQXFGWjtBQUFFLFFBQUEsQ0FBQyxFQUFILFFBQUE7QUFBZSxRQUFBLEtBQUssRUFBRTtBQUF0QixPQXJGWSxFQXNGWjtBQUNFLFFBQUEsQ0FBQyxFQURILFFBQUE7QUFFRSxRQUFBLElBQUksRUFGTixNQUFBO0FBR0UsUUFBQSxJQUFJLEVBSE4sU0FBQTtBQUlFLFFBQUEsS0FBSyxFQUpQLGdCQUFBO0FBS0UsUUFBQSxTQUFTLEVBQUU7QUFMYixPQXRGWSxFQTZGWjtBQUNFLFFBQUEsQ0FBQyxFQURILFFBQUE7QUFFRSxRQUFBLElBQUksRUFGTixZQUFBO0FBR0UsUUFBQSxJQUFJLEVBSE4sZUFBQTtBQUlFLFFBQUEsS0FBSyxFQUpQLHNCQUFBO0FBS0UsUUFBQSxTQUFTLEVBQUU7QUFMYixPQTdGWSxFQXFHWjtBQUFFLFFBQUEsQ0FBQyxFQUFILFFBQUE7QUFBZSxRQUFBLEtBQUssRUFBRTtBQUF0QixPQXJHWSxFQXNHWjtBQUNFLFFBQUEsQ0FBQyxFQURILFFBQUE7QUFFRSxRQUFBLElBQUksRUFGTixRQUFBO0FBR0UsUUFBQSxJQUFJLEVBSE4sY0FBQTtBQUlFLFFBQUEsS0FBSyxFQUpQLGNBQUE7QUFLRSxRQUFBLFNBQVMsRUFBRTtBQUxiLE9BdEdZLENBQWQ7QUErR0EsWUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFOLE9BQUEsQ0FBakIsTUFBQTtBQUVBLE1BQUEsU0FBUyxDQUFDLE1BQU07QUFDZCxRQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUwsU0FBQSxDQUFKLE1BQUcsQ0FBSDtBQURGLE9BQVMsQ0FBVDs7QUFLQSxlQUFBLEdBQUEsQ0FBQSxFQUFBLEVBQWlCO0FBQ2YsY0FBTSxFQUFFLEdBQUcsY0FBYyxDQUFkLEtBQUEsQ0FBWCxVQUFBO0FBQ0EsUUFBQSxFQUFFLENBQUYsUUFBQSxDQUFBLEVBQUE7QUFDQSxRQUFBLFNBQVMsQ0FBVCxLQUFBLENBQUEsTUFBQSxFQUF3QjtBQUFFLFVBQUEsTUFBTSxFQUFFO0FBQVYsU0FBeEI7QUFDRDs7QUFFRCxlQUFBLFVBQUEsR0FBc0I7QUFDcEIsUUFBQSxjQUFjLENBQWQsS0FBQSxDQUFBLFVBQUEsQ0FBQSxRQUFBLENBRG9CLGFBQ3BCLEVBRG9CLENBRXBCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxTcGxpdCByZWY9XCJzcGxpdENvbnRhaW5lclwiPlxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6ZGV0YWlsUGFnZXM+XG4gICAgICA8UGFnZSB2LWZvcj1cInAgaW4gcGFnZXNcIiA6a2V5PVwicC5uYW1lXCIgOnRpdGxlPVwicC5sYWJlbFwiIDppZD1cInAubmFtZVwiIHRpdGxlQWxpZ25tZW50PVwiQ2VudGVyXCIgOnNob3dOYXZCdXR0b249XCJpc01vYmlsZVwiIEBuYXZCdXR0b25QcmVzcz1cInNob3dNYXN0ZXJcIj5cbiAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJwLmNvbXBvbmVudFwiLz5cbiAgICAgIDwvUGFnZT5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bWFzdGVyUGFnZXM+XG4gICAgICA8TGlzdCBjbGFzcz1cIm92ZXJmbG93TGlzdFwiIGlkPVwic3BsaXRNYXN0ZXJcIj5cbiAgICAgICAgPGNvbXBvbmVudFxuICAgICAgICAgIHYtZm9yPVwicCBpbiBwYWdlc1wiXG4gICAgICAgICAgOmtleT1cInAubmFtZVwiXG4gICAgICAgICAgOmlzPVwicC5jXCJcbiAgICAgICAgICA6dGl0bGU9XCJwLmxhYmVsXCJcbiAgICAgICAgICA6dHlwZT1cInAubmFtZSA/ICdOYXZpZ2F0aW9uJyA6IG51bGxcIlxuICAgICAgICAgIEBwcmVzcz1cIm5hdihwLm5hbWUpXCJcbiAgICAgICAgICA6aW5mbz1cInAudHlwZVwiXG4gICAgICAgIC8+XG4gICAgICA8L0xpc3Q+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9TcGxpdD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyByZWYsIGluamVjdCwgb25Nb3VudGVkIH0gZnJvbSBcInZ1ZWk1L1Z1ZVwiO1xuaW1wb3J0IHVpNSBmcm9tIFwidnVlaTUvVUk1Q29udHJvbFwiO1xuaW1wb3J0IERldmljZSBmcm9tIFwic2FwL3VpL0RldmljZVwiO1xuXG5jb25zdCBQYWdlID0gdWk1KFwic2FwL20vUGFnZVwiKTtcbmNvbnN0IFNwbGl0ID0gdWk1KFwic2FwL20vU3BsaXRDb250YWluZXJcIik7XG5jb25zdCBMaXN0ID0gdWk1KFwic2FwL20vTGlzdFwiKTtcbmNvbnN0IExpc3RJdGVtID0gdWk1KFwic2FwL20vU3RhbmRhcmRMaXN0SXRlbVwiKTtcbmNvbnN0IExpc3RIZWFkID0gdWk1KFwic2FwL20vR3JvdXBIZWFkZXJMaXN0SXRlbVwiKTtcbmNvbnN0IFRpdGxlID0gdWk1KFwic2FwL20vVGl0bGVcIik7XG5cbmltcG9ydCBEb2NzU3RhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZG9jcy9Eb2NzU3RhcnRcIjsgXG5pbXBvcnQgTGF1bmNoZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZG9jcy9saWJyYXJ5L0xhdW5jaGVyXCI7IFxuaW1wb3J0IFZVRUlDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZG9jcy9saWJyYXJ5L1ZVRUlDb21wb25lbnRcIjsgXG5pbXBvcnQgVUk1Q29udHJvbCBmcm9tIFwiLi4vY29tcG9uZW50cy9kb2NzL2xpYnJhcnkvVUk1Q29udHJvbFwiOyBcbmltcG9ydCBVSTVMaWJyYXJ5IGZyb20gXCIuLi9jb21wb25lbnRzL2RvY3MvbGlicmFyeS9VSTVMaWJyYXJ5XCI7IFxuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9kb2NzL2xpYnJhcnkvUm91dGVyXCI7IFxuaW1wb3J0IFVJNUhUTUwgZnJvbSBcIi4uL2NvbXBvbmVudHMvZG9jcy9saWJyYXJ5L1VJNUhUTUxcIjsgXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZG9jcy9saWJyYXJ5L1V0aWxzXCI7XG5pbXBvcnQgU0ZDVGFzayBmcm9tICcuLi9jb21wb25lbnRzL2RvY3MvdWk1VGFzay9TRkNUYXNrJztcbmltcG9ydCBTRkNNaWRkbGV3YXJlIGZyb20gJy4uL2NvbXBvbmVudHMvZG9jcy91aTVUYXNrL1NGQ01pZGRsZXdhcmUnO1xuaW1wb3J0IFRyYW5zZm9ybVZ1ZSBmcm9tICcuLi9jb21wb25lbnRzL2RvY3Mvc2NyaXB0cy9UcmFuc2Zvcm1WdWUnO1xuaW1wb3J0IEluc3RhbGwgZnJvbSAnLi4vY29tcG9uZW50cy9kb2NzL2dldHRpbmdTdGFydGVkL0luc3RhbGwnO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9kb2NzL2dldHRpbmdTdGFydGVkL0NvbXBvbmVudHMnO1xuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9kb2NzL2dldHRpbmdTdGFydGVkL1JvdXRpbmcnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKFtcImFyZ3VtZW50c1wiXSk7XG5jb25zdCB1aTVSb3V0ZXIgPSBpbmplY3QoXCIkdWk1Um91dGVyXCIpO1xuY29uc3Qgc3BsaXRDb250YWluZXIgPSByZWYoKTtcblxuY29uc3QgcGFnZXMgPSBbXG4gIHtcbiAgICBjOiBMaXN0SXRlbSxcbiAgICB0eXBlOiBcIlwiLFxuICAgIG5hbWU6IFwic3RhcnRcIixcbiAgICBsYWJlbDogXCJEb2N1bWVudGF0aW9uXCIsXG4gICAgY29tcG9uZW50OiBEb2NzU3RhcnQsXG4gIH0sXG4gIHsgYzogTGlzdEhlYWQsIGxhYmVsOiBcIkdldHRpbmcgU3RhcnRlZFwiIH0sXG4gIHtcbiAgICBjOiBMaXN0SXRlbSxcbiAgICB0eXBlOiBcIlwiLFxuICAgIG5hbWU6IFwiaW5zdGFsbFwiLFxuICAgIGxhYmVsOiBcIkluc3RhbGxpbmcgVnVlaTVcIixcbiAgICBjb21wb25lbnQ6IEluc3RhbGwsXG4gIH0sXG4gIHtcbiAgICBjOiBMaXN0SXRlbSxcbiAgICB0eXBlOiBcIlwiLFxuICAgIG5hbWU6IFwic3RhcnRfY29tcG9uZW50c1wiLFxuICAgIGxhYmVsOiBcIldyaXRpbmcgY29tcG9uZW50c1wiLFxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50cyxcbiAgfSxcbiAge1xuICAgIGM6IExpc3RJdGVtLFxuICAgIHR5cGU6IFwiXCIsXG4gICAgbmFtZTogXCJzdGFydF9yb3V0aW5nXCIsXG4gICAgbGFiZWw6IFwiUm91dGluZyBhbmQgaTE4blwiLFxuICAgIGNvbXBvbmVudDogUm91dGluZyxcbiAgfSxcbiAgeyBjOiBMaXN0SGVhZCwgbGFiZWw6IFwiTGlicmFyeVwiIH0sXG4gIC8vIHsgYzogTGlzdEl0ZW0sIHR5cGU6IFwiXCIsIG5hbWU6IFwibGliXCIsIGxhYmVsOiBcIkxpYnJhcnlcIiwgY29tcG9uZW50OiBMaWIgfSxcbiAge1xuICAgIGM6IExpc3RJdGVtLFxuICAgIHR5cGU6IFwiQ2xhc3NcIixcbiAgICBuYW1lOiBcInZ1ZWljb21wb25lbnRcIixcbiAgICBsYWJlbDogXCJWVUVJQ29tcG9uZW50XCIsXG4gICAgY29tcG9uZW50OiBWVUVJQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgYzogTGlzdEl0ZW0sXG4gICAgdHlwZTogXCJGdW5jdGlvblwiLFxuICAgIG5hbWU6IFwibGF1bmNoZXJcIixcbiAgICBsYWJlbDogXCJMYXVuY2hlclwiLFxuICAgIGNvbXBvbmVudDogTGF1bmNoZXIsXG4gIH0sXG4gIHtcbiAgICBjOiBMaXN0SXRlbSxcbiAgICB0eXBlOiBcIkZ1bmN0aW9uXCIsXG4gICAgbmFtZTogXCJ1aTVDb250cm9sXCIsXG4gICAgbGFiZWw6IFwiVUk1Q29udHJvbFwiLFxuICAgIGNvbXBvbmVudDogVUk1Q29udHJvbCxcbiAgfSxcbiAge1xuICAgIGM6IExpc3RJdGVtLFxuICAgIHR5cGU6IFwiRnVuY3Rpb25cIixcbiAgICBuYW1lOiBcInVpNUxpYlwiLFxuICAgIGxhYmVsOiBcIlVJNUxpYnJhcnlcIixcbiAgICBjb21wb25lbnQ6IFVJNUxpYnJhcnksXG4gIH0sXG4gIHtcbiAgICBjOiBMaXN0SXRlbSxcbiAgICB0eXBlOiBcIkNvbXBvbmVudFwiLFxuICAgIG5hbWU6IFwicm91dGVyXCIsXG4gICAgbGFiZWw6IFwiUm91dGVyXCIsXG4gICAgY29tcG9uZW50OiBSb3V0ZXIsXG4gIH0sXG4gIFxuICB7XG4gICAgYzogTGlzdEl0ZW0sXG4gICAgdHlwZTogXCJDb21wb25lbnRcIixcbiAgICBuYW1lOiBcInVpNWh0bWxcIixcbiAgICBsYWJlbDogXCJVSTVodG1sXCIsXG4gICAgY29tcG9uZW50OiBVSTVIVE1MLFxuICB9LFxuICBcbiAge1xuICAgIGM6IExpc3RJdGVtLFxuICAgIHR5cGU6IFwiTW9kdWxlXCIsXG4gICAgbmFtZTogXCJ1dGlsc1wiLFxuICAgIGxhYmVsOiBcIlV0aWxzXCIsXG4gICAgY29tcG9uZW50OiBVdGlscyxcbiAgfSxcbiAgXG5cbiAgeyBjOiBMaXN0SGVhZCwgbGFiZWw6IFwiVGFzayBhbmQgTWlkZGxld2FyZVwiIH0sXG4gIHtcbiAgICBjOiBMaXN0SXRlbSxcbiAgICB0eXBlOiBcIlRhc2tcIixcbiAgICBuYW1lOiBcInNmY3Rhc2tcIixcbiAgICBsYWJlbDogXCJ2dWVpNS10YXNrLXNmY1wiLFxuICAgIGNvbXBvbmVudDogU0ZDVGFzayxcbiAgfSxcbiAge1xuICAgIGM6IExpc3RJdGVtLFxuICAgIHR5cGU6IFwiTWlkZGxld2FyZVwiLFxuICAgIG5hbWU6IFwic2ZjbWlkZGxld2FyZVwiLFxuICAgIGxhYmVsOiBcInZ1ZWk1LW1pZGRsZXdhcmUtc2ZjXCIsXG4gICAgY29tcG9uZW50OiBTRkNNaWRkbGV3YXJlLFxuICB9LFxuXG4gIHsgYzogTGlzdEhlYWQsIGxhYmVsOiBcIlNjcmlwdHNcIiB9LFxuICB7XG4gICAgYzogTGlzdEl0ZW0sXG4gICAgdHlwZTogXCJTY3JpcHRcIixcbiAgICBuYW1lOiBcInRyYW5zZm9ybVZ1ZVwiLFxuICAgIGxhYmVsOiBcInRyYW5zZm9ybVZ1ZVwiLFxuICAgIGNvbXBvbmVudDogVHJhbnNmb3JtVnVlLFxuICB9LFxuXTtcblxuY29uc3QgaXNNb2JpbGUgPSBEZXZpY2UuYnJvd3Nlci5tb2JpbGU7XG5cbm9uTW91bnRlZCgoKSA9PiB7XG4gIG5hdihwcm9wcy5hcmd1bWVudHMubW9kdWxlKTtcbiAgXG59KTtcblxuZnVuY3Rpb24gbmF2KHRvKSB7XG4gIGNvbnN0IHNjID0gc3BsaXRDb250YWluZXIudmFsdWUudWk1Q29udHJvbDtcbiAgc2MudG9EZXRhaWwodG8pO1xuICB1aTVSb3V0ZXIubmF2VG8oXCJkb2NzXCIsIHsgbW9kdWxlOiB0byB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd01hc3RlcigpIHtcbiAgc3BsaXRDb250YWluZXIudmFsdWUudWk1Q29udHJvbC50b01hc3RlcihcInNwbGl0TWFzdGVyXCIpO1xuICAvLyBzcGxpdENvbnRhaW5lci52YWx1ZS51aTVDb250cm9sLnNob3dNYXN0ZXIoKTtcbn1cbjwvc2NyaXB0PiJdfQ==