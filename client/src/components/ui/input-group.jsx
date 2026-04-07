"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * Akidiva UI - Input Group
 * Used for combined fields like search bars with icons or currency inputs.
 */

function InputGroup({ className, ...props }) {
  return (
    <div
      data-slot="input-group"
      className={cn(
        "relative flex w-full items-center rounded-2xl border-2 border-gray-100 bg-white transition-all shadow-sm",
        "has-[:focus-visible]:border-hospital-blue has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-hospital-blue/10",
        "has-[[aria-invalid=true]]:border-red-500 has-[[aria-invalid=true]]:ring-red-500/10",
        className
      )}
      {...props}
    />
  );
}

const addonVariants = cva(
  "flex h-full items-center justify-center text-gray-400 transition-colors",
  {
    variants: {
      align: {
        "inline-start": "pl-4 pr-2 border-r border-gray-50",
        "inline-end": "pr-4 pl-2 border-l border-gray-50",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
);

function InputGroupAddon({ className, align, ...props }) {
  return (
    <div
      data-align={align}
      className={cn(addonVariants({ align }), className)}
      {...props}
    />
  );
}

function InputGroupInput({ className, ...props }) {
  return (
    <Input
      className={cn(
        "flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0 h-12 rounded-none px-4",
        className
      )}
      {...props}
    />
  );
}

function InputGroupButton({ className, variant = "ghost", ...props }) {
  return (
    <Button
      variant={variant}
      className={cn(
        "h-10 mx-1 rounded-xl px-3 hover:bg-blue-50 hover:text-hospital-blue",
        className
      )}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
};