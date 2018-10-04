const path = require('path')
const BundleTracker  = require('webpack-bundle-tracker');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  baseUrl: "http://localhost:8080/",

  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin":"\*"
      }
    },

    context: __dirname,
      //entry: {app: ['./app']},

    output: {
      //path: require("path").resolve('./assets/bundles/'), -> outputDir: 'dist'
        filename: "[name]-[hash].js",
      //publicPath: 'http://localhost:3000/assets/bundles/', -> baseUrl: '/'
    },

    resolve: {
      alias: {
        '__STATIC__': resolve('static'),
      },
    },

    plugins: [
      new BundleTracker({filename: './webpack-stats.json'})
    ]
  }
}
