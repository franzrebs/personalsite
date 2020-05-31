/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';

import Nav from 'components/Nav';
import styles from './styles';

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        prismic {
          allSite_metadatas {
            edges {
              node {
                title
                description
                author
              }
            }
          }
        }
      }
    `
  );

  const site_metadata = data.prismic.allSite_metadatas.edges.slice(0, 1).pop();
  if (!site_metadata) return null;

  return (
    <div css={styles.root}>
      <a css={styles.siteName} href="/">
        {site_metadata.node.title}
      </a>
      <Nav />
    </div>
  );
};
