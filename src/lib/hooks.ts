// Lib Imports.
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

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
export { useScrollToTop, useTheme };
