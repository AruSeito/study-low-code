const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');
const ArcoWebpackPlugin = require('@arco-design/webpack-plugin');


module.exports = {
  webpack: {
    plugins: {
      add: [
        new WindiCSSWebpackPlugin({
          virtualModulePath: 'src'
        }),
        new ArcoWebpackPlugin(),
      ]
    },
  },
}