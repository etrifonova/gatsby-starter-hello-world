/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // pathPrefix: "/https://github.com/etrifonova/gatsby-starter-hello-world",
  pathPrefix: "/gatsby-starter-hello-world",
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: '@etrifonova',
    person: {name: 'elena', age: 34},
    simpleData:['item 1', 'item 2'],
    complexData: [
      {name: 'elena', age: 34},
      {name: 'denis', age: 36},
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
