<template>
  <Panel>
    <VBox>
      <Text text="Change the input to change the Text, button to reset." />
      <Text :text="modelText"/>
      <Input v-model="modelText"/>
      <Input v-model:value="modelText"/>
      <Button text="Reset" @press="resetTitle"/>
    </VBox>
  </Panel>
  <Panel>
    <Text text="You can use v-model for two way binding"/>
    <CodeBlock lang="html" :code="code"/>
  </Panel>
</template>

<script setup>
import { ref } from "vuei5/Vue";
import ui5 from "vuei5/UI5Control";
import CodeBlock from "../common/CodeBlock";

const Panel = ui5("sap/m/Panel");
const VBox = ui5("sap/m/VBox");
const Input = ui5("sap/m/Input");
const Button = ui5("sap/m/Button");
const Text = ui5("sap/m/Text");

const initTitle = "Model text";
const modelText = ref(initTitle);
function resetTitle(){
    modelText.value = initTitle;
}

const code = `<Input v-model="modelText" />`
</script>