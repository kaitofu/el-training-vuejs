// "@rails/webpacker": "^4.0.0-rc.7"時に適用される設定内容
// const { environment } = require('@rails/webpacker')
// const { VueLoaderPlugin } = require('vue-loader')
// const vue = require('./loaders/vue')

// environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
// environment.loaders.prepend('vue', vue)
// module.exports = environment


// "@rails/webpacker": "3.5" 時に適用される設定内容
const { environment } = require('@rails/webpacker')
const vue =  require('./loaders/vue')

environment.loaders.append('vue', vue)
module.exports = environment

