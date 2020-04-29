module.exports = {
  'publicPath': '',
  "assetsDir": 'src/assets',

  "pwa": {
    "name": 'TWB COVID-19 Glossary',
    "themeColor": "#e8991c",
    "msTileColor": "#e8991c",
    "appleMobileWebAppCapable": 'yes',
    "manifestOptions": {
      "background_color": "#e8991c"
    },
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
    },
  },

  "transpileDependencies": [
    "vuetify"
  ],

  publicPath: ''
}
