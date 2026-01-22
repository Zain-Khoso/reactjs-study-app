// Lib Imports.
import { createAuthClient } from 'better-auth/react';

// Better-Auth client configuration.
export const { signUp, signIn, useSession, signOut } = createAuthClient({
  baseURL: import.meta.env.VITE_BETTER_AUTH_URL,
  fetchOptions: {
    credentials: 'include',
  },
});
