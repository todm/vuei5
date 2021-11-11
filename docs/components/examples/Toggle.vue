<template>
  <Panel>
    <VBox>
      <Text
        text="Click on the buttons to toggle the corresponding texts. Demonstrates v-if and binding to :visible"
      />

      <HBox alignItems="Center">
        <Button
          text="Toggle Text with v-if"
          @press="vifVisible = !vifVisible"
        />
        <Text text="V-If" v-if="vifVisible" />
        <Text text="V-Else" v-else />
      </HBox>
      <HBox alignItems="Center">
        <Button
          text="Toggle Text with visible property"
          @press="visible = !visible"
        />
        <Text text="Hello World" :visible="visible" />
      </HBox>
    </VBox>
  </Panel>
  <Panel>
    <VBox>
      <Text
        text="You can use v-if to toggle an element. Instead of using v-show use :visible when using ui5 controls"
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
  <Text text="Main Text" v-if="isVisible" />
  <Text text="Alternative Text" v-else />

  <Text text="Toggle Text with :visible" :visible="isVisible" />
</template>`;

const vifVisible = ref(true);
const visible = ref(true);
</script>