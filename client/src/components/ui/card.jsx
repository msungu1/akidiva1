import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Card Component
 * The foundational layout unit for services, doctor profiles, and news.
 */

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card"
    className={cn(
      "bg-white text-gray-900 flex flex-col gap-4 rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-header"
    className={cn(
      "flex flex-col space-y-1.5 px-6 pt-6",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="card-title"
    className={cn("text-xl font-bold leading-tight tracking-tight text-gray-900", className)}
    style={{ fontFamily: "Merriweather, serif" }}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="card-description"
    className={cn("text-sm text-gray-500 leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-content"
    className={cn("px-6 pb-6", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-footer"
    className={cn("flex items-center p-6 pt-0 mt-auto", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const CardAction = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-action"
    className={cn(
      "absolute top-6 right-6",
      className
    )}
    {...props}
  />
));
CardAction.displayName = "CardAction";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};