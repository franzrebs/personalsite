/** @jsx jsx */
import { jsx } from '@emotion/core';

import { usePageParamsContext } from '../hooks';
import Thumbnail from '../Thumbnail';
import { LENS_VIEW_BY_ALBUM, LENS_VIEW_ALL } from 'src/constants';
import styles from './styles';

const getAlbumItems = (albums, albumUid) => {
  const album = albums.filter(album => album.node._meta.uid === albumUid)[0];
  return album.node.items.map(item => item.item).filter(item => !!item);
};

export default ({ items, albums }) => {
  const { pageParams } = usePageParamsContext();
  const { view, albumUid } = pageParams;
  console.log(pageParams);
  const thumbnails =
    view === LENS_VIEW_ALL
      ? items.map(item => item.node)
      : getAlbumItems(albums, albumUid);

  return (
    <div css={styles.root}>
      {thumbnails.map((item, index) => (
        <Thumbnail
          key={`lens-item-${index}`}
          album={albumUid}
          item={item}
        ></Thumbnail>
      ))}
    </div>
  );
};
