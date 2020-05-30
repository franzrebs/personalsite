import React from 'react';

export default ({ item }) => {
  const { title, photo_url } = item;
  return <img src={photo_url.url} alt={`thumbnail for ${title}`} />;
};
