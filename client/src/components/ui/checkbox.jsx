import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Checkbox Component
 * Used for medical history forms, service selection, and consent toggles.
 */

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    data-slot="checkbox"
    className={cn(
      "peer size-5 shrink-0 rounded-[6px] border-2 border-gray-200 bg-white transition-all outline-none shadow-sm",
      "focus-visible:ring-2 focus-visible:ring-hospital-blue/20 focus-visible:border-hospital-blue",
      "data-[state=checked]:bg-hospital-blue data-[state=checked]:border-hospital-blue data-[state=checked]:text-white",
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      data-slot="checkbox-indicator"
      className="flex items-center justify-center text-current"
    >
      <Check className="size-3.5 stroke-[3px]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };