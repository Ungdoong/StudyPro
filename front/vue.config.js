
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    host: 't3coach16.p.ssafy.io',
    https: true
    // https: {
    //   key: require('fs').readFileSync('./keys/private.key'),
    //   cert: require('fs').readFileSync('./keys/certificate.crt'),
    //   ca: require('fs').readFileSync('./keys/ca_bundle.crt'),
    // },
  }
}