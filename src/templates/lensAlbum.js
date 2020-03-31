import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import Layout from '../components/Layout';
import { AlbumSelector, Thumbnails } from '../components/Lens';

export default ({ data }) => {
  const albumList = data.prismic.albumList.edges;
  const album = data.prismic.album.edges.slice(0, 1).pop();
  if (!album) return null;

  const { title, _meta, items } = album.node;
  const titleText = RichText.asText(title);
  return (
    <Layout title={`Lens: ${titleText}`} pageTitle={`Lens: ${titleText}`}>
      <AlbumSelector albums={albumList}></AlbumSelector>
      <Thumbnails
        album={_meta.uid}
        items={items.map(({ item }) => item)}
      ></Thumbnails>
    </Layout>
  );
};

export const query = graphql`
  query LensAlbum($uid: String) {
    prismic {
      albumList: allLens_albums(sortBy: date_DESC) {
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
      album: allLens_albums(uid: $uid) {
        edges {
          node {
            _meta {
              type
              uid
            }
            date
            title
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
          }
        }
      }
    }
  }
`;
