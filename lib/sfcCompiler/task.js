const { SFCCompiler, excludeFiles, setExtension } = require(".");

/**
 * UI5 Task for compiling Vue sfcs to js files
 *
 * @param {object} parameters Parameters
 * @param {module:@ui5/fs.DuplexCollection} parameters.workspace DuplexCollection to read and write files
 * @param {module:@ui5/fs.AbstractReader} parameters.dependencies Reader or Collection to read dependency files
 * @param {object} parameters.taskUtil Specification Version dependent interface to a
 *                [TaskUtil]{@link module:@ui5/builder.tasks.TaskUtil} instance
 * @param {object} parameters.options Options
 * @param {string} parameters.options.projectName Project name
 * @param {string} [parameters.options.projectNamespace] Project namespace if available
 * @param {string} [parameters.options.configuration] Task configuration if given in ui5.yaml
 * @returns {Promise<undefined>} Promise resolving with <code>undefined</code> once data has been written
 */
 module.exports = async function({workspace, dependencies, taskUtil, options}) {
    const config = {
        include: ['**/*.vue'],
        exclude: [],
        stylesheet: false,
        transpileScript: true,
        ...options.configuration
    };

    const sfcCompiler = new SFCCompiler(config);

    let files = await workspace.byGlob(config.include);
    files = excludeFiles(files);
    let stylesheet = "";
    await Promise.all(files.map(async file => {
        let content = await file.getString();
        

        let {code, style} = sfcCompiler.compile(content, file.getPath());
        stylesheet += style || "";

        file.setPath(
            setExtension(
                file.getPath(),
                'js'
            )
        );
        file.setString(code);
        workspace.write(file);
        // sfcCompiler.reset();
    }));

    if(config.stylesheet) {
        const file = await files[0].clone();
        await file.setString(stylesheet);
        await file.setPath(config.stylesheet);
        await workspace.write(file);
    }
};