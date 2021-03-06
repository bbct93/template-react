import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackBar from 'webpackbar';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
import path from "path";
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';


module.exports = {
    entry: __dirname + "/src/index.tsx",  //入口文件
    output: {
        path: __dirname + "/build",  //存放打包后的文件路径
        filename: "bundle.js" //打包后的文件名
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.less', '.json'],
        modules: ['node_modules'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    mode: "development",
    devServer: {
        contentBase: "./build",// 本地服务器所加载的页面所在的目录 即index.html所在位置
        historyApiFallback: true,
        inline: true,
        port: 5001,
    },
    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', {loader: 'css-loader', options: {modules: true}}],
            },
            // less
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
        }),
        new WebpackBar(),
        new HardSourceWebpackPlugin(),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: {removeAll: true}}]
            },
            canPrint: true
        }),
    ]
};
