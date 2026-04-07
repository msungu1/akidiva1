import * as React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Aspect Ratio Component
 * Used to maintain consistent image/video proportions (e.g., 16:9, 4:3)
 */

const AspectRatio = React.forwardRef(({ className, ratio = 16 / 9, ...props }, ref) => (
  <AspectRatioPrimitive.Root
    ref={ref}
    ratio={ratio}
    className={cn("overflow-hidden rounded-2xl shadow-sm", className)}
    {...props}
  />
));

AspectRatio.displayName = AspectRatioPrimitive.Root.displayName;

export { AspectRatio };