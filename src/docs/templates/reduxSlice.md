# Template/Starter code for Redux Slices

## `_SLICE_NAME_`/index.ts

```tsx
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface State {}

const initialState: State = {};

export const slice = createSlice({
  name: '_SLICE_NAME_',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = slice.actions;

export default slice.reducer;
```
