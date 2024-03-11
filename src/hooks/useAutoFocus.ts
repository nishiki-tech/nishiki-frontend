import { useEffect, useRef } from 'react';

/**
 * A hook to focus on an element that the ref is attached to
 * @param shouldFocus - Whether to focus on the target element. Typically, this is a state that changes when a user interacts with the UI.
 * @returns A ref to attach to the target element to focus on
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const [isDialogOpen, setIsDialogOpen] = useState(false);
 *
 *   // Focus on the button when the dialog is closed
 *   const ref = useAutoFocus<HTMLButtonElement>(!isDialogOpen);
 *
 *   return (
 *     <>
 *       <button ref={ref} onClick={() => setIsDialogOpen(true)}>Open Dialog</button>
 *       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>...</Dialog>
 *     </>
 *   );
 * };
 * ```
 */
export const useAutoFocus = <T extends HTMLElement>(shouldFocus: boolean) => {
  /** A ref to attach to the target element to focus on */
  const ref = useRef<T | null>(null);

  /* Focus on the target element when the condition specified as `shouldFocus` is met */
  useEffect(() => {
    if (shouldFocus) {
      ref.current?.focus();
    }
  }, [ref, shouldFocus]);

  return ref;
};
