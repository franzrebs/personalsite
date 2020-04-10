import { useState, useEffect, useCallback } from 'react';
import { navigate, useParams } from '@reach/router';
import { GALLERY_VIEW_BY_ALBUM, GALLERY_VIEW_ALL } from 'src/constants';

let _prevPageParams = {};
const setPrevPageParams = params => {
  _prevPageParams = { ...params };
};
const generateUrl = (basepath, params) => {
  let url = `${basepath}`;
  if (!!params.view) {
    url += `/${params.view}`;
  }
  if (!!params.albumUid) {
    url += `/${params.albumUid}`;
  }
  if (!!params.itemUid) {
    url += `/${params.itemUid}`;
  }
  return url;
};
const parseParams = params => {
  let albumUid = params.albumUid;
  let itemUid = params.itemUid;

  if (!!params.albumUidOrItemUid) {
    if (params.view === GALLERY_VIEW_ALL) {
      itemUid = params.albumUidOrItemUid;
    }
    if (params.view === GALLERY_VIEW_BY_ALBUM) {
      albumUid = params.albumUidOrItemUid;
    }
  }
  return {
    view: params.view,
    albumUid,
    itemUid,
  };
};

export default basepath => {
  const params = parseParams(useParams());
  setPrevPageParams(params);

  const [pageParams, setPageParams] = useState({ ..._prevPageParams });
  const setPageParamsCallback = useCallback(params => {
    setPageParams({
      view: params.view,
      albumUid: params.albumUid,
      itemUid: params.itemUid,
    });
  }, []);

  useEffect(() => {
    if (
      pageParams.view !== _prevPageParams.view ||
      pageParams.albumUid !== _prevPageParams.albumUid ||
      pageParams.itemUid !== _prevPageParams.itemUid
    ) {
      navigate(generateUrl(basepath, pageParams));
      setPrevPageParams(pageParams);
    } else {
      console.log('ignore');
    }
  }, [pageParams.view, pageParams.albumUid, pageParams.itemUid]);

  return { pageParams: pageParams, setPageParams: setPageParamsCallback };
};
