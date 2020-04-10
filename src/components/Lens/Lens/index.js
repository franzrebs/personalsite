import React from 'react';
import Navigation from '../Navigation';
import Thumbnails from '../Thumbnails';
import Item from '../Item';
import { usePageQueryContext } from '../hooks';

const findItemByUid = (items, itemUid) => {
  const item = items.filter(i => i.node._meta.uid === itemUid)[0];
  return item.node;
};

export default ({ albums, items }) => {
  const { query } = usePageQueryContext();
  const { itemUid } = query;
  return (
    <React.Fragment>
      {!!itemUid ? (
        <Item item={findItemByUid(items, itemUid)} />
      ) : (
        <React.Fragment>
          <Navigation albums={albums} />
          <Thumbnails albums={albums} items={items} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
