module.exports = {
  siteMetadata: {
    title: `<kelvinsekx-codes/>`,
    description: `Ukuejubola Kelvin, software engineer in Lagos-Ibadan.currently serving as a corp member in Gawu Babangida,Niger state. He is open for awesome people to work with`,
    author: `kelvinsekx`,
    articles:{
      articles: "Article and Blog",
      shortnote: " Welcome love, I write about my works and findings on React js, Node.js, Web payment and all other emerging and contemporary web technologies I fall in love with",
      description: "Written by Kelvin Ukuejubola who lives in Nigeria building awesome things for awesome people.",
      twitter:"utdkelvin"
    }
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options:{

        // replace "UA-xxxxxxxx-x" with your Tracking ID
        trackingId: "UA-149884944-1"
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            subsets: [`latin`],
          },
          {
            family: `Roboto`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 590,
          //   },
          // },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          // `gatsby-remark-copy-linked-files`,
          // `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kelvinsekx blog`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#444`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icon/ // See below to configure properly
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

