sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/Vue", "vuei5/UI5Control", "./CodeBlock"], function (module, exports, require, __destructureImport0, __destructureImport1, __defaultImport2, __defaultImport3) {
  var _createCommentVNode = __destructureImport0.createCommentVNode;
  var _renderList = __destructureImport0.renderList;
  var _Fragment = __destructureImport0.Fragment;
  var _openBlock = __destructureImport0.openBlock;
  var _createElementBlock = __destructureImport0.createElementBlock;
  var _unref = __destructureImport0.unref;
  var _createVNode = __destructureImport0.createVNode;
  var _withCtx = __destructureImport0.withCtx;
  var _createBlock = __destructureImport0.createBlock;
  var ref = __destructureImport1.ref;
  var inject = __destructureImport1.inject;
  var onMounted = __destructureImport1.onMounted;
  var ui5 = typeof __defaultImport2 === "object" && __defaultImport2.__esModule ? __defaultImport2.default : __defaultImport2;
  var CodeBlock = typeof __defaultImport3 === "object" && __defaultImport3.__esModule ? __defaultImport3.default : __defaultImport3;
  const __sfc__ = {
    props: {
      "headerProperties": String,
      "overview": String,
      "signatureText": String,
      "signature": String,
      "usageText": String,
      "usage": String,
      "usageLang": {
        type: String,
        default: "typescript"
      }
    },

    setup(__props) {
      const props = __props;
      const ObjectPageLayout = ui5("sap/uxap/ObjectPageLayout");
      const ObjectPageHeader = ui5("sap/uxap/ObjectPageHeader");
      const ObjectPageSection = ui5("sap/uxap/ObjectPageSection");
      const ObjectPageSubSection = ui5("sap/uxap/ObjectPageSubSection");
      const VBox = ui5("sap/m/VBox");
      const HBox = ui5("sap/m/HBox");
      const Label = ui5("sap/m/Label");
      const Text = ui5("sap/m/Text");
      return (_ctx, _cache) => {
        return _openBlock(), _createBlock(_unref(ObjectPageLayout), null, {
          default: _withCtx(() => [_createCommentVNode(" <ObjectPageHeader objectTitle=\"Test\" ui5--aggregation=\"headerTitle\" /> "), _createVNode(_unref(VBox), {
            "ui5--aggregation": "headerContent"
          }, {
            default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(__props.headerProperties, p => {
              return _openBlock(), _createBlock(_unref(HBox), {
                key: p[0]
              }, {
                default: _withCtx(() => [_createVNode(_unref(Label), {
                  text: p[0] + ': ',
                  design: "Bold"
                }, null, 8
                /* PROPS */
                , ["text"]), _createVNode(_unref(Text), {
                  text: p[1]
                }, null, 8
                /* PROPS */
                , ["text"])]),
                _: 2
                /* DYNAMIC */

              }, 1024
              /* DYNAMIC_SLOTS */
              );
            }), 128
            /* KEYED_FRAGMENT */
            ))]),
            _: 1
            /* STABLE */

          }), _createVNode(_unref(ObjectPageSection), null, {
            default: _withCtx(() => [_createVNode(_unref(ObjectPageSubSection), {
              title: "Overview"
            }, {
              default: _withCtx(() => [_createVNode(_unref(Text), {
                text: __props.overview
              }, null, 8
              /* PROPS */
              , ["text"])]),
              _: 1
              /* STABLE */

            })]),
            _: 1
            /* STABLE */

          }), _createVNode(_unref(ObjectPageSection), null, {
            default: _withCtx(() => [_createVNode(_unref(ObjectPageSubSection), {
              title: "Signature"
            }, {
              default: _withCtx(() => [_createVNode(_unref(VBox), null, {
                default: _withCtx(() => [_createVNode(_unref(Text), {
                  text: __props.signatureText
                }, null, 8
                /* PROPS */
                , ["text"]), _createVNode(_unref(CodeBlock), {
                  lang: "typescript",
                  code: __props.signature
                }, null, 8
                /* PROPS */
                , ["code"])]),
                _: 1
                /* STABLE */

              })]),
              _: 1
              /* STABLE */

            })]),
            _: 1
            /* STABLE */

          }), _createVNode(_unref(ObjectPageSection), null, {
            default: _withCtx(() => [_createVNode(_unref(ObjectPageSubSection), {
              title: "Usage"
            }, {
              default: _withCtx(() => [_createVNode(_unref(VBox), null, {
                default: _withCtx(() => [_createVNode(_unref(Text), {
                  text: __props.usageText
                }, null, 8
                /* PROPS */
                , ["text"]), _createVNode(_unref(CodeBlock), {
                  lang: __props.usageLang,
                  code: __props.usage
                }, null, 8
                /* PROPS */
                , ["lang", "code"])]),
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

        });
      };
    }

  };
  __sfc__.__scopeId = "data-v-p7dar4p5glq";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9jb21tb24vQVBJT2JqZWN0LnZ1ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrREEsWUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQTVCLDJCQUE0QixDQUE1QjtBQUNBLFlBQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUE1QiwyQkFBNEIsQ0FBNUI7QUFDQSxZQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBN0IsNEJBQTZCLENBQTdCO0FBQ0EsWUFBTSxvQkFBb0IsR0FBRyxHQUFHLENBQWhDLCtCQUFnQyxDQUFoQztBQUNBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEI7QUFDQSxZQUFNLElBQUksR0FBRyxHQUFHLENBQWhCLFlBQWdCLENBQWhCO0FBQ0EsWUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFqQixhQUFpQixDQUFqQjtBQUNBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEIiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxPYmplY3RQYWdlTGF5b3V0PlxuICAgIDwhLS0gPE9iamVjdFBhZ2VIZWFkZXIgb2JqZWN0VGl0bGU9XCJUZXN0XCIgdWk1LS1hZ2dyZWdhdGlvbj1cImhlYWRlclRpdGxlXCIgLz4gLS0+XG4gICAgPFZCb3ggdWk1LS1hZ2dyZWdhdGlvbj1cImhlYWRlckNvbnRlbnRcIj5cbiAgICAgIDxIQm94IHYtZm9yPVwicCBpbiBoZWFkZXJQcm9wZXJ0aWVzXCIgOmtleT1cInBbMF1cIj5cbiAgICAgICAgPExhYmVsIDp0ZXh0PVwicFswXSArICc6Jm5ic3A7J1wiIGRlc2lnbj1cIkJvbGRcIiAvPlxuICAgICAgICA8VGV4dCA6dGV4dD1cInBbMV1cIiAvPlxuICAgICAgPC9IQm94PlxuICAgIDwvVkJveD5cblxuICAgIDxPYmplY3RQYWdlU2VjdGlvbj5cbiAgICAgIDxPYmplY3RQYWdlU3ViU2VjdGlvbiB0aXRsZT1cIk92ZXJ2aWV3XCI+XG4gICAgICAgIDxUZXh0IDp0ZXh0PVwib3ZlcnZpZXdcIiAvPlxuICAgICAgPC9PYmplY3RQYWdlU3ViU2VjdGlvbj5cbiAgICA8L09iamVjdFBhZ2VTZWN0aW9uPlxuICAgIDxPYmplY3RQYWdlU2VjdGlvbj5cbiAgICAgIDxPYmplY3RQYWdlU3ViU2VjdGlvbiB0aXRsZT1cIlNpZ25hdHVyZVwiPlxuICAgICAgICA8VkJveD5cbiAgICAgICAgICA8VGV4dCA6dGV4dD1cInNpZ25hdHVyZVRleHRcIiAvPlxuICAgICAgICAgIDxDb2RlQmxvY2sgbGFuZz1cInR5cGVzY3JpcHRcIiA6Y29kZT1cInNpZ25hdHVyZVwiIC8+XG4gICAgICAgIDwvVkJveD5cbiAgICAgIDwvT2JqZWN0UGFnZVN1YlNlY3Rpb24+XG4gICAgPC9PYmplY3RQYWdlU2VjdGlvbj5cbiAgICA8T2JqZWN0UGFnZVNlY3Rpb24+XG4gICAgICA8T2JqZWN0UGFnZVN1YlNlY3Rpb24gdGl0bGU9XCJVc2FnZVwiPlxuICAgICAgICA8VkJveD5cbiAgICAgICAgICA8VGV4dCA6dGV4dD1cInVzYWdlVGV4dFwiIC8+XG4gICAgICAgICAgPENvZGVCbG9jayA6bGFuZz1cInVzYWdlTGFuZ1wiIDpjb2RlPVwidXNhZ2VcIiAvPlxuICAgICAgICA8L1ZCb3g+XG4gICAgICA8L09iamVjdFBhZ2VTdWJTZWN0aW9uPlxuICAgIDwvT2JqZWN0UGFnZVNlY3Rpb24+XG4gIDwvT2JqZWN0UGFnZUxheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyByZWYsIGluamVjdCwgb25Nb3VudGVkIH0gZnJvbSBcInZ1ZWk1L1Z1ZVwiO1xuaW1wb3J0IHVpNSBmcm9tIFwidnVlaTUvVUk1Q29udHJvbFwiO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwiLi9Db2RlQmxvY2tcIjtcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gIFwiaGVhZGVyUHJvcGVydGllc1wiOiBTdHJpbmcsXG4gIFwib3ZlcnZpZXdcIjogU3RyaW5nLFxuICBcInNpZ25hdHVyZVRleHRcIjogU3RyaW5nLFxuICBcInNpZ25hdHVyZVwiOiBTdHJpbmcsXG4gIFwidXNhZ2VUZXh0XCI6IFN0cmluZyxcbiAgXCJ1c2FnZVwiOiBTdHJpbmcsXG5cbiAgXCJ1c2FnZUxhbmdcIjoge3R5cGU6IFN0cmluZywgZGVmYXVsdDogXCJ0eXBlc2NyaXB0XCJ9XG59KTtcblxuY29uc3QgT2JqZWN0UGFnZUxheW91dCA9IHVpNShcInNhcC91eGFwL09iamVjdFBhZ2VMYXlvdXRcIik7XG5jb25zdCBPYmplY3RQYWdlSGVhZGVyID0gdWk1KFwic2FwL3V4YXAvT2JqZWN0UGFnZUhlYWRlclwiKTtcbmNvbnN0IE9iamVjdFBhZ2VTZWN0aW9uID0gdWk1KFwic2FwL3V4YXAvT2JqZWN0UGFnZVNlY3Rpb25cIik7XG5jb25zdCBPYmplY3RQYWdlU3ViU2VjdGlvbiA9IHVpNShcInNhcC91eGFwL09iamVjdFBhZ2VTdWJTZWN0aW9uXCIpO1xuY29uc3QgVkJveCA9IHVpNShcInNhcC9tL1ZCb3hcIik7XG5jb25zdCBIQm94ID0gdWk1KFwic2FwL20vSEJveFwiKTtcbmNvbnN0IExhYmVsID0gdWk1KFwic2FwL20vTGFiZWxcIik7XG5jb25zdCBUZXh0ID0gdWk1KFwic2FwL20vVGV4dFwiKTtcbjwvc2NyaXB0PiJdfQ==