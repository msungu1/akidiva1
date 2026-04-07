import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

/**
 * Akidiva UI - Collapsible Component
 * Ideal for FAQs, expandable medical details, or mobile navigation menus.
 */

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = React.forwardRef(({ ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleTrigger
    ref={ref}
    data-slot="collapsible-trigger"
    {...props}
  />
));
CollapsibleTrigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName;

const CollapsibleContent = React.forwardRef(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleContent
    ref={ref}
    data-slot="collapsible-content"
    className="overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
    {...props}
  />
));
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };