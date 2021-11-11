<template>
  <Page>
    <template v-slot:customHeader>
      <ToolHeader>
        <Image :src="logo" height="70%" />
        <Text text="Vuei5" />
        <IconTabHeader
          @select="menuSelected"
          :selectedKey="currentPage"
          mode="Inline"
        >
          <template v-slot:items>
            <IconTabFilter ui5--key="home" text="Home" />
            <IconTabFilter ui5--key="docs" text="Documentation" />
            <IconTabFilter ui5--key="examples" text="Examples" />
          </template>
        </IconTabHeader>
        <Text text="Created with vuei5" />
        <Button
          :icon="darkMode ? moon : sun"
          @press="changeTheme"
          class="themeBTN"
        />
        <Button
          :icon="github"
          @press="openLink('https://github.com/todm/vuei5')"
        />
      </ToolHeader>
    </template>
    <Router :config="routerConfig" @change="routeChange" />
  </Page>
</template>

<script setup>
import { ref, inject } from "vuei5/Vue";
import ui5 from "vuei5/UI5Control";
import Router from "vuei5/Router";
const ui5Router = inject("$ui5Router");

import { logo, github, moon, sun } from "./assets/icons";

const Shell = ui5("sap/m/Shell");
const Page = ui5("sap/m/Page");
const ToolHeader = ui5("sap/tnt/ToolHeader");
const IconTabHeader = ui5("sap/m/IconTabHeader");
const IconTabFilter = ui5("sap/m/IconTabFilter");
const Image = ui5("sap/m/Image");
const Button = ui5("sap/m/Button");
const Text = ui5("sap/m/Text");

import Home from "./pages/Home";
import Examples from "./pages/Examples";
import Docs from "./pages/Docs";

const routerConfig = {
  home: Home,
  docs: Docs,
  examples: Examples,
};

const currentPage = ref(
  ui5Router.getRouteInfoByHash(ui5Router.getHashChanger().getHash()).name
);
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
</script>

<style>
.overflowList {
  overflow-y: auto;
}

.themeBTN img {
  transform: scale(0.6);
}

:not(pre) > code {
  background-color: rgba(100, 143, 163, 0.2);
  padding: .1rem .4rem;
  border-radius: .2rem;
  font-size: .8em;
}
</style>