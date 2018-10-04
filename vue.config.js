const path = require('path')
const BundleTracker  = require('webpack-bundle-tracker');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  baseUrl: "http://localhost:8080/",

  devServer: {
    headers: {
        "Access-Control-Allow-Origin":"\*"
    },
  },

  configureWebpack: {

    context: __dirname,

    output: {
        filename: "[name]-[hash].js",
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
