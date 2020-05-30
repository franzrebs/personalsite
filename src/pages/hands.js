import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import Gallery from 'components/Gallery';

export default ({ data }) => {
  if (!data.prismic.allHandss.edges[0].node.body) {
    return <Layout title="Hands">coming soon...</Layout>;
  }

  let albums = [];
  let items = [];

  data.prismic.allHandss.edges[0].node.body.forEach(({ primary }) => {
    albums = [...albums, primary.album];
    items = [...items, ...primary.album.body];
  });

  return (
    <Layout title="Hands">
      <Gallery basepath="/hands" albums={albums} items={items} />
    </Layout>
  );
};

export const query = graphql`
  {
    prismic {
      allHandss {
        edges {
          node {
            _meta {
              uid
              type
            }
            body {
              ... on PRISMIC_HandsBodyAlbum {
                type
                label
                primary {
                  album {
                    ... on PRISMIC_Album {
                      album_title
                      _linkType
                      _meta {
                        type
                        uid
                      }
                      body {
                        ... on PRISMIC_AlbumBodyPhoto {
                          type
                          label
                          primary {
                            slug
                            description
                            photo_url
                            title
                          }
                        }
                        ... on PRISMIC_AlbumBodyVideo {
                          type
                          label
                          primary {
                            slug
                            description
                            title
                            video_id
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
