<template>
  <APIObject
    :headerProperties="headerProperties"
    :overview="overview"
    :signature="signature"
    :usageText="usageText"
    :usage="usage"
    usageLang="yaml"
  />
</template>

<script setup>
import { ref, inject, onMounted } from "vuei5/Vue";
import APIObject from "../../common/APIObject";

const headerProperties = [
  ["Module", "vuei5-middleware-sfc"],
  ["Type", "UI5 CLI Middleware"]
]

const overview = `The SFC middle is used to transform your .vue files into normal Javascript files. It will handle template compilation, preprocessors and style extraction.`;

const signatureText = ``;
const signature = `interface configuration { 
    /**
     * @optional
     * Sets wich files should be included in the task
     * Default: ['** /*.js'] (All .js files)
     */
    include?: string[];

    /**
     * @optional
     * Sets wich files should be excluded from the task. 
     * Default: [] (None)
     */
    exclude?: string[];

    /**
     * @optional
     * Specifies the behaviour when an error occures
     * 'next' will call the next middleware
     * 'error' will respond with 503
     * 'exit' will make the server exit
     * Default: 'error'
     */
    onError?: 'next' | 'error' | 'exit';

    /**
     * @optional
     * Wether or not to trnaspile the resulting script.
     * if true: Changes es modules to sap.ui.define() and changes imports from 'vue' to 'vuei5/Vue'
     * Default: true
     */
    transpileScript?: boolean;

    /**
     * @optional
     * if set to true the resulting file will be passed to the next middleware
     * Only works if the next middleware checks for req.passedFile
     * Default: false
     */
    passfile?: false
}`;

const usageText = `If you want to use .vue sfc files include task and middleware in ui5.yaml`;
const usage = `builder:
  server:
    customMiddleware:
      - name: vuei5-middleware-sfc
        beforeMiddleware: serveResources
          # Your configurations`;
</script>