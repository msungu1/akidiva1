import * as React from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

/**
 * Akidiva UI - Calendar Component
 * Optimized for react-day-picker v9+ 
 */

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-white p-4 rounded-3xl border border-gray-100 shadow-sm",
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("flex flex-col gap-4 relative", defaultClassNames.months),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between z-10",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-7 w-full font-bold text-gray-900",
          defaultClassNames.month_caption
        ),
        caption_label: cn("text-sm font-bold", defaultClassNames.caption_label),
        table: "w-full border-collapse",
        weekdays: "flex mb-2",
        weekday: "text-gray-400 w-9 font-medium text-[0.8rem] uppercase",
        week: "flex w-full mt-2",
        day: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
        today: "bg-gray-100 text-gray-900 rounded-lg",
        outside: "text-gray-300 opacity-50",
        disabled: "text-gray-300 opacity-50",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...props }) => {
          if (orientation === "left") return <ChevronLeft className="h-4 w-4" />;
          if (orientation === "right") return <ChevronRight className="h-4 w-4" />;
          return <ChevronDown className="h-4 w-4" />;
        },
        DayButton: CalendarDayButton,
        ...components,
      }}
      {...props}
    />
  );
}

const CalendarDayButton = React.forwardRef(({ className, day, modifiers, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      className={cn(
        "h-9 w-9 p-0 font-normal rounded-lg transition-all",
        modifiers.selected && "bg-hospital-blue text-white hover:bg-hospital-blue hover:text-white shadow-md",
        modifiers.today && !modifiers.selected && "bg-gray-100 text-gray-900 font-bold",
        className
      )}
      {...props}
    >
      {day.date.getDate()}
    </Button>
  );
});
CalendarDayButton.displayName = "CalendarDayButton";

export { Calendar, CalendarDayButton };