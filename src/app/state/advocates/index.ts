import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import * as asyncActions from './asyncActions';

import type { Advocates } from '../../types';

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

export const selectors = {
  getAdvocates: (rootState: { advocates: State }) => rootState.advocates.entries || [],
  getFilteredAdvocates: ({ advocates }: { advocates: State }) => {
    const searchTerm = ''; // TBD

    return (advocates.entries || []).filter((advocate) => {
      return (
        advocate.firstName.includes(searchTerm) ||
        advocate.lastName.includes(searchTerm) ||
        advocate.city.includes(searchTerm) ||
        advocate.degree.includes(searchTerm) ||
        advocate.specialties.some((specialty) => specialty.includes(searchTerm))
        // advocate.yearsOfExperience.includes(searchTerm) // TODO
      );
    });
  },
  getIsLoading: (rootState: { advocates: State }) => rootState.advocates.isLoading,
  getError: (rootState: { advocates: State }) => rootState.advocates.error,
};

export default slice.reducer;
