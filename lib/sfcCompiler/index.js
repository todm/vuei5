const micromatch = require('micromatch');
const Logger = require('@ui5/logger').getLogger("sfc-compiler");
const sfc = require('vue/compiler-sfc');
const { transformSync } = require('@babel/core');
const rewriteImports = require('../babel-plugin-rewrite-imports');
const extendScript = require('../babel-plugin-vuei5-extend-script');


class SFCCompiler {

    /**
     * 
     * @param {object} config
     */
    constructor(config) {
        this.config = config;
    }

    /**
     * Compile the sfc to js
     * @param {string} content 
     */
    compile(content, filePath) {
        this.fileId = Math.random().toString(36).substr(2);

        const parsedSFC = sfc.parse(content, {filename: filePath + ".html"});
        let preparedSFC = this.prepareSFC(parsedSFC.descriptor, filePath);
        // const style = this.prepareStyle(parsedSFC.descriptor, filePath);
        
        const script = this.transpileScript(preparedSFC, filePath);

        return {
            code: script,
            style: preparedSFC.style
        }
    }


    /**
     * 
     * @param {sfc.SFCDescriptor} descriptor 
     * @param {string} filePath 
     */
    compileStyle(descriptor, filePath) {
        let concatStyles = "";
        let scoped = false;
        for (const styleDescriptor of descriptor.styles) {
            const style = sfc.compileStyle({
                filename: filePath,
                id: this.fileId,
                source: styleDescriptor.content,
                preprocessLang: styleDescriptor.lang,
                scoped: styleDescriptor.scoped
            });
            concatStyles += style.code;
            if (styleDescriptor.scoped) scoped = true;
        }
        return {
            style: !!concatStyles ? concatStyles : null,
            scoped: scoped
        };
    }

    /**
     * 
     * @param {import('@vue/compiler-sfc').SFCDescriptor} descriptor 
     * @param {string} filePath 
     * @returns {PreparedSFC}
     */
    prepareSFC(descriptor, filePath) {
        let compiledScript, compiledTemplate;

        const compiledStyle = this.compileStyle(descriptor, filePath)

        if (descriptor.script || descriptor.scriptSetup) {
            compiledScript = sfc.compileScript(descriptor, {
                id: this.fileId,
                filename: filePath,
                inlineTemplate: true,
                templateOptions: {
                    compilerOptions: {
                        runtimeModuleName: 'vuei5/Vue'
                    },
                    preprocessLang: descriptor.template.lang,
                    scoped: compiledStyle.scoped,
                }
            });
        }

        if (!compiledScript || !compiledScript.setup) {
            compiledTemplate = sfc.compileTemplate({
                filename: filePath,
                id: this.fileId,
                source: descriptor.template.content,
                compilerOptions: {
                    inline: true,
                    runtimeModuleName: 'vuei5/Vue'
                },
                preprocessLang: descriptor.template.lang,
                scoped: compiledStyle.scoped
            });
        }

        return {
            compiledScript,
            compiledTemplate,
            ...compiledStyle
        }
    }

    /**
     * 
     * @param {PreparedSFC} preparedSFC 
     * @param {*} filePath 
     * @returns 
     */
    transpileScript(preparedSFC, filePath) {

        const code = preparedSFC.compiledScript?.content || "export default {}";

        const babelPlugins = [
            [extendScript, {
                sfc: {...preparedSFC, style: !this.config.stylesheet ? preparedSFC.style : null},
                id: this.fileId
            }]
        ];

        const extendScriptResult = transformSync(code, {
            filename: filePath,
            plugins: babelPlugins,
            configFile: false,
            babelrc: false,
            sourceMaps: true,
            inputSourceMap: preparedSFC?.compiledScript?.map
        });

        if(!this.config.transpileScript) return extendScriptResult.code;

        const transformModulesResult = transformSync(extendScriptResult.code, {
            filename: filePath,
            plugins: [
                [rewriteImports, {
                    replacements: [{ match: "^vue$", replacement: "vuei5/Vue" }]
                }],
                "@todms/babel-plugin-ui5-esm"
            ],
            configFile: false,
            babelrc: false,
            sourceMaps: "inline",
            inputSourceMap: extendScriptResult.map
        });
        return transformModulesResult.code;
    }
}

/**
 * Filters files by glob - Excludes matched
 * @param {workspace.File[]} files - the files to filter
 * @param {string | string[]} patterns - the glob pattern
 * @returns {workspace.File[]} the filtered files
 */
function excludeFiles(files, patterns) {
    const matchableFiles = files.map(file => file.getPath());
    let matches = micromatch(matchableFiles, patterns);
    return files.filter(file => !matches.includes(file.getPath()));
}


/**
 * Sets the extension of the provided path to provided extension
 * @param {string} path 
 * @param {string} extension 
 * @returns {string}
 */
function setExtension(path, extension) {
    return removeFileExtension(path) + "." + extension;
}

/**
 * Returns the file extension of given path
 * @param {string} path 
 * @returns {string}
 */
function getFileExtension(path) {
    return path.split(".").pop();
}

/**
 * Returns a path without extension
 * @param {string} path 
 * @returns {string}
 */
function removeFileExtension(path) {
    let parts = path.split(".");
    parts.pop();
    return parts.join(".");
}

/**
 * Escapes a string to fit inside JS "" strings
 * @param {string} code 
 * @returns {string}
 */
function escapeJSString(code) {
    let out = code.replace(/"/gm, '\\\"');
    out = out.replace(/(\r\n|\n|\r)/gm, "");
    return out;
}

module.exports = {
    SFCCompiler,
    excludeFiles,
    setExtension,
    getFileExtension,
    removeFileExtension,
    Logger
}

/**
 * Prepared SFC file
 * @typedef {Object} PreparedSFC
 * @property {sfc.SFCScriptBlock} compiledScript
 * @property {sfc.SFCTemplateBlock} compiledTemplate
 * @property {string} style
 * @property {boolean} scoped
 */