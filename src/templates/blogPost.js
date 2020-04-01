import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import Layout from '../components/Layout';
import BlogPost from '../components/BlogPost';

export default ({ data }) => {
  const blogPost = data.prismic.allBlog_posts.edges.slice(0, 1).pop();
  if (!blogPost) return null;

  const title = blogPost.node.title;
  const titleText = RichText.asText(title);

  return (
    <Layout title={titleText} pageTitle={titleText}>
      <BlogPost {...blogPost.node} />
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
            }
          }
        }
      }
    }
  }
`;
