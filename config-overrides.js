const {
  override,
  addLessLoader,
  addWebpackAlias,
  fixBabelImports
} = require('customize-cra')

const path = require('path')
// const darkThemeVars = require('antd/dist/dark-theme')

const resolve = dir => path.join(__dirname, '.', dir)
const lessToJS = require("less-vars-to-js");
const rewiredSourceMap = () => config => {
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false
  return config
}
const fs = require("fs");
// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, "./assets/antd-custom.less"),
    "utf8"
  )
);

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: themeVariables

    //  { hack: `true;@import "${require.resolve('antd/lib/style/color/colorPalette.less')}";`,
    // ...darkThemeVars,
    // '@primary-color': ''#13c2c2,
    // '@dark-color': '#141414'
    // }
  }),
  addWebpackAlias({
    '~': resolve('src')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  rewiredSourceMap()
)