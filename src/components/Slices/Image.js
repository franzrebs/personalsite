import React from 'react';

export default ({ image }) => {
  return <img src={image.url} alt={image.alt} />;
};
