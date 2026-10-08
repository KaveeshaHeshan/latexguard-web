import React from "react";
import Link from "next/link";
import DropMark from "./DropMark";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export default function Logo({ className = "", showSubtitle = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group flex min-h-[44px] items-center gap-2.5 font-heading text-xl font-bold tracking-tight text-[var(--ink)] focus-visible:ring-2 focus-visible:ring-[var(--brand-deep)] ${className}`}
      aria-label="LatexGuard Home, R26-IT-120 Research Project"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--brand-soft)] transition-transform duration-200 group-hover:scale-105">
        <DropMark size={22} />
      </div>
      <div className="flex flex-col leading-none">
        <span className="flex items-center gap-1.5 font-heading font-extrabold text-[var(--ink)]">
          Latex<span className="text-[var(--brand-deep)]">Guard</span>
        </span>
        {showSubtitle && (
          <span className="font-mono text-[13px] font-semibold tracking-wider text-[var(--muted)]">
            R26-IT-120
          </span>
        )}
      </div>
    </Link>
  );
}
