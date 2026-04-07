import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Badge Component
 * Used for status indicators, category tags, and priority levels.
 */

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider w-fit whitespace-nowrap shrink-0 gap-1 transition-all shadow-sm",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-hospital-blue text-white shadow-blue-100",
        secondary:
          "border-transparent bg-blue-50 text-hospital-blue shadow-none",
        success:
          "border-transparent bg-green-50 text-hospital-green shadow-none",
        warning:
          "border-transparent bg-yellow-50 text-hospital-amber shadow-none",
        destructive:
          "border-transparent bg-red-50 text-red-600 shadow-none",
        outline:
          "border-gray-200 text-gray-600 bg-transparent shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };