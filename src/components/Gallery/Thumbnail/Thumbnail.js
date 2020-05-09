/** @jsx jsx */
import { jsx } from '@emotion/core';
import { usePageParamsContext } from '../hooks';
import PhotoThumbnail from './PhotoThumbnail';
import VideoThumbnail from './VideoThumbnail';
import {
  GALLERY_MEDIA_TYPE_VIDEO,
  GALLERY_MEDIA_TYPE_PHOTO,
} from 'src/constants';
import styles from './styles';

const renderThumbnail = props => {
  const { item } = props;
  switch (item.media_type) {
    case GALLERY_MEDIA_TYPE_VIDEO:
      return <VideoThumbnail {...props} />;
    case GALLERY_MEDIA_TYPE_PHOTO:
      return <PhotoThumbnail {...props} />;
    default:
      return null;
  }
};

export default props => {
  const { pageParams, setPageParams } = usePageParamsContext();
  const { item } = props;
  const handleClick = itemUid => {
    setPageParams({
      ...pageParams,
      itemUid: itemUid,
    });
  };

  return (
    <div css={styles.root}>
      <button
        css={styles.link}
        onClick={e => {
          e.preventDefault();
          handleClick(item._meta.uid);
        }}
      >
        <div css={styles.container}>
          <div css={styles.media}>{renderThumbnail(props)}</div>
        </div>
      </button>
    </div>
  );
};
