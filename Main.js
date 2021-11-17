sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/Vue", "vuei5/UI5Control", "vuei5/Router", "./assets/icons", "./pages/Home", "./pages/Examples", "./pages/Docs"], function (module, exports, require, __destructureImport0, __destructureImport1, __defaultImport2, __defaultImport3, __destructureImport4, __defaultImport5, __defaultImport6, __defaultImport7) {
  var _unref = __destructureImport0.unref;
  var _createVNode = __destructureImport0.createVNode;
  var _withCtx = __destructureImport0.withCtx;
  var _openBlock = __destructureImport0.openBlock;
  var _createBlock = __destructureImport0.createBlock;
  var ref = __destructureImport1.ref;
  var inject = __destructureImport1.inject;
  var ui5 = typeof __defaultImport2 === "object" && __defaultImport2.__esModule ? __defaultImport2.default : __defaultImport2;
  var Router = typeof __defaultImport3 === "object" && __defaultImport3.__esModule ? __defaultImport3.default : __defaultImport3;
  var logo = __destructureImport4.logo;
  var github = __destructureImport4.github;
  var moon = __destructureImport4.moon;
  var sun = __destructureImport4.sun;
  var Home = typeof __defaultImport5 === "object" && __defaultImport5.__esModule ? __defaultImport5.default : __defaultImport5;
  var Examples = typeof __defaultImport6 === "object" && __defaultImport6.__esModule ? __defaultImport6.default : __defaultImport6;
  var Docs = typeof __defaultImport7 === "object" && __defaultImport7.__esModule ? __defaultImport7.default : __defaultImport7;
  const __sfc__ = {
    setup(__props) {
      const ui5Router = inject("$ui5Router");
      const Shell = ui5("sap/m/Shell");
      const Page = ui5("sap/m/Page");
      const ToolHeader = ui5("sap/tnt/ToolHeader");
      const IconTabHeader = ui5("sap/m/IconTabHeader");
      const IconTabFilter = ui5("sap/m/IconTabFilter");
      const Image = ui5("sap/m/Image");
      const Button = ui5("sap/m/Button");
      const Text = ui5("sap/m/Text");
      const routerConfig = {
        home: Home,
        docs: Docs,
        examples: Examples
      };
      const currentPage = ref(ui5Router.getRouteInfoByHash(ui5Router.getHashChanger().getHash()).name);

      function menuSelected(e) {
        const key = e.getParameter("key");
        ui5Router.navTo(key);
      }

      function routeChange(e) {
        currentPage.value = e;
      }

      function openLink(link) {
        window.open(link);
      }

      const themeKey = "vuei5_theme";
      sap.ui.getCore().applyTheme(localStorage.getItem(themeKey));
      const darkMode = ref(localStorage.getItem(themeKey) === "sap_fiori_3_dark");

      function changeTheme() {
        darkMode.value = !darkMode.value;

        if (darkMode.value) {
          sap.ui.getCore().applyTheme("sap_fiori_3_dark");
          localStorage.setItem("vuei5_theme", "sap_fiori_3_dark");
        } else {
          sap.ui.getCore().applyTheme("sap_fiori_3");
          localStorage.setItem("vuei5_theme", "sap_fiori_3");
        }
      }

      return (_ctx, _cache) => {
        return _openBlock(), _createBlock(_unref(Page), null, {
          customHeader: _withCtx(() => [_createVNode(_unref(ToolHeader), null, {
            default: _withCtx(() => [_createVNode(_unref(Image), {
              src: _unref(logo),
              height: "70%"
            }, null, 8
            /* PROPS */
            , ["src"]), _createVNode(_unref(Text), {
              text: "Vuei5"
            }), _createVNode(_unref(IconTabHeader), {
              onSelect: menuSelected,
              selectedKey: currentPage.value,
              mode: "Inline"
            }, {
              items: _withCtx(() => [_createVNode(_unref(IconTabFilter), {
                "ui5--key": "home",
                text: "Home"
              }), _createVNode(_unref(IconTabFilter), {
                "ui5--key": "docs",
                text: "Documentation"
              }), _createVNode(_unref(IconTabFilter), {
                "ui5--key": "examples",
                text: "Examples"
              })]),
              _: 1
              /* STABLE */

            }, 8
            /* PROPS */
            , ["selectedKey"]), _createVNode(_unref(Text), {
              text: "Created with vuei5"
            }), _createVNode(_unref(Button), {
              icon: darkMode.value ? _unref(moon) : _unref(sun),
              onPress: changeTheme,
              class: "themeBTN"
            }, null, 8
            /* PROPS */
            , ["icon"]), _createVNode(_unref(Button), {
              icon: _unref(github),
              onPress: _cache[0] || (_cache[0] = $event => openLink('https://github.com/todm/vuei5'))
            }, null, 8
            /* PROPS */
            , ["icon"])]),
            _: 1
            /* STABLE */

          })]),
          default: _withCtx(() => [_createVNode(_unref(Router), {
            config: routerConfig,
            onChange: routeChange
          })]),
          _: 1
          /* STABLE */

        });
      };
    }

  };
  __sfc__.__scopeId = "data-v-tt9td4b7ujr";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvTWFpbi52dWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBLFlBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBeEIsWUFBd0IsQ0FBeEI7QUFJQSxZQUFNLEtBQUssR0FBRyxHQUFHLENBQWpCLGFBQWlCLENBQWpCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFoQixZQUFnQixDQUFoQjtBQUNBLFlBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBdEIsb0JBQXNCLENBQXRCO0FBQ0EsWUFBTSxhQUFhLEdBQUcsR0FBRyxDQUF6QixxQkFBeUIsQ0FBekI7QUFDQSxZQUFNLGFBQWEsR0FBRyxHQUFHLENBQXpCLHFCQUF5QixDQUF6QjtBQUNBLFlBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBakIsYUFBaUIsQ0FBakI7QUFDQSxZQUFNLE1BQU0sR0FBRyxHQUFHLENBQWxCLGNBQWtCLENBQWxCO0FBQ0EsWUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFoQixZQUFnQixDQUFoQjtBQU1BLFlBQU0sWUFBWSxHQUFHO0FBQ25CLFFBQUEsSUFBSSxFQURlLElBQUE7QUFFbkIsUUFBQSxJQUFJLEVBRmUsSUFBQTtBQUduQixRQUFBLFFBQVEsRUFBRTtBQUhTLE9BQXJCO0FBTUEsWUFBTSxXQUFXLEdBQUcsR0FBRyxDQUNyQixTQUFTLENBQVQsa0JBQUEsQ0FBNkIsU0FBUyxDQUFULGNBQUEsR0FBN0IsT0FBNkIsRUFBN0IsRUFERixJQUF1QixDQUF2Qjs7QUFHQSxlQUFBLFlBQUEsQ0FBQSxDQUFBLEVBQXlCO0FBQ3ZCLGNBQU0sR0FBRyxHQUFHLENBQUMsQ0FBRCxZQUFBLENBQVosS0FBWSxDQUFaO0FBQ0EsUUFBQSxTQUFTLENBQVQsS0FBQSxDQUFBLEdBQUE7QUFDRDs7QUFFRCxlQUFBLFdBQUEsQ0FBQSxDQUFBLEVBQXdCO0FBQ3RCLFFBQUEsV0FBVyxDQUFYLEtBQUEsR0FBQSxDQUFBO0FBQ0Q7O0FBRUQsZUFBQSxRQUFBLENBQUEsSUFBQSxFQUF3QjtBQUN0QixRQUFBLE1BQU0sQ0FBTixJQUFBLENBQUEsSUFBQTtBQUNEOztBQUVELFlBQU0sUUFBUSxHQUFkLGFBQUE7QUFDQSxNQUFBLEdBQUcsQ0FBSCxFQUFBLENBQUEsT0FBQSxHQUFBLFVBQUEsQ0FBNEIsWUFBWSxDQUFaLE9BQUEsQ0FBNUIsUUFBNEIsQ0FBNUI7QUFDQSxZQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFaLE9BQUEsQ0FBQSxRQUFBLE1BQXJCLGtCQUFvQixDQUFwQjs7QUFDQSxlQUFBLFdBQUEsR0FBdUI7QUFDckIsUUFBQSxRQUFRLENBQVIsS0FBQSxHQUFpQixDQUFDLFFBQVEsQ0FBMUIsS0FBQTs7QUFDQSxZQUFJLFFBQVEsQ0FBWixLQUFBLEVBQW9CO0FBQ2xCLFVBQUEsR0FBRyxDQUFILEVBQUEsQ0FBQSxPQUFBLEdBQUEsVUFBQSxDQUFBLGtCQUFBO0FBQ0EsVUFBQSxZQUFZLENBQVosT0FBQSxDQUFBLGFBQUEsRUFBQSxrQkFBQTtBQUZGLFNBQUEsTUFHTztBQUNMLFVBQUEsR0FBRyxDQUFILEVBQUEsQ0FBQSxPQUFBLEdBQUEsVUFBQSxDQUFBLGFBQUE7QUFDQSxVQUFBLFlBQVksQ0FBWixPQUFBLENBQUEsYUFBQSxFQUFBLGFBQUE7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8UGFnZT5cbiAgICA8dGVtcGxhdGUgdi1zbG90OmN1c3RvbUhlYWRlcj5cbiAgICAgIDxUb29sSGVhZGVyPlxuICAgICAgICA8SW1hZ2UgOnNyYz1cImxvZ29cIiBoZWlnaHQ9XCI3MCVcIiAvPlxuICAgICAgICA8VGV4dCB0ZXh0PVwiVnVlaTVcIiAvPlxuICAgICAgICA8SWNvblRhYkhlYWRlclxuICAgICAgICAgIEBzZWxlY3Q9XCJtZW51U2VsZWN0ZWRcIlxuICAgICAgICAgIDpzZWxlY3RlZEtleT1cImN1cnJlbnRQYWdlXCJcbiAgICAgICAgICBtb2RlPVwiSW5saW5lXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbXM+XG4gICAgICAgICAgICA8SWNvblRhYkZpbHRlciB1aTUtLWtleT1cImhvbWVcIiB0ZXh0PVwiSG9tZVwiIC8+XG4gICAgICAgICAgICA8SWNvblRhYkZpbHRlciB1aTUtLWtleT1cImRvY3NcIiB0ZXh0PVwiRG9jdW1lbnRhdGlvblwiIC8+XG4gICAgICAgICAgICA8SWNvblRhYkZpbHRlciB1aTUtLWtleT1cImV4YW1wbGVzXCIgdGV4dD1cIkV4YW1wbGVzXCIgLz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L0ljb25UYWJIZWFkZXI+XG4gICAgICAgIDxUZXh0IHRleHQ9XCJDcmVhdGVkIHdpdGggdnVlaTVcIiAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgOmljb249XCJkYXJrTW9kZSA/IG1vb24gOiBzdW5cIlxuICAgICAgICAgIEBwcmVzcz1cImNoYW5nZVRoZW1lXCJcbiAgICAgICAgICBjbGFzcz1cInRoZW1lQlROXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIDppY29uPVwiZ2l0aHViXCJcbiAgICAgICAgICBAcHJlc3M9XCJvcGVuTGluaygnaHR0cHM6Ly9naXRodWIuY29tL3RvZG0vdnVlaTUnKVwiXG4gICAgICAgIC8+XG4gICAgICA8L1Rvb2xIZWFkZXI+XG4gICAgPC90ZW1wbGF0ZT5cbiAgICA8Um91dGVyIDpjb25maWc9XCJyb3V0ZXJDb25maWdcIiBAY2hhbmdlPVwicm91dGVDaGFuZ2VcIiAvPlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgcmVmLCBpbmplY3QgfSBmcm9tIFwidnVlaTUvVnVlXCI7XG5pbXBvcnQgdWk1IGZyb20gXCJ2dWVpNS9VSTVDb250cm9sXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJ2dWVpNS9Sb3V0ZXJcIjtcbmNvbnN0IHVpNVJvdXRlciA9IGluamVjdChcIiR1aTVSb3V0ZXJcIik7XG5cbmltcG9ydCB7IGxvZ28sIGdpdGh1YiwgbW9vbiwgc3VuIH0gZnJvbSBcIi4vYXNzZXRzL2ljb25zXCI7XG5cbmNvbnN0IFNoZWxsID0gdWk1KFwic2FwL20vU2hlbGxcIik7XG5jb25zdCBQYWdlID0gdWk1KFwic2FwL20vUGFnZVwiKTtcbmNvbnN0IFRvb2xIZWFkZXIgPSB1aTUoXCJzYXAvdG50L1Rvb2xIZWFkZXJcIik7XG5jb25zdCBJY29uVGFiSGVhZGVyID0gdWk1KFwic2FwL20vSWNvblRhYkhlYWRlclwiKTtcbmNvbnN0IEljb25UYWJGaWx0ZXIgPSB1aTUoXCJzYXAvbS9JY29uVGFiRmlsdGVyXCIpO1xuY29uc3QgSW1hZ2UgPSB1aTUoXCJzYXAvbS9JbWFnZVwiKTtcbmNvbnN0IEJ1dHRvbiA9IHVpNShcInNhcC9tL0J1dHRvblwiKTtcbmNvbnN0IFRleHQgPSB1aTUoXCJzYXAvbS9UZXh0XCIpO1xuXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lXCI7XG5pbXBvcnQgRXhhbXBsZXMgZnJvbSBcIi4vcGFnZXMvRXhhbXBsZXNcIjtcbmltcG9ydCBEb2NzIGZyb20gXCIuL3BhZ2VzL0RvY3NcIjtcblxuY29uc3Qgcm91dGVyQ29uZmlnID0ge1xuICBob21lOiBIb21lLFxuICBkb2NzOiBEb2NzLFxuICBleGFtcGxlczogRXhhbXBsZXMsXG59O1xuXG5jb25zdCBjdXJyZW50UGFnZSA9IHJlZihcbiAgdWk1Um91dGVyLmdldFJvdXRlSW5mb0J5SGFzaCh1aTVSb3V0ZXIuZ2V0SGFzaENoYW5nZXIoKS5nZXRIYXNoKCkpLm5hbWVcbik7XG5mdW5jdGlvbiBtZW51U2VsZWN0ZWQoZSkge1xuICBjb25zdCBrZXkgPSBlLmdldFBhcmFtZXRlcihcImtleVwiKTtcbiAgdWk1Um91dGVyLm5hdlRvKGtleSk7XG59XG5cbmZ1bmN0aW9uIHJvdXRlQ2hhbmdlKGUpIHtcbiAgY3VycmVudFBhZ2UudmFsdWUgPSBlO1xufVxuXG5mdW5jdGlvbiBvcGVuTGluayhsaW5rKSB7XG4gIHdpbmRvdy5vcGVuKGxpbmspO1xufVxuXG5jb25zdCB0aGVtZUtleSA9IFwidnVlaTVfdGhlbWVcIjtcbnNhcC51aS5nZXRDb3JlKCkuYXBwbHlUaGVtZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGVtZUtleSkpO1xuY29uc3QgZGFya01vZGUgPSByZWYobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhlbWVLZXkpID09PSBcInNhcF9maW9yaV8zX2RhcmtcIik7XG5mdW5jdGlvbiBjaGFuZ2VUaGVtZSgpIHtcbiAgZGFya01vZGUudmFsdWUgPSAhZGFya01vZGUudmFsdWU7XG4gIGlmIChkYXJrTW9kZS52YWx1ZSkge1xuICAgIHNhcC51aS5nZXRDb3JlKCkuYXBwbHlUaGVtZShcInNhcF9maW9yaV8zX2RhcmtcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ2dWVpNV90aGVtZVwiLCBcInNhcF9maW9yaV8zX2RhcmtcIik7XG4gIH0gZWxzZSB7XG4gICAgc2FwLnVpLmdldENvcmUoKS5hcHBseVRoZW1lKFwic2FwX2Zpb3JpXzNcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ2dWVpNV90aGVtZVwiLCBcInNhcF9maW9yaV8zXCIpO1xuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLm92ZXJmbG93TGlzdCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi50aGVtZUJUTiBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG59XG5cbjpub3QocHJlKSA+IGNvZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMCwgMTQzLCAxNjMsIDAuMik7XG4gIHBhZGRpbmc6IC4xcmVtIC40cmVtO1xuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcbiAgZm9udC1zaXplOiAuOGVtO1xufVxuPC9zdHlsZT4iXX0=