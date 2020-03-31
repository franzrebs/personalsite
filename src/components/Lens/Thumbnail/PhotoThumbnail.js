import React, { useEffect, useRef } from 'react';
import styles from './styles';

export default ({ album, item, handleLinkClick }) => {
  const photoDiv = useRef(null);

  useEffect(() => {
    const link = photoDiv.current.querySelector('a');
    link.addEventListener('click', e => {
      e.preventDefault();
      handleLinkClick();
    });
  }, []);

  const { photo_link } = item;
  return (
    <div
      ref={photoDiv}
      css={styles.photoItem}
      dangerouslySetInnerHTML={{ __html: photo_link.html }}
    />
  );
};
