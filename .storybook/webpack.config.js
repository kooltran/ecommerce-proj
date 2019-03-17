
const path = require("path")

module.exports = (baseConfig, env, config) => {

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [['react-app', { flow: false, typescript: true }]]
        }
    });

    config.resolve.alias['@StylesVariables'] = path.resolve(
        __dirname,
        '../src/ui-kit/styles/_variables.scss'
    );

    return config;
}