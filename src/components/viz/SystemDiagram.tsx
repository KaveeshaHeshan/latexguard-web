"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cpu, ShieldCheck, Navigation, BarChart3, Database, Smartphone, Cloud, ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { systemArchitectureData } from "@/data/architecture";

export default function SystemDiagram() {
  const [selectedComponentId, setSelectedComponentId] = useState<string>("sensing-vfa");

  const selectedComp =
    systemArchitectureData.components.find((c) => c.id === selectedComponentId) ??
    systemArchitectureData.components[0];

  return (
    <div className="flex flex-col gap-8 rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--line)] pb-6">
        <div>
          <Badge variant="brand" className="mb-2">
            System Architecture
          </Badge>
          <h3 className="font-heading text-xl font-bold text-[var(--ink)] sm:text-2xl">
            LatexGuard End-to-End System Integration
          </h3>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Click any component block below to highlight its data flows, inputs/outputs, and technology stack.
          </p>
        </div>
      </div>

      {/* SVG & CSS Diagram Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 relative">
        {/* Node 1: Sensing */}
        <button
          type="button"
          onClick={() => setSelectedComponentId("sensing-vfa")}
          className={`flex flex-col p-5 rounded-2xl border text-left transition-all relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep)] ${
            selectedComponentId === "sensing-vfa"
              ? "border-[var(--brand-deep)] bg-[var(--brand-soft)] shadow-md ring-2 ring-[var(--brand-deep)]"
              : "border-[var(--line)] bg-[var(--wash)] hover:border-[var(--brand-deep)]"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-deep)] text-white">
              <Cpu className="h-5 w-5" />
            </div>
            <span className="font-mono text-[10px] font-extrabold text-[var(--brand-deep)]">
              COMP 01
            </span>
          </div>
          <h4 className="font-heading text-base font-bold text-[var(--ink)]">
            Sensing & VFA Estimation
          </h4>
          <p className="mt-2 text-xs text-[var(--muted)] line-clamp-2">
            ESP32 multi-sensor hardware probe & Random Forest regression VFA soft-sensing model.
          </p>
        </button>

        {/* Node 2: Security */}
        <button
          type="button"
          onClick={() => setSelectedComponentId("security-anomaly")}
          className={`flex flex-col p-5 rounded-2xl border text-left transition-all relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep)] ${
            selectedComponentId === "security-anomaly"
              ? "border-[var(--brand-deep)] bg-[var(--brand-soft)] shadow-md ring-2 ring-[var(--brand-deep)]"
              : "border-[var(--line)] bg-[var(--wash)] hover:border-[var(--brand-deep)]"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-deep)] text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span className="font-mono text-[10px] font-extrabold text-[var(--brand-deep)]">
              COMP 02
            </span>
          </div>
          <h4 className="font-heading text-base font-bold text-[var(--ink)]">
            Security & Anomaly Detection
          </h4>
          <p className="mt-2 text-xs text-[var(--muted)] line-clamp-2">
            RBAC, OTP/JWT, offline data resilience & Isolation Forest adulteration detection.
          </p>
        </button>

        {/* Node 3: Routing */}
        <button
          type="button"
          onClick={() => setSelectedComponentId("communication-routing")}
          className={`flex flex-col p-5 rounded-2xl border text-left transition-all relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep)] ${
            selectedComponentId === "communication-routing"
              ? "border-[var(--brand-deep)] bg-[var(--brand-soft)] shadow-md ring-2 ring-[var(--brand-deep)]"
              : "border-[var(--line)] bg-[var(--wash)] hover:border-[var(--brand-deep)]"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-deep)] text-white">
              <Navigation className="h-5 w-5" />
            </div>
            <span className="font-mono text-[10px] font-extrabold text-[var(--brand-deep)]">
              COMP 03
            </span>
          </div>
          <h4 className="font-heading text-base font-bold text-[var(--ink)]">
            BLE & DRL Route Optimisation
          </h4>
          <p className="mt-2 text-xs text-[var(--muted)] line-clamp-2">
            Standardized BLE JSON telemetry & Deep Q-Network quality-aware collection routing.
          </p>
        </button>

        {/* Node 4: Predictive */}
        <button
          type="button"
          onClick={() => setSelectedComponentId("predictive-traceability")}
          className={`flex flex-col p-5 rounded-2xl border text-left transition-all relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep)] ${
            selectedComponentId === "predictive-traceability"
              ? "border-[var(--brand-deep)] bg-[var(--brand-soft)] shadow-md ring-2 ring-[var(--brand-deep)]"
              : "border-[var(--line)] bg-[var(--wash)] hover:border-[var(--brand-deep)]"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-deep)] text-white">
              <BarChart3 className="h-5 w-5" />
            </div>
            <span className="font-mono text-[10px] font-extrabold text-[var(--brand-deep)]">
              COMP 04
            </span>
          </div>
          <h4 className="font-heading text-base font-bold text-[var(--ink)]">
            Predictive Analytics & Traceability
          </h4>
          <p className="mt-2 text-xs text-[var(--muted)] line-clamp-2">
            Relational digital ledger & LSTM neural network quality trend forecasting.
          </p>
        </button>
      </div>

      {/* Central Cloud Backend & Apps Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-b border-[var(--line)] py-6 bg-[var(--wash)]/60 rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--card)] border border-[var(--line)] text-[var(--brand-deep)]">
            <Cloud className="h-5 w-5" />
          </div>
          <div>
            <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
              Python Cloud Microservices
            </h5>
            <p className="text-[11px] text-[var(--muted)]">
              Real-time inference & REST API server
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--card)] border border-[var(--line)] text-[var(--brand-deep)]">
            <Database className="h-5 w-5" />
          </div>
          <div>
            <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
              Centralized Cloud DB
            </h5>
            <p className="text-[11px] text-[var(--muted)]">
              Synchronized telemetry & batch logs
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--card)] border border-[var(--line)] text-[var(--brand-deep)]">
            <Smartphone className="h-5 w-5" />
          </div>
          <div>
            <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
              Web & Mobile Platforms
            </h5>
            <p className="text-[11px] text-[var(--muted)]">
              Factory QA Web & Mobile Portals
            </p>
          </div>
        </div>
      </div>

      {/* Detail Inspector Card for Selected Node */}
      {selectedComp && (
        <div className="rounded-2xl border border-[var(--brand-deep)]/30 bg-[var(--brand-soft)]/30 p-6 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--line)] pb-3">
            <div>
              <h4 className="font-heading text-lg font-bold text-[var(--ink)]">
                {selectedComp.title}
              </h4>
              <p className="text-xs text-[var(--brand-deep)] font-medium">
                <strong>Key Innovation:</strong> {selectedComp.novelty}
              </p>
            </div>
            <Link
              href="/methodology/"
              className="inline-flex min-h-[44px] items-center gap-1 text-xs font-bold text-[var(--brand-deep)] hover:underline focus-visible:outline-none"
            >
              <span>Explore Methodology</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <h5 className="font-heading font-bold uppercase text-[var(--ink)] mb-2">
                System Inputs & Telemetry
              </h5>
              <ul className="list-disc list-inside flex flex-col gap-1 text-[var(--text)]">
                {selectedComp.inputs.map((inp, idx) => (
                  <li key={idx}>{inp}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-heading font-bold uppercase text-[var(--ink)] mb-2">
                System Outputs & Artifacts
              </h5>
              <ul className="list-disc list-inside flex flex-col gap-1 text-[var(--text)]">
                {selectedComp.outputs.map((out, idx) => (
                  <li key={idx}>{out}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--line)]">
            <span className="text-xs font-bold text-[var(--ink)] mr-2 self-center">
              Tech Stack:
            </span>
            {selectedComp.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-md bg-[var(--card)] px-2.5 py-1 font-mono text-[11px] font-semibold text-[var(--ink)] border border-[var(--line)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
