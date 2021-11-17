<template>
  <m:Panel id="myPanel">
    <ui5html>
      <h1>Writing Components</h1>

      <p>
        You can write components both in vanilla javascript files and in <code>.vue</code>
        sfc files. Follow the regular vuejs component syntax. Vuei5 uses vuejs 3
        so both the options and the composition api can be used to define your
        components behaviour. The sfc compiler also supports the use of the new
        <code>&lt;script setup&gt;</code> wich allows you to use the composition api with a
        bit of syntactical sugar.
      </p>

      <h2>Use ES Modules in sfc files</h2>

      <p>
        <b>It is mandatory to use ESModules in a .vue file.</b> <br />This is
        because the sfc compiler will use es modules to import the functions
        required for the render functions. Using the normal <code>sap.ui.define()</code>
        function to define your component would mix two diffrent import styles
        together wich will most likeley result in errors. Simply use the esm
        import / export syntax for all of your imports in an sfc file. They will
        automatically be transformed to regular ui5 modules by the sfc
        task/middleware.
      </p>
      <p>
        Regular js files will not be touched by the sfc task and can therefore
        still use the regular ui5 module system.
      </p>

      <div class="infobox">
        <ul>
          <li>✔ Use ESM import/export in .vue files</li>
          <li>✔ Use <code>sap.ui.define()</code> in .js files</li>
          <li>❌ DON'T use <code>sap.ui.define()</code> in .vue files</li>
          <li>
            ⚠ Only use ESM import/export in .js files if you configured it
            yourself
          </li>
        </ul>
      </div>

      <h2>Using ui5 controls in vue components</h2>
      <p>
        One thing you probably want to do is using ui5 controls in your vuei5
        app...
      </p>
      <p>
        To do so you can use the <code>UI5Control</code> function wich will load the ui5
        control and wrap it in a vue component. The component can then be used
        inside a vue template with most of the usual features lika binding and
        events.
      </p>
      <p>
        You can pass both a imported ui5 control or a string containing the
        import path to the function. Passing a string will import the control
        using <code>sap.ui.requireSync()</code>. So while it will greatly reduce the amount
        of code it will also import all controls synchronously wich is fine most
        of the time but something to keep in mind.
      </p>
      <p>
        To make the ui5 control available in your component simply call the
        function and add the result to your components object. If you are using
        <code>&lt;script setup&gt;</code> simply assign the result to a constant wich will
        make it available automatically. If you want to create multiple
        components at the same time you can also use the <code>UI5Library</code> function.
        But since you propably won't use all controls in a library importing all
        components may cause unnessessary loading times.
      </p>
      <CodeBlock lang="html" :code="controlimport" />

      <h2>Global Components</h2>
      <p>
        If you use a component often in your app you can register it globally.
        This will reduce the amount of code you have to write and possibly
        increase render times since all components are available at start (but
        maybe not).
      </p>

      <p>
        To register components globally add them in your vuei5 configuration.
        The components should then be available globally under the name given in
        the components object.
      </p>
      <CodeBlock lang="js" :code="globalComponents" />

      <h2>Props, Binding, Events etc.</h2>
      <p>
        Interacting with ui5 vue components is, with a few exceptions, the same
        as interacting with any other vue component. You pass the control
        options as props, bind data with <code>v-bind</code> or <code>:</code> use <code>v-if</code>, <code>v-for</code> and listen
        to events with <code>v-on</code> or <code>@</code>. <code>v-model</code> for twoway binding is also possible.
      </p>
      <CodeBlock lang="html" :code="interaction" />
      <p>
        Vuejs has a few keywords that wont be passable as props. The component
        will also only accept props that are defined in the controls metadata.
        You can however force a prop to be passed to the control by prefixing it
        with <code>ui5--</code>. If you have problems with props beeing passed to the
        control the prefix may be a solution.
      </p>
      <CodeBlock lang="html" :code="prefixProps" />

      <h2>Vue imports</h2>
      <p>
        Some functions have to be imported from the vue package. Vue can be
        imported with <code>'vuei5/Vue'</code>
      </p>
      <p>
        By default the sfc task will also replace all imports that import from
        <code>'vue'</code> with the correct import. If you redefine the sfc babel pipeline or
        use normal .js files this functionality will not be available.
      </p>
      <CodeBlock lang="js" :code="vueImport" />

      <h2>Slots and aggregations</h2>

      <p>
        When using ui5 you often have to nest controls inside of each other.
        This will work the same way in vuei5. Simply add the controls as
        children.
      </p>
      <p>
        Without any configuration the controls will be added with a default
        aggregation. To change the aggregation either use a template with a
        <code>v-slot</code> tag or add the <code>ui5--aggregation</code> property wich will target
        a single control.
      </p>
      <CodeBlock lang="html" :code="aggregations" />

      <h2>Style</h2>
      <p>
        Style tags in templates will be added to the page as a head style tag.
        You can also specify a css file in the task configuration, wich will
        collect all component styles, but it has to be included manually in the
        app.
      </p>
      <p>
        When using scoped styles on a ui5 control the scope id will be applied to all html
        elements of that control.
      </p>

      <h2>Preprocessors</h2>
      <p>
        You can use preprocessors like less, scss, pug if you
        define the lang property in your sfc files. Make sure that you have
        installed the required packages that will transform your specified
        preprocessor.
      </p>
    </ui5html>
  </m:Panel>
</template>

<script setup>
import ui5html from "vuei5/UI5html";
import ui5 from "vuei5/UI5Control";
import CodeBlock from "../../common/CodeBlockH";

const controlimport = `<script>
import ui5Control from 'vuei5/UI5Control';
import Button from 'sap/m/Button';

export default {
  components: {
    'Button': ui5Control(Button),
    'Text': ui5Control("sap/m/Text")
  },
  setup() {
    // ...
  }
}
<\/script>

<script setup>
import ui5Control from 'vuei5/UI5Control';
import SapMButton from 'sap/m/Button';

const Button = ui5Control(SapMButton);
const Text = ui5Control("sap/m/Text");

// ...
<\/script>

<template>
  <Button text="Click Me" @press="onPress"/>
  <Text :text="myVar"/>
</template>`;

const interaction = `<template>
  <Button :text="myData" @press="myPressListener"/>
  <Text v-for="k,i in myArray" :key="i"/>
  <Input v-model:value />
</template>`;

const prefixProps = `<!-- 'key' is reserved by vue so the ui5-- prefix is required to pass it to the ui5 control -->
<IconTabFilter ui5--key="home" text="Home" />`;

const aggregations = `<template>
  <Table>
    <template v-slot:columns>
      <!-- All controls in the v-slot template will be added with the columns aggregation -->
      <Column><Label text="ID" /></Column>
      <Column><Label text="Name" /></Column>
      <Column><Label text="Age" /></Column>
    </template>

    <!-- the ui5--aggregation prop specifies the aggregation for this single control -->
    <ColumnListItem v-for="data in tableData" :key="data.id" ui5--aggregation="items">
      <Text :text="data.id"/>
      <Text :text="data.name"/>
      <Text :text="data.age"/>
    </ColumnListItem>
  </Table>
</template>`;

const vueImport = `// ref will directly be imported from the vue file
import {ref} from 'vuei5/Vue'

// the import source will be rewritten to the correct path vuei5/Vue
import {ref} from 'vue'`;

const globalComponents = `sap.ui.define([
  /*...*/,
  'sap/m/Button',
  'vuei5/UI5Control',
  'vuei5/UI5Library',
], fuction(/*...*/, SapMButton, ui5Control, ui5Lib) {
  VUEIComponent.extend("vuei5.demo.Component", {
    vuei5: {
      vueRoot: Home,
      components: {
        // You can add vuei5 components globally to your project
        'Text': 'sap/m/Text', // by string (with requireSync())
        'Button': SapMButton, // by ui5 control
        'Panel': ui5Control('sap/m/Panel'), // by vue component
        ...ui5Lib('sap/uxap/library', 'uxap:') // by full library
      }
    },
    // ...`;
</script>

<style scoped>
.split-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1rem;
  width: 100%;
}

.infobox {
  background-color: rgba(173, 216, 230, 0.349);
  border: 0.2rem solid lightblue;
  border-radius: 1rem;
  padding: 1.5rem;
  position: relative;
}

.infobox::after {
  content: "ℹ️";
  position: absolute;
  right: 2rem;
  top: 0;
  font-size: 5rem;
  opacity: 0.1;
  z-index: -1;
}
</style>