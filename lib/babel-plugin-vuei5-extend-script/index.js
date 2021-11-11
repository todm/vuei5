const babel = require('@babel/core');
const sfc = require('vue/compiler-sfc')
const { buildPreamble, buildStyleInject, buildAssignScope, buildAssignRender, buildDefaultExport, buildRewriteExport, buildAssignFile } = require('./templates');

/**
 * 
 * @param {*} api 
 * @param {{sfc: PreparedSFC}} options 
 * @returns {babel.PluginObj}
 */
module.exports = function (api, options) {

    const config = {
        id: "",
        file: "",
        ...options
    }

    let run = [];
    let hasDefaultExport = false;

    return {
        visitor: {
            ExportDefaultDeclaration(path) {
                if (run.includes(this)) return;
                hasDefaultExport = true;
                const exp = buildRewriteExport(path.node.declaration);
                path.replaceWith(exp);
            },
            Program: {
                exit(path) {
                    if (run.includes(this)) return;
                    run.push(this);


                    const program = [...path.node.body];

                    if (config.sfc.compiledTemplate?.preamble) program.unshift(
                        ...buildPreamble(config.sfc.compiledTemplate.preamble)
                    );

                    if (config.sfc.style) program.push(
                        buildStyleInject(config.id, config.sfc.style)
                    );
                    if (hasDefaultExport) {
                        program.push(buildAssignScope(config.id));
                        program.push(buildAssignFile(config.file));
                        if (config.sfc.compiledTemplate) program.push(
                            buildAssignRender(config.sfc.compiledTemplate.code)
                        );
                        program.push(buildDefaultExport())
                    };

                    path.replaceWith(
                        babel.types.program(program)
                    );
                }
            }
        }
    }
}

/**
 * Prepared SFC file
 * @typedef {Object} PreparedSFC
 * @property {sfc.SFCScriptBlock} compiledScript
 * @property {sfc.SFCTemplateBlock} compiledTemplate
 * @property {string} style
 * @property {boolean} scoped
 */