import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author,
          description,
          headline,
          image,
          siteUrl,
          title,
        }
      }
    }
  `);

  const { siteMetadata } = data.site;

  return siteMetadata;
}

export default useSiteMetadata;
