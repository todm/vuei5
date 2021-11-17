sap.ui.define(["module", "exports", "require", "vuei5/Vue", "vuei5/Vue", "vuei5/UI5Control", "../common/CodeBlock"], function (module, exports, require, __destructureImport0, __destructureImport1, __defaultImport2, __defaultImport3) {
  var _unref = __destructureImport0.unref;
  var _createVNode = __destructureImport0.createVNode;
  var _renderList = __destructureImport0.renderList;
  var _Fragment = __destructureImport0.Fragment;
  var _openBlock = __destructureImport0.openBlock;
  var _createElementBlock = __destructureImport0.createElementBlock;
  var _withCtx = __destructureImport0.withCtx;
  var _createBlock = __destructureImport0.createBlock;
  var onMounted = __destructureImport1.onMounted;
  var ref = __destructureImport1.ref;
  var ui5 = typeof __defaultImport2 === "object" && __defaultImport2.__esModule ? __defaultImport2.default : __defaultImport2;
  var CodeBlock = typeof __defaultImport3 === "object" && __defaultImport3.__esModule ? __defaultImport3.default : __defaultImport3;
  const __sfc__ = {
    setup(__props) {
      const Panel = ui5("sap/m/Panel");
      const VBox = ui5("sap/m/VBox");
      const Text = ui5("sap/m/Text");
      const Table = ui5("sap/m/Table");
      const Column = ui5("sap/m/Column");
      const Label = ui5("sap/m/Label");
      const ColumnListItem = ui5("sap/m/ColumnListItem");
      const columnTitles = ref([]);
      const tableData = ref([]);
      onMounted(async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
        const data = await res.json();
        columnTitles.value = Object.keys(data[0]);
        tableData.value = data.slice(0, 5);
      });
      const code = `<Table>
  <template v-slot:columns><!-- v-slot to define aggregation -->
    <Column v-for="row in tableData" :key="row.id"><!-- v-for for loops -->
      <Label :text="row.title" />
    </Column>
  </template>
</Table>`;
      return (_ctx, _cache) => {
        return _openBlock(), _createElementBlock(_Fragment, null, [_createVNode(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_unref(VBox), null, {
            default: _withCtx(() => [_createVNode(_unref(Text), {
              text: "Load data from 'jsonplaceholder.typicode.com' and display it in a table. Demonstration of using named slots and v-for"
            }), _createVNode(_unref(Table), null, {
              columns: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(columnTitles.value, (t, i) => {
                return _openBlock(), _createBlock(_unref(Column), {
                  key: i
                }, {
                  default: _withCtx(() => [_createVNode(_unref(Label), {
                    text: t
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
              items: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(tableData.value, (d, i) => {
                return _openBlock(), _createBlock(_unref(ColumnListItem), {
                  key: i
                }, {
                  default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(Object.values(d), (c, j) => {
                    return _openBlock(), _createBlock(_unref(Text), {
                      text: c,
                      key: j
                    }, null, 8
                    /* PROPS */
                    , ["text"]);
                  }), 128
                  /* KEYED_FRAGMENT */
                  ))]),
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

            })]),
            _: 1
            /* STABLE */

          })]),
          _: 1
          /* STABLE */

        }), _createVNode(_unref(Panel), null, {
          default: _withCtx(() => [_createVNode(_unref(Text), {
            text: "You can use v-slot to define aggregations. You can use v-for to loop through arrays"
          }), _createVNode(_unref(CodeBlock), {
            lang: "html",
            code: code
          })]),
          _: 1
          /* STABLE */

        })], 64
        /* STABLE_FRAGMENT */
        );
      };
    }

  };
  __sfc__.__scopeId = "data-v-r9qc9cxna2m";
  __sfc__.__file = "";
  module.exports = __sfc__;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvdnVlaTUvdGVzdC93ZWJhcHAvY29tcG9uZW50cy9leGFtcGxlcy9TbG90cy52dWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUErQkEsWUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFqQixhQUFpQixDQUFqQjtBQUNBLFlBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBaEIsWUFBZ0IsQ0FBaEI7QUFDQSxZQUFNLElBQUksR0FBRyxHQUFHLENBQWhCLFlBQWdCLENBQWhCO0FBQ0EsWUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFqQixhQUFpQixDQUFqQjtBQUNBLFlBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBbEIsY0FBa0IsQ0FBbEI7QUFDQSxZQUFNLEtBQUssR0FBRyxHQUFHLENBQWpCLGFBQWlCLENBQWpCO0FBQ0EsWUFBTSxjQUFjLEdBQUcsR0FBRyxDQUExQixzQkFBMEIsQ0FBMUI7QUFFQSxZQUFNLFlBQVksR0FBRyxHQUFHLENBQXhCLEVBQXdCLENBQXhCO0FBQ0EsWUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFyQixFQUFxQixDQUFyQjtBQUNBLE1BQUEsU0FBUyxDQUFDLFlBQVk7QUFDcEIsY0FBTSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQXZCLDZDQUF1QixDQUF2QjtBQUNBLGNBQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUF0QixJQUFtQixFQUFuQjtBQUNBLFFBQUEsWUFBWSxDQUFaLEtBQUEsR0FBcUIsTUFBTSxDQUFOLElBQUEsQ0FBWSxJQUFJLENBQXJDLENBQXFDLENBQWhCLENBQXJCO0FBQ0EsUUFBQSxTQUFTLENBQVQsS0FBQSxHQUFrQixJQUFJLENBQUosS0FBQSxDQUFBLENBQUEsRUFBbEIsQ0FBa0IsQ0FBbEI7QUFKRixPQUFTLENBQVQ7QUFPQSxZQUFNLElBQUksR0FBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQSxTQUFBIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8UGFuZWw+XG4gICAgPFZCb3g+XG4gICAgICA8VGV4dFxuICAgICAgICB0ZXh0PVwiTG9hZCBkYXRhIGZyb20gJ2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20nIGFuZCBkaXNwbGF5IGl0IGluIGEgdGFibGUuIERlbW9uc3RyYXRpb24gb2YgdXNpbmcgbmFtZWQgc2xvdHMgYW5kIHYtZm9yXCJcbiAgICAgIC8+XG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y29sdW1ucz5cbiAgICAgICAgICA8Q29sdW1uIHYtZm9yPVwiKHQsIGkpIGluIGNvbHVtblRpdGxlc1wiIDprZXk9XCJpXCI+XG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ0XCIgLz5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtcz5cbiAgICAgICAgICA8Q29sdW1uTGlzdEl0ZW0gdi1mb3I9XCIoZCwgaSkgaW4gdGFibGVEYXRhXCIgOmtleT1cImlcIj5cbiAgICAgICAgICAgIDxUZXh0IDp0ZXh0PVwiY1wiIHYtZm9yPVwiKGMsIGopIGluIE9iamVjdC52YWx1ZXMoZClcIiA6a2V5PVwialwiIC8+XG4gICAgICAgICAgPC9Db2x1bW5MaXN0SXRlbT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvVGFibGU+XG4gICAgPC9WQm94PlxuICA8L1BhbmVsPlxuICA8UGFuZWw+XG4gICAgPFRleHQgdGV4dD1cIllvdSBjYW4gdXNlIHYtc2xvdCB0byBkZWZpbmUgYWdncmVnYXRpb25zLiBZb3UgY2FuIHVzZSB2LWZvciB0byBsb29wIHRocm91Z2ggYXJyYXlzXCIgLz5cbiAgICA8Q29kZUJsb2NrIGxhbmc9XCJodG1sXCIgOmNvZGU9XCJjb2RlXCIgLz5cbiAgPC9QYW5lbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyBvbk1vdW50ZWQsIHJlZiB9IGZyb20gXCJ2dWVpNS9WdWVcIjtcbmltcG9ydCB1aTUgZnJvbSBcInZ1ZWk1L1VJNUNvbnRyb2xcIjtcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIi4uL2NvbW1vbi9Db2RlQmxvY2tcIjtcblxuY29uc3QgUGFuZWwgPSB1aTUoXCJzYXAvbS9QYW5lbFwiKTtcbmNvbnN0IFZCb3ggPSB1aTUoXCJzYXAvbS9WQm94XCIpO1xuY29uc3QgVGV4dCA9IHVpNShcInNhcC9tL1RleHRcIik7XG5jb25zdCBUYWJsZSA9IHVpNShcInNhcC9tL1RhYmxlXCIpO1xuY29uc3QgQ29sdW1uID0gdWk1KFwic2FwL20vQ29sdW1uXCIpO1xuY29uc3QgTGFiZWwgPSB1aTUoXCJzYXAvbS9MYWJlbFwiKTtcbmNvbnN0IENvbHVtbkxpc3RJdGVtID0gdWk1KFwic2FwL20vQ29sdW1uTGlzdEl0ZW1cIik7XG5cbmNvbnN0IGNvbHVtblRpdGxlcyA9IHJlZihbXSk7XG5jb25zdCB0YWJsZURhdGEgPSByZWYoW10pO1xub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29sdW1uVGl0bGVzLnZhbHVlID0gT2JqZWN0LmtleXMoZGF0YVswXSk7XG4gIHRhYmxlRGF0YS52YWx1ZSA9IGRhdGEuc2xpY2UoMCwgNSk7XG59KTtcblxuY29uc3QgY29kZSA9IGA8VGFibGU+XG4gIDx0ZW1wbGF0ZSB2LXNsb3Q6Y29sdW1ucz48IS0tIHYtc2xvdCB0byBkZWZpbmUgYWdncmVnYXRpb24gLS0+XG4gICAgPENvbHVtbiB2LWZvcj1cInJvdyBpbiB0YWJsZURhdGFcIiA6a2V5PVwicm93LmlkXCI+PCEtLSB2LWZvciBmb3IgbG9vcHMgLS0+XG4gICAgICA8TGFiZWwgOnRleHQ9XCJyb3cudGl0bGVcIiAvPlxuICAgIDwvQ29sdW1uPlxuICA8L3RlbXBsYXRlPlxuPC9UYWJsZT5gO1xuPC9zY3JpcHQ+Il19