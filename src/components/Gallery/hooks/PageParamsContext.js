import React, { createContext, useContext } from 'react';
import usePageParams from './usePageParams';

const PageParamsContext = createContext();

export const PageParamsContextProvider = ({ basepath, children }) => {
  return (
    <PageParamsContext.Provider value={usePageParams(basepath)}>
      {children}
    </PageParamsContext.Provider>
  );
};

export const usePageParamsContext = () => useContext(PageParamsContext);
