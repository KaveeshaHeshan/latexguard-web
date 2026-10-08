"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/cn";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTabId: string;
  onTabChange: (id: string) => void;
  className?: string;
}

export default function Tabs({
  tabs,
  activeTabId,
  onTabChange,
  className
}: TabsProps) {
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex: number | null = null;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      const targetTab = tabs[nextIndex];
      if (targetTab) {
        onTabChange(targetTab.id);
        const buttons = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
        buttons?.[nextIndex]?.focus();
      }
    }
  };

  const activeTab = tabs.find((t) => t.id === activeTabId) ?? tabs[0];

  return (
    <div className={cn("w-full", className)}>
      <div
        ref={tabListRef}
        role="tablist"
        aria-label="Content Tabs"
        className="flex border-b border-[var(--line)] overflow-x-auto no-scrollbar gap-2"
      >
        {tabs.map((tab, idx) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onTabChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={cn(
                "whitespace-nowrap px-4 py-3 font-heading text-sm font-semibold transition-all border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep)]",
                isActive
                  ? "border-[var(--brand-deep)] text-[var(--brand-deep)] bg-[var(--brand-soft)] rounded-t-lg"
                  : "border-transparent text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--line)]"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id={`panel-${activeTab?.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab?.id}`}
        className="pt-6 outline-none"
        tabIndex={0}
      >
        {activeTab?.content}
      </div>
    </div>
  );
}
