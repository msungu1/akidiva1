"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Drawer Component
 * Best-in-class mobile experience for forms and quick medical info.
 */

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col border-t border-gray-100 bg-white outline-none shadow-2xl",
        "rounded-t-[2.5rem] transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* The Handle/Grabber */}
      <div className="mx-auto mt-4 h-1.5 w-12 rounded-full bg-gray-200" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }) => (
  <div
    className={cn("grid gap-1.5 p-6 text-center sm:text-left", className)}
    {...props}
  />
);

const DrawerFooter = ({ className, ...props }) => (
  <div
    className={cn("mt-auto flex flex-col gap-3 p-6 pt-0", className)}
    {...props}
  />
);

const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    style={{ fontFamily: "Merriweather, serif" }}
    className={cn("text-xl font-bold leading-none tracking-tight text-gray-900", className)}
    {...props}
  />
));

const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-500 leading-relaxed", className)}
    {...props}
  />
));

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};