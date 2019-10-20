var proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: 'Precision Parts Machining | Hytron Manufacturing',
    siteUrl: `https://hytron.netlify.com`,
    description:
      'Hytron Manufacturing is the leading precision machining and lathe company for over 40 years. We offer production machining of aluminum, brass, & steel.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hytron.com`,
        short_name: `Hytron`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FAE042`,
        display: `standalone`,
        icon: `src/img/hytron-man.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        TrackingId: 'UA-140479230-1',
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
    resolve: 'gatsby-plugin-iubenda-cookie-footer',
    options: {
      iubendaOptions:{"enableCMP":true,"lang":"en","siteId":1703143,"preferenceCookie":{"expireAfter":7},"cookiePolicyId":16197532, "banner":{ "position":"float-bottom-center","textColor":"white","backgroundColor":"#222","acceptButtonDisplay":true,"acceptButtonColor":"#0073CE","acceptButtonCaptionColor":"white","customizeButtonDisplay":true,"customizeButtonColor":"#212121","customizeButtonCaptionColor":"white" }},
    }
  },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  },
}
