/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Date } from 'prismic-reactjs';
import moment from 'moment';

import styles from './styles';

export default ({ children, className }) => (
  <time css={styles.date} className={className}>
    {children ? moment(Date(children)).format('MMM DD, YYYY') : ''}
  </time>
);
