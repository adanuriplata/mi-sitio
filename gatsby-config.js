/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`200`, `300`, `400`, `700`]
          },
          {
            family: `Roboto`,
            subsets: [`latin`]
          },
        ],
      },
    }
    ]
}