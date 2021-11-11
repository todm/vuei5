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
  ["Module", "scripts/updateVue.js"],
  ["Type", "node script"]
]

const overview = `The updateVue script will download and transform the latest version of vue@next from unpkg.com. By default a production version of vue will be downloaded. If you want to use a development version choose another download url (remove '.prod')`;

const signatureText = ``;
const signature = `// $ node scripts/updateVue.js [<downloadURL>]
updateVue(url: string = "https://unpkg.com/vue@next/dist/vue.esm-browser.prod.js");`;

const usageText = `If you want to use .vue sfc files include task and middleware in ui5.yaml`;
const usage = `node scripts/updateVue.js

# or with other download url

node scripts/updateVue.js https://unpkg.com/vue@next/dist/vue.esm-browser.js`;
</script>