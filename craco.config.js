const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    webpack: {
        alias: {
            '@src': resolve('src'),
        },
    },
    // devServer: {
    //     proxy: {
    //         '/api': 'http://127.0.0.1:3001',
    //     },
    // },
};
