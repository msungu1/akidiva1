"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/**
 * Akidiva UI - Pagination
 * Essential for navigating large data sets like patient lists or pharmacy inventory.
 */

function Pagination({ className, ...props }) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }) {
  return (
    <ul
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    />
  );
}

function PaginationItem({ className, ...props }) {
  return <li className={cn("", className)} {...props} />;
}

function PaginationLink({ className, isActive, size = "icon", ...props }) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        "rounded-xl transition-all",
        isActive && "border-hospital-blue text-hospital-blue bg-blue-50/50 font-bold shadow-sm",
        !isActive && "text-gray-500 hover:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-3 font-medium", className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({ className, ...props }) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-3 font-medium", className)}
      {...props}
    >
      <span>Next</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationLink>
  );
}

function PaginationEllipsis({ className, ...props }) {
  return (
    <span
      aria-hidden
      className={cn("flex h-10 w-10 items-center justify-center text-gray-400", className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};