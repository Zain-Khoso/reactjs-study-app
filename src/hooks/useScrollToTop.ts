// Lib Imports.
import { useEffect } from 'react';
import { useLocation } from 'react-router';

// This hook listens to page change and moves the scroll to the top.
export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    document.getElementById('root')!.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname, hash]);
};
