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
  ["Module", "vuei5/UI5Library"],
  ["Type", "Function"],
];

const overview = `The UI5Library function is used to wrap the UI5 controls of a whole ui5 control library in vue components wich can be used in your vue app. This function can be used if many controls of a library need to be imported and you don't want to import them all by hand. Using this function could lead to performance problems since some libraries contain a lot of controls.`;

const signatureText = ``;
const signature = `function UI5Library(library: string | sap.library, prefix?: string = '', selective?: string[]): Object;`;

const usageText = `Simply call the function in a vue component and pass it a ui5 library to 'convert' it to a vue component. If you pass it a string the function will use 'sap.ui.requireSync(ui5Control)' to load the library. The controls can then be used in the template of the component. You can define a prefix to avoid collisions. You can also define an array containing the controls you want to use wich will make the function run much quicker since not all controls need to be wrapped.`;
const usage = `<script>
  import UI5Library from 'vuei5/UI5Library';
  import sapM from 'sap/m/library';
  export default {
      components: {
          ...UI5Library(sapM),
          ...UI5Library("sap/uxap/library", 'uxap:', ['ObjectPageLayout', 'ObjectPageHeader', /* ... */])
      }
  }
<\/script>
<template>
  <!-- All components from sap/m are available -->
  <VBox>
    <Text text="Hello World" />
  </VBox>

  <!-- All specified components from sap/uxap are available with a prefix -->
  <uxap:ObjectPageLayout>
    <!-- ... -->
  </uxap:ObjectPageLayout>
</template>

If you are in a <script setup> tag assign the results to a constant. Instead of defining a prefix rename the constant instead:

<script setup>
  import UI5Control from 'vuei5/UI5Control';
  const {Button, VBox, HBox: MyHBox} =  UI5Control("sapM");
<\/script>
<template>
  <VBox>
    <Text text="Hello World" />

    <MyHBox><!-- This control was renamed -->
    </MyHBox>
  </VBox>
</template>
`;
</script>