import React from "react";
import { cn } from "@/lib/cn";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "neutral" | "gradeA" | "gradeB" | "gradeC" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  children,
  variant = "brand",
  size = "md",
  className
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-mono font-semibold tracking-wide uppercase rounded-full";

  const variants = {
    brand: "bg-[var(--brand-soft)] text-[var(--brand-deep)] border border-[#0bb52433]",
    neutral: "bg-[var(--wash)] text-[var(--muted)] border border-[var(--line)]",
    gradeA: "bg-[#dcfce7] text-[#166534] border border-[#86efac]",
    gradeB: "bg-[#fef3c7] text-[#92400e] border border-[#fde68a]",
    gradeC: "bg-[#fee2e2] text-[#991b1b] border border-[#fca5a5]",
    outline: "border border-[var(--line)] text-[var(--ink)] bg-transparent"
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-xs"
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
}
