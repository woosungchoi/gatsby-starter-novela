module.exports = {
  siteMetadata: {
    title: `우성짱의 Gatsby 블로그`,
    name: `우성짱`,
    siteUrl: `https://gatsby.woosung.vercel.app`,
    description: `우성짱의 Gatsby 블로그입니다. Gatsby.js를 활용하여 운영하고 있습니다.`,
    hero: {
      heading: `우성짱의 Gatsby.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/solut2000`,
      },
      {
        name: `github`,
        url: `https://github.com/woosungchoi`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};