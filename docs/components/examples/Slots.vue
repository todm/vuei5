<template>
  <Panel>
    <VBox>
      <Text
        text="Load data from 'jsonplaceholder.typicode.com' and display it in a table. Demonstration of using named slots and v-for"
      />
      <Table>
        <template v-slot:columns>
          <Column v-for="(t, i) in columnTitles" :key="i">
            <Label :text="t" />
          </Column>
        </template>
        <template v-slot:items>
          <ColumnListItem v-for="(d, i) in tableData" :key="i">
            <Text :text="c" v-for="(c, j) in Object.values(d)" :key="j" />
          </ColumnListItem>
        </template>
      </Table>
    </VBox>
  </Panel>
  <Panel>
    <Text text="You can use v-slot to define aggregations. You can use v-for to loop through arrays" />
    <CodeBlock lang="html" :code="code" />
  </Panel>
</template>

<script setup>
import { onMounted, ref } from "vuei5/Vue";
import ui5 from "vuei5/UI5Control";
import CodeBlock from "../common/CodeBlock";

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
</script>