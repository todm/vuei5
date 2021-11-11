<template>
  <UI5html>
    <!-- <div v-html="content" style="background-color: #ededed; padding: 1rem; white-space: pre; width: min-content; margin: 1rem; font-family: monospace"/> -->
    <pre :class="{['language-'+lang]: true}"><code  v-html="content"></code></pre>
  </UI5html>
</template>

<script setup>
import UI5html from "vuei5/UI5html";
const props = defineProps(['code', 'lang']);

const content = window.Prism ? Prism.highlight(props.code, Prism.languages[props.lang], props.lang) : props.code;
</script>