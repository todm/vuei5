<template>
  <APIObject
    :headerProperties="headerProperties"
    :overview="overview"
    :signature="signature"
    :usageText="usageText"
    :usage="usage"
  />
</template>

<script setup>
import { ref, inject, onMounted } from "vuei5/Vue";
import APIObject from "../../common/APIObject";

const headerProperties = [
  ["Module", "vuei5/Utils"],
  ["Type", "Module"]
]

const overview = `The Utils module provides useful functions (currently only one)`;

const signatureText = ``;
const signature = `// These functions are currently available in utils:

modelToRefs(model: sap.ui.model.Model, prefix?: string = ""): [vue.ref];
`;

const usageText = `Simply import the module and use the function`;
const usage = `import {modelToRefs} from 'vuei5/Utils';
const refs = modelToRefs(myJSONModel);

return {...refs};
`;
</script>