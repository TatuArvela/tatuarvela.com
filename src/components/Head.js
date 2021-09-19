import * as React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../useSiteMetadata';

const Head = () => {
  const { description, title, siteUrl } = useSiteMetadata();
  const image = `${siteUrl}/image.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />

      <meta property='og:image' content={image} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />

      <meta name='twitter:card' content="summary_large_image" />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  )
}

export default Head;