import React from "react";
import { cn } from "@/lib/cn";

export interface TimelineStep {
  number: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export default function Timeline({ steps, className }: TimelineProps) {
  return (
    <div className={cn("relative flex flex-col gap-8 pl-4 sm:pl-6", className)}>
      {/* Vertical line */}
      <div
        className="absolute top-3 bottom-3 left-4 sm:left-6 w-0.5 bg-[var(--line)] -translate-x-1/2"
        aria-hidden="true"
      />

      {steps.map((step) => (
        <div key={step.number} className="relative flex items-start gap-4 sm:gap-6">
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep)] font-mono text-xs font-bold text-white ring-4 ring-[var(--wash)] z-10"
            aria-hidden="true"
          >
            {step.number}
          </div>
          <div className="flex-1 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 sm:p-6 shadow-xs">
            <h3 className="font-heading text-lg font-bold text-[var(--ink)]">
              {step.title}
            </h3>
            {step.subtitle && (
              <p className="mt-1 text-xs font-medium text-[var(--muted)]">
                {step.subtitle}
              </p>
            )}
            <div className="mt-4 text-sm text-[var(--text)]">{step.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
