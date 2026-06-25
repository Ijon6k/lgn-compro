import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "dark" | "flat" | "accent";
  hoverable?: boolean;
}

export function Card({
  children,
  className,
  variant = "default",
  hoverable = true,
  ...props
}: CardProps) {
  const baseStyles = "rounded-lg overflow-hidden transition-all duration-300 ease-premium";

  const variants = {
    default: "bg-bg-surface border border-border-default shadow-sm",
    dark: "bg-bg-dark text-text-inverse border border-transparent shadow-md",
    flat: "bg-bg-subtle border border-border-subtle",
    accent: "bg-bg-accent border border-border-accent/40 shadow-sm",
  };

  const hoverStyles = hoverable
    ? variant === "dark"
      ? "hover:bg-bg-dark-hover hover:-translate-y-1 hover:shadow-lg"
      : "hover:border-border-accent hover:-translate-y-1 hover:shadow-md"
    : "";

  return (
    <div
      className={cn(baseStyles, variants[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
}
