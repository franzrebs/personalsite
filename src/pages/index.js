import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import BlogPosts from '../components/BlogPosts';

export default ({ data }) => {
  const blogPosts = data.prismic.allBlog_posts.edges;

  return (
    <Layout title="Index">
      <BlogPosts blogPosts={blogPosts.map(blogPost => blogPost.node)} />
    </Layout>
  );
};

export const query = graphql`
  {
    prismic {
      allBlog_posts(sortBy: date_DESC) {
        edges {
          node {
            date
            title
            _meta {
              uid
              type
            }
          }
        }
      }
    }
  }
`;
