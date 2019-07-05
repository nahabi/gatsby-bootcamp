module.exports = {
  siteMetadata: {
    title: "Gatsby Bootcamp",
    author: "Nahabi W.",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "rmdixd9csqdx",
        accessToken: "gmNXoOFDzis5bBeuMiSq0cuDhM9EhuiHxGULJGyVTa4",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
}
