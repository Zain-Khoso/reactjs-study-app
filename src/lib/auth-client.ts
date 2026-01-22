// Lib Imports.
import { createAuthClient } from 'better-auth/react';

// Better-Auth client configuration.
const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_BETTER_AUTH_URL,
  fetchOptions: {
    credentials: 'include',
  },
});

// Social Sign On helper.
const signIn = (provider: string) => authClient.signIn.social({ provider });

// Exports.
export { signIn };
export const { useSession, signOut } = authClient;
