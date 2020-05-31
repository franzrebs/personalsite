import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import Slices from 'components/Slices';
import { RedirectToNotFound } from 'components/NotFound';

export default ({ data }) => {
  const bio = data.prismic.allBios.edges.slice(0, 1).pop();
  if (!bio) {
    return <RedirectToNotFound />;
  }

  const { title, body } = bio.node;
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
              ... on PRISMIC_BioBodyColumns {
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
