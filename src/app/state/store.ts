import { configureStore } from '@reduxjs/toolkit';

import { reducers } from './reducers';

export const makeStore = (preloadedState = {}) => {
  return configureStore({
    reducer: reducers,
    preloadedState,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
