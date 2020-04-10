import React from 'react';
import { Router } from '@reach/router';

import Gallery from './Gallery';
import { PageParamsContextProvider } from './hooks';

const GalleryWithContext = ({ basepath, path, albums, items }) => (
  <PageParamsContextProvider basepath={basepath} path={path}>
    <Gallery albums={albums} items={items} default />
  </PageParamsContextProvider>
);

export default ({ basepath, albums, items }) => (
  <Router basepath={basepath}>
    {[`/:view`, `/:view/:albumUidOrItemUid`, `/:view/:albumUid/:itemUid`].map(
      path => (
        <GalleryWithContext
          key={path}
          path={path}
          basepath={basepath}
          albums={albums}
          items={items}
        />
      )
    )}
  </Router>
);
