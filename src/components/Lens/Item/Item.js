/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Date, RichText } from 'prismic-reactjs';
import moment from 'moment';

import PhotoItem from './PhotoItem';
import VideoItem from './VideoItem';
import { MEDIA_TYPE_VIDEO, MEDIA_TYPE_PHOTO } from '../constants';
import styles from './styles';

const renderMedia = item => {
  const { media_type, video_id, photo_link, titleText } = item;
  switch (media_type) {
    case MEDIA_TYPE_VIDEO:
      return <VideoItem videoId={video_id} />;
    case MEDIA_TYPE_PHOTO:
      return <PhotoItem photoLink={photo_link} titleText={titleText} />;
    default:
      return null;
  }
};

export default props => {
  const { item } = props;
  const { title, description, date } = item;
  const titleText = RichText.asText(title);

  return (
    <div>
      <div css={styles.media}>{renderMedia({ ...item, titleText })}</div>
      <div css={styles.titleDescription}>
        <h1 css={styles.title}>{`${titleText}, ${moment(Date(date)).format(
          'YYYY'
        )}`}</h1>
        <div css={styles.description}>{RichText.render(description)}</div>
      </div>
    </div>
  );
};
