const path = require(`path`);

module.exports = {
  // Seo here for SEO.jsx component
  siteMetadata: {
    title: `Starter for Gatsby.js`,
    description: `Starter for Gatsby.js with Bootstrap enabled (only bootstrap-grid.css for better optimization) + Styled Components. Also this Gatsby starter is optimized for SEO.`,
    author: `Denis Rusanov`,
    mail: `web@portfolio-denis.com`,
    phone: `+33 01 02 03 04 05`,
    siteUrl: `https://your-site-url.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          backgroundColor: `transparent`,
          quality: 90,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Your site name`,
        short_name: `Your short site name`,
        start_url: `/`,
        background_color: `#1b59c2`,
        theme_color: `#1b59c2`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
  ],
};
