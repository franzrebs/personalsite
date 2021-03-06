/** @jsx jsx */
import { jsx } from '@emotion/core';

import styles from './styles';

export default ({ text }) => (
  <div css={styles.root}>
    <h1 css={styles.text}>{text ? text : 'So, I kind of dropped the ball on this...'}</h1>
  </div>
);
