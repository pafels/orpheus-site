module.exports = {
  siteMetadata: {
    title: `Маркиране на маршрути за планинско колоездене`,
    description: `Ръководство и стандарт за маркиране на маршрути за планинско колоездене`,
    author: `Павел Сидеров, Васил Тодев, Любомир Ботушаров, Владимир Конушлиев`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-slug`, `gatsby-remark-autolink-headers`],
      },
    },
  ],
}
