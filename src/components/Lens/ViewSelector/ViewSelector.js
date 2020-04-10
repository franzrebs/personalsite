/** @jsx jsx */
import React, { useCallback } from 'react';
import { jsx } from '@emotion/core';
import { useParams } from '@reach/router';

import { usePageParamsContext } from '../hooks';
import { LENS_VIEW_BY_ALBUM, LENS_VIEW_ALL } from 'src/constants';
import styles from './styles';

const viewOptions = {
  [LENS_VIEW_ALL]: { value: LENS_VIEW_ALL, label: 'All' },
  [LENS_VIEW_BY_ALBUM]: { value: LENS_VIEW_BY_ALBUM, label: 'By Album' },
};

const generateSelectorOption = enableByAlbum => {
  let options = [viewOptions[LENS_VIEW_ALL]];
  if (enableByAlbum) {
    options = [...options, viewOptions[LENS_VIEW_BY_ALBUM]];
  }
  return options;
};

export default ({ firstAlbum }) => {
  const { pageParams, setPageParams } = usePageParamsContext();
  const { view } = pageParams;
  const handleClick = useCallback(selected => {
    const query = { view: selected };
    if (selected === LENS_VIEW_BY_ALBUM) {
      query.albumUid = firstAlbum.node._meta.uid;
    }
    setPageParams(query);
  }, []);

  return (
    <div css={styles.root}>
      <span css={styles.label}>View:</span>
      <ul css={styles.list}>
        {Object.keys(viewOptions).map(key => (
          <li key={`view-option-${key}`}>
            <a
              href={key}
              onClick={e => {
                e.preventDefault();
                handleClick(key);
              }}
              className={key === view ? 'active' : ''}
            >
              {viewOptions[key].label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
