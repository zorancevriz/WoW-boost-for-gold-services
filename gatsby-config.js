const config = require('./config');

module.exports = {
  start_url: config.pathPrefix || config.manifestStartUrl,

  siteMetadata: {
    siteUrl: `https://wowboostforgoldservicesmain.gatsbyjs.io`,
    title: config.siteTitle,
  },
 plugins: [
       {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-PRGGJF84XM", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
        `gatsby-plugin-sitemap`,

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://wowboostforgoldservicesmain.gatsbyjs.io/',
        
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    


      

    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
