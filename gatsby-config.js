module.exports = {
  siteMetadata: {
    title: `zzz design`,
    siteUrl: `https://zzzgin.github.io`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/zzz-icon.svg`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/pages/blogs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `readings`,
        path: `${__dirname}/src/pages/readings/`,
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 3,
              className: "table-of-contents"
            },
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 980,
            },
          },
        ]
      }
    },
  ],
}
