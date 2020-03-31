import React from 'react';
import { RichText } from 'prismic-reactjs';

import Layout from '../components/Layout';
import Slices from '../components/Slices';

export default ({ data }) => {
  const feed = data.prismic.allFeeds.edges.slice(0, 1).pop();
  if (!feed) return null;

  const { title, body } = feed.node;
  const titleText = RichText.asText(title);
  return (
    <Layout title={titleText} pageTitle={titleText}>
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
            }
            title
          }
        }
      }
    }
  }
`;
