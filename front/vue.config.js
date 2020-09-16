
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    host: process.env.VUE_APP_DOMAIN,
    https: true
    //https: true
    // https: {
    //   key: require('fs').readFileSync('./keys/private.key'),
    //   cert: require('fs').readFileSync('./keys/certificate.crt'),
    //   ca: require('fs').readFileSync('./keys/ca_bundle.crt'),
    // },
  }
}
