import { RefObject, useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useOutsideClick = (ref: RefObject<HTMLElement>, callback?: () => void) => {
  useEffect(() => {
    // if there is no callback, return
    if (callback) {
      /**
       * Invoke callback if there is a click on outside of element
       */
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      };

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [ref, callback]);
};
