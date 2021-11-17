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
  ["Module", "vuei5/Router"],
  ["Type", "Component"]
]

const overview = `The Router component will let you render components dependent on the current ui5 route. This component will use the router integrated in ui5. Define your routes in your manifest file.`;

const signatureText = ``;
const signature = `
// Component Props
interface props {
    config: {
        [key: string]: Object; // Vue component
    };
}

// Component Emits / Events
interface emits {
    @change: (name: string, parameters: Object) => void;    
}`;

const usageText = `Add the component where you want your Routes to render and supply it with a configuration.`;
const usage = `<template>
    <Router :config="routerConfig" @change="routerChange" />
</template>
<script setup>
    import Router from 'vuei5/Router';
    import HomeComponent from './components/Home';
    import AboutComponent from './components/About';

    const routerConfig = {
        // the key must match the name of your route
        'home': HomeComponent,
        'about': AboutComponent
    }

    function routerChange(name, parameters) {
        console.log(name, parameters);
    }
<\/script>

The Router will pass the parameters as props to the rendered components. They will be put in the arguments prop.
<script>
    export default {
        props: ['arguments'],
        // ...
    }
<\script>`;
</script>