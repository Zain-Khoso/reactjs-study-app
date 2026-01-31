// Lib Imports.
import { createAuthClient } from 'better-auth/react';
import { inferAdditionalFields } from 'better-auth/client/plugins';

// Better-Auth client configuration.
const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_BETTER_AUTH_URL,
  fetchOptions: {
    credentials: 'include',
  },
  plugins: [
    inferAdditionalFields({
      user: {
        headline: {
          type: 'string',
          required: true,
          defaultValue: 'Hi there! I am new.',
        },
        currentStreak: {
          type: 'number',
          required: true,
          defaultValue: 0,
        },
        longestStreak: {
          type: 'number',
          required: true,
          defaultValue: 0,
        },
      },
    }),
  ],
});

// Social Sign On helper.
const signIn = (provider: string) =>
  authClient.signIn.social({ provider, callbackURL: import.meta.env.VITE_FRONTEND_URL });

// Type Definitions.
type Session = typeof authClient.$Infer.Session.session;
type User = typeof authClient.$Infer.Session.user;

// Exports.
export { signIn };
export type { Session, User };
export const { signOut, getSession } = authClient;
