"use client";

import * as React from "react";
import * as ResizablePrimitive from "react-resizable-panels";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Resizable Panels
 * Used for creating flexible, multi-pane dashboard layouts for medical staff.
 */

const ResizablePanelGroup = ({ className, ...props }) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({ withHandle, className, ...props }) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-gray-100 transition-colors",
      "hover:bg-hospital-blue/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-hospital-blue",
      "data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-6 w-4 items-center justify-center rounded-sm border border-gray-200 bg-white shadow-sm transition-all hover:border-hospital-blue/50">
        <GripVertical className="h-3 w-3 text-gray-400 group-hover:text-hospital-blue" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };