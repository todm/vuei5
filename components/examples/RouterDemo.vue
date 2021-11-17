<template>
  <Panel>
    <VBox>
      <Text text="You can already see the router in action by switching between the examples" />
      <Text text="Click on the button to set the parameter to the route" />

      <Input ref="inp" value="My Parameter Input"/>
      <Button text="Navigate with parameter" @press="navigate"/>
      <Text :text="'Props passed to the component: ' + strProps" />

    </VBox>
  </Panel>
</template>

<script setup>
import { ref, inject, computed } from "vuei5/Vue";
import ui5 from "vuei5/UI5Control";

const props = defineProps(['arguments']);
const strProps = computed(() => JSON.stringify(props, null));

const ui5Router = inject("$ui5Router");

const Panel = ui5("sap/m/Panel");
const VBox = ui5("sap/m/VBox");
const Button = ui5("sap/m/Button");
const Text = ui5("sap/m/Text");
const Input = ui5("sap/m/Input");

const inp = ref(null);

function navigate() {
  const p = inp.value.ui5Control.getValue();
  ui5Router.navTo('routerDemo', {myParameter: p});
}
</script>