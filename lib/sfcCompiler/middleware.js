const micromatch = require('micromatch');
const { SFCCompiler, removeFileExtension, Logger } = require(".");
/**
 * UI5 Task for serving Vue sfcs as js files
 *
 * @param {object} parameters Parameters
 * @param {object} parameters.resources Resource collections
 * @param {module:@ui5/fs.AbstractReader} parameters.resources.all Reader or Collection to read resources of the
 *                                        root project and its dependencies
 * @param {module:@ui5/fs.AbstractReader} parameters.resources.rootProject Reader or Collection to read resources of
 *                                        the project the server is started in
 * @param {module:@ui5/fs.AbstractReader} parameters.resources.dependencies Reader or Collection to read resources of
 *                                        the projects dependencies
 * @param {object} parameters.middlewareUtil Specification version dependent interface to a
 *                                        [MiddlewareUtil]{@link module:@ui5/server.middleware.MiddlewareUtil} instance
 * @param {object} parameters.options Options
 * @param {string} [parameters.options.configuration] Custom server middleware configuration if given in ui5.yaml
 * @returns {function} Middleware function to use
 */
module.exports = function ({ resources, middlewareUtil, options }) {
    const config = {
        include: ["**/*.js"],
        exclude: [],
        onError: 'error',
        transpileScript: true,
        passFile: false
    };

    const sfcCompiler = new SFCCompiler(config);

    return async function (req, res, next) {
        try {
            let matched = !!micromatch([req.path], config.include).length && !micromatch([req.path], config.exclude).length;
            if(!matched) return next();

            let file;
            if(req.passedFile) {
                file = req.passedFile;
            } else {
                let extenionlessPath = removeFileExtension(req.path) + ".vue";
                let potentialFiles = await resources.rootProject.byGlob(extenionlessPath);
                if(!potentialFiles || potentialFiles.length < 1) return next();
                file = potentialFiles[0];
            }

            let content = await file.getString();
            let {code: transformed} = sfcCompiler.compile(content, file.getPath());
            
            if(config.passFile) {
                file.setString(transformed);
                req.passedFile = file;
                return next();
            }
            res.end(transformed);
        } catch(ex) {
            Logger.error(ex.message);
            if(config.onError === 'next') {
                next();
            } else if(config.onError === 'error') {
                res.status(503);
                res.end();
            }
            else {
                return process.exit(-1);
            }
        }
    }
};