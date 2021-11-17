sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/Vue", "vuei5/UI5Control", "sap/ui/Device", "../components/examples/Increment", "../components/examples/JSComponent", "../components/examples/Model", "../components/examples/Slots", "../components/examples/I18n", "../components/examples/RouterDemo", "../components/examples/HTML", "../components/examples/Toggle", "../components/examples/Style", "../components/examples/GlobalComponents", "../components/examples/Preprocessors", "../components/examples/Test"], function (module, exports, require, __destructureImport0, __destructureImport1, __defaultImport2, __defaultImport3, __defaultImport4, __defaultImport5, __defaultImport6, __defaultImport7, __defaultImport8, __defaultImport9, __defaultImport10, __defaultImport11, __defaultImport12, __defaultImport13, __defaultImport14, __defaultImport15) {
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
  var Increment = typeof __defaultImport4 === "object" && __defaultImport4.__esModule ? __defaultImport4.default : __defaultImport4;
  var JSComponent = typeof __defaultImport5 === "object" && __defaultImport5.__esModule ? __defaultImport5.default : __defaultImport5;
  var Model = typeof __defaultImport6 === "object" && __defaultImport6.__esModule ? __defaultImport6.default : __defaultImport6;
  var Slots = typeof __defaultImport7 === "object" && __defaultImport7.__esModule ? __defaultImport7.default : __defaultImport7;
  var I18n = typeof __defaultImport8 === "object" && __defaultImport8.__esModule ? __defaultImport8.default : __defaultImport8;
  var RouterDemo = typeof __defaultImport9 === "object" && __defaultImport9.__esModule ? __defaultImport9.default : __defaultImport9;
  var HTML = typeof __defaultImport10 === "object" && __defaultImport10.__esModule ? __defaultImport10.default : __defaultImport10;
  var Toggle = typeof __defaultImport11 === "object" && __defaultImport11.__esModule ? __defaultImport11.default : __defaultImport11;
  var Styles = typeof __defaultImport12 === "object" && __defaultImport12.__esModule ? __defaultImport12.default : __defaultImport12;
  var GlobalComponents = typeof __defaultImport13 === "object" && __defaultImport13.__esModule ? __defaultImport13.default : __defaultImport13;
  var Preprocessors = typeof __defaultImport14 === "object" && __defaultImport14.__esModule ? __defaultImport14.default : __defaultImport14;
  var Test = typeof __defaultImport15 === "object" && __defaultImport15.__esModule ? __defaultImport15.default : __defaultImport15;
  const __sfc__ = {
    props: ["arguments"],

    setup(__props) {
      const props = __props;
      const Page = ui5("sap/m/Page");
      const Split = ui5("sap/m/SplitContainer");
      const List = ui5("sap/m/List");
      const ListItem = ui5("sap/m/StandardListItem");
      const pages = [{
        name: "increment",
        label: "Increment",
        component: Increment
      }, {
        name: "jscomponent",
        label: "JS Component",
        component: JSComponent
      }, {
        name: "models",
        label: "Models",
        component: Model
      }, {
        name: "slots",
        label: "Slots and v-for",
        component: Slots
      }, {
        name: "i18n",
        label: "I18n",
        component: I18n
      }, {
        name: "router",
        label: "Router",
        component: RouterDemo
      }, {
        name: "html",
        label: "Seamless HTML",
        component: HTML
      }, {
        name: "toggle",
        label: "Toggle Controls",
        component: Toggle
      }, {
        name: "style",
        label: "Style",
        component: Styles
      }, {
        name: "globalcomponents",
        label: "Global Components",
        component: GlobalComponents
      }, {
        name: "preprocessors",
        label: "Preprocessors",
        component: Preprocessors
      }, {
        name: "test",
        label: "Test",
        component: Test
      }];
      const ui5Router = inject("$ui5Router");
      const splitContainer = ref();
      const isMobile = Device.browser.mobile;
      onMounted(() => {
        nav(props.arguments.example);
      });

      function nav(to) {
        const sc = splitContainer.value.ui5Control;
        sc.toDetail(to);
        ui5Router.navTo("examples", {
          example: to
        });
      }

      function showMaster() {
        splitContainer.value.ui5Control.toMaster("splitMasterExamples"); // splitContainer.value.ui5Control.showMaster();
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
            id: "splitMasterExamples"
          }, {
            default: _withCtx(() => [(_openBlock(), _createElementBlock(_Fragment, null, _renderList(pages, p => {
              return _createVNode(_unref(ListItem), {
                key: p.name,
                title: p.label,
                type: "Navigation",
                onPress: $event => nav(p.name)
              }, null, 8
              /* PROPS */
              , ["title", "onPress"]);
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
  __sfc__.__scopeId = "data-v-zifdtxy9gva";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvcGFnZXMvRXhhbXBsZXMudnVlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkEsWUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFoQixZQUFnQixDQUFoQjtBQUNBLFlBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBakIsc0JBQWlCLENBQWpCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFoQixZQUFnQixDQUFoQjtBQUNBLFlBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBcEIsd0JBQW9CLENBQXBCO0FBZUEsWUFBTSxLQUFLLEdBQUcsQ0FDWjtBQUFFLFFBQUEsSUFBSSxFQUFOLFdBQUE7QUFBcUIsUUFBQSxLQUFLLEVBQTFCLFdBQUE7QUFBeUMsUUFBQSxTQUFTLEVBQUU7QUFBcEQsT0FEWSxFQUVaO0FBQUUsUUFBQSxJQUFJLEVBQU4sYUFBQTtBQUF1QixRQUFBLEtBQUssRUFBNUIsY0FBQTtBQUE4QyxRQUFBLFNBQVMsRUFBRTtBQUF6RCxPQUZZLEVBR1o7QUFBRSxRQUFBLElBQUksRUFBTixRQUFBO0FBQWtCLFFBQUEsS0FBSyxFQUF2QixRQUFBO0FBQW1DLFFBQUEsU0FBUyxFQUFFO0FBQTlDLE9BSFksRUFJWjtBQUFFLFFBQUEsSUFBSSxFQUFOLE9BQUE7QUFBaUIsUUFBQSxLQUFLLEVBQXRCLGlCQUFBO0FBQTJDLFFBQUEsU0FBUyxFQUFFO0FBQXRELE9BSlksRUFLWjtBQUFFLFFBQUEsSUFBSSxFQUFOLE1BQUE7QUFBZ0IsUUFBQSxLQUFLLEVBQXJCLE1BQUE7QUFBK0IsUUFBQSxTQUFTLEVBQUU7QUFBMUMsT0FMWSxFQU1aO0FBQUUsUUFBQSxJQUFJLEVBQU4sUUFBQTtBQUFrQixRQUFBLEtBQUssRUFBdkIsUUFBQTtBQUFtQyxRQUFBLFNBQVMsRUFBRTtBQUE5QyxPQU5ZLEVBT1o7QUFBRSxRQUFBLElBQUksRUFBTixNQUFBO0FBQWdCLFFBQUEsS0FBSyxFQUFyQixlQUFBO0FBQXdDLFFBQUEsU0FBUyxFQUFFO0FBQW5ELE9BUFksRUFRWjtBQUFFLFFBQUEsSUFBSSxFQUFOLFFBQUE7QUFBa0IsUUFBQSxLQUFLLEVBQXZCLGlCQUFBO0FBQTRDLFFBQUEsU0FBUyxFQUFFO0FBQXZELE9BUlksRUFTWjtBQUFFLFFBQUEsSUFBSSxFQUFOLE9BQUE7QUFBaUIsUUFBQSxLQUFLLEVBQXRCLE9BQUE7QUFBaUMsUUFBQSxTQUFTLEVBQUU7QUFBNUMsT0FUWSxFQVVaO0FBQUUsUUFBQSxJQUFJLEVBQU4sa0JBQUE7QUFBNEIsUUFBQSxLQUFLLEVBQWpDLG1CQUFBO0FBQXdELFFBQUEsU0FBUyxFQUFFO0FBQW5FLE9BVlksRUFXWjtBQUFFLFFBQUEsSUFBSSxFQUFOLGVBQUE7QUFBeUIsUUFBQSxLQUFLLEVBQTlCLGVBQUE7QUFBaUQsUUFBQSxTQUFTLEVBQUU7QUFBNUQsT0FYWSxFQVlaO0FBQUUsUUFBQSxJQUFJLEVBQU4sTUFBQTtBQUFnQixRQUFBLEtBQUssRUFBckIsTUFBQTtBQUErQixRQUFBLFNBQVMsRUFBRTtBQUExQyxPQVpZLENBQWQ7QUFnQkEsWUFBTSxTQUFTLEdBQUcsTUFBTSxDQUF4QixZQUF3QixDQUF4QjtBQUNBLFlBQU0sY0FBYyxHQUFHLEdBQXZCLEVBQUE7QUFFQSxZQUFNLFFBQVEsR0FBRyxNQUFNLENBQU4sT0FBQSxDQUFqQixNQUFBO0FBRUEsTUFBQSxTQUFTLENBQUMsTUFBTTtBQUNkLFFBQUEsR0FBRyxDQUFDLEtBQUssQ0FBTCxTQUFBLENBQUosT0FBRyxDQUFIO0FBREYsT0FBUyxDQUFUOztBQUlBLGVBQUEsR0FBQSxDQUFBLEVBQUEsRUFBaUI7QUFDZixjQUFNLEVBQUUsR0FBRyxjQUFjLENBQWQsS0FBQSxDQUFYLFVBQUE7QUFDQSxRQUFBLEVBQUUsQ0FBRixRQUFBLENBQUEsRUFBQTtBQUNBLFFBQUEsU0FBUyxDQUFULEtBQUEsQ0FBQSxVQUFBLEVBQTRCO0FBQUUsVUFBQSxPQUFPLEVBQUU7QUFBWCxTQUE1QjtBQUNEOztBQUVELGVBQUEsVUFBQSxHQUFzQjtBQUNwQixRQUFBLGNBQWMsQ0FBZCxLQUFBLENBQUEsVUFBQSxDQUFBLFFBQUEsQ0FEb0IscUJBQ3BCLEVBRG9CLENBRXBCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxTcGxpdCByZWY9XCJzcGxpdENvbnRhaW5lclwiPlxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6ZGV0YWlsUGFnZXM+XG4gICAgICA8UGFnZSB2LWZvcj1cInAgaW4gcGFnZXNcIiA6a2V5PVwicC5uYW1lXCIgOnRpdGxlPVwicC5sYWJlbFwiIDppZD1cInAubmFtZVwiIDpzaG93TmF2QnV0dG9uPVwiaXNNb2JpbGVcIiBAbmF2QnV0dG9uUHJlc3M9XCJzaG93TWFzdGVyXCI+XG4gICAgICAgIDxjb21wb25lbnQgOmlzPVwicC5jb21wb25lbnRcIi8+XG4gICAgICA8L1BhZ2U+XG4gICAgPC90ZW1wbGF0ZT5cbiAgICA8dGVtcGxhdGUgdi1zbG90Om1hc3RlclBhZ2VzPlxuICAgICAgPExpc3QgY2xhc3M9XCJvdmVyZmxvd0xpc3RcIiBpZD1cInNwbGl0TWFzdGVyRXhhbXBsZXNcIj5cbiAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgdi1mb3I9XCJwIGluIHBhZ2VzXCJcbiAgICAgICAgICA6a2V5PVwicC5uYW1lXCJcbiAgICAgICAgICA6dGl0bGU9XCJwLmxhYmVsXCJcbiAgICAgICAgICB0eXBlPVwiTmF2aWdhdGlvblwiXG4gICAgICAgICAgQHByZXNzPVwibmF2KHAubmFtZSlcIlxuICAgICAgICAvPlxuICAgICAgPC9MaXN0PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvU3BsaXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgcmVmLCBpbmplY3QsIG9uTW91bnRlZCB9IGZyb20gXCJ2dWVpNS9WdWVcIjtcbmltcG9ydCB1aTUgZnJvbSBcInZ1ZWk1L1VJNUNvbnRyb2xcIjtcbmltcG9ydCBEZXZpY2UgZnJvbSBcInNhcC91aS9EZXZpY2VcIjtcblxuY29uc3QgUGFnZSA9IHVpNShcInNhcC9tL1BhZ2VcIik7XG5jb25zdCBTcGxpdCA9IHVpNShcInNhcC9tL1NwbGl0Q29udGFpbmVyXCIpO1xuY29uc3QgTGlzdCA9IHVpNShcInNhcC9tL0xpc3RcIik7XG5jb25zdCBMaXN0SXRlbSA9IHVpNShcInNhcC9tL1N0YW5kYXJkTGlzdEl0ZW1cIik7XG5cbmltcG9ydCBJbmNyZW1lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZXhhbXBsZXMvSW5jcmVtZW50XCI7XG5pbXBvcnQgSlNDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZXhhbXBsZXMvSlNDb21wb25lbnRcIjtcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9leGFtcGxlcy9Nb2RlbFwiO1xuaW1wb3J0IFNsb3RzIGZyb20gXCIuLi9jb21wb25lbnRzL2V4YW1wbGVzL1Nsb3RzXCI7XG5pbXBvcnQgSTE4biBmcm9tIFwiLi4vY29tcG9uZW50cy9leGFtcGxlcy9JMThuXCI7XG5pbXBvcnQgUm91dGVyRGVtbyBmcm9tIFwiLi4vY29tcG9uZW50cy9leGFtcGxlcy9Sb3V0ZXJEZW1vXCI7XG5pbXBvcnQgSFRNTCBmcm9tIFwiLi4vY29tcG9uZW50cy9leGFtcGxlcy9IVE1MXCI7XG5pbXBvcnQgVG9nZ2xlIGZyb20gXCIuLi9jb21wb25lbnRzL2V4YW1wbGVzL1RvZ2dsZVwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9leGFtcGxlcy9TdHlsZVwiO1xuaW1wb3J0IEdsb2JhbENvbXBvbmVudHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZXhhbXBsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xuaW1wb3J0IFByZXByb2Nlc3NvcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZXhhbXBsZXMvUHJlcHJvY2Vzc29yc1wiO1xuaW1wb3J0IFRlc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvZXhhbXBsZXMvVGVzdFwiO1xuXG5jb25zdCBwYWdlcyA9IFtcbiAgeyBuYW1lOiBcImluY3JlbWVudFwiLCBsYWJlbDogXCJJbmNyZW1lbnRcIiwgY29tcG9uZW50OiBJbmNyZW1lbnQgfSxcbiAgeyBuYW1lOiBcImpzY29tcG9uZW50XCIsIGxhYmVsOiBcIkpTIENvbXBvbmVudFwiLCBjb21wb25lbnQ6IEpTQ29tcG9uZW50IH0sXG4gIHsgbmFtZTogXCJtb2RlbHNcIiwgbGFiZWw6IFwiTW9kZWxzXCIsIGNvbXBvbmVudDogTW9kZWwgfSxcbiAgeyBuYW1lOiBcInNsb3RzXCIsIGxhYmVsOiBcIlNsb3RzIGFuZCB2LWZvclwiLCBjb21wb25lbnQ6IFNsb3RzIH0sXG4gIHsgbmFtZTogXCJpMThuXCIsIGxhYmVsOiBcIkkxOG5cIiwgY29tcG9uZW50OiBJMThuIH0sXG4gIHsgbmFtZTogXCJyb3V0ZXJcIiwgbGFiZWw6IFwiUm91dGVyXCIsIGNvbXBvbmVudDogUm91dGVyRGVtbyB9LFxuICB7IG5hbWU6IFwiaHRtbFwiLCBsYWJlbDogXCJTZWFtbGVzcyBIVE1MXCIsIGNvbXBvbmVudDogSFRNTCB9LFxuICB7IG5hbWU6IFwidG9nZ2xlXCIsIGxhYmVsOiBcIlRvZ2dsZSBDb250cm9sc1wiLCBjb21wb25lbnQ6IFRvZ2dsZSB9LFxuICB7IG5hbWU6IFwic3R5bGVcIiwgbGFiZWw6IFwiU3R5bGVcIiwgY29tcG9uZW50OiBTdHlsZXMgfSxcbiAgeyBuYW1lOiBcImdsb2JhbGNvbXBvbmVudHNcIiwgbGFiZWw6IFwiR2xvYmFsIENvbXBvbmVudHNcIiwgY29tcG9uZW50OiBHbG9iYWxDb21wb25lbnRzIH0sXG4gIHsgbmFtZTogXCJwcmVwcm9jZXNzb3JzXCIsIGxhYmVsOiBcIlByZXByb2Nlc3NvcnNcIiwgY29tcG9uZW50OiBQcmVwcm9jZXNzb3JzIH0sXG4gIHsgbmFtZTogXCJ0ZXN0XCIsIGxhYmVsOiBcIlRlc3RcIiwgY29tcG9uZW50OiBUZXN0IH0sXG5dO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKFtcImFyZ3VtZW50c1wiXSk7XG5jb25zdCB1aTVSb3V0ZXIgPSBpbmplY3QoXCIkdWk1Um91dGVyXCIpO1xuY29uc3Qgc3BsaXRDb250YWluZXIgPSByZWYoKTtcblxuY29uc3QgaXNNb2JpbGUgPSBEZXZpY2UuYnJvd3Nlci5tb2JpbGU7XG5cbm9uTW91bnRlZCgoKSA9PiB7XG4gIG5hdihwcm9wcy5hcmd1bWVudHMuZXhhbXBsZSk7XG59KTtcblxuZnVuY3Rpb24gbmF2KHRvKSB7XG4gIGNvbnN0IHNjID0gc3BsaXRDb250YWluZXIudmFsdWUudWk1Q29udHJvbDtcbiAgc2MudG9EZXRhaWwodG8pO1xuICB1aTVSb3V0ZXIubmF2VG8oXCJleGFtcGxlc1wiLCB7IGV4YW1wbGU6IHRvIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93TWFzdGVyKCkge1xuICBzcGxpdENvbnRhaW5lci52YWx1ZS51aTVDb250cm9sLnRvTWFzdGVyKFwic3BsaXRNYXN0ZXJFeGFtcGxlc1wiKTtcbiAgLy8gc3BsaXRDb250YWluZXIudmFsdWUudWk1Q29udHJvbC5zaG93TWFzdGVyKCk7XG59XG48L3NjcmlwdD4iXX0=