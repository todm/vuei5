<template>
  <m:Panel>
    <ui5html class="myTest">
      <h1>Installing Vuei5</h1>
      <p>
        Vuei5 is built for @ui5/cli. While you can import and use the vuei5
        resources in any project, regardless of the build tool, you can only use
        the included <code>.vue</code> single-file-component compiler in a @ui5/cli project.
        If you can't or don't want to use .vue sfc's you can still write your
        components in normal javascript files and write your templates as
        strings or implement the render functions manually.
      </p>
      <br />
      <p>
        If you have a UI5 CLI Project ready you can start by installing vuei5 as
        a dependency with npm or yarn.
      </p>
      <CodeBlock code="npm install @todms/vuei5 --save-dev" lang="text" />
      <p>Then add the package as a ui5 dependency in your <code>package.json</code> file.</p>
      <CodeBlock :code="packageJson" lang="yaml" />
      <p>
        The vuei5 resources should now be included in your ui5 project. If you
        want to use <code>.vue</code> sfc files the next step is to inlude the compiler in
        your ui5 configuration file.
      </p>
      <p>Include the task and the middleware into <code>ui5.yaml</code></p>
      <CodeBlock :code="ui5Yaml" lang="yaml" />
      <p>
        All files ending with <code>.vue</code> should now be transformed to regular <code>.js</code>
        files.
      </p>

      <h2>Integrateing vuei5 in your ui5 app</h2>
      <p>
        There are two ways to integrate vuei5 in a ui5 project. You can let
        vuei5 take over the whole app or bind it to a existing ui5 control and
        let it take over only part(s) of the app.
      </p>

      <h3>Initializing vuei5 for the whole app</h3>
      <p>
        To let vue control the whole app you need to modify your <code>Component.js</code>
        file. Just change the default <code>UIComponent</code> to the vuei5 <code>VUEIComponent</code>.
        Here you can also add some configuration to your vue instance. You can
        also still add your usual ui5 configuration since VUEIComponent extends
        UIComponent.
      </p>
      <p>
        To make the app work you at least have to specify the root vue component
        to render on the page.
      </p>
      <CodeBlock lang="js" :code="componentjs" />

      <h3>Initializing vuei5 for part of the app</h3>
      <p>
        To let vue control only part of the app you need to launch it inside of
        a controller while passing it a reference to the parent element.
      </p>
      <CodeBlock lang="js" :code="launcher" />
    </ui5html>
  </m:Panel>
</template>

<script setup>
import ui5html from "vuei5/UI5html";
import ui5 from "vuei5/UI5Control";
import CodeBlock from "../../common/CodeBlockH";
import {inject} from 'vuei5/Vue';

const PanelgeJson = `"ui5": {
  "dependencies": [
    # ...
    "@todms/vuei5"
  ]
}`;

const ui5Yaml = `# ui5.yaml
builder:
  customTasks:
    - name: vuei5-task-sfc
      beforeTask: generateComponentPreload
server:
  customMiddleware:
    - name: vuei5-middleware-sfc
      beforeMiddleware: serveResources
`;

const componentjs = `//Component.js

sap.ui.define(
  [
    "vuei5/VUEIComponent",
    "./components/Home", // also import your root vue component
  ],
  function (VUEIComponent, Home) {
    "use strict";

    // Simply replace UIComponent with VUEIComponent.
    return VUEIComponent.extend("vuei5.demo.Component", {
      metadata: {
        manifest: "json",
      },

      vuei5: {
        vueRoot: Home,
      },
    });
  }
);`;

const launcher = `// App.controller.js

sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "vuei5/Launcher", //import vuei5 Launcher
    "../components/Home", //import your root vue component
    //...
  ],
  function (Controller, vuei5Launcher, Home) {
    return Controller.extend("vuei5.demo.controller.App", {
      //...

      onInit: function () {
        // get your parent ui5 element
        const element = this.byId("myParentElement");

        vuei5Launcher(element, Home, {
          /* Options */
        });
      },

      //...
    });
  }
);`;
</script>