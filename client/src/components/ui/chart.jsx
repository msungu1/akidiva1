import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Chart Components
 * High-performance data visualization for hospital analytics and patient trends.
 */

const THEMES = { light: "", dark: ".dark" };

const ChartContext = React.createContext(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

const ChartContainer = React.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs",
          "[&_.recharts-cartesian-axis-tick_text]:fill-gray-400 [&_.recharts-cartesian-axis-tick_text]:font-medium",
          "[&_.recharts-cartesian-grid_line]:stroke-gray-100",
          "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-gray-200",
          "[&_.recharts-dot]:stroke-white [&_.recharts-dot]:stroke-2",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "ChartContainer";

const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(([, conf]) => conf.theme || conf.color);
  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(([theme, prefix]) => `
            ${prefix} [data-chart=${id}] {
              ${colorConfig
                .map(([key, itemConfig]) => {
                  const color = itemConfig.theme?.[theme] || itemConfig.color;
                  return color ? `--color-${key}: ${color};` : null;
                })
                .filter(Boolean)
                .join("\n")}
            }
          `)
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef(({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  label,
  labelFormatter,
  color,
  nameKey,
  labelKey,
}, ref) => {
  const { config } = useChart();

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) return null;
    const [item] = payload;
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string" 
      ? config[label]?.label || label 
      : itemConfig?.label || label;

    if (labelFormatter) return <div className="font-bold mb-1">{labelFormatter(value, payload)}</div>;
    if (!value) return null;
    return <div className="font-bold mb-1">{value}</div>;
  }, [label, labelFormatter, payload, hideLabel, config, labelKey]);

  if (!active || !payload?.length) return null;

  return (
    <div ref={ref} className={cn("grid min-w-[8rem] gap-1.5 rounded-2xl border border-gray-100 bg-white p-3 text-xs shadow-xl", className)}>
      {tooltipLabel}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color || item.payload.fill || item.color;

          return (
            <div key={index} className="flex items-center gap-2">
              {indicator === "dot" && (
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: indicatorColor }} />
              )}
              <span className="text-gray-500">{itemConfig?.label || item.name}:</span>
              <span className="ml-auto font-bold text-gray-900">{item.value.toLocaleString()}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
});
ChartTooltipContent.displayName = "ChartTooltipContent";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef(({ className, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();
  if (!payload?.length) return null;

  return (
    <div ref={ref} className={cn("flex items-center justify-center gap-4 pt-4", className)}>
      {payload.map((item, index) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        return (
          <div key={index} className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-xs font-medium text-gray-600">{itemConfig?.label || item.value}</span>
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegendContent";

function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) return undefined;
  const payloadPayload = payload.payload;
  let configLabelKey = key;

  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }

  return configLabelKey in config ? config[configLabelKey] : config[key];
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };