module.exports = {
  siteMetadata: {
    title: `Moving analytics React Starter`,
    description: `Starter file getting ready before starting the test project`,
    author: `by David Lee`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://sandbox.movinganalytics.com/test/indicators`,
        headers: {
          Authorization: `Bearer your-github-token`
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Moving Analystics",
        short_name: "MA Test project",
        start_url: "/",
        background_color: "#524763",
        theme_color: "#524763",
        display: "minimal-ui"
      }
    }
  ]
};
