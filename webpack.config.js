var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        'app':'./src/app',
        'libs':'./src/libs'
    },
    output:{
        path: __dirname + '/dist',
        filename:'[name].js'
    },
    resolve:{
        extensions:['.js'],
        alias:{
            'vue':'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/assets/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:['app','libs']
        })
    ],
    devServer:{
        contentBase:  __dirname+'/dist'
    }
};