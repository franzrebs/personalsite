import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import Layout from '../components/Layout';
import Slices from '../components/Slices';

export default ({ data }) => {
  const bio = data.prismic.allBios.edges.slice(0, 1).pop();
  if (!bio) return null;

  const { title, body } = bio.node;
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
      allBios {
        edges {
          node {
            body {
              ... on PRISMIC_BioBodyImage {
                type
                label
                primary {
                  image
                }
              }
              ... on PRISMIC_BioBodyText {
                type
                label
                primary {
                  text
                }
              }
              ... on PRISMIC_BioBodyEmbed {
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
