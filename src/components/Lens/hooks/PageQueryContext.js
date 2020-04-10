import React, { createContext, useContext } from 'react';
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import usePageQuery from './usePageQuery';

const PageQueryContext = createContext();

export const PageQueryContextProvider = ({ location, children }) => {
  return (
    <PageQueryContext.Provider value={usePageQuery(location)}>
      {children}
    </PageQueryContext.Provider>
  );
};

export const usePageQueryContext = () => useContext(PageQueryContext);
