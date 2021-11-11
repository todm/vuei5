<template>
  <m:Panel>
    <m:Avatar />
    <m:Text text="All components on this page were registered globally" />
  </m:Panel>
  <Panel>
    <VBox>
      <Text
        text="You can define global components in Component.js or in the Launcher options"
      />
      <CodeBlock lang="js" :code="code" />
      <CodeBlock lang="js" :code="code2" />
    </VBox>
  </Panel>
</template>

<script setup>
import ui5 from "vuei5/UI5Control";
const Panel = ui5("sap/m/Panel");
const VBox = ui5("sap/m/VBox");
const Text = ui5("sap/m/Text");

import CodeBlock from "../common/CodeBlock";
const code = `return VUEIComponent.extend("test.Component", {
    vuei5: {
        vueRoot: MainComponent,
        components: {
            // 'Avatar': 'sap/m/Avatar',
            // 'Panel': 'sap/m/Panel',
            // 'Text': 'sap/m/Text',
            ...UI5Library("sap/m/library", 'm:', [
                'Avatar',
                'Panel',
                'Text',
            ])
        }
    },`;

const code2 = `Launcher(ui5Root, vueRoot, {
    components: {
        'Button': 'sap/m/Button',
        // ...
    }
})`;
</script>