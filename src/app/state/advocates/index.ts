import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as asyncActions from './asyncActions';

import type { Advocates } from '../../types';
import { create } from 'domain';

export interface State {
  entries: Advocates;
  isLoading: boolean;
  error: string | null;
}

export const initialState: State = {
  entries: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'advocates',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(asyncActions.fetchAdvocates.fulfilled, (state, action: PayloadAction<Advocates>) => {
      state.entries = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    addCase(asyncActions.fetchAdvocates.rejected, (state, action) => {
      console.error('Failed to fetch advocates:', action.error);
      state.isLoading = false;
      state.error = action.error.message || 'Failed to fetch advocates';
    });
    addCase(asyncActions.fetchAdvocates.pending, (state) => {
      console.log('Fetching advocates...');
      state.isLoading = true;
      state.error = null;
    });
  },
});

export const {} = slice.actions;
export { asyncActions };

export const getAdvocates = (state: { advocates: State }) => state.advocates.entries || [];

export const selectors = {
  getAdvocates,
};

export default slice.reducer;
