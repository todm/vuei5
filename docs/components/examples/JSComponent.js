sap.ui.define([
    'vuei5/UI5Control',
    '../common/CodeBlock'
], function(ui5, CodeBlock) {
    return {
        template: `
            <Panel>
                <Text text="This component was written in a normal JS file. If you don't want to use .vue SFC's you dont have to."/>
            </Panel>
            <Panel>
                <Text text="In normal js files you can use sap.ui.define. You have to write your components as strings. You can also add your own tasks/middlewares for ESM etc..."/>
                <CodeBlock lang="js" :code="code"/>
            </Panel>`,
        components: {
            'Panel': ui5('sap/m/Panel'),
            'Text': ui5('sap/m/Text'),
            'CodeBlock': CodeBlock
        },
        setup() {
            const code = `sap.ui.define([
  'vuei5/UI5Control',
], function(ui5Control){
  return {
    template: '<Text text="Hello World"/>',
    components: {
      'Text': ui5Control('sap/m/Text')
    },
    setup() {
        // ...
    }
  }
})`;
            return {code}
        }
    }
});