/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Date, RichText } from 'prismic-reactjs';
import moment from 'moment';

import { usePageParamsContext } from '../hooks';
import PhotoItem from './PhotoItem';
import VideoItem from './VideoItem';
import {
  GALLERY_MEDIA_TYPE_VIDEO,
  GALLERY_MEDIA_TYPE_PHOTO,
  GALLERY_VIEW_ALL,
  GALLERY_VIEW_BY_ALBUM,
} from 'src/constants';
import styles from './styles';

const renderMedia = item => {
  const { media_type, video_id, photo_link, titleText } = item;
  switch (media_type) {
    case GALLERY_MEDIA_TYPE_VIDEO:
      return <VideoItem videoId={video_id} />;
    case GALLERY_MEDIA_TYPE_PHOTO:
      return <PhotoItem photoLink={photo_link} titleText={titleText} />;
    default:
      return null;
  }
};

export default ({ item }) => {
  const { pageParams, setPageParams } = usePageParamsContext();
  const { title, description, date } = item;
  const titleText = RichText.asText(title);

  const handleClick = e => {
    e.preventDefault();
    setPageParams({
      view: pageParams.view,
      albumUid: pageParams.albumUid,
    });
  };

  return (
    <div>
      <div css={styles.back}>
        <a href="#" onClick={handleClick}>
          &#8592;
          <span>Back</span>
        </a>
      </div>
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
