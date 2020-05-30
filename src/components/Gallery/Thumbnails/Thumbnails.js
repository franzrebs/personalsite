/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useMemo } from 'react';
import { navigate } from 'gatsby';
import { usePageParamsContext } from '../hooks';
import Thumbnail from '../Thumbnail';
import { GALLERY_VIEW_ALL } from 'src/constants';
import styles from './styles';

const composeItemProps = item => ({ type: item.type, ...item.primary });

const getAlbumItems = (albums, albumUid) => {
  const album = albums.filter(album => album._meta.uid === albumUid)[0];
  if (!album) {
    return [];
  }
  return album.body.map(item => composeItemProps(item));
};

export default ({ items, albums }) => {
  const { pageParams } = usePageParamsContext();
  const { view, albumUid } = pageParams;
  const thumbnails = useMemo(() => {
    return view === GALLERY_VIEW_ALL
      ? items.map(item => composeItemProps(item))
      : getAlbumItems(albums, albumUid);
  }, [view, items, albums, albumUid]);

  useEffect(() => {
    if (thumbnails.length < 1) {
      navigate('/');
    }
  }, [thumbnails]);

  if (thumbnails.length < 1) {
    return null;
  }

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
