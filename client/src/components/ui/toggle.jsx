"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Toggle Component
 * Independent binary state button for favorites, pins, or specific UI filters.
 */

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-blue-50 hover:text-hospital-blue",
        outline:
          "border-2 border-gray-100 bg-transparent hover:bg-blue-50 hover:border-blue-100 hover:text-hospital-blue shadow-sm",
      },
      size: {
        default: "h-11 px-4 min-w-11",
        sm: "h-9 px-3 min-w-9 text-xs",
        lg: "h-14 px-6 min-w-14 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(
      toggleVariants({ variant, size }),
      "data-[state=on]:bg-hospital-blue data-[state=on]:text-white data-[state=on]:shadow-md",
      "focus-visible:ring-4 focus-visible:ring-hospital-blue/10",
      className
    )}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };