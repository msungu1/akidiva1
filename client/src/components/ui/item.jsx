"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

/**
 * Akidiva UI - Item System
 * A flexible row-based component for lists, activity feeds, and directories.
 */

function ItemGroup({ className, ...props }) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn("group/item-group flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function ItemSeparator({ className, ...props }) {
  return (
    <Separator
      data-slot="item-separator"
      className={cn("my-1 bg-gray-50", className)}
      {...props}
    />
  );
}

const itemVariants = cva(
  "group/item flex items-center border border-transparent transition-all duration-200 outline-none rounded-2xl",
  {
    variants: {
      variant: {
        default: "bg-white hover:bg-gray-50/50",
        outline: "border-gray-100 bg-white hover:border-hospital-blue/20 hover:shadow-sm",
        muted: "bg-gray-50/50",
      },
      size: {
        default: "p-5 gap-5",
        sm: "p-3 gap-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="item"
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  );
}

const itemMediaVariants = cva(
  "flex shrink-0 items-center justify-center transition-transform group-hover/item:scale-105",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-12 rounded-2xl bg-blue-50 text-hospital-blue [&_svg]:size-6",
        image: "size-14 rounded-2xl overflow-hidden shadow-sm [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function ItemMedia({ className, variant = "default", ...props }) {
  return (
    <div
      data-slot="item-media"
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  );
}

function ItemContent({ className, ...props }) {
  return (
    <div
      data-slot="item-content"
      className={cn("flex flex-1 flex-col gap-1 min-w-0", className)}
      {...props}
    />
  );
}

function ItemTitle({ className, ...props }) {
  return (
    <div
      data-slot="item-title"
      style={{ fontFamily: "Merriweather, serif" }}
      className={cn("text-base font-bold text-gray-900 tracking-tight", className)}
      {...props}
    />
  );
}

function ItemDescription({ className, ...props }) {
  return (
    <p
      data-slot="item-description"
      className={cn("text-sm text-gray-500 leading-relaxed line-clamp-2", className)}
      {...props}
    />
  );
}

function ItemActions({ className, ...props }) {
  return (
    <div
      data-slot="item-actions"
      className={cn("flex items-center gap-3 ml-auto", className)}
      {...props}
    />
  );
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
};