import React from 'react';
import { RichText } from 'prismic-reactjs';

import PhotoItem from './PhotoItem';
import VideoItem from './VideoItem';
import { MEDIA_TYPE_VIDEO, MEDIA_TYPE_PHOTO } from '../constants';

const renderMedia = item => {
  const { media_type, video_id, photo_link } = item;
  switch (media_type) {
    case MEDIA_TYPE_VIDEO:
      return <VideoItem videoId={video_id} />;
    case MEDIA_TYPE_PHOTO:
      return <PhotoItem photoLink={photo_link} />;
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
      {renderMedia(item)}
      <h3>{titleText}</h3>
      <div>{RichText.render(description)}</div>
    </div>
  );
};
