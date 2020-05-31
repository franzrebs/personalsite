import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import Layout from 'components/Layout';
import Slices from 'components/Slices';
import { RedirectToNotFound } from 'components/NotFound';

export default ({ data }) => {
  const feed = data.prismic.allFeeds.edges.slice(0, 1).pop();
  if (!feed) {
    return <RedirectToNotFound />;
  }

  const { title, body } = feed.node;
  const titleText = RichText.asText(title);
  return (
    <Layout title={titleText}>
      <h1>{titleText}</h1>
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
