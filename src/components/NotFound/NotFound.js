/** @jsx jsx */
import { jsx } from '@emotion/core';

import styles from './styles';

export default ({ text }) => (
  <div css={styles.root}>
    <h1 css={styles.text}>{text ? text : 'Page not found'}</h1>
  </div>
);
