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
  ["Module", "vuei5-task-sfc"],
  ["Type", "UI5 CLI Task"]
]

const overview = `The SFC task is used to transform your .vue files into normal Javascript files. It will handle template compilation, preprocessors and style extraction.`;

const signatureText = ``;
const signature = `interface configuration { 
    /**
     * @optional
     * Sets wich files should be included in the task
     * Default: ['** /*.vue'] (All .vue files)
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
     * Specifies the output style.css file
     * If set to a falsy value the style will be included in the .js files
     * if a path is set all styles will be written to that file wich then has to be included manually
     * Default: false
     */
    stylesheet?: string | false;

    /**
     * @optional
     * Wether or not to trnaspile the resulting script.
     * if true: Changes es modules to sap.ui.define() and changes imports from 'vue' to 'vuei5/Vue'
     * Default: true
     */
    transpileScript?: boolean;
}`;

const usageText = `If you want to use .vue sfc files include task and middleware in ui5.yaml`;
const usage = `builder:
  customTasks:
    - name: vuei5-task-sfc
      beforeTask: generateComponentPreload
      configuration:
        # Your configurations`;
</script>