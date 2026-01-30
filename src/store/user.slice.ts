// Lib Imports.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Types.
import type { User } from 'better-auth';
import { getSession } from '@/lib/auth-client';

type Slice = {
  isLoading: boolean;
  error: string | null;
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
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.payload.error) {
          state.error = action.payload.error.message || null;
        } else if (action.payload.data === null) {
          state.error = null;
          state.data = null;
        } else {
          state.error = null;
          state.data = action.payload.data?.user;
        }
      });
  },
});

// Data-fetching logic.
const fetchCurrentUser = createAsyncThunk('user/fetchCurrentUserData', () => getSession());

// Exports.
export default slice.reducer;
