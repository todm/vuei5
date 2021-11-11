module.exports = function(api, options) {

    const config = {
        replacements: [
            // {
            //     match: '^vue$',
            //     replacement: 'vuei5/Vue'
            // }
        ],
        ...options
    }

    return {
        visitor: {
            /**
             * 
             * @param {babel.path} path 
             */
            ImportDeclaration(path) {
                for(const r of config.replacements) {
                    const exp = new RegExp(r.match);
                    if(!path.node.source.value.match(exp))
                        continue;
                    path.node.source.value = r.replacement;
                }

                path.replaceWith(path)
            }
        }
    }
}