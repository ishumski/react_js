

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",

    //конфиг dev сервера
    devServer: {
        //путь к папке после изм которой будет перезагр стр
        contentBase: "./dist"
    },
    entry: "./src/index.js",//путь к начальному файлу
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true//очищает папку dist перед каждым билдом
    },//то в какой файл будет скомпилирован весь код и в какую директорию

    //блок для модулей (файлы, котор вставляются через import)
    module: {
        //правило по которым мы их обрабатываем
        rules: [
            {
                //для всех файлов c расширением css
                test: /\.css$/i,
                //список обработчиков 
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(ttf|woff|otf|eot)$/i,
                type: "asset/resource"
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Test App"
        })
    ]
};