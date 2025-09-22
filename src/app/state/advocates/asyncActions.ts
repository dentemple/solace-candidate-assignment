import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAdvocates = createAsyncThunk('advocates/fetchAdvocates', async () => {
  const response = await fetch('/api/advocates');
  const jsonResponse = await response.json();
  return jsonResponse.data;
});
