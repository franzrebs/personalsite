/** @jsx jsx */
import { jsx } from '@emotion/core';
import styles from './styles';

export default ({ photoLink, titleText }) => {
  return <img css={styles.photo} src={photoLink.url} alt={titleText} />;
};
