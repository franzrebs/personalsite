/**@jsx jsx */
import { jsx } from '@emotion/core';

import Slices from 'components/Slices';
import Date from 'components/Date';
import styles from './styles';

export default ({ title, date, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Date>{date}</Date>
      <div css={styles.body}>
        <Slices body={body} />
      </div>
    </div>
  );
};
