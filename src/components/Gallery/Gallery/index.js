import React from 'react';

import Navigation from '../Navigation';
import Thumbnails from '../Thumbnails';
import Item from '../Item';
import { usePageParamsContext } from '../hooks';

const findItemByUid = (items, itemUid) => {
  let item = items.filter(({ primary }) => primary.slug === itemUid)[0];
  if (item) {
    item = {
      type: item.type,
      ...item.primary,
    };
  }
  return item;
};

export default ({ albums, items }) => {
  const { pageParams } = usePageParamsContext();
  const { itemUid } = pageParams;

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
