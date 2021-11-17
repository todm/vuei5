<template>
  <Split ref="splitContainer">
    <template v-slot:detailPages>
      <Page v-for="p in pages" :key="p.name" :title="p.label" :id="p.name" :showNavButton="isMobile" @navButtonPress="showMaster">
        <component :is="p.component"/>
      </Page>
    </template>
    <template v-slot:masterPages>
      <List class="overflowList" id="splitMasterExamples">
        <ListItem
          v-for="p in pages"
          :key="p.name"
          :title="p.label"
          type="Navigation"
          @press="nav(p.name)"
        />
      </List>
    </template>
  </Split>
</template>

<script setup>
import { ref, inject, onMounted } from "vuei5/Vue";
import ui5 from "vuei5/UI5Control";
import Device from "sap/ui/Device";

const Page = ui5("sap/m/Page");
const Split = ui5("sap/m/SplitContainer");
const List = ui5("sap/m/List");
const ListItem = ui5("sap/m/StandardListItem");

import Increment from "../components/examples/Increment";
import JSComponent from "../components/examples/JSComponent";
import Model from "../components/examples/Model";
import Slots from "../components/examples/Slots";
import I18n from "../components/examples/I18n";
import RouterDemo from "../components/examples/RouterDemo";
import HTML from "../components/examples/HTML";
import Toggle from "../components/examples/Toggle";
import Styles from "../components/examples/Style";
import GlobalComponents from "../components/examples/GlobalComponents";
import Preprocessors from "../components/examples/Preprocessors";
import Test from "../components/examples/Test";

const pages = [
  { name: "increment", label: "Increment", component: Increment },
  { name: "jscomponent", label: "JS Component", component: JSComponent },
  { name: "models", label: "Models", component: Model },
  { name: "slots", label: "Slots and v-for", component: Slots },
  { name: "i18n", label: "I18n", component: I18n },
  { name: "router", label: "Router", component: RouterDemo },
  { name: "html", label: "Seamless HTML", component: HTML },
  { name: "toggle", label: "Toggle Controls", component: Toggle },
  { name: "style", label: "Style", component: Styles },
  { name: "globalcomponents", label: "Global Components", component: GlobalComponents },
  { name: "preprocessors", label: "Preprocessors", component: Preprocessors },
  { name: "test", label: "Test", component: Test },
];

const props = defineProps(["arguments"]);
const ui5Router = inject("$ui5Router");
const splitContainer = ref();

const isMobile = Device.browser.mobile;

onMounted(() => {
  nav(props.arguments.example);
});

function nav(to) {
  const sc = splitContainer.value.ui5Control;
  sc.toDetail(to);
  ui5Router.navTo("examples", { example: to });
}

function showMaster() {
  splitContainer.value.ui5Control.toMaster("splitMasterExamples");
  // splitContainer.value.ui5Control.showMaster();
}
</script>