/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { useParams } from '@reach/router';

import { usePageParamsContext } from '../hooks';
import ViewSelector from '../ViewSelector';
import AlbumSelector from '../AlbumSelector';
import { GALLERY_VIEW_BY_ALBUM } from 'src/constants';
import styles from './styles';

export default ({ albums }) => {
  const { pageParams } = usePageParamsContext();
  const { view } = pageParams;
  return (
    <div css={styles.root}>
      <ViewSelector firstAlbum={albums[0]} />
      {view === GALLERY_VIEW_BY_ALBUM && <AlbumSelector albums={albums} />}
    </div>
  );
};
