/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useRef } from 'react';

import styles from './styles';

export default ({ photoLink }) => {
  const photoDiv = useRef(null);

  useEffect(() => {
    const link = photoDiv.current.querySelector('a');
    link.addEventListener('click', e => {
      e.preventDefault();
    });
  }, []);

  return (
    <div
      ref={photoDiv}
      css={styles.photoItem}
      dangerouslySetInnerHTML={{ __html: photoLink.html }}
    />
  );
};
