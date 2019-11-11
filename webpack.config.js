const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  __dirname + "/src/index.jsx",  //入口文件
    output: {
        path: __dirname + "/build",  //存放打包后的文件路径
        filename: "bundle.js" //打包后的文件名
    },
    mode: "development",
    devServer: {
        contentBase: "./build",// 本地服务器所加载的页面所在的目录 即index.html所在位置
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env","react"]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.template.html"
        })
    ]
};
