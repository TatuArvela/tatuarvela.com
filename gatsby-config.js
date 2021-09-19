const siteMetadata = {
  author: 'Tatu Arvela',
  description: 'Software developer at Nitor, graduated from Haaga-Helia',
  headline: 'Making digital things',
  image: 'static/image.png',
  siteUrl: 'https://tatuarvela.com',
  title: 'Tatu Arvela — Making digital things',
  themeColor: '#040f3d'
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: ['gatsby-plugin-styled-components', 'gatsby-plugin-react-helmet', {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: siteMetadata.title,
      short_name: `Tatu Arvela`,
      description: siteMetadata.description,
      start_url: `/`,
      background_color: siteMetadata.themeColor,
      theme_color: siteMetadata.themeColor,
      display: `standalone`,
      icon: `static/icon.png`
    }
  }]
};
