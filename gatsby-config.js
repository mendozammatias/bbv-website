const theme = require('./src/utils/theme');
const path = require('path');

const activeEnv = process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  pathPrefix: process.env.GATSBY_PATH_PREFIX || '.',
  siteMetadata: {
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        showSpinner: true,
        color: theme.palette.primary.main,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.PIXEL_ID,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_SNIPPET_VERSION,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
        gtagConfig: {
          optimize_id: process.env.GA_OPTIMIZE_ID,
        },
        pluginConfig: {
          head: true,
          respectDNT: false,
          exclude: [],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        display: `minimal-ui`,
        short_name: `Website`,
        name: `BlackBox Vision | Website`,
        icon: `content/assets/blackbox-logo.png`,
        theme_color: theme.palette.primary.light,
        background_color: theme.palette.primary.main,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        navigateFallbackWhitelist: [],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './content/assets/blackbox-logo.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true,
        },
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `website-images/`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@constants': path.resolve(__dirname, 'src/constants'),
          '@containers': path.resolve(__dirname, 'src/containers'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@locales': path.resolve(__dirname, 'src/locales'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@static': path.resolve(__dirname, 'static/'),
          '@i18n': path.resolve(__dirname, 'src/i18n'),
        },
        extensions: [],
      },
    },
  ],
};
