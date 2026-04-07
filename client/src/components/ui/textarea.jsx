"use client";

import * as React from "react";
import { useDialogComposition } from "@/components/ui/dialog";
import { useComposition } from "@/hooks/useComposition";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Textarea
 * High-performance text input with IME support for clinical notes and patient records.
 */

const Textarea = React.forwardRef(({
  className,
  onKeyDown,
  onCompositionStart,
  onCompositionEnd,
  ...props
}, ref) => {
  // Get dialog composition context to prevent accidental dialog closures during IME input
  const dialogComposition = useDialogComposition();

  const {
    onCompositionStart: handleCompositionStart,
    onCompositionEnd: handleCompositionEnd,
    onKeyDown: handleKeyDown,
  } = useComposition({
    onKeyDown: (e) => {
      // Check if Enter was pressed during an active IME composition
      const isComposing = e.nativeEvent.isComposing || dialogComposition?.justEndedComposing?.();

      // Prevent Enter from triggering "Submit" logic if the user is just confirming an IME selection
      if (e.key === "Enter" && !e.shiftKey && isComposing) {
        return;
      }

      onKeyDown?.(e);
    },
    onCompositionStart: (e) => {
      dialogComposition?.setComposing?.(true);
      onCompositionStart?.(e);
    },
    onCompositionEnd: (e) => {
      dialogComposition?.markCompositionEnd?.();
      // Delay reset for Safari compatibility
      setTimeout(() => {
        dialogComposition?.setComposing?.(false);
      }, 100);
      onCompositionEnd?.(e);
    },
  });

  return (
    <textarea
      ref={ref}
      data-slot="textarea"
      className={cn(
        "flex min-h-[120px] w-full rounded-2xl border-2 border-gray-100 bg-white px-4 py-3 text-sm font-medium transition-all outline-none",
        "placeholder:text-gray-400 hover:border-hospital-blue/30 focus:border-hospital-blue focus:ring-4 focus:ring-hospital-blue/10",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "resize-none", // Preventing manual resize for a cleaner UI; use auto-resize logic if needed
        className
      )}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };