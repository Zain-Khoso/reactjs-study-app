// Lib Imports.
import { createSlice } from '@reduxjs/toolkit';

// Types.
import type { User } from 'better-auth';

type Slice = {
  isLoading: boolean;
  error: Error | null;
  data: User | null;
};

// Slice state at page-load time.
const initialState: Slice = {
  isLoading: false,
  error: null,
  data: null,
};

// Slice definition.
const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// Exports.
export default slice.reducer;
