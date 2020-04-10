import React from 'react';
import { useParams } from '@reach/router';

import Navigation from '../Navigation';
import Thumbnails from '../Thumbnails';
import Item from '../Item';
import { usePageParamsContext } from '../hooks';

const findItemByUid = (items, itemUid) => {
  const item = items.filter(i => i.node._meta.uid === itemUid)[0];
  return item.node;
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
