<template lang="pug">
Panel
    VBox
        Text(text="This component uses Pug as a template preprocessor")
        VBox(class="myContainer")
            Text(text="It also uses scss as a style preprocessor")
            Text(text="Wich makes stuff like nesting and variables possible")
Panel
    CodeBlock(lang="html", :code="code")
</template>

<script setup>
import ui5 from "vuei5/UI5Control";
const Panel = ui5("sap/m/Panel");
const VBox = ui5("sap/m/VBox");
const Text = ui5("sap/m/Text");

import CodeBlock from "../common/CodeBlock";
const code = `<template lang="pug">
Panel
    VBox
        Text(text="This component uses Pug as a template preprocessor")
</template>
<style lang=scss>
$textColor: red;
.myContainer {
    div {
        color: $textColor;
    }
}
</style>`;
</script>

<style lang="scss" scoped>

$textColor: red;
.myContainer {
    border: 2px solid blue;
    padding: 1rem;
    .sapMText {
        color: $textColor;
    }
}
</style>