import React from 'react';
import { RichText } from 'prismic-reactjs';

export default ({ album, item }) => {
  const { title, photo_link } = item;
  const titleText = RichText.asText(title);

  return <img src={photo_link.url} alt={`thumbnail for ${titleText}`} />;
};
