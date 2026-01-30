// Lib Imports.
import { configureStore } from '@reduxjs/toolkit';

// Util Imports.
import userSlice from './user.slice';

// Global state store of the application.
const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

// Type Definitions.
type StoreT = ReturnType<typeof store.getState>;
type StoreDispatchT = typeof store.dispatch;

// Exports.
export default store;
export { type StoreT, type StoreDispatchT };
