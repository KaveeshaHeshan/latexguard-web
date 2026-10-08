import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-heading font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[var(--brand-deep)] text-white hover:bg-[#055c14] active:scale-[0.98] shadow-sm",
    secondary:
      "bg-[var(--brand-soft)] text-[var(--brand-deep)] hover:bg-[#0bb5242e] active:scale-[0.98]",
    outline:
      "border border-[var(--line)] bg-[var(--card)] text-[var(--ink)] hover:bg-[var(--wash)] active:scale-[0.98]",
    ghost:
      "text-[var(--ink)] hover:bg-[var(--wash)]"
  };

  const sizes = {
    sm: "rounded-md px-3 py-1.5 text-xs min-h-[44px]",
    md: "rounded-lg px-4 py-2.5 text-sm min-h-[44px]",
    lg: "rounded-xl px-6 py-3.5 text-base min-h-[50px]"
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
