<template>
  <APIObject
    :headerProperties="headerProperties"
    :overview="overview"
    :signature="signature"
    :usageText="usageText"
    :usage="usage"
    usageLang="text"
  />
</template>

<script setup>
import { ref, inject, onMounted } from "vuei5/Vue";
import APIObject from "../../common/APIObject";

const headerProperties = [
  ["Module", "scripts/transformVue.js"],
  ["Type", "node script"]
]

const overview = `The transformVue script will transform the vuejs version from node_modules to a ui5 compatible module and write it to the vui5 resources. By default a prod version of vue will be downloaded. If you want to use the development version of vue add --dev to the call.`;

const signatureText = ``;
const signature = `// $ node scripts/transformVue.js [--dev]
transformVue(isProd?: boolean = true, writeFile?:boolean = true, enableLogger?:boolean = false);`;

const usageText = ``;
const usage = `node scripts/transformVue.js
# or
node scripts/transformVue.js --dev`;
</script>