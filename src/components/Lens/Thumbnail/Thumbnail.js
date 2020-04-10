/** @jsx jsx */
import { jsx } from '@emotion/core';
import { usePageParamsContext } from '../hooks';
import PhotoThumbnail from './PhotoThumbnail';
import VideoThumbnail from './VideoThumbnail';
import { LENS_MEDIA_TYPE_VIDEO, LENS_MEDIA_TYPE_PHOTO } from 'src/constants';
import styles from './styles';

const renderThumbnail = props => {
  const { item } = props;
  switch (item.media_type) {
    case LENS_MEDIA_TYPE_VIDEO:
      return <VideoThumbnail {...props} />;
    case LENS_MEDIA_TYPE_PHOTO:
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
      <a
        css={styles.link}
        href="#"
        onClick={e => {
          e.preventDefault();
          handleClick(item._meta.uid);
        }}
      >
        <div css={styles.container}>
          <div css={styles.media}>{renderThumbnail(props)}</div>
        </div>
      </a>
    </div>
  );
};
