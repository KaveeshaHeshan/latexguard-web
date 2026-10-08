import React from "react";
import { cn } from "@/lib/cn";

export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  bg?: "wash" | "card" | "brandSoft";
}

export default function Section({
  id,
  children,
  className,
  containerClassName,
  bg = "wash"
}: SectionProps) {
  const bgStyles = {
    wash: "bg-[var(--wash)]",
    card: "bg-[var(--card)] border-y border-[var(--line)]",
    brandSoft: "bg-[var(--brand-soft)] border-y border-[#0bb52422]"
  };

  return (
    <section
      id={id}
      className={cn("py-12 sm:py-16 lg:py-20", bgStyles[bg], className)}
    >
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
