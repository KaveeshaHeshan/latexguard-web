import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";

export interface StepItem {
  number: number;
  title: string;
  description: string;
  badge?: string;
}

export interface FlowStepsProps {
  title: string;
  steps: StepItem[];
  className?: string;
}

export default function FlowSteps({ title, steps, className }: FlowStepsProps) {
  return (
    <div className={cn("flex flex-col gap-6 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-xs", className)}>
      <h3 className="font-heading text-lg font-bold text-[var(--ink)] flex items-center gap-2">
        <CheckCircle2 className="h-5 w-5 text-[var(--brand-deep)]" />
        <span>{title}</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {steps.map((step, idx) => (
          <div
            key={step.number}
            className="flex flex-col justify-between rounded-xl border border-[var(--line)] bg-[var(--wash)] p-4 relative"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-deep)] font-mono text-xs font-bold text-white">
                  {step.number}
                </span>
                {step.badge && (
                  <span className="font-mono text-[10px] font-bold text-[var(--brand-deep)] uppercase">
                    {step.badge}
                  </span>
                )}
              </div>
              <h4 className="font-heading text-sm font-bold text-[var(--ink)]">
                {step.title}
              </h4>
              <p className="mt-1.5 text-xs text-[var(--muted)] leading-relaxed">
                {step.description}
              </p>
            </div>

            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-[var(--card)] rounded-full p-1 border border-[var(--line)]">
                <ArrowRight className="h-3.5 w-3.5 text-[var(--brand-deep)]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
