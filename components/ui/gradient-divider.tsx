import React from "react";
import { cn } from "@/lib/utils";

interface GradientDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: "sm" | "md" | "lg";
}

export function GradientDivider({ className, height = "md", ...props }: GradientDividerProps) {
  const heights = {
    sm: "h-[6px]",
    md: "h-[8px]",
    lg: "h-[10px]",
  };

  return (
    <div
      className={cn(
        "w-full bg-divider-gradient border-0",
        heights[height],
        className
      )}
      role="separator"
      {...props}
    />
  );
}
export default GradientDivider;
