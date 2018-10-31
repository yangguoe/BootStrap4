var path = require('path')
module.exports = {
    entry:{
        pageA:'./src/pageA.js',
        // pageB:'./src/pageB.js'
    },
    output: {
        filename: "[name].bundle.js",
        path:path.resolve(__dirname,'./dist'),
        publicPath: "./dist/",
        chunkFilename: "[name].chunk.js"
    },
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name:'common'
    //     })
    // ]
    // optimization: {
    //     splitChunks:{
    //         cacheGroups: {
    //             vender:{
    //                 test:/node_modules/,
    //                 chunks:'initial',
    //                 name:'vender',
    //                 priority:10
    //             },
    //             utils:{
    //                 chunks:'initial',
    //                 name:'utils',
    //                 minSize:0
    //             }
    //         }
    //     }
    // }
}