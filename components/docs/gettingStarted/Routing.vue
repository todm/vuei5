<template>
  <m:Panel>
    <ui5html class="myTest">
      <h1>Routing and i18n</h1>

      <p>
        Routing and translations are two functions directly imported from ui5.
        This means that they can be configured the usual way (in <code>manifest.json</code>
        etc.). If you use VUEIComponent both routing and translation will be
        setup automatically. If you use the Launcher function manually you have
        to pass it the nessessary references to the router and the translation
        function.
      </p>
      <h2>Translations</h2>
      <p>
        Translations are available in each component via the <code>$i18n</code> function
        (<code>this.$i18n</code>). You can also use inject to get the function into your
        script. Unless configured diffrently this function will take the text id
        and arguments and returns the translated text. If you want to change
        that behaviour set the <code>i18nFunction</code> property in the vuei5 config to the
        function you want to use to translate.
      </p>

      <CodeBlock :code="translate" lang="html" />

      <h2>Routing</h2>
      <p>
        If a router is set up in a project you can specify an outlet with the
        Router component. Supply it with a configuration to specify the
        components.
      </p>

      <CodeBlock :code="manifest" lang="yaml" />
      <CodeBlock :code="routerComponent" lang="html" />
      <p>
        The specified components will then be rendered in place of the Router
        component if the current route matches the specified route pattern. Any
        route parameters will be passed to the component under the <code>arguments</code>
        prop. Changes to the current router will trigger the <code>@change</code> event. If
        you want access to the ui5 router inside of your project you can inject
        a reference to it with <code>inject('$ui5Router')</code>
      </p>
    </ui5html>
  </m:Panel>
</template>

<script setup>
import ui5html from "vuei5/UI5html";
import ui5 from "vuei5/UI5Control";
import CodeBlock from "../../common/CodeBlockH";

const translate = `<template>
  <!-- In template you can use the function directly -->
  <Text :text="$i18n('myTextId')" />
</template>
<script>
  import {inject} from 'vuei5/Vue';
  export default {
    beforeMount() {
      console.log(this.$i18n('myTextId'));
    },
    setup() {
      const translate = inject('$i18n');
      const res = translate('myTextId');
    }
  }
<\/script>`;

const manifest = `# manifest.json
{"sap.ui5": {
    "routing": {
      "routes": [
        {
          "pattern": "",
          "name": "home"
        },
        {
          "pattern": "examples/:example:",
          "name": "examples"
        },
        # ...
      ]
    }
}}`;

const routerComponent = `// SomeComponent.vue
<template>
  <Router :config="config" />
</template>
<script setup>
  import Router from 'vuei5/Router';
  import Home from './pages/Home';
  import Examples from './pages/Examples';

  const config = {
    // routeName: VueComponent
    'home': Home,
    'examples': Examples
  }
<\/script>`;
</script>