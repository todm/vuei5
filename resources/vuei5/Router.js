sap.ui.define(["./Vue"], Vue => ({
    template: '<component :is="current" :arguments="routeArgs"></component>',
    props: {
        config: Object
    },
    emits: ['change'],
    setup(props, {emit}) {
        const routeArgs = Vue.ref({});
        const current = Vue.shallowRef();
        const router = Vue.inject("$ui5Router");

        router.attachRouteMatched(event => {
            const name = event.getParameter('name');
            routeArgs.value = event.getParameter('arguments');
            current.value = props.config[name];

            emit('change', name, routeArgs.value)
        });

        return {
            current: current,
            routeArgs: routeArgs
        }
    }
}))