<template>
    <Button text="This button was created by vuei5" @press="count++"/>
    <Text :text="'This text is controlled by vuei5: ' + count"/>
</template>

<script setup>
    import ui5 from 'vuei5/UI5Control';
    import {ref} from 'vuei5/Vue';

    const Button = ui5('sap/m/Button');
    const Text = ui5('sap/m/Text');

    const count = ref(0);
</script>