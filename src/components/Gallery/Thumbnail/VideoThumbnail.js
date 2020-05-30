import React from 'react';

const getYouTubeThumbnailUrl = videoId =>
  `http://img.youtube.com/vi/${videoId}/0.jpg`;

export default ({ item }) => {
  const { title, video_id } = item;

  return (
    <img
      src={getYouTubeThumbnailUrl(video_id)}
      alt={`thumbnail for ${title}`}
    />
  );
};
