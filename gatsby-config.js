module.exports = {
  siteMetadata: {
    title: `Matheswaaran`,
    description: `All about Mat (Matheswaaran)😉`,
    author: `@matheswaaran`,
    resume: "https://tinyurl.com/matsresume",
    mail: "matheswaaran@gmail.com",
    github: "https://github.com/matheswaaran",
    twitter: "https://twitter.com/matheswaaran_s",
    linkedIn: "https://www.linkedin.com/in/matheswaaran/",
    instagram: "https://instagram.com/matheswaaran"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-mdx`,
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
        name: `matheswaaran.com`,
        short_name: `All about Mat`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
