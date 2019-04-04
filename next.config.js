// const withSass = require('@zeit/next-sass')
// const withCSS = require('@zeit/next-css')

// module.exports = withCSS(withSass({
//   target: 'serverless',
//   webpack (config) {
//     config.module.rules.push({
//       test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 8192,
//           publicPath: '/_next/static/',
//           outputPath: 'static/',
//           name: '[name].[ext]'
//         }
//       }
//     })
//     return config
//   }
// }))

const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = withCSS(withSass({
  postcssLoaderOptions: {
    parser: true,
    config: {
      ctx: {
        theme: JSON.stringify(process.env.REACT_APP_THEME)
      }
    }
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  }
}))