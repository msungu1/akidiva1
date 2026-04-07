"use client";

import * as React from "react";
import { useDialogComposition } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Input Component
 * High-performance input with advanced IME support for global compatibility.
 */

const Input = React.forwardRef(({ 
  className, 
  type, 
  onKeyDown, 
  onCompositionStart, 
  onCompositionEnd, 
  ...props 
}, ref) => {
  const dialogComposition = useDialogComposition();

  // Integrated composition logic to handle Safari timing and IME issues
  const handleCompositionStart = (e) => {
    dialogComposition?.setComposing?.(true);
    onCompositionStart?.(e);
  };

  const handleCompositionEnd = (e) => {
    dialogComposition?.markCompositionEnd?.();
    // Delay setting composing to false to handle Safari's event order
    setTimeout(() => {
      dialogComposition?.setComposing?.(false);
    }, 150);
    onCompositionEnd?.(e);
  };

  const handleKeyDown = (e) => {
    const isComposing = e.nativeEvent.isComposing || dialogComposition?.justEndedComposing?.();
    
    // Block "Enter" from triggering submission if we are still composing characters
    if (e.key === "Enter" && isComposing) {
      return;
    }
    onKeyDown?.(e);
  };

  return (
    <input
      ref={ref}
      type={type}
      data-slot="input"
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      onKeyDown={handleKeyDown}
      className={cn(
        "flex h-12 w-full min-w-0 rounded-2xl border-2 border-gray-100 bg-white px-4 py-2 text-base shadow-sm transition-all outline-none",
        "placeholder:text-gray-400 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "focus-visible:border-hospital-blue focus-visible:ring-4 focus-visible:ring-hospital-blue/10",
        "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "aria-invalid:border-red-500 aria-invalid:ring-red-500/10",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };