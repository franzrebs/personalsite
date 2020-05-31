import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import Gallery from 'components/Gallery';
import ComingSoon from 'components/ComingSoon';

export default ({ data }) => {
  if (!data.prismic.allLenss.edges[0].node.body) {
    return (
      <Layout title="Lens">
        <ComingSoon />
      </Layout>
    );
  }

  let albums = [];
  let items = [];

  data.prismic.allLenss.edges[0].node.body.forEach(({ primary }) => {
    albums = [...albums, primary.album];
    items = [...items, ...primary.album.body];
  });

  return (
    <Layout title="Lens">
      <Gallery basepath="/lens" albums={albums} items={items} />
    </Layout>
  );
};

export const query = graphql`
  {
    prismic {
      allLenss {
        edges {
          node {
            _meta {
              uid
              type
            }
            body {
              ... on PRISMIC_LensBodyAlbum {
                type
                label
                primary {
                  album {
                    ... on PRISMIC_Album {
                      album_title
                      _linkType
                      _meta {
                        uid
                        type
                      }
                      body {
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
                        ... on PRISMIC_AlbumBodyPhoto {
                          type
                          label
                          primary {
                            slug
                            description
                            title
                            photo_url
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
