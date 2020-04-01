/** @jsx jsx */
import { jsx } from '@emotion/core';
import PhotoThumbnail from './PhotoThumbnail';
import VideoThumbnail from './VideoThumbnail';
import { linkResolver } from '../../../utils/linkResolver';
import { MEDIA_TYPE_VIDEO, MEDIA_TYPE_PHOTO } from '../constants';
import styles from './styles';

const renderThumbnail = props => {
  const { item } = props;
  switch (item.media_type) {
    case MEDIA_TYPE_VIDEO:
      return <VideoThumbnail {...props} />;
    case MEDIA_TYPE_PHOTO:
      return <PhotoThumbnail {...props} />;
    default:
      return null;
  }
};

export default props => {
  const { item } = props;

  return (
    <div css={styles.root}>
      <a css={styles.link} href={linkResolver(item._meta)}>
        <div css={styles.container}>
          <div css={styles.media}>{renderThumbnail(props)}</div>
        </div>
      </a>
    </div>
  );
};
