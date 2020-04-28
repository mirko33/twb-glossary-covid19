module.exports = {
	'publicPath': '',
  'transpileDependencies': [
    'vuetify'
  ],

  pwa: {
    name: 'TWB COVID-19 Glossary',
    themeColor: '#e8991c',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /glossary.json$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'twb-glossary-covid-19'
          }
        }
      ]
    }
  },

  assetsDir: 'src/assets',
  publicPath: ''
}
