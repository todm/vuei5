<template>
  <Panel>
    <VBox>
      <Text text="This text is styled with global style" class="myClass"/>
      <Button text="Scoped"/>
      <Text text="^ This button is styled with a scope. See the git button in the top right corner. It is not affected since the style is scoped to this component."/>
    </VBox>
  </Panel>
  <Panel>
    <VBox>
      <Text
        text="Style tags in sfc files will be added via Javascript into your site. You can define a css file that will be filled instead during build."
      />
      <CodeBlock lang="html" :code="code" />
    </VBox>
  </Panel>
</template>
<script setup>
import { ref } from "vuei5/Vue";
import ui5 from "vuei5/UI5Control";
import CodeBlock from "../common/CodeBlock";

const Panel = ui5("sap/m/Panel");
const VBox = ui5("sap/m/VBox");
const HBox = ui5("sap/m/HBox");
const Button = ui5("sap/m/Button");
const Text = ui5("sap/m/Text");

const code = `<template>
    <Text text="This text is styled with global style" class="myClass"/>
</template>
<style>
    .myClass {
        color: red;
    }
</style>
<style scoped>
    /* Use the classes of the controls to target them.*/
    .sapMBtn {
      border-radius: 100%;
      overflow: hidden;
      box-shadow: 0 0 1rem lime;
      margin: 2rem;
    }
</style>
`;

</script>

<style>
    .myClass {
        color: red;
    }

    
</style>

<style scoped>
    .sapMBtn {
      border-radius: 100%;
      overflow: hidden;
      box-shadow: 0 0 1rem lime;
      margin: 2rem;
    }
</style>