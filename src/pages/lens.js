import React, { useCallback } from 'react';
import { graphql } from 'gatsby';
import { Router } from '@reach/router';

import Layout from 'components/Layout';
import { Lens, PageParamsContextProvider } from 'components/Lens';

export default ({ data, location }) => {
  const albums = data.prismic.allLens_albums.edges;
  const items = data.prismic.allLens_items.edges;
  const renderLensWithContextProvider = useCallback(
    path => (
      <PageParamsContextProvider
        location={location}
        basepath="/lens"
        path={path}
      >
        <Lens albums={albums} items={items} default />
      </PageParamsContextProvider>
    ),
    []
  );

  return (
    <Layout title="Lens">
      <Router basepath="/lens">
        {renderLensWithContextProvider(`/:view`)}
        {renderLensWithContextProvider(`/:view/:albumUidOrItemUid`)}
        {renderLensWithContextProvider(`/:view/:albumUid/:itemUid`)}
      </Router>
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
