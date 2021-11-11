const fetch = require('node-fetch');
const {transformAsync} = require('@babel/core');
const fs = require('fs');
const path = require('path');
const Logger = require('@ui5/logger').getLogger("vuei5:scripts:updateVueSapUMD");

/**
 * Downloads vuejs from a cdn and puts it in the library
 * @param {string} vueGlobalCDN - The url of the vue global js file to download
 */
async function updateVue(vueGlobalCDN = "https://unpkg.com/vue@next/dist/vue.esm-browser.prod.js") {
    const code = await downloadVue(vueGlobalCDN);
    const ui5Module = await transformESMtoAMD(code);
    writeFile(ui5Module);
}

/**
 * Download vuejs from cdn
 * @param {string} url - URL of vue file to use
 * @returns {string} The downloaded file
 */
async function downloadVue(url) {
    Logger.info(`Downloading vue global from '${url}'`);

    let res = await fetch(url);
    let code = await res.text();

    Logger.info(`Finished downloading from '${res.url}'`);
    return code;
}

/**
 * Transforms esm exports to work with sap.ui.define
 * @param {string} code - the code to transform
 * @returns {string} - the transformed code
 */
async function transformESMtoAMD(code) {
    const result = await transformAsync(code, {
        configFile: false,
        babelrc: false,
        plugins: ['@todms/babel-plugin-ui5-esm']
    });
    return result.code;
};

/**
 * Write code to file
 * @param {*} code - the code to write
 */
function writeFile(code) {
    let filePath = path.join(__dirname, '..', 'src', 'vuei5', 'Vue.js');
    fs.writeFileSync(filePath, code, {encoding: 'utf-8'});
    Logger.info(`Written ui5 module to file to '${filePath}'`);
}

module.exports = updateVue;

if(require.main === module) {
    updateVue(process.argv[2]);
}