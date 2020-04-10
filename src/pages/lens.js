import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import { Lens, PageQueryContextProvider } from 'components/Lens';

export default ({ data, location }) => {
  const albums = data.prismic.allLens_albums.edges;
  const items = data.prismic.allLens_items.edges;
  return (
    <Layout title="Lens">
      <PageQueryContextProvider location={location}>
        <Lens albums={albums} items={items} />
      </PageQueryContextProvider>
    </Layout>
  );
};

export const query = graphql`
  {
    prismic {
      allLens_albums {
        edges {
          node {
            _meta {
              uid
              type
            }
            date
            items {
              item {
                ... on PRISMIC_Lens_item {
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
      allLens_items {
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
