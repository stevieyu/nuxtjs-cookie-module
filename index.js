const { resolve } = require('path')

module.exports = function(moduleOptions) {
  const defaults = {
    alias: 'cookies',
    parseJSON: true,
  }
  const options = Object.assign({}, defaults, moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, './plugin.js'),
    fileName: 'plugin.js',
    options,
  })
}

module.exports.meta = require('./package.json')
