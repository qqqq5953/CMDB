module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/all.scss";',
      }
    }
  },

  publicPath: '/CMDB/dist/'
}
