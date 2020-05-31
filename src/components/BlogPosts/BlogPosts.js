/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'gatsby';

import { linkResolver } from 'utils/linkResolver';
import Date from 'components/Date';
import styles from './styles';

export default ({ blogPosts }) => (
  <ul css={styles.list}>
    {blogPosts.map(({ date, title, _meta }) => {
      return (
        <li css={styles.listItem} key={`entry-${_meta.uid}`}>
          <Link css={styles.link} to={linkResolver(_meta)}>
            <Date css={styles.date}>{date}</Date>
            <h2 css={styles.title}>{title}</h2>
          </Link>
        </li>
      );
    })}
  </ul>
);
