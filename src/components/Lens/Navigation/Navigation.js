/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';

import { usePageQueryContext } from '../hooks';
import ViewSelector from '../ViewSelector';
import AlbumSelector from '../AlbumSelector';
import { LENS_VIEW_BY_ALBUM } from 'src/constants';
import styles from './styles';

export default ({ albums }) => {
  const { query } = usePageQueryContext();
  const { view } = query;
  return (
    <div css={styles.root}>
      <ViewSelector firstAlbum={albums[0]} />
      {view === LENS_VIEW_BY_ALBUM && <AlbumSelector albums={albums} />}
    </div>
  );
};
