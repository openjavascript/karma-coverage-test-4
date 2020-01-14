var path = require("path")
var webpack = require("webpack")
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {

    return path.join(__dirname, '..', dir)
}

var webpackConfig = {
    mode: 'development',

    module: {

        rules: [

            // babel-loader
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },


            // 为了统计代码覆盖率，对 js 文件加入 istanbul-instrumenter-loader
            {
                test: /\.(js)$/,
                exclude: /(node_modules|src)/,
                include: /(test)/,
                enforce: 'post',
                use: [{
                    loader: "istanbul-instrumenter-loader",
                    options: {
                        esModules: true
                    },
                }]
            },

            // vue loader
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader'                }]
            },

            // css loader
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'vue-style-loader'
                })
            },

            // img loader
            {
                test: /\.(png|gif|jpe?g)(\?\S*)?$/,
                use: [{ loader: 'url-loader' }]
            },

            // font loader
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use: [{ loader: 'url-loader' }]
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new VueLoaderPlugin()
    ]
}

module.exports = webpackConfig
