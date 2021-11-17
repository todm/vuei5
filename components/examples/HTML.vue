<template>
  <Panel>
    <Text
      class="Hello"
      text="You can seamlessly integrate HTML in your vue components by using the UI5Html control. The below example is written in html. The global ui5 styling is applied"
      :debug="false"
    />
    <UI5Html>
      <h1 class="test">Counter in html: {{ count }}</h1>
      <button class="test" @click="increment">Increment</button>
      <div class="test"></div>
      <pre></pre>
      <h1>Ok</h1>
    </UI5Html>
  </Panel>
  <Panel>
    <VBox>
      <Text
        text="Simply import vuei5/UI5html and place your html as a child of that component"
      />
      <CodeBlock lang="html" :code="code" />
    </VBox>
  </Panel>
</template>

<script setup>
import { ref } from "vuei5/Vue";
import ui5 from "vuei5/UI5Control";
import UI5Html from "vuei5/UI5html";
const Panel = ui5("sap/m/Panel");
const Text = ui5("sap/m/Text");
import CodeBlock from "../common/CodeBlock";

const code = `<template>
    <UI5html>
        <h1>Seamless HTML</h1>
    </UI5html>
</template>`

const count = ref(0);

function increment() {
  count.value++;
}
</script>

<style scoped>

</style>