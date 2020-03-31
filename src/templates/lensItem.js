import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import moment from 'moment';

import Layout from '../components/Layout';
import { Item } from '../components/Lens';

export default ({ data }) => {
  const item = data.prismic.allLens_items.edges.slice(0, 1).pop();
  if (!item) return null;

  const titleText = RichText.asText(item.node.title);
  return (
    <Layout title={titleText} pageTitle={titleText}>
      <Item item={item.node} />
    </Layout>
  );
};

export const query = graphql`
  query LensItem($uid: String) {
    prismic {
      allLens_items(uid: $uid) {
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
