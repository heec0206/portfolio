 module.exports = {
  devServer: { overlay: false },
  chainWebpack(config) {
    config.devtool('source-map')
    config.output.filename = '[name].js'
    config.output.chunkFilename = '[name].js'
  },

  css: {
    sourceMap : true,
  },

  publicPath: process.env.NODE_ENV === 'production'
      ? '/portfolio'
      : '/'
}
