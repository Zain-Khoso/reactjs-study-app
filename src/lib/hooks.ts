// Lib Imports.
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';

// Util Imports.
import { useSession } from '@/lib/auth-client';

// Custom hook to decide whether a page requires a user.
function useAuthRequired(required: boolean | null) {
  const navigate = useNavigate();
  const { data } = useSession();

  useEffect(() => {
    if (required === false && data !== null) navigate('/arenas');

    if (required === true && data === null) navigate('/signin');
  }, [data, required]);
}

// This hook listens to page change and moves the scroll to the top.
function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    document.getElementById('root')!.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname, hash]);
}

// This manages and/or uses the dark/light mode state.
function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const isDark = () => theme === 'dark';
  const setIsDark = (isDark: boolean) => setTheme(isDark ? 'dark' : 'light');

  return { isDark, setIsDark };
}

// Exports.
export { useAuthRequired, useScrollToTop, useTheme, useSession };
