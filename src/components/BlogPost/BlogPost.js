/**@jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Date, RichText } from 'prismic-reactjs';
import moment from 'moment';

import Slices from '../../components/Slices';
import styles from './styles';

export default ({ title, date, body }) => {
  const formattedDate = moment(Date(date)).format('MMM DD, YYYY');
  const titleText = RichText.asText(title);
  return (
    <React.Fragment>
      <h1>{titleText}</h1>
      <time>{formattedDate}</time>
      <div css={styles.body}>
        <Slices body={body} />
      </div>
    </React.Fragment>
  );
};
