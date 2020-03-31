import React from 'react';
import { RichText } from 'prismic-reactjs';

const getYouTubeThumbnailUrl = videoId =>
  `http://img.youtube.com/vi/${videoId}/0.jpg`;

export default ({ album, item }) => {
  const { title, video_id, _meta } = item;
  const thumbnail_url = getYouTubeThumbnailUrl(video_id);
  const titleText = RichText.asText(title);

  return <img src={thumbnail_url} alt={`thumbnail for ${titleText}`} />;
};
