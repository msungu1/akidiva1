"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
// import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

/**
 * Akidiva UI - Toggle Group
 * Optimized for quick selection of clinical parameters and filter toggles.
 */

const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  children, 
  ...props 
}, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn(
      "flex w-fit items-center justify-center gap-0 rounded-2xl border-2 border-gray-100 bg-white p-1 shadow-sm",
      className
    )}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef(({ 
  className, 
  children, 
  variant, 
  size, 
  ...props 
}, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        // Overriding default toggle styles for a "segmented" feel
        "rounded-xl border-none px-4 py-2 text-sm font-bold transition-all",
        "data-[state=on]:bg-hospital-blue data-[state=on]:text-white data-[state=on]:shadow-md",
        "hover:bg-blue-50 hover:text-hospital-blue",
        "focus:z-10 focus-visible:ring-4 focus-visible:ring-hospital-blue/10",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };