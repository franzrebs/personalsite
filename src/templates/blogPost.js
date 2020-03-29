import React from 'react';
import { graphql } from 'gatsby';
import { Date, RichText } from 'prismic-reactjs';
import moment from 'moment';

import Layout from '../components/Layout';
import Slices from '../components/Slices';

export const query = graphql`
  query BlogPost($uid: String) {
    prismic {
      allBlog_posts(uid: $uid) {
        edges {
          node {
            title
            date
            body {
              ... on PRISMIC_Blog_postBodyText {
                type
                label
                primary {
                  text
                }
              }
              ... on PRISMIC_Blog_postBodyImage {
                type
                label
                primary {
                  image
                }
              }
              ... on PRISMIC_Blog_postBodyEmbed {
                type
                label
                primary {
                  embed
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  const blogPost = data.prismic.allBlog_posts.edges.slice(0, 1).pop();
  if (!blogPost) return null;

  const title = blogPost.node.title;
  const date = moment(Date(blogPost.node.date)).format('MMM DD, YYYY');
  const body = blogPost.node.body;

  return (
    <Layout title={title[0].text}>
      <h1>{RichText.asText(title)}</h1>
      <time>{date}</time>
      <div>
        <Slices body={body} />
      </div>
    </Layout>
  );
};
