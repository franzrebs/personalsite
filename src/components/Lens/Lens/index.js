import React, { useStete, useEffect } from 'react';

import { AlbumSelector, Thumbnails } from '../../components/Lens';

export default ({ albums }) => {
  const [items, setItems] = useStete(null);
  useEffect(() => {});

  return (
    <React.Fragment>
      <AlbumSelector albums={albums}></AlbumSelector>
      {items === null ? (
        '...'
      ) : (
        <Thumbnails items={items.map(items => items.node)}></Thumbnails>
      )}
    </React.Fragment>
  );
};
