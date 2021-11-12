const fs = require('fs');
const path = require('path');
const Logger = require('@ui5/logger').getLogger("vuei5:scripts:transformVue");
const { transformSync } = require('@babel/core');

/**
 * Transforms vue to a ui5 compatible module
 * @param {boolean} isProd - if true the .prod.js version of vue will be transformed
 * @param {boolean} writeFile - if true the transformed script will be written to the library directory
 * @param {boolean} enableLogger - if true logs will be enabled
 * @returns {string} The transfomred vue version
 */
function transformVue(isProd = true, writeFile = true, enableLogger = false) {
    enableLogger && Logger.info('Generating ui5 compatible vue version ' + (isProd ? '(prod)' : '(dev)'));
    
    const vueESMPath = path.join(process.cwd(), 'node_modules', 'vue', 'dist', isProd ? 'vue.esm-browser.prod.js' : 'vue.esm-browser.js');
    const vueAMDPath = path.join(process.cwd(), 'src', 'vuei5', 'Vue.js');
    
    enableLogger && Logger.info('Using: "' + vueESMPath + '"');

    const vueESM = fs.readFileSync(vueESMPath, { encoding: 'utf-8' });

    const { code: vueAMD } = transformSync(vueESM, {
        configFile: false,
        babelrc: false,
        plugins: ['@todms/babel-plugin-ui5-esm']
    });

    writeFile && fs.writeFileSync(vueAMDPath, vueAMD, { encoding: 'utf-8' });
    enableLogger && Logger.info('Written transformed vue version to "' + vueAMDPath + '"');

    return vueAMD;
}

module.exports = transformVue;

if(require.main === module) {
    transformVue(process.argv[2] !== '--dev', true, true);
}