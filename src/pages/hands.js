import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import Gallery from 'components/Gallery';

export default ({ data }) => {
  const albums = data.prismic.allHands_albums.edges;
  const items = data.prismic.allHands_items.edges;
  return (
    <Layout title="Hands">
      <Gallery basepath="/hands" albums={albums} items={items} />
    </Layout>
  );
};

export const query = graphql`
  {
    prismic {
      allHands_albums {
        edges {
          node {
            _meta {
              uid
              type
            }
            date
            items {
              item {
                ... on PRISMIC_Hands_item {
                  title
                  date
                  _meta {
                    uid
                    type
                  }
                  description
                  media_type
                  photo_link
                  video_id
                }
              }
            }
            title
          }
        }
      }
      allHands_items {
        edges {
          node {
            _meta {
              type
              uid
            }
            date
            description
            media_type
            photo_link
            title
            video_id
          }
        }
      }
    }
  }
`;
