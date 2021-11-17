<template>
  <ObjectPageLayout>
    <!-- <ObjectPageHeader objectTitle="Test" ui5--aggregation="headerTitle" /> -->
    <VBox ui5--aggregation="headerContent">
      <HBox v-for="p in headerProperties" :key="p[0]">
        <Label :text="p[0] + ':&nbsp;'" design="Bold" />
        <Text :text="p[1]" />
      </HBox>
    </VBox>

    <ObjectPageSection>
      <ObjectPageSubSection title="Overview">
        <Text :text="overview" />
      </ObjectPageSubSection>
    </ObjectPageSection>
    <ObjectPageSection>
      <ObjectPageSubSection title="Signature">
        <VBox>
          <Text :text="signatureText" />
          <CodeBlock lang="typescript" :code="signature" />
        </VBox>
      </ObjectPageSubSection>
    </ObjectPageSection>
    <ObjectPageSection>
      <ObjectPageSubSection title="Usage">
        <VBox>
          <Text :text="usageText" />
          <CodeBlock :lang="usageLang" :code="usage" />
        </VBox>
      </ObjectPageSubSection>
    </ObjectPageSection>
  </ObjectPageLayout>
</template>

<script setup>
import { ref, inject, onMounted } from "vuei5/Vue";
import ui5 from "vuei5/UI5Control";
import CodeBlock from "./CodeBlock";

const props = defineProps({
  "headerProperties": String,
  "overview": String,
  "signatureText": String,
  "signature": String,
  "usageText": String,
  "usage": String,

  "usageLang": {type: String, default: "typescript"}
});

const ObjectPageLayout = ui5("sap/uxap/ObjectPageLayout");
const ObjectPageHeader = ui5("sap/uxap/ObjectPageHeader");
const ObjectPageSection = ui5("sap/uxap/ObjectPageSection");
const ObjectPageSubSection = ui5("sap/uxap/ObjectPageSubSection");
const VBox = ui5("sap/m/VBox");
const HBox = ui5("sap/m/HBox");
const Label = ui5("sap/m/Label");
const Text = ui5("sap/m/Text");
</script>