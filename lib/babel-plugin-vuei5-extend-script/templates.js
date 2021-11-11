const { template, parse, types } = require("@babel/core");

exports.buildPreamble = preamble => parse(preamble).program.body;

exports.buildStyleInject = (scopeId, style) => {
    return template(`
        (function(d){
            if(d.querySelector('style[v-${scopeId}]')) return;
            var e=d.createElement('style');
            e.innerHTML = %%style%%;
            e.setAttribute('v-${scopeId}','');
            d.head.appendChild(e);
        })(document);
    `)({style: types.stringLiteral(style)})
}

exports.buildRewriteExport = content => template(`const __sfc__ = %%content%%;`)({content});


exports.buildDefaultExport = template(`export default __sfc__;`);

exports.buildAssignRender = renderFunction => {
    const ast = parse(renderFunction);
    return template(`__sfc__.render = %%render%%`)({render: ast.program.body[0].expression});
};

exports.buildAssignScope = scopeId => template(`__sfc__.__scopeId = %%scope%%`)({scope: types.stringLiteral('data-v-' + scopeId)});

exports.buildAssignFile = file => template(`__sfc__.__file = %%file%%`)({file: types.stringLiteral(file)});