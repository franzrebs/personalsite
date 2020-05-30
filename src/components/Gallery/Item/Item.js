/** @jsx jsx */
import { useEffect } from 'react';
import { jsx } from '@emotion/core';
import { RichText } from 'prismic-reactjs';
import { navigate } from 'gatsby';

import { usePageParamsContext } from '../hooks';
import PhotoItem from './PhotoItem';
import VideoItem from './VideoItem';
import {
  GALLERY_MEDIA_TYPE_VIDEO,
  GALLERY_MEDIA_TYPE_PHOTO,
} from 'src/constants';
import styles from './styles';

const renderMedia = item => {
  const { type, video_id, photo_url, title } = item;
  switch (type) {
    case GALLERY_MEDIA_TYPE_VIDEO:
      return <VideoItem videoId={video_id} />;
    case GALLERY_MEDIA_TYPE_PHOTO:
      return <PhotoItem photoUrl={photo_url} title={title} />;
    default:
      return null;
  }
};

export default ({ item }) => {
  useEffect(() => {
    if (!item) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);

  if (!item) {
    return null;
  }

  const { pageParams, setPageParams } = usePageParamsContext();
  const { title, description } = item;

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
        <button css={styles.backBtn} href="#" onClick={handleClick}>
          &#8592;
          <span>Back</span>
        </button>
      </div>
      <div css={styles.media}>{renderMedia({ ...item, title })}</div>
      <div css={styles.titleDescription}>
        <h1 css={styles.title}>{title}</h1>
        <div css={styles.description}>{RichText.render(description)}</div>
      </div>
    </div>
  );
};
