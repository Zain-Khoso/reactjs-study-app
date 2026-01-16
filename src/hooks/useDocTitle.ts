// Lib Imports.
import { useEffect } from 'react';

// Custom hook to update a page's title.
export function useDocTitle(title?: string) {
  useEffect(() => {
    document.title = title ? title + ' | Preplus' : document.title;
  }, [title]);
}
