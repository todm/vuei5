<template>
  <pre
    :class="{ ['language-' + lang]: true }"
  ><code  v-html="content"></code></pre>
</template>

<script setup>
const props = defineProps(["code", "lang"]);

const content = window.Prism
  ? Prism.highlight(props.code, Prism.languages[props.lang], props.lang)
  : props.code;
</script>