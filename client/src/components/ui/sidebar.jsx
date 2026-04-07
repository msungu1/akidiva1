"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/useMobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

/**
 * Akidiva UI - Sidebar System
 * The structural backbone for hospital navigation and administrative tools.
 */

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_ICON = "4rem";

const SidebarContext = React.createContext(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within a SidebarProvider.");
  return context;
}

function SidebarProvider({ defaultOpen = true, open: openProp, onOpenChange, className, style, children, ...props }) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;

  const setOpen = React.useCallback((value) => {
    const nextState = typeof value === "function" ? value(open) : value;
    if (onOpenChange) onOpenChange(nextState);
    else _setOpen(nextState);
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${nextState}; path=/; max-age=604800`;
  }, [onOpenChange, open]);

  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((prev) => !prev) : setOpen((prev) => !prev);
  }, [isMobile, setOpen]);

  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo(() => ({
    state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar,
  }), [state, open, setOpen, isMobile, openMobile, toggleSidebar]);

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          style={{ "--sidebar-width": SIDEBAR_WIDTH, "--sidebar-width-icon": SIDEBAR_WIDTH_ICON, ...style }}
          className={cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-gray-50", className)}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

const Sidebar = React.forwardRef(({ side = "left", variant = "sidebar", collapsible = "icon", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile}>
        <SheetContent side={side} className="w-[--sidebar-width] bg-white p-0 text-gray-900 [&>button]:hidden">
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      ref={ref}
      className="group peer hidden md:block text-gray-900"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      <div className={cn(
        "duration-300 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-in-out",
        "group-data-[collapsible=offcanvas]:w-0",
        "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
      )} />
      <div className={cn(
        "duration-300 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-in-out md:flex",
        side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
        variant === "floating" || variant === "inset" ? "p-3 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+1.5rem)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] border-r border-gray-100",
        className
      )} {...props}>
        <div className="flex h-full w-full flex-col bg-white group-data-[variant=floating]:rounded-3xl group-data-[variant=floating]:border group-data-[variant=floating]:shadow-xl">
          {children}
        </div>
      </div>
    </div>
  );
});

const SidebarTrigger = React.forwardRef(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={cn("h-9 w-9 rounded-xl hover:bg-blue-50 hover:text-hospital-blue", className)}
      onClick={(e) => { onClick?.(e); toggleSidebar(); }}
      {...props}
    >
      <PanelLeft className="h-5 w-5" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});

const SidebarContent = ({ className, ...props }) => (
  <div className={cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto p-2 group-data-[collapsible=icon]:overflow-hidden", className)} {...props} />
);

const SidebarHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col gap-2 p-4", className)} {...props} />
);

const SidebarFooter = ({ className, ...props }) => (
  <div className={cn("flex flex-col gap-2 p-4 border-t border-gray-50", className)} {...props} />
);

const SidebarMenu = ({ className, ...props }) => (
  <ul className={cn("flex w-full min-w-0 flex-col gap-1", className)} {...props} />
);

const SidebarMenuButton = React.forwardRef(({ asChild = false, isActive = false, tooltip, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { state, isMobile } = useSidebar();

  const button = (
    <Comp
      ref={ref}
      data-active={isActive}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl p-2.5 text-left text-sm font-medium transition-all outline-none",
        "hover:bg-blue-50 hover:text-hospital-blue",
        "data-[active=true]:bg-hospital-blue data-[active=true]:text-white data-[active=true]:shadow-md",
        "group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2",
        className
      )}
      {...props}
    />
  );

  if (!tooltip) return button;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center" hidden={state !== "collapsed" || isMobile}>
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
});

export {
  Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu,
  SidebarMenuButton, SidebarProvider, SidebarTrigger, useSidebar,
  SidebarInset, SidebarGroup, SidebarGroupLabel, SidebarMenuItem
};

// Simplified placeholders for remaining layout pieces
function SidebarInset({ className, ...props }) { return <main className={cn("relative flex min-h-svh flex-1 flex-col bg-white", className)} {...props} />; }
function SidebarGroup({ className, ...props }) { return <div className={cn("relative flex w-full min-w-0 flex-col p-2", className)} {...props} />; }
function SidebarGroupLabel({ className, ...props }) { return <div className={cn("px-2 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-400 group-data-[collapsible=icon]:hidden", className)} {...props} />; }
function SidebarMenuItem({ className, ...props }) { return <li className={cn("relative", className)} {...props} />; }