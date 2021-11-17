<template>
  <APIObject
    :headerProperties="headerProperties"
    :overview="overview"
    :signature="signature"
    :usageText="usageText"
    :usage="usage"
    usageLang="html"
  />
</template>

<script setup>
import { ref, inject, onMounted } from "vuei5/Vue";
import APIObject from "../../common/APIObject";

const headerProperties = [
  ["Module", "vuei5/UI5Control"],
  ["Type", "Function"]
]

const overview = `The UI5Control function is used to wrap UI5 controls in vue components wich can be used in your vue app.`;

const signatureText = ``;
const signature = `function UI5Control(ui5Component: string | sap.ui.core.Control): Object;`;

const usageText = `Simply call the function in a vue component and pass it a ui5 control to 'convert' it to a vue component. If you pass it a string the function will use 'sap.ui.requireSync(ui5Control)' to load the control. The controls can then be used in the template of the component.`;
const usage = `<script>
  import UI5Control from 'vuei5/UI5Control';
  import Text from 'sap/m/Text';
  export default {
      components: {
          'Text': UI5Control(Text),
          'VBox': UI5Control(VBox)
      }
  }
<\/script>

If you are in a script setup tag assign the result to a constant:

<script setup>
  import UI5Control from 'vuei5/UI5Control';
  const Text =  UI5Control("sap/m/Text");
<\/script>

Just use the components in your vue template
<template>
  <VBox>
    <Text text="Hello World"/>
  </VBox>
</template>
`;
</script>