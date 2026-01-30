// Lib Imports.
import { createSlice } from '@reduxjs/toolkit';

// Types.
import type { User } from 'better-auth';
import type { PayloadAction } from '@reduxjs/toolkit';

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
  reducers: {
    setIsLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    setError(state, action: PayloadAction<Error>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Exports.
export default slice.reducer;
export const { setIsLoading, setError } = slice.actions;
