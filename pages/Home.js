sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/UI5Control", "../components/common/CodeBlock"], function (module, exports, require, __destructureImport0, __defaultImport1, __defaultImport2) {
  var _createCommentVNode = __destructureImport0.createCommentVNode;
  var _unref = __destructureImport0.unref;
  var _createVNode = __destructureImport0.createVNode;
  var _withCtx = __destructureImport0.withCtx;
  var _Fragment = __destructureImport0.Fragment;
  var _openBlock = __destructureImport0.openBlock;
  var _createElementBlock = __destructureImport0.createElementBlock;
  var ui5 = typeof __defaultImport1 === "object" && __defaultImport1.__esModule ? __defaultImport1.default : __defaultImport1;
  var CodeBlock = typeof __defaultImport2 === "object" && __defaultImport2.__esModule ? __defaultImport2.default : __defaultImport2;
  const __sfc__ = {
    setup(__props) {
      const Page = ui5("sap/m/Page");
      const Panel = ui5("sap/m/Panel");
      const Text = ui5("sap/m/Text");
      const Title = ui5("sap/m/Title");
      const VBox = ui5("sap/m/VBox");
      const HBox = ui5("sap/m/HBox");
      const Shell = ui5("sap/m/Shell");
      const Image = ui5("sap/m/Image");
      const MessageStrip = ui5("sap/m/MessageStrip");
      const imagePath = "./assets/tear.png";
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock(_Fragment, null, [_createCommentVNode(" <Shell> "), _createVNode(_unref(VBox), {
          class: "container"
        }, {
          default: _withCtx(() => [_createVNode(_unref(Panel), null, {
            default: _withCtx(() => [_createVNode(_unref(MessageStrip), {
              text: "First load of pages might be slow...",
              type: "Information",
              showIcon: true
            }), _createVNode(_unref(VBox), {
              alignItems: "Center",
              class: "sapUiMediumMarginTop"
            }, {
              default: _withCtx(() => [_createVNode(_unref(Title), {
                titleStyle: "H1",
                text: "Vuei5"
              }), _createVNode(_unref(Title), {
                titleStyle: "H3",
                text: "Vuejs for native ui5 apps"
              })]),
              _: 1
              /* STABLE */

            }), _createVNode(_unref(VBox), {
              class: "sapUiMediumMarginTop"
            }, {
              default: _withCtx(() => [_createVNode(_unref(Text), {
                text: "Vuei5 allows you to build UI5 apps using vuejs. The resulting apps can be used both in standalone mode and in launchpad. UI5 Controls will be wrapped as vue components that can be used with the usual vuejs features. The components will then be added to the regular ui5 component system. It is also possible to let only a part of the app be controlled by vuei5. This project does not use webcomponents. Just the regular UI5 controls."
              })]),
              _: 1
              /* STABLE */

            })]),
            _: 1
            /* STABLE */

          }), _createVNode(_unref(Panel), null, {
            default: _withCtx(() => [_createVNode(_unref(VBox), {
              alignItems: "Center"
            }, {
              default: _withCtx(() => [_createVNode(_unref(Image), {
                src: imagePath,
                class: "tearImage"
              })]),
              _: 1
              /* STABLE */

            })]),
            _: 1
            /* STABLE */

          }), _createVNode(_unref(Panel), {
            headerText: "What works and what doesn't"
          }, {
            default: _withCtx(() => [_createVNode(_unref(HBox), {
              alignContent: "Center",
              justifyContent: "SpaceAround"
            }, {
              default: _withCtx(() => [_createVNode(_unref(VBox), null, {
                default: _withCtx(() => [_createVNode(_unref(Title), {
                  text: "Works:",
                  titleStyle: "H3"
                }), _createVNode(_unref(Text), {
                  text: "✔ UI5 components in Vue"
                }), _createVNode(_unref(Text), {
                  text: "✔ v-bind on ui5 components"
                }), _createVNode(_unref(Text), {
                  text: "✔ v-model on ui5 components"
                }), _createVNode(_unref(Text), {
                  text: "✔ v-on on ui5 components"
                }), _createVNode(_unref(Text), {
                  text: "✔ Slots to nest ui5 components"
                }), _createVNode(_unref(Text), {
                  text: "✔ i18n translations in vue"
                }), _createVNode(_unref(Text), {
                  text: "✔ UI5 Routing system in vue"
                }), _createVNode(_unref(Text), {
                  text: "✔ .vue Single file components"
                }), _createVNode(_unref(Text), {
                  text: "✔ .vue <script setup> tag"
                }), _createVNode(_unref(Text), {
                  text: "✔ Pug templates in .vue files"
                }), _createVNode(_unref(Text), {
                  text: "✔ Render HTML inside ui5 app"
                }), _createVNode(_unref(Text), {
                  text: "✔ ESM in .vue files (actually required)"
                }), _createVNode(_unref(Text), {
                  text: "✔ Convert JSON Model to vue refs"
                }), _createVNode(_unref(Text), {
                  text: "✔ style in .vue files"
                }), _createVNode(_unref(Text), {
                  text: "✔ Sourcemaps"
                })]),
                _: 1
                /* STABLE */

              }), _createVNode(_unref(VBox), null, {
                default: _withCtx(() => [_createVNode(_unref(Title), {
                  text: "Currently doesn't work / Work in progress:",
                  titleStyle: "H3"
                }), _createVNode(_unref(Text), {
                  text: "❌ Typescript support"
                }), _createVNode(_unref(Text), {
                  text: "❌ v-show (bind to :visible instead)"
                })]),
                _: 1
                /* STABLE */

              })]),
              _: 1
              /* STABLE */

            })]),
            _: 1
            /* STABLE */

          })]),
          _: 1
          /* STABLE */

        }), _createCommentVNode(" </Shell> ")], 2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }

  };
  __sfc__.__scopeId = "data-v-susmdl74zxr";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvcGFnZXMvSG9tZS52dWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUF1REEsWUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFoQixZQUFnQixDQUFoQjtBQUNBLFlBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBakIsYUFBaUIsQ0FBakI7QUFDQSxZQUFNLElBQUksR0FBRyxHQUFHLENBQWhCLFlBQWdCLENBQWhCO0FBQ0EsWUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFqQixhQUFpQixDQUFqQjtBQUNBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEI7QUFDQSxZQUFNLElBQUksR0FBRyxHQUFHLENBQWhCLFlBQWdCLENBQWhCO0FBQ0EsWUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFqQixhQUFpQixDQUFqQjtBQUNBLFlBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBakIsYUFBaUIsQ0FBakI7QUFDQSxZQUFNLFlBQVksR0FBRyxHQUFHLENBQXhCLG9CQUF3QixDQUF4QjtBQUVBLFlBQU0sU0FBUyxHQUFmLG1CQUFBIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8IS0tIDxTaGVsbD4gLS0+XG4gIDxWQm94IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPFBhbmVsPlxuICAgICAgPE1lc3NhZ2VTdHJpcCB0ZXh0PVwiRmlyc3QgbG9hZCBvZiBwYWdlcyBtaWdodCBiZSBzbG93Li4uXCIgdHlwZT1cIkluZm9ybWF0aW9uXCIgOnNob3dJY29uPVwidHJ1ZVwiLz5cbiAgICAgIDxWQm94IGFsaWduSXRlbXM9XCJDZW50ZXJcIiBjbGFzcz1cInNhcFVpTWVkaXVtTWFyZ2luVG9wXCI+XG4gICAgICAgIDxUaXRsZSB0aXRsZVN0eWxlPVwiSDFcIiB0ZXh0PVwiVnVlaTVcIiAvPlxuICAgICAgICA8VGl0bGUgdGl0bGVTdHlsZT1cIkgzXCIgdGV4dD1cIlZ1ZWpzIGZvciBuYXRpdmUgdWk1IGFwcHNcIiAvPlxuICAgICAgPC9WQm94PlxuICAgICAgPFZCb3ggY2xhc3M9XCJzYXBVaU1lZGl1bU1hcmdpblRvcFwiPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHRleHQ9XCJWdWVpNSBhbGxvd3MgeW91IHRvIGJ1aWxkIFVJNSBhcHBzIHVzaW5nIHZ1ZWpzLiBUaGUgcmVzdWx0aW5nIGFwcHMgY2FuIGJlIHVzZWQgYm90aCBpbiBzdGFuZGFsb25lIG1vZGUgYW5kIGluIGxhdW5jaHBhZC4gVUk1IENvbnRyb2xzIHdpbGwgYmUgd3JhcHBlZCBhcyB2dWUgY29tcG9uZW50cyB0aGF0IGNhbiBiZSB1c2VkIHdpdGggdGhlIHVzdWFsIHZ1ZWpzIGZlYXR1cmVzLiBUaGUgY29tcG9uZW50cyB3aWxsIHRoZW4gYmUgYWRkZWQgdG8gdGhlIHJlZ3VsYXIgdWk1IGNvbXBvbmVudCBzeXN0ZW0uIEl0IGlzIGFsc28gcG9zc2libGUgdG8gbGV0IG9ubHkgYSBwYXJ0IG9mIHRoZSBhcHAgYmUgY29udHJvbGxlZCBieSB2dWVpNS4gVGhpcyBwcm9qZWN0IGRvZXMgbm90IHVzZSB3ZWJjb21wb25lbnRzLiBKdXN0IHRoZSByZWd1bGFyIFVJNSBjb250cm9scy5cIlxuICAgICAgICAvPlxuICAgICAgPC9WQm94PlxuICAgIDwvUGFuZWw+XG4gICAgPFBhbmVsPlxuICAgICAgPFZCb3ggYWxpZ25JdGVtcz1cIkNlbnRlclwiPlxuICAgICAgICA8SW1hZ2UgOnNyYz1cImltYWdlUGF0aFwiIGNsYXNzPVwidGVhckltYWdlXCIvPlxuICAgICAgPC9WQm94PlxuICAgIDwvUGFuZWw+XG4gICAgPFBhbmVsIGhlYWRlclRleHQ9XCJXaGF0IHdvcmtzIGFuZCB3aGF0IGRvZXNuJ3RcIj5cbiAgICAgIDxIQm94IGFsaWduQ29udGVudD1cIkNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwiU3BhY2VBcm91bmRcIj5cbiAgICAgICAgPFZCb3g+XG4gICAgICAgICAgPFRpdGxlIHRleHQ9XCJXb3JrczpcIiB0aXRsZVN0eWxlPVwiSDNcIiAvPlxuICAgICAgICAgIDxUZXh0IHRleHQ9XCLinJQgVUk1IGNvbXBvbmVudHMgaW4gVnVlXCIvPlxuICAgICAgICAgIDxUZXh0IHRleHQ9XCLinJQgdi1iaW5kIG9uIHVpNSBjb21wb25lbnRzXCIvPlxuICAgICAgICAgIDxUZXh0IHRleHQ9XCLinJQgdi1tb2RlbCBvbiB1aTUgY29tcG9uZW50c1wiLz5cbiAgICAgICAgICA8VGV4dCB0ZXh0PVwi4pyUIHYtb24gb24gdWk1IGNvbXBvbmVudHNcIi8+XG4gICAgICAgICAgPFRleHQgdGV4dD1cIuKclCBTbG90cyB0byBuZXN0IHVpNSBjb21wb25lbnRzXCIvPlxuICAgICAgICAgIDxUZXh0IHRleHQ9XCLinJQgaTE4biB0cmFuc2xhdGlvbnMgaW4gdnVlXCIvPlxuICAgICAgICAgIDxUZXh0IHRleHQ9XCLinJQgVUk1IFJvdXRpbmcgc3lzdGVtIGluIHZ1ZVwiLz5cbiAgICAgICAgICA8VGV4dCB0ZXh0PVwi4pyUIC52dWUgU2luZ2xlIGZpbGUgY29tcG9uZW50c1wiLz5cbiAgICAgICAgICA8VGV4dCB0ZXh0PVwi4pyUIC52dWUgPHNjcmlwdCBzZXR1cD4gdGFnXCIvPlxuICAgICAgICAgIDxUZXh0IHRleHQ9XCLinJQgUHVnIHRlbXBsYXRlcyBpbiAudnVlIGZpbGVzXCIvPlxuICAgICAgICAgIDxUZXh0IHRleHQ9XCLinJQgUmVuZGVyIEhUTUwgaW5zaWRlIHVpNSBhcHBcIi8+XG4gICAgICAgICAgPFRleHQgdGV4dD1cIuKclCBFU00gaW4gLnZ1ZSBmaWxlcyAoYWN0dWFsbHkgcmVxdWlyZWQpXCIvPlxuICAgICAgICAgIDxUZXh0IHRleHQ9XCLinJQgQ29udmVydCBKU09OIE1vZGVsIHRvIHZ1ZSByZWZzXCIvPlxuICAgICAgICAgIDxUZXh0IHRleHQ9XCLinJQgc3R5bGUgaW4gLnZ1ZSBmaWxlc1wiLz5cbiAgICAgICAgICA8VGV4dCB0ZXh0PVwi4pyUIFNvdXJjZW1hcHNcIi8+XG4gICAgICAgIDwvVkJveD5cbiAgICAgICAgPFZCb3g+XG4gICAgICAgICAgPFRpdGxlIHRleHQ9XCJDdXJyZW50bHkgZG9lc24ndCB3b3JrIC8gV29yayBpbiBwcm9ncmVzczpcIiB0aXRsZVN0eWxlPVwiSDNcIiAvPlxuICAgICAgICAgIDxUZXh0IHRleHQ9XCLinYwgVHlwZXNjcmlwdCBzdXBwb3J0XCIvPlxuICAgICAgICAgIDxUZXh0IHRleHQ9XCLinYwgdi1zaG93IChiaW5kIHRvIDp2aXNpYmxlIGluc3RlYWQpXCIvPlxuICAgICAgICA8L1ZCb3g+XG4gICAgICA8L0hCb3g+XG4gICAgPC9QYW5lbD5cbiAgPC9WQm94PlxuICA8IS0tIDwvU2hlbGw+IC0tPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB1aTUgZnJvbSBcInZ1ZWk1L1VJNUNvbnRyb2xcIjtcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL0NvZGVCbG9ja1wiO1xuXG5jb25zdCBQYWdlID0gdWk1KFwic2FwL20vUGFnZVwiKTtcbmNvbnN0IFBhbmVsID0gdWk1KFwic2FwL20vUGFuZWxcIik7XG5jb25zdCBUZXh0ID0gdWk1KFwic2FwL20vVGV4dFwiKTtcbmNvbnN0IFRpdGxlID0gdWk1KFwic2FwL20vVGl0bGVcIik7XG5jb25zdCBWQm94ID0gdWk1KFwic2FwL20vVkJveFwiKTtcbmNvbnN0IEhCb3ggPSB1aTUoXCJzYXAvbS9IQm94XCIpO1xuY29uc3QgU2hlbGwgPSB1aTUoXCJzYXAvbS9TaGVsbFwiKTtcbmNvbnN0IEltYWdlID0gdWk1KFwic2FwL20vSW1hZ2VcIik7XG5jb25zdCBNZXNzYWdlU3RyaXAgPSB1aTUoXCJzYXAvbS9NZXNzYWdlU3RyaXBcIik7XG5cbmNvbnN0IGltYWdlUGF0aCA9IFwiLi9hc3NldHMvdGVhci5wbmdcIjtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEzMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDIpOyAqL1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICB9XG59XG5cbi50ZWFySW1hZ2Uge1xuICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMGRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAycztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZWFySW1hZ2U6aG92ZXIge1xuICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMzYwZGVnKTtcbn1cbjwvc3R5bGU+Il19