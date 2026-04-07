import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Alert Component
 * Used for inline feedback, warnings, and success messages.
 */

const alertVariants = cva(
  "relative w-full rounded-2xl border px-5 py-4 text-sm grid grid-cols-[auto_1fr] gap-x-4 items-start [&>svg]:size-5 [&>svg]:translate-y-0.5 shadow-sm transition-all",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-900 border-gray-100 [&>svg]:text-gray-400",
        info: "bg-blue-50 text-hospital-blue border-blue-100 [&>svg]:text-hospital-blue",
        success: "bg-green-50 text-hospital-green border-green-100 [&>svg]:text-hospital-green",
        destructive: "bg-red-50 text-red-700 border-red-100 [&>svg]:text-red-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "col-start-2 font-bold leading-none tracking-tight mb-1",
      className
    )}
    style={{ fontFamily: "Merriweather, serif" }}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "col-start-2 text-sm opacity-90 [&_p]:leading-relaxed",
      className
    )}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };