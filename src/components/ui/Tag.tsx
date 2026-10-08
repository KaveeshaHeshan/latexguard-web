import React from "react";
import { cn } from "@/lib/cn";

export interface TagProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Tag({
  children,
  isActive = false,
  onClick,
  className
}: TagProps) {
  const baseStyles =
    "inline-flex min-h-[44px] shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold font-heading transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep)]";

  const activeStyles = isActive
    ? "bg-[var(--brand-deep)] text-white shadow-xs"
    : "bg-[var(--card)] text-[var(--muted)] border border-[var(--line)] hover:border-[var(--brand-deep)] hover:text-[var(--ink)]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(baseStyles, activeStyles, className)}
    >
      {children}
    </button>
  );
}
