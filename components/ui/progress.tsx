import * as ProgressPrimitive from "@rn-primitives/progress";
import * as React from "react";
import { cn } from "~/lib/utils";

function Progress({
  className,
  value,
  indicatorClassName,
  ...props
}: ProgressPrimitive.RootProps & {
  ref?: React.RefObject<ProgressPrimitive.RootRef>;
  indicatorClassName?: string;
}) {
  return (
    <ProgressPrimitive.Root
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <Indicator value={value} className={indicatorClassName} />
    </ProgressPrimitive.Root>
  );
}

export { Progress };

function Indicator({
  value,
  className,
}: {
  value: number | undefined | null;
  className?: string;
}) {
  return (
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full bg-foreground transition-all duration-300 ease-out",
        className
      )}
      style={{ width: `${Math.min(Math.max(value ?? 0, 0), 100)}%` }}
    />
  );
}
