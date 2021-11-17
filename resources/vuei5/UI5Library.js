sap.ui.define(["./UI5Control"], UI5Control => (library, prefix = "", selective) => {
    if(typeof library === "string") library = sap.ui.requireSync(library);
    
    const controls = {};
    Object.entries(library).forEach(([key, val]) => {
        try {
            if (selective && !selective.includes(key)) return;
            if (typeof val !== "function") return;
            controls[prefix + key] = UI5Control(val);
        } catch (ex) { }
    });
    return controls;
});