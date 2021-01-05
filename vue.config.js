// const path = require('path')
//
// function resolve (dir) {
//     return path.join(__dirname, dir)
// }
//
// module.exports = {
//     lintOnSave: true,
//     chainWebpack: (config) => {
//         config.resolve.alias
//             .set('@', resolve('./src'))
//             .set('assets', resolve('./src/assets'))
//             .set('components', resolve('./src/components'))
//     }
// }
//

module.exports = {
    configureWebpack: {
        resolve: {
            // extensions:[], 配置扩展名 默认配置好了
            alias: {
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    }
}