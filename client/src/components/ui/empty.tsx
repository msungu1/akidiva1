import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Empty State
 * Used when there are no appointments, medical records, or search results.
 * Designed to be helpful and encouraging rather than clinical and cold.
 */

function Empty({ className, ...props }) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex min-h-[400px] w-full flex-col items-center justify-center gap-6 rounded-[2rem] border-2 border-dashed border-gray-100 bg-gray-50/30 p-8 text-center md:p-16",
        className
      )}
      {...props}
    />
  );
}

function EmptyHeader({ className, ...props }) {
  return (
    <div
      data-slot="empty-header"
      className={cn("flex max-w-md flex-col items-center gap-3", className)}
      {...props}
    />
  );
}

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 transition-transform hover:scale-105",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-16 rounded-3xl bg-blue-50 text-hospital-blue shadow-sm [&_svg]:size-8",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function EmptyMedia({ className, variant = "default", ...props }) {
  return (
    <div
      data-slot="empty-media"
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  );
}

function EmptyTitle({ className, ...props }) {
  return (
    <h3
      data-slot="empty-title"
      style={{ fontFamily: "Merriweather, serif" }}
      className={cn("text-2xl font-bold tracking-tight text-gray-900", className)}
      {...props}
    />
  );
}

function EmptyDescription({ className, ...props }) {
  return (
    <p
      data-slot="empty-description"
      className={cn(
        "text-sm/relaxed text-gray-500 max-w-[280px] sm:max-w-none",
        className
      )}
      {...props}
    />
  );
}

function EmptyContent({ className, ...props }) {
  return (
    <div
      data-slot="empty-content"
      className={cn("flex w-full max-w-sm flex-col items-center gap-4", className)}
      {...props}
    />
  );
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
};