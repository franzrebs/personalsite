/** @jsx jsx */
import { useState, useRef, useEffect } from 'react';
import { jsx } from '@emotion/core';
import { RichText } from 'prismic-reactjs';

import { usePageParamsContext } from '../hooks';
import styles from './styles';

let _prevStyle = { width: 0, marginLeft: 0 };
const setPrevStyle = style => {
  _prevStyle = { ...style };
};
export default ({ albums }) => {
  const albumsBoxElement = useRef(null);
  const listElement = useRef(null);
  const [style, setStyle] = useState({ ..._prevStyle });
  const { pageParams, setPageParams } = usePageParamsContext();
  const { albumUid } = pageParams;

  const getCurremtIndex = () =>
    albums.findIndex(al => al.node._meta.uid === albumUid);

  const isLastAlbum = () => {
    const currentIndex = getCurremtIndex();
    return currentIndex >= albums.length - 1;
  };

  const isFirstAlbum = () => {
    const currentIndex = getCurremtIndex();
    return currentIndex < 1;
  };

  const handlePrevClick = async () => {
    if (!isFirstAlbum()) {
      const currentIndex = getCurremtIndex();
      navigateToAlbum(currentIndex - 1);
    }
  };

  const handleNextClick = async () => {
    if (!isLastAlbum()) {
      const currentIndex = getCurremtIndex();
      navigateToAlbum(currentIndex + 1);
    }
  };

  const navigateToAlbum = async index => {
    const albumUid = albums[index].node._meta.uid;
    setPageParams({ ...pageParams, albumUid });
  };

  useEffect(() => {
    const currentIndex = getCurremtIndex();
    const listItems = [...listElement.current.querySelectorAll('li')];

    const width = listItems[currentIndex].offsetWidth;

    const marginLeft = listItems
      .slice(0, currentIndex)
      .reduce((total, li) => total - li.offsetWidth, 0);

    setPrevStyle({ width, marginLeft });
    setStyle({ width, marginLeft });
  }, [getCurremtIndex]);

  return (
    <div css={styles.root}>
      <div css={styles.wrapper}>
        <button
          css={styles.button}
          key={`prev`}
          className={isFirstAlbum() ? 'disabled' : ''}
          onClick={handlePrevClick}
        >
          &#8592;
        </button>
        <div
          ref={albumsBoxElement}
          css={styles.albums}
          style={{ width: style.width }}
        >
          <ul
            ref={listElement}
            css={styles.list}
            style={{ marginLeft: style.marginLeft }}
          >
            {albums.map(album => (
              <li key={`album-${album.node._meta.uid}`}>
                {RichText.asText(album.node.title)}
              </li>
            ))}
          </ul>
        </div>
        <button
          css={styles.button}
          key={`next`}
          className={isLastAlbum() ? 'disabled' : ''}
          onClick={handleNextClick}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};
