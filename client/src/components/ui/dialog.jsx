"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Dialog Component
 * Premium, accessible modals for appointments, patient info, and urgent alerts.
 */

const DialogCompositionContext = React.createContext({
  isComposing: () => false,
  setComposing: () => {},
});

const useDialogComposition = () => React.useContext(DialogCompositionContext);

const Dialog = ({ children, ...props }) => {
  const composingRef = React.useRef(false);
  const contextValue = React.useMemo(() => ({
    isComposing: () => composingRef.current,
    setComposing: (v) => { composingRef.current = v; },
  }), []);

  return (
    <DialogCompositionContext.Provider value={contextValue}>
      <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
    </DialogCompositionContext.Provider>
  );
};

const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef(({ className, children, showCloseButton = true, onEscapeKeyDown, ...props }, ref) => {
  const { isComposing } = useDialogComposition();

  const handleEscapeKeyDown = React.useCallback((e) => {
    if (e.isComposing || isComposing()) {
      e.preventDefault();
      return;
    }
    onEscapeKeyDown?.(e);
  }, [isComposing, onEscapeKeyDown]);

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        onEscapeKeyDown={handleEscapeKeyDown}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border border-gray-100 bg-white p-8 shadow-2xl duration-200 rounded-[2rem] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close className="absolute right-6 top-6 rounded-full p-2 opacity-50 ring-offset-white transition-all hover:opacity-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-hospital-blue focus:ring-offset-2">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);

const DialogFooter = ({ className, ...props }) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3", className)} {...props} />
);

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    style={{ fontFamily: "Merriweather, serif" }}
    className={cn("text-2xl font-bold leading-tight tracking-tight text-gray-900", className)}
    {...props}
  />
));

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-500 leading-relaxed", className)}
    {...props}
  />
));

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};