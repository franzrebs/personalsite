/** @jsx jsx */
import { jsx } from '@emotion/core';
import Thumbnail from '../Thumbnail';

import styles from './styles';

export default ({ album, items }) => {
  return (
    <div css={styles.root}>
      {items.map((item, index) => (
        <Thumbnail
          key={`lens-item-${index}`}
          album={album}
          item={item}
        ></Thumbnail>
      ))}
    </div>
  );
};
