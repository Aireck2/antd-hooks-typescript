const path = require('path');
const fs = require('fs');

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './ant-theme-vars.less'), 'utf8'));
// webpack2.config.js
module.exports = {
    rules: [
        ...{
            test: /\.less$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "less-loader",
                    options: {
                        modifyVars: themeVariables
                    }
                }
            ]
        }
    ]
}