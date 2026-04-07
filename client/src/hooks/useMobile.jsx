import React, { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * useIsMobile Hook
 * Detects if the current viewport is below the mobile breakpoint (768px).
 * Useful for toggling mobile-specific UI like the Akidiva Hospital mobile menu.
 */
export function useIsMobile() {
  // 1. Initialized as undefined to avoid hydration mismatch 
  // if you ever move to a Server-Side Rendering (SSR) framework.
  const [isMobile, setIsMobile] = useState(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Listen for window resize/media query changes
    mql.addEventListener("change", onChange);
    
    // Set initial state
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    
    // Clean up listener on unmount
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // 2. The !! ensures we return a strict boolean (true/false) instead of undefined
  return !!isMobile;
}