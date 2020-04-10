import React, { useState, useEffect, useCallback, useRef } from 'react';
import { navigate } from '@reach/router';
import queryString from 'query-string';

let _prevQuery = {};
const setPrevQuery = query => {
  _prevQuery = { ...query };
};

export default location => {
  setPrevQuery(queryString.parse(location.search));

  const [query, setQuery] = useState({ ..._prevQuery });
  const setQueryCallback = useCallback(queryParams => {
    let query = {
      view: queryParams.view,
      albumUid: queryParams.albumUid,
      itemUid: queryParams.itemUid,
    };
    setQuery(query);
  }, []);

  useEffect(() => {
    if (
      query.view !== _prevQuery.view ||
      query.albumUid !== _prevQuery.albumUid ||
      query.itemUid !== _prevQuery.itemUid
    ) {
      navigate(`${location.pathname}?${queryString.stringify(query)}`);
      setPrevQuery(query);
    } else {
      console.log('ignore');
    }
  }, [query.view, query.albumUid, query.itemUid]);

  return { query: query, setQuery: setQueryCallback };
};
