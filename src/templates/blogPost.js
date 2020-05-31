import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import Post from 'components/Post';
import { RedirectToNotFound } from 'components/NotFound';

export default ({ data }) => {
  const blogPost = data.prismic.allBlog_posts.edges.slice(0, 1).pop();
  if (!blogPost) {
    return <RedirectToNotFound />;
  }

  const title = blogPost.node.title;
  return (
    <Layout title={title}>
      <Post {...blogPost.node} />
    </Layout>
  );
};

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
              ... on PRISMIC_Blog_postBodyColumns {
                type
                label
                fields {
                  column
                }
              }
            }
          }
        }
      }
    }
  }
`;
