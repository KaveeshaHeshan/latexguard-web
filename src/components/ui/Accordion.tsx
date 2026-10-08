"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export interface AccordionItem {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultExpandedId?: string;
  className?: string;
}

export default function Accordion({
  items,
  defaultExpandedId,
  className
}: AccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(
    defaultExpandedId ?? (items[0]?.id || null)
  );

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn("flex flex-col gap-3 w-full", className)}>
      {items.map((item) => {
        const isExpanded = expandedId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-xl border border-[var(--line)] bg-[var(--card)] transition-all overflow-hidden"
          >
            <h3>
              <button
                type="button"
                id={`accordion-btn-${item.id}`}
                aria-expanded={isExpanded}
                aria-controls={`accordion-panel-${item.id}`}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between px-5 py-4 text-left font-heading text-base font-bold text-[var(--ink)] hover:bg-[var(--wash)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep)]"
              >
                <div className="flex flex-col">
                  <span>{item.title}</span>
                  {item.subtitle && (
                    <span className="text-xs font-normal text-[var(--muted)]">
                      {item.subtitle}
                    </span>
                  )}
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-[var(--muted)] transition-transform duration-200 shrink-0 ml-3",
                    isExpanded && "rotate-180 text-[var(--brand-deep)]"
                  )}
                />
              </button>
            </h3>
            {isExpanded && (
              <div
                id={`accordion-panel-${item.id}`}
                role="region"
                aria-labelledby={`accordion-btn-${item.id}`}
                className="border-t border-[var(--line)] px-5 py-4 text-sm text-[var(--text)] bg-[var(--wash)]/50"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
