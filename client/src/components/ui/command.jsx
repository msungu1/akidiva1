"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/**
 * Akidiva UI - Command Palette
 * Used for global search, medical records lookup, or navigation shortcuts.
 */

const Command = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    data-slot="command"
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white text-gray-900 shadow-lg border border-gray-100",
      className
    )}
    {...props}
  />
));
Command.displayName = "Command";

const CommandDialog = ({
  title = "Search Akidiva",
  description = "Quickly find services, doctors, or records...",
  children,
  className,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent className={cn("overflow-hidden p-0 rounded-2xl border-none shadow-2xl", className)}>
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-gray-400 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-3 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef(({ className, ...props }, ref) => (
  <div className="flex items-center border-b border-gray-50 px-4" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-40" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = "CommandInput";

const CommandList = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[350px] overflow-y-auto overflow-x-hidden p-2", className)}
    {...props}
  />
));
CommandList.displayName = "CommandList";

const CommandEmpty = React.forwardRef((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="py-12 text-center text-sm text-gray-400" {...props} />
));
CommandEmpty.displayName = "CommandEmpty";

const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-gray-700 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest",
      className
    )}
    {...props}
  />
));
CommandGroup.displayName = "CommandGroup";

const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-gray-50", className)} {...props} />
));
CommandSeparator.displayName = "CommandSeparator";

const CommandItem = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-xl px-3 py-2 text-sm outline-none data-[selected=true]:bg-blue-50 data-[selected=true]:text-hospital-blue data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 transition-colors",
      className
    )}
    {...props}
  />
));
CommandItem.displayName = "CommandItem";

const CommandShortcut = ({ className, ...props }) => {
  return (
    <span className={cn("ml-auto text-xs tracking-widest text-gray-400", className)} {...props} />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};