/** @jsx jsx */
import { jsx } from '@emotion/core';
import styles from './styles';

export default ({ photoUrl, title }) => {
  return <img css={styles.photo} src={photoUrl.url} alt={title} />;
};
