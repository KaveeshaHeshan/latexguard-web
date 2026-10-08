"use client";

import React, { useId, useState } from "react";
import { gradeFor } from "@/lib/gradeFor";
import { formatVfa } from "@/lib/format";
import Badge from "@/components/ui/Badge";
import { SlidersHorizontal, Info } from "lucide-react";

interface VfaGraderProps {
  className?: string;
  isModal?: boolean;
}

const VFA_MIN = 0;
const VFA_MAX = 0.12;
const BOUNDARY_B = 0.05;
const BOUNDARY_C = 0.08;

// Percent widths of the three grade segments across the 0 - 0.12 scale.
const PCT_A = ((BOUNDARY_B - VFA_MIN) / (VFA_MAX - VFA_MIN)) * 100; // 41.67%
const PCT_B = ((BOUNDARY_C - BOUNDARY_B) / (VFA_MAX - VFA_MIN)) * 100; // 25%

const TICKS = [
  { value: 0, label: "0", pct: 0 },
  { value: 0.05, label: "0.05", pct: PCT_A },
  { value: 0.08, label: "0.08", pct: PCT_A + PCT_B },
  { value: 0.12, label: "0.12", pct: 100 }
];

export default function VfaGrader({ className = "", isModal = false }: VfaGraderProps) {
  const [vfa, setVfa] = useState<number>(0.035); // Default to Grade A
  const dropClipId = useId();

  const gradeInfo = gradeFor(vfa);
  const fillPercentage = Math.min(Math.max((vfa / VFA_MAX) * 100, 0), 100);
  const fillHeight = (fillPercentage / 100) * 32;

  const valueText = `VFA ${formatVfa(vfa)}, Grade ${gradeInfo.grade}, ${gradeInfo.label.toLowerCase()}`;

  return (
    <div
      className={`rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4 sm:p-6 shadow-xl transition-all ${className}`}
    >
      <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-[var(--brand-deep)]" />
          <h3 className="font-heading text-lg font-bold text-[var(--ink)]">
            VFA Quality Grader
          </h3>
        </div>
        <Badge variant="brand" className="text-[13px]">
          {isModal ? "Full Demo View" : "Interactive Demo"}
        </Badge>
      </div>

      <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted)]">
        Simulate real-time multi-sensor Volatile Fatty Acid (VFA) estimation. Adjust the slider to observe automated grade classification.
      </p>

      {/* Main Visual Block */}
      <div className="mt-6 flex flex-col items-center gap-6 min-[400px]:flex-row min-[400px]:items-start min-[400px]:justify-between">
        {/* Animated Latex Drop Fill Visual */}
        <div className="flex shrink-0 flex-col min-[400px]:flex-row items-center gap-3">
          <div className="relative h-[120px] w-[88px] shrink-0 sm:h-44 sm:w-32">
            <svg viewBox="0 0 32 32" className="h-full w-full" aria-hidden="true">
              <defs>
                <clipPath id={dropClipId}>
                  <path d="M16 2C16 2 6 14 6 20C6 25.5228 10.4772 30 16 30C21.5228 30 26 25.5228 26 20C26 14 16 2 16 2Z" />
                </clipPath>
              </defs>
              {/* Fill clipped to the drop shape, proportional to VFA / 0.12 */}
              <g clipPath={`url(#${dropClipId})`}>
                <rect
                  x="0"
                  y={32 - fillHeight}
                  width="32"
                  height={fillHeight}
                  fill={gradeInfo.colorHex}
                  opacity="0.85"
                  className="transition-all duration-300 ease-out"
                />
              </g>
              {/* Drop outline */}
              <path
                d="M16 2C16 2 6 14 6 20C6 25.5228 10.4772 30 16 30C21.5228 30 26 25.5228 26 20C26 14 16 2 16 2Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-[var(--line)]"
              />
            </svg>
          </div>

          {/* Numerical readout, moved outside the drop for contrast safety */}
          <div className="flex flex-col items-center text-center min-[400px]:items-start min-[400px]:text-left">
            <span className="font-mono text-2xl font-extrabold text-[var(--text)]">
              {formatVfa(vfa)}
            </span>
            <span className="font-mono text-[13px] font-semibold text-[var(--muted)]">
              VFA Score
            </span>
          </div>
        </div>

        {/* Grade Seal and Details */}
        <div className="flex min-w-0 flex-1 w-full flex-col gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-mono text-2xl font-black text-white shadow-md transition-colors duration-300"
              style={{ backgroundColor: gradeInfo.colorHex }}
            >
              {gradeInfo.grade}
            </div>
            <div className="flex min-w-0 flex-col leading-tight">
              <span className="font-heading text-xl font-bold text-[var(--ink)]">
                Grade {gradeInfo.grade}
              </span>
              <span className="font-heading text-base font-normal text-[var(--ink)]">
                {gradeInfo.label}
              </span>
              <span className="mt-0.5 text-[13px] font-semibold text-[var(--muted)] font-mono">
                {gradeInfo.statusText}
              </span>
            </div>
          </div>

          {/* Merged slider + grade scale control */}
          <div className="flex flex-col gap-2">
            <div className="relative w-full py-2">
              <input
                type="range"
                min={VFA_MIN}
                max={VFA_MAX}
                step="0.001"
                value={vfa}
                onChange={(e) => setVfa(parseFloat(e.target.value))}
                aria-label="Volatile Fatty Acid (VFA) value slider"
                aria-valuetext={valueText}
                className="vfa-range h-11 w-full cursor-pointer appearance-none bg-transparent focus-visible:outline-none"
              />
            </div>

            {/* Tick marks */}
            <div className="relative h-4 w-full text-[13px] font-mono font-semibold text-[var(--muted)]">
              {TICKS.map((tick) => (
                <span
                  key={tick.value}
                  className="absolute top-0 -translate-x-1/2 whitespace-nowrap"
                  style={{
                    left: `${tick.pct}%`,
                    transform:
                      tick.pct === 0
                        ? "translateX(0)"
                        : tick.pct === 100
                        ? "translateX(-100%)"
                        : "translateX(-50%)"
                  }}
                >
                  {tick.label}
                </span>
              ))}
            </div>

            {/* Segment names, centred under their own A/B/C segment; hidden below 360px to avoid overlap */}
            <div className="relative hidden min-[360px]:block h-4 w-full text-[12px] font-mono font-semibold text-[var(--muted)] pt-1">
              {[
                { label: "Fresh", pct: PCT_A / 2 },
                { label: "Acceptable", pct: PCT_A + PCT_B / 2 },
                { label: "Degraded", pct: PCT_A + PCT_B + (100 - PCT_A - PCT_B) / 2 }
              ].map((seg) => (
                <span
                  key={seg.label}
                  className="absolute top-1 -translate-x-1/2 whitespace-nowrap"
                  style={{ left: `${seg.pct}%` }}
                >
                  {seg.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-2 rounded-lg bg-[var(--wash)] p-3 text-[13px] text-[var(--muted)] border border-[var(--line)]">
        <Info className="h-4 w-4 shrink-0 text-[var(--brand-deep)] mt-0.5" />
        <span>
          <strong>Note:</strong> Demonstration only. Grade bands used in the LatexGuard prototype: A below 0.05, B from 0.05 to 0.08, C from 0.08 and above.
        </span>
      </div>
    </div>
  );
}
