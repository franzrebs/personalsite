import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { AlbumSelector, Thumbnails } from '../components/Lens';

export default ({ data }) => {
  const lensAlbums = data.prismic.allLens_albums.edges;
  const lensItems = data.prismic.allLens_items.edges;
  return (
    <Layout title="Lens" pageTitle="Lens">
      <AlbumSelector albums={lensAlbums}></AlbumSelector>
      <Thumbnails items={lensItems.map(lensItem => lensItem.node)}></Thumbnails>
    </Layout>
  );
};

export const query = graphql`
  {
    prismic {
      allLens_albums(sortBy: date_DESC) {
        edges {
          node {
            _meta {
              type
              uid
            }
            date
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
