/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'gatsby';
import { Date, RichText } from 'prismic-reactjs';
import moment from 'moment';

import { linkResolver } from '../../utils/linkResolver';
import styles from './styles';

export default ({ blogPosts }) => (
  <ul css={styles.list}>
    {blogPosts.map(({ date, title, _meta }) => {
      return (
        <li css={styles.listItem} key={`blog-${_meta.uid}`}>
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
);
