module.exports = {
  siteMetadata: {
    title: `25/8 Zine`,
    description: `By Artists, for Artists`,
    author: `258 Zine`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName: `258-zine.myshopify.com`,
        // The storefront access token
        accessToken: `e7d4b831f0ea6cbb4aa80abcb146b7f6`,
        verbose: true
      },
    },
    `gatsby-plugin-sass`
  ],
}
