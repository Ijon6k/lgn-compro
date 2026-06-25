import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  icon,
  className,
  children,
  onClick,
  type = "button",
  disabled = false,
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

  const variants = {
    primary:
      "bg-brand-gradient text-white hover:text-white hover:shadow-lg hover:brightness-[1.05] border border-transparent",
    secondary:
      "border border-border-default bg-bg-surface text-text-primary hover:text-text-primary hover:border-border-accent hover:bg-bg-subtle",
    ghost:
      "text-text-primary hover:text-text-primary hover:bg-bg-subtle",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-2.5 text-base",
  };

  const textColors = {
    primary: "text-white",
    secondary: "text-text-primary",
    ghost: "text-text-primary",
  };

  const content = (
    <>
      <span className={cn("relative z-10", textColors[variant])}>{children}</span>
      {icon && (
        <span className={cn(
          "relative ml-2 flex items-center justify-center transition-transform duration-300 ease-premium group-hover:translate-x-1",
          variant === "primary" ? "text-white" : "text-text-primary"
        )}>
          {icon}
        </span>
      )}
      {showArrow && !icon && (
        <span className={cn(
          "relative ml-2 flex items-center justify-center transition-transform duration-300 ease-premium group-hover:translate-x-1",
          variant === "primary" ? "text-white" : "text-text-primary"
        )}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}
    </>
  );

  const buttonClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    // If external link or anchor hash, render standard anchor, otherwise Next Link
    const isAnchor = href.startsWith("#");
    if (isAnchor || target) {
      return (
        <a
          href={href}
          className={buttonClasses}
          onClick={onClick}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={buttonClasses} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
