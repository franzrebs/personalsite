/** @jsx jsx */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { jsx, Global } from '@emotion/core';

import SEO from 'components/SEO';
import SideBar from 'components/SideBar';
import ComingSoon from 'components/ComingSoon';

import styles from './styles';

export default ({ children, title }) => {
  const data = useStaticQuery(
    graphql`
      {
        prismic {
          allSite_metadatas {
            edges {
              node {
                title
                description
                author
                is_private
              }
            }
          }
        }
      }
    `
  );

  const siteMetadata = data.prismic.allSite_metadatas.edges.slice(0, 1).pop();
  const isPrivate = siteMetadata ? siteMetadata.node.is_private : true;
  const showComingSoon = process.env.NODE_ENV === 'production' && isPrivate;

  return (
    <React.Fragment>
      <SEO
        siteMetadata={siteMetadata.node}
        title={showComingSoon ? 'Coming soon...' : title}
      />
      <Global styles={styles.global} />
      {showComingSoon ? (
        <ComingSoon />
      ) : (
        <div css={styles.root}>
          <SideBar css={styles.sidebar} />
          <main css={styles.main}>
            <div css={styles.pageContent}>{children}</div>
          </main>
        </div>
      )}
    </React.Fragment>
  );
};
