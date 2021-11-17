<template>
  <Panel>
    <VBox>
      <Text text="Click on the button to increment the number." />
      <Button :text="'Current value: ' + count" @press="count++"/>
    </VBox>
  </Panel>
  <Panel>
    <VBox>
      <Text text="You can interact with vuei5 components the same way as with normal components. Just use v-bing and v-on"/>
      <CodeBlock lang="html" :code="code"/>
    </VBox>
  </Panel>
</template>

<script setup>
import { ref } from "vuei5/Vue";
import ui5 from "vuei5/UI5Control";
import CodeBlock from "../common/CodeBlock";

const Panel = ui5("sap/m/Panel");
const VBox = ui5("sap/m/VBox");
const Button = ui5("sap/m/Button");
const Text = ui5("sap/m/Text");

const count = ref(0);

const code = `<template>
  <Text :text="count"/>
  <Button @press="increment"/>
</template>
<script setup>
  import {ref} from 'vuei5/Vue';
  import ui5Control from 'vuei5/UI5Control';
  const Text = ui5Control('sap/m/Text');
  const Button = ui5Control('sap/m/Button');

  const count = ref(0);
  function increment() {
    count.value++;
  }
<\/script>`;
</script>