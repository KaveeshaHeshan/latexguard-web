import React from "react";
import { cn } from "@/lib/cn";

export interface Column<T> {
  key: string;
  header: string;
  render: (item: T) => React.ReactNode;
  className?: string;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  caption?: string;
  className?: string;
}

export default function Table<T>({
  columns,
  data,
  caption,
  className
}: TableProps<T>) {
  return (
    <div className={cn("w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] shadow-xs", className)}>
      {/* Desktop & Tablet Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-sm text-[var(--text)]">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead className="bg-[var(--wash)] font-heading text-xs font-bold uppercase tracking-wider text-[var(--ink)] border-b border-[var(--line)]">
            <tr>
              {columns.map((col) => (
                <th key={col.key} scope="col" className={cn("px-6 py-4", col.className)}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--line)]">
            {data.map((item, idx) => (
              <tr
                key={idx}
                className="transition-colors hover:bg-[var(--wash)]/50"
              >
                {columns.map((col) => (
                  <td key={col.key} className={cn("px-6 py-4 leading-relaxed", col.className)}>
                    {col.render(item)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Card Layout */}
      <div className="flex flex-col divide-y divide-[var(--line)] md:hidden">
        {data.map((item, rowIdx) => (
          <div key={rowIdx} className="p-5 flex flex-col gap-3 bg-[var(--card)]">
            {columns.map((col) => (
              <div key={col.key} className="flex flex-col gap-1">
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  {col.header}
                </span>
                <div className="text-sm font-medium text-[var(--ink)]">
                  {col.render(item)}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
