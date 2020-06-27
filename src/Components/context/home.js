import { createContext, useContext } from 'react';

export const HomeContext = createContext();

export const useHome = () => {
  return useContext(HomeContext);
}