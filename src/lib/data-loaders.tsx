// Lib Imports.
import { redirect } from 'react-router';

// Util Imports.
import store from '@/store';
import { fetchCurrentUser } from '@/store/user.slice';

// Route loader to get the current user and store it inside redux's user slice.
async function fetchCurrentUserState() {
  const state = store.getState();

  if (state.user.isLoading || state.user.data) return null;

  await store.dispatch(fetchCurrentUser());

  return null;
}

// Route loader that acts as a auth middleware.
async function authenticationRequired(required: boolean) {
  await fetchCurrentUserState();

  const state = store.getState();

  if (required && !state.user.data) return redirect('/login');

  if (!required && state.user.data) return redirect('/dashboard/arenas');
}

// Exports.
export { fetchCurrentUserState, authenticationRequired };
