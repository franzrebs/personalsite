import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import Post from 'components/Post';
import { RedirectToNotFound } from 'components/NotFound';

export default ({ data }) => {
  const page = data.prismic.allPages.edges.slice(0, 1).pop();
  if (!page) {
    return <RedirectToNotFound />;
  }

  const title = page.node.title;
  return (
    <Layout title={title}>
      <Post {...page.node} />
    </Layout>
  );
};

export const query = graphql`
  query Page($uid: String) {
    prismic {
      allPages(uid: $uid) {
        edges {
          node {
            title
            date
            body {
              ... on PRISMIC_PageBodyText {
                type
                label
                primary {
                  text
                }
              }
              ... on PRISMIC_PageBodyImage {
                type
                label
                primary {
                  image
                }
              }
              ... on PRISMIC_PageBodyEmbed {
                type
                label
                primary {
                  embed
                }
              }
              ... on PRISMIC_PageBodyColumns {
                type
                label
                fields {
                  column
                }
              }
            }
          }
        }
      }
    }
  }
`;
