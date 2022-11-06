const { name } = require('./package');

module.exports = {
    webpack: (config) => {
        config.output.library = {
            name: `${name}-[name]`,
            type: 'umd',
        }
        config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
        config.output.globalObject = 'window';
        return config;
    },
    devServer: (configFunction) => {
        return (proxy, allowedHost) => {
            const config = configFunction(proxy, allowedHost);
            config.open = false;
            config.hot = false;
            config.liveReload = false;
            config.static.watch = false;
            config.headers = {
                'Access-Control-Allow-Origin': '*',
            };
            return config;
        }
    }
}
