const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
    devServer: {
        port: '3000',
    },
    plugins: [
        {
            plugin: CracoAliasPlugin,
            options: {},
        },
    ],
    // devServer: {
    //     proxy: {
    //         '/api': 'http://127.0.0.1:3001',
    //     },
    // },
};
