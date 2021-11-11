<template>
  <!-- <Shell> -->
  <VBox class="container">
    <Panel>
      <MessageStrip text="First load of pages might be slow..." type="Information" :showIcon="true"/>
      <VBox alignItems="Center" class="sapUiMediumMarginTop">
        <Title titleStyle="H1" text="Vuei5" />
        <Title titleStyle="H3" text="Vuejs for native ui5 apps" />
      </VBox>
      <VBox class="sapUiMediumMarginTop">
        <Text
          text="Vuei5 allows you to build UI5 apps using vuejs. The resulting apps can be used both in standalone mode and in launchpad. UI5 Controls will be wrapped as vue components that can be used with the usual vuejs features. The components will then be added to the regular ui5 component system. It is also possible to let only a part of the app be controlled by vuei5. This project does not use webcomponents. Just the regular UI5 controls."
        />
      </VBox>
    </Panel>
    <Panel>
      <VBox alignItems="Center">
        <Image :src="imagePath" class="tearImage"/>
      </VBox>
    </Panel>
    <Panel headerText="What works and what doesn't">
      <HBox alignContent="Center" justifyContent="SpaceAround">
        <VBox>
          <Title text="Works:" titleStyle="H3" />
          <Text text="✔ UI5 components in Vue"/>
          <Text text="✔ v-bind on ui5 components"/>
          <Text text="✔ v-model on ui5 components"/>
          <Text text="✔ v-on on ui5 components"/>
          <Text text="✔ Slots to nest ui5 components"/>
          <Text text="✔ i18n translations in vue"/>
          <Text text="✔ UI5 Routing system in vue"/>
          <Text text="✔ .vue Single file components"/>
          <Text text="✔ .vue <script setup> tag"/>
          <Text text="✔ Pug templates in .vue files"/>
          <Text text="✔ Render HTML inside ui5 app"/>
          <Text text="✔ ESM in .vue files (actually required)"/>
          <Text text="✔ Convert JSON Model to vue refs"/>
          <Text text="✔ style in .vue files"/>
          <Text text="✔ Sourcemaps"/>
        </VBox>
        <VBox>
          <Title text="Currently doesn't work / Work in progress:" titleStyle="H3" />
          <Text text="❌ Typescript support"/>
          <Text text="❌ v-show (bind to :visible instead)"/>
        </VBox>
      </HBox>
    </Panel>
  </VBox>
  <!-- </Shell> -->
</template>

<script setup>
import ui5 from "vuei5/UI5Control";
import CodeBlock from "../components/common/CodeBlock";

const Page = ui5("sap/m/Page");
const Panel = ui5("sap/m/Panel");
const Text = ui5("sap/m/Text");
const Title = ui5("sap/m/Title");
const VBox = ui5("sap/m/VBox");
const HBox = ui5("sap/m/HBox");
const Shell = ui5("sap/m/Shell");
const Image = ui5("sap/m/Image");
const MessageStrip = ui5("sap/m/MessageStrip");

const imagePath = "/assets/tear.png";
</script>

<style scoped>
@media only screen and (min-width: 1300px) {
  .container {
    width: 1300px;
    margin: auto;
    /* background-color: rgba(255, 255, 255, .02); */
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  }
}

.tearImage {
  filter: hue-rotate(0deg);
  transition: all 2s;
  width: 100%;
}

.tearImage:hover {
  filter: hue-rotate(360deg);
}
</style>