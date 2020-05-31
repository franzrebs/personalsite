/** @jsx jsx */
import { jsx } from '@emotion/core';
import { RichText } from 'prismic-reactjs';
import styles from './styles';

export default columns => {
  return (
    <div css={styles.columns}>
      {Object.values(columns).map(({ column }, index) => (
        <div key={index} css={styles.column}>
          {RichText.render(column)}
        </div>
      ))}
    </div>
  );
};
