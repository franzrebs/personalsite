require('dotenv').config();

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: `francesrebollidodotcom`,
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        pages: [
          {
            type: `Blog_post`,
            match: `/blog/:uid`,
            path: '/blog-preview',
            component: require.resolve('./src/templates/blogPost.js'),
          },
          {
            type: `Lens_album`,
            match: `/lens/album/:uid`,
            path: '/lens-album-preview',
            component: require.resolve('./src/templates/lensAlbum.js'),
          },
          {
            type: `Lens_item`,
            match: `/lens/:uid`,
            path: '/lens-item-preview',
            component: require.resolve('./src/templates/lensItem.js'),
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
