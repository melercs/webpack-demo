const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //Aquí van los loeaders
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015"]
                    }
                },
            },
            {
                test: /\.(jpg|png|git)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                } 
            },
            {
                test: /\.css$/, 
                use: ExtractTextPlugin.extract({
                    // ['style-loader','css-loader'],
                    // fallback: 'style-loader',
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        //Aquí van los plugins
        new ExtractTextPlugin("css/[name].css")
    ]
}