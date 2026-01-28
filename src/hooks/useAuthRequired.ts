// Lib Imports.
import { useNavigate } from 'react-router';

// Hook Imports Imports.
import { useSession } from '@/lib/auth-client';
import { useEffect } from 'react';

// Custom hook to decide whether a page requires a user.
export function useAuthRequired(required: boolean | null) {
  const navigate = useNavigate();
  const { data } = useSession();

  useEffect(() => {
    if (required === false && data !== null) navigate('/arenas');

    if (required === true && data === null) navigate('/signin');
  }, [data, required]);
}
