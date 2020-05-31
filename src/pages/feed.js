import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import Slices from 'components/Slices';
import { RedirectToNotFound } from 'components/NotFound';

export default ({ data }) => {
  const feed = data.prismic.allFeeds.edges.slice(0, 1).pop();
  if (!feed) {
    return <RedirectToNotFound />;
  }

  const { title, body } = feed.node;
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <Slices body={body} />
    </Layout>
  );
};

export const query = graphql`
  {
    prismic {
      allFeeds {
        edges {
          node {
            body {
              ... on PRISMIC_FeedBodyImage {
                type
                label
                primary {
                  image
                }
              }
              ... on PRISMIC_FeedBodyText {
                type
                label
                primary {
                  text
                }
              }
              ... on PRISMIC_FeedBodyEmbed {
                type
                label
                primary {
                  embed
                }
              }
              ... on PRISMIC_FeedBodyColumns {
                type
                label
                fields {
                  column
                }
              }
            }
            title
          }
        }
      }
    }
  }
`;
