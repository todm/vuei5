sap.ui.define(["./Vue"], Vue => ({
    modelToRefs(model, prefix = "") {
        const obj = model.getObject("/");
        const refs = {};
        Object.keys(obj).forEach(key => {
            const val = model.getProperty("/" + key);
            const ref = Vue.ref(val);
            Vue.watch(ref, (next, prev) => {
                if(next === prev) return;
                model.setProperty("/" + key, next);
            });
            model.bindProperty("/" + key).attachChange(e => {
                ref.value = model.getProperty("/" + key);
            })
            refs[prefix+key] = ref;
        });
        return refs;
    }
}));