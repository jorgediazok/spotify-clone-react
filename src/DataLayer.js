import React, { createContext, useContext, useReducer } from 'react';

// @ts-ignore
export const DataLayercontext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayercontext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayercontext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayercontext);
