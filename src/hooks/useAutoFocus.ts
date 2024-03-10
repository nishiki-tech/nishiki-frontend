import { useEffect, useRef } from 'react';

/**
 * A hook to focus on an element that the ref is attached to
 * @param shouldFocus - a condition to focus on the target element
 * @returns a ref to attach to the target element to focus on
 */
export const useAutoFocus = <T extends HTMLElement>(shouldFocus: boolean) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (shouldFocus) {
      ref.current?.focus();
    }
  }, [ref, shouldFocus]);

  return ref;
};
