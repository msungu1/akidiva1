"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Slider Component
 * Precise range selection for clinical metrics and data filtering.
 */

const Slider = React.forwardRef(({ 
  className, 
  defaultValue, 
  value, 
  min = 0, 
  max = 100, 
  ...props 
}, ref) => {
  // Determine the number of thumbs needed based on value or defaultValue arrays
  const initialValues = React.useMemo(() => {
    if (Array.isArray(value)) return value;
    if (Array.isArray(defaultValue)) return defaultValue;
    return [value ?? defaultValue ?? min];
  }, [value, defaultValue, min]);

  return (
    <SliderPrimitive.Root
      ref={ref}
      min={min}
      max={max}
      value={value}
      defaultValue={defaultValue}
      className={cn(
        "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className="relative grow overflow-hidden rounded-full bg-blue-50/50 border border-gray-100 data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2"
      >
        <SliderPrimitive.Range className="absolute bg-hospital-blue data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full" />
      </SliderPrimitive.Track>
      
      {initialValues.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className={cn(
            "block h-5 w-5 rounded-full border-2 border-hospital-blue bg-white shadow-md transition-all outline-none",
            "hover:scale-110 hover:bg-blue-50 focus-visible:ring-4 focus-visible:ring-hospital-blue/10",
            "disabled:pointer-events-none disabled:opacity-50"
          )}
        />
      ))}
    </SliderPrimitive.Root>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };