// Lib Imports.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Util Imports.
import { getSession } from '@/lib/auth-client';

// Types.
import type { Session, User } from 'better-auth';

type Slice = {
  isLoading: boolean;
  error?: string;
  data?: User;
  session?: Session;
};

// Slice state at page-load time.
const initialState: Slice = {
  isLoading: false,
  error: undefined,
  data: undefined,
  session: undefined,
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
        state.error = undefined;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message;
        state.data = undefined;
        state.session = undefined;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.payload.error) {
          state.error = action.payload.error.message;
          state.data = undefined;
          state.session = undefined;
        } else if (action.payload.data === null) {
          state.error = undefined;
          state.data = undefined;
          state.session = undefined;
        } else {
          state.error = undefined;
          state.data = action.payload.data.user;
          state.session = action.payload.data.session;
        }
      });
  },
});

// Data-fetching logic.
const fetchCurrentUser = createAsyncThunk('user/fetchCurrentUserData', () => getSession());

// Exports.
export default slice.reducer;
export { fetchCurrentUser };
