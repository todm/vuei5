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
  ["Module", "vuei5/UI5html"],
  ["Type", "Component"]
]

const overview = `The UI5html component will allow you to use regular HTML elements in your app. They will seamlessly integrate with your app and inherit the ui5 styling.`;

const signatureText = ``;
const signature = `
// Component Props
interface props {}

// Component Emits / Events
interface emits {}

// Slots
interface slots {
    default: [HTMLElements]
}`;

const usageText = `Add the component where you want your HTML to be rendered and fill it with your html elements`;
const usage = `<template>
    <UI5html>
        <h1>{{count}}</h1>
        <button @click="count++">Increment</button>
    </UI5html>
</template>
<script setup>
    import UI5html from 'vuei5/UI5html';
    import {ref} from 'vuei5/Vue';

    const count = ref(0);
<\/script>`;
</script>