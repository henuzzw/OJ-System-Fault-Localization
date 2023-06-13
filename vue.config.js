
module.exports = {

    publicPath:"/",
    devServer: {
        // 在devServer选项中添加以下内容

        // proxy: {
        //     '/Target': {// 匹配所有以 '/api'开头的请求路径
        //         ws: true,// 支持跨域
        //         target:Targetip.ip,
        //         changeOrigin: true,
        //         pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
        //             '^/Target': ''
        //         }
        //     },
        //
        // },
        // onBeforeSetupMiddleware: require('./mock/index')
    },
    // configureWebpack: {
    //     // provide the app's title in webpack's name field, so that
    //     // it can be accessed in index.html to inject the correct title.
    //     // resolve: {
    //     //     fallback: { path: require.resolve("path-browserify") },
    //     // },
    // },
    // before:(app)=>{
    //   appData(app)
    // } ,
}
