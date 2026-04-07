import { useRef } from "react";

/**
 * usePersistFn
 * A replacement for useCallback that keeps a stable function reference
 * without needing a dependency array.
 */
export function usePersistFn(fn) {
  const fnRef = useRef(fn);
  
  // Update the ref to the latest function on every render
  fnRef.current = fn;

  const persistFn = useRef(null);

  if (!persistFn.current) {
    // Create a stable wrapper function once
    persistFn.current = function (...args) {
      // Always call the latest version of the function stored in the ref
      return fnRef.current.apply(this, args);
    };
  }

  return persistFn.current;
}