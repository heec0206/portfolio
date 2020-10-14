 module.exports = {
  devServer: { overlay: false },
  chainWebpack(config) {
    config.devtool('source-map')
    config.output.filename = '[name].[hash].js'
    config.output.chunkFilename = '[name].[hash].js'
  },

  css: {
    sourceMap : true,
  },

  publicPath: process.env.NODE_ENV === 'production'
      ? '/portfolio'
      : '/'
}
