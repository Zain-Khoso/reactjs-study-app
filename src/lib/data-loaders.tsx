// Util Imports.
import store from '@/store';
import { fetchCurrentUser } from '@/store/user.slice';

// Data loader to get the current user and store it inside redux's user slice.
async function fetchCurrentUserState() {
  const state = store.getState();

  if (!state.user.isLoading && !state.user.data) await store.dispatch(fetchCurrentUser());

  return null;
}

// Exports.
export { fetchCurrentUserState };
