/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { graphql, Link } from 'gatsby';
import { Date, RichText } from 'prismic-reactjs';
import moment from 'moment';

import { linkResolver } from '../utils/linkResolver';
import Layout from '../components/Layout';
import styles from '../styles/index';

export default ({ data }) => {
  const blogPosts = data.prismic.allBlog_posts.edges;

  return (
    <Layout title="Index">
      <ul css={styles.list}>
        {blogPosts.map(({ node }) => {
          const { date, title, _meta } = node;
          return (
            <li css={styles.listItem}>
              <Link css={styles.link} to={linkResolver(_meta)}>
                <span css={styles.date}>
                  {moment(Date(date)).format('MMM DD, YYYY')}
                </span>
                <h3 css={styles.title}>{RichText.asText(title)}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
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
