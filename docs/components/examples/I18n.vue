<template>
  <Panel>
    <VBox>
      <Text text="Translatable texts from i18n properties files" />
      <Text :text="$i18n('text1')" />
      <Button text="Alert Translation" @press="alertText" />
    </VBox>
  </Panel>
  <Panel>
    <VBox>
      <Text
        text="You can use i18n property files in your templates and in your script"
      />
      <CodeBlock lang="html" :code="code" />
    </VBox>
  </Panel>
</template>

<script>
import { ref, inject } from "vuei5/Vue";
import ui5 from "vuei5/UI5Control";
import CodeBlock from "../common/CodeBlock";

export default {
  components: {
    Panel: ui5("sap/m/Panel"),
    VBox: ui5("sap/m/VBox"),
    Button: ui5("sap/m/Button"),
    Text: ui5("sap/m/Text"),
    CodeBlock: CodeBlock
  },

  setup(props, ctx) {
    const code = `<template>
  <Text :text="$i18n('propertyId')"/>
</template>
<script>
//...
const text = this.$i18n('propertyId');

// or use inject if you don't have access to this
const translate = inject('$i18n');
const text = translate('propertyId');
<\/script>`;

    const injectedTranslationFunction = inject("$i18n");

    function alertText() {
      alert(injectedTranslationFunction("text1"));
    }

    return {
      code,
      alertText
    }
  },
};
</script>