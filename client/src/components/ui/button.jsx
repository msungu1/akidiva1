import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Button Component
 * The primary interactive element for the Akidiva design system.
 */

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-hospital-blue/20 active:scale-95",
  {
    variants: {
      variant: {
        default: 
          "bg-hospital-blue text-white shadow-lg shadow-blue-900/10 hover:bg-hospital-blue-dark hover:shadow-blue-900/20",
        secondary: 
          "bg-hospital-amber text-white shadow-lg shadow-amber-900/10 hover:bg-yellow-500 hover:shadow-amber-900/20",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-900/10",
        outline:
          "border-2 border-gray-100 bg-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-200",
        ghost:
          "text-hospital-blue hover:bg-blue-50",
        link: 
          "text-hospital-blue underline-offset-4 hover:underline px-0 py-0 h-auto",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base rounded-2xl",
        icon: "size-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };