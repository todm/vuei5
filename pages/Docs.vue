<template>
  <Split ref="splitContainer">
    <template v-slot:detailPages>
      <Page v-for="p in pages" :key="p.name" :title="p.label" :id="p.name" titleAlignment="Center" :showNavButton="isMobile" @navButtonPress="showMaster">
        <component :is="p.component"/>
      </Page>
    </template>
    <template v-slot:masterPages>
      <List class="overflowList" id="splitMaster">
        <component
          v-for="p in pages"
          :key="p.name"
          :is="p.c"
          :title="p.label"
          :type="p.name ? 'Navigation' : null"
          @press="nav(p.name)"
          :info="p.type"
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
const ListHead = ui5("sap/m/GroupHeaderListItem");
const Title = ui5("sap/m/Title");

import DocsStart from "../components/docs/DocsStart"; 
import Launcher from "../components/docs/library/Launcher"; 
import VUEIComponent from "../components/docs/library/VUEIComponent"; 
import UI5Control from "../components/docs/library/UI5Control"; 
import UI5Library from "../components/docs/library/UI5Library"; 
import Router from "../components/docs/library/Router"; 
import UI5HTML from "../components/docs/library/UI5HTML"; 
import Utils from "../components/docs/library/Utils";
import SFCTask from '../components/docs/ui5Task/SFCTask';
import SFCMiddleware from '../components/docs/ui5Task/SFCMiddleware';
import TransformVue from '../components/docs/scripts/TransformVue';
import Install from '../components/docs/gettingStarted/Install';
import Components from '../components/docs/gettingStarted/Components';
import Routing from '../components/docs/gettingStarted/Routing';

const props = defineProps(["arguments"]);
const ui5Router = inject("$ui5Router");
const splitContainer = ref();

const pages = [
  {
    c: ListItem,
    type: "",
    name: "start",
    label: "Documentation",
    component: DocsStart,
  },
  { c: ListHead, label: "Getting Started" },
  {
    c: ListItem,
    type: "",
    name: "install",
    label: "Installing Vuei5",
    component: Install,
  },
  {
    c: ListItem,
    type: "",
    name: "start_components",
    label: "Writing components",
    component: Components,
  },
  {
    c: ListItem,
    type: "",
    name: "start_routing",
    label: "Routing and i18n",
    component: Routing,
  },
  { c: ListHead, label: "Library" },
  // { c: ListItem, type: "", name: "lib", label: "Library", component: Lib },
  {
    c: ListItem,
    type: "Class",
    name: "vueicomponent",
    label: "VUEIComponent",
    component: VUEIComponent,
  },
  {
    c: ListItem,
    type: "Function",
    name: "launcher",
    label: "Launcher",
    component: Launcher,
  },
  {
    c: ListItem,
    type: "Function",
    name: "ui5Control",
    label: "UI5Control",
    component: UI5Control,
  },
  {
    c: ListItem,
    type: "Function",
    name: "ui5Lib",
    label: "UI5Library",
    component: UI5Library,
  },
  {
    c: ListItem,
    type: "Component",
    name: "router",
    label: "Router",
    component: Router,
  },
  
  {
    c: ListItem,
    type: "Component",
    name: "ui5html",
    label: "UI5html",
    component: UI5HTML,
  },
  
  {
    c: ListItem,
    type: "Module",
    name: "utils",
    label: "Utils",
    component: Utils,
  },
  

  { c: ListHead, label: "Task and Middleware" },
  {
    c: ListItem,
    type: "Task",
    name: "sfctask",
    label: "vuei5-task-sfc",
    component: SFCTask,
  },
  {
    c: ListItem,
    type: "Middleware",
    name: "sfcmiddleware",
    label: "vuei5-middleware-sfc",
    component: SFCMiddleware,
  },

  { c: ListHead, label: "Scripts" },
  {
    c: ListItem,
    type: "Script",
    name: "transformVue",
    label: "transformVue",
    component: TransformVue,
  },
];

const isMobile = Device.browser.mobile;

onMounted(() => {
  nav(props.arguments.module);
  
});

function nav(to) {
  const sc = splitContainer.value.ui5Control;
  sc.toDetail(to);
  ui5Router.navTo("docs", { module: to });
}

function showMaster() {
  splitContainer.value.ui5Control.toMaster("splitMaster");
  // splitContainer.value.ui5Control.showMaster();
}
</script>