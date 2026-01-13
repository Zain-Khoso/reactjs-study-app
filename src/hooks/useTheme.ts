// Lib Imports.
import { useState, useEffect } from 'react';

// This is a custom hook to manage and/or use the dark/light mode state.
export function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const isDark = () => theme === 'dark';
  const setIsDark = (isDark: boolean) => setTheme(isDark ? 'dark' : 'light');

  return { isDark, setIsDark };
}
