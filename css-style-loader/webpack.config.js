const path = require('path');
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
                test: /\.css$/, 
                use: ['style-loader','css-loader']
            }
        ]
    }
}