import * as React from 'react';
import Page from '../layouts/Page';
import Link from '../components/Link';
import useSiteMetadata from '../useSiteMetadata';

const IndexPage = () => {
  const { headline } = useSiteMetadata();
  const nitor = <Link url="https://www.nitor.com/" text="Nitor" />;
  const haagaHelia = (
    <Link url="https://www.haaga-helia.fi/" text="Haaga-Helia" />
  );

  return (
    <Page pageTitle={headline}>
      <p>
        Senior software developer at {nitor}, graduated from {haagaHelia}
      </p>
      <p>
        My expertise is creating effective, dazzling and high-end digital
        services and web applications.
      </p>
    </Page>
  );
};

export default IndexPage;
