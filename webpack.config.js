const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/src/index.jsx",  //入口文件
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
                test: /\.(js|ts)x?$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', {loader: 'css-loader', options: {modules: true}}],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modules: true
                        }
                    }
                ],
            },
            // 解析图片资源
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },

            //解析 字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: ['file-loader']
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.template.html"
        })
    ]
};
