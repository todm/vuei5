<template>
  <m:Panel>
    <ui5html class="myTest">
      <p>
        Here you can find the documentation for the vuei5 project. Use the
        sidebar to navigate to the diffrent sections.
      </p>
      <p>
        <b>Getting Started</b> will give you a quick overview on how to setup
        and use a vuei5 app
      </p>
      <p>
        <b>Library etc.</b> will contain more technical definitions of the
        diffrent modules.
      </p>
      <br />
      <p>
        You can also check out the code of this website in the
        <a href="https://github.com/todm/vuei5/tree/main/test/webapp"
          >github repository</a
        >. It was created completely with vuei5 and shows a lot of the vuei5
        functionality in action.
      </p>
    </ui5html>
  </m:Panel>
</template>

<script setup>
import ui5html from "vuei5/UI5html";
import ui5 from "vuei5/UI5Control";
import CodeBlock from "../common/CodeBlockH";
</script>