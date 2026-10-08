"use client";

import React, { useEffect } from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import FlowSteps from "@/components/viz/FlowSteps";
import { literatureSurveyData } from "@/data/literature";
import { referencesData } from "@/data/references";
import { comparisonTableData, researchGapSummary } from "@/data/gap";
import { mainObjective, generalObjectives, componentObjectives } from "@/data/objectives";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { ExternalLink, BookOpen, AlertTriangle, Lightbulb, Target, Users, Truck, Factory, Leaf } from "lucide-react";

export default function ScopePage() {
  const sectionIds = ["literature", "gap", "problem-solution", "objectives"];
  const activeSectionId = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    if (!activeSectionId) return;
    const activeChip = document.querySelector<HTMLElement>(
      `[data-subnav-id="${activeSectionId}"]`
    );
    activeChip?.scrollIntoView?.({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeSectionId]);

  const subNavItems = [
    { id: "literature", label: "Literature Survey" },
    { id: "gap", label: "Research Gap" },
    { id: "problem-solution", label: "Problem & Solution" },
    { id: "objectives", label: "Objectives" }
  ];

  const comparisonColumns = [
    {
      key: "aspect",
      header: "System Aspect",
      render: (row: (typeof comparisonTableData)[0]) => (
        <span className="font-heading font-bold text-[var(--ink)]">{row.aspect}</span>
      ),
      className: "w-1/5"
    },
    {
      key: "currentPractice",
      header: "Current Practice",
      render: (row: (typeof comparisonTableData)[0]) => (
        <span className="text-xs text-[var(--muted)] leading-relaxed">{row.currentPractice}</span>
      ),
      className: "w-2/5"
    },
    {
      key: "latexGuardSystem",
      header: "LatexGuard System",
      render: (row: (typeof comparisonTableData)[0]) => (
        <span className="text-xs font-medium text-[var(--brand-deep)] leading-relaxed">
          {row.latexGuardSystem}
        </span>
      ),
      className: "w-2/5"
    }
  ];

  const deviceFlowSteps = [
    {
      number: 1,
      title: "Multi-Sensor Probe",
      description: "ESP32 captures pH, temperature, turbidity, and conductivity signals.",
      badge: "Field Probe"
    },
    {
      number: 2,
      title: "Firmware Filter",
      description: "Moving-average digital filter eliminates sensor signal noise.",
      badge: "DSP"
    },
    {
      number: 3,
      title: "BLE Telemetry",
      description: "Transmits structured JSON telemetry to supervisor mobile app.",
      badge: "BLE / JSON"
    },
    {
      number: 4,
      title: "Random Forest VFA",
      description: "Cloud ML soft-sensing model estimates VFA chemical score.",
      badge: "Python ML"
    },
    {
      number: 5,
      title: "Real-Time DB & QA",
      description: "Writes predicted grade (A/B/C) to database & QA dashboard.",
      badge: "Cloud DB"
    }
  ];

  const collectionFlowSteps = [
    {
      number: 1,
      title: "Farmer Posting",
      description: "Farmers post daily availability, quantity, and location.",
      badge: "Mobile Portal"
    },
    {
      number: 2,
      title: "DRL Route Planning",
      description: "Deep Q-Network optimizes stop-by-stop routes prioritizing high VFA risk.",
      badge: "DQN Agent"
    },
    {
      number: 3,
      title: "Field Collection",
      description: "Supervisors follow mobile GPS stop list and perform VFA checks.",
      badge: "GPS Navigation"
    },
    {
      number: 4,
      title: "Adulteration Check",
      description: "Isolation Forest algorithm verifies sample integrity before mixing.",
      badge: "ML Verification"
    },
    {
      number: 5,
      title: "Factory Dispatch",
      description: "Verified batch syncs to cloud ledger for automated QA arrival.",
      badge: "Traceability"
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--card)] border-b border-[var(--line)] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-3">
            Research Scope & Domain
          </Badge>
          <h1 className="font-heading text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
            Project Scope & System Objectives
          </h1>
          <p className="mt-3 max-w-3xl text-base text-[var(--muted)] leading-relaxed">
            Examine the academic foundation, identified literature gaps, domain problem statement, proposed LatexGuard dual-system solution, and research objectives.
          </p>
        </div>
      </section>

      {/* Sticky Scroll-Spy Sub-Navigation */}
      <div className="sticky top-16 z-30 border-b border-[var(--line)] bg-[var(--card)]/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto gap-2 py-2 no-scrollbar" aria-label="Scope Sub Navigation">
            {subNavItems.map((item) => {
              const isActive = activeSectionId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  data-subnav-id={item.id}
                  className={`flex min-h-[44px] shrink-0 items-center whitespace-nowrap rounded-lg px-4 font-heading text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep)] ${
                    isActive
                      ? "bg-[var(--brand-deep)] text-white"
                      : "bg-[var(--wash)] text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--line)]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 1. LITERATURE SURVEY */}
      <Section id="literature" bg="wash">
        <SectionHeading
          badge="Academic Literature"
          title="Literature Survey & Domain Context"
          description="Synthesizing foundational research across physical IoT sensing, supply chain cybersecurity, dynamic route optimization, and time-series quality forecasting."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {literatureSurveyData.map((item) => (
            <Reveal key={item.componentId} direction="up">
              <div className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-xs h-full">
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                  <h3 className="font-heading text-lg font-bold text-[var(--ink)] flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-[var(--brand-deep)]" />
                    <span>{item.componentTitle}</span>
                  </h3>
                  <div className="flex gap-1 font-mono text-xs font-bold text-[var(--brand-deep)]">
                    {item.citationIds.map((cid) => (
                      <a
                        key={cid}
                        href={`#ref-${cid}`}
                        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded bg-[var(--brand-soft)] px-1.5 py-0.5 hover:underline"
                        title={`Jump to Reference [${cid}]`}
                      >
                        [{cid}]
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 text-xs leading-relaxed">
                  <div>
                    <span className="font-heading font-bold text-[var(--ink)] block mb-1">
                      Existing State of Art:
                    </span>
                    <p className="text-[var(--muted)]">{item.existingWork}</p>
                  </div>
                  <div>
                    <span className="font-heading font-bold text-amber-700 dark:text-amber-400 block mb-1">
                      Identified Limitations:
                    </span>
                    <p className="text-[var(--muted)]">{item.limitations}</p>
                  </div>
                  <div className="pt-2 border-t border-[var(--line)]">
                    <span className="font-heading font-bold text-[var(--brand-deep)] block mb-1">
                      LatexGuard Innovation:
                    </span>
                    <p className="text-[var(--text)] font-medium">{item.latexGuardApproach}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* References List */}
        <div id="references" className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-xs">
          <h3 className="font-heading text-base font-bold text-[var(--ink)] mb-4 flex items-center gap-2">
            <span>Academic & Advisory References</span>
            <Badge variant="neutral">Formal Citations</Badge>
          </h3>
          <ol className="flex flex-col gap-3 text-xs text-[var(--muted)] divide-y divide-[var(--line)]">
            {referencesData.map((ref) => (
              <li key={ref.id} id={`ref-${ref.id}`} className="pt-3 first:pt-0 flex items-start gap-3">
                <span className="font-mono font-bold text-[var(--brand-deep)] shrink-0">
                  [{ref.id}]
                </span>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-semibold text-[var(--ink)]">{ref.authors}</span>. &ldquo;
                    {ref.title}&rdquo;, <em>{ref.source}</em>, {ref.year}.
                  </div>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-1 font-mono text-[13px] font-semibold text-[var(--brand-deep)] hover:underline shrink-0"
                  >
                    <span>Visit Source</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 2. RESEARCH GAP */}
      <Section id="gap" bg="card">
        <SectionHeading
          badge="Technological Limitations"
          title="Identified Research & Industry Gap"
          description="Comparing standard natural rubber collection practices against the automated LatexGuard research platform."
        />

        <div className="mb-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-heading font-bold">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <span>{researchGapSummary.title}</span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[var(--text)]">
            {researchGapSummary.points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-bold text-amber-600 dark:text-amber-400">•</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        <Table
          columns={comparisonColumns}
          data={comparisonTableData}
          caption="Current Practice vs LatexGuard System Comparison"
        />
      </Section>

      {/* 3. PROBLEM & SOLUTION */}
      <Section id="problem-solution" bg="wash">
        <SectionHeading
          badge="Domain Solution"
          title="Research Problem & Dual-System Solution"
          description="Addressing multi-stakeholder pain points through an integrated hardware VFA tool and streamlined collection logistics workflow."
        />

        {/* Affected Stakeholders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col gap-2 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-xs">
            <Users className="h-6 w-6 text-[var(--brand-deep)]" />
            <h4 className="font-heading font-bold text-[var(--ink)]">Smallholder Farmers</h4>
            <p className="text-xs text-[var(--muted)]">
              Face subjective pricing, payment delays, and lack of historical quality records.
            </p>
          </div>

          <div className="flex flex-col gap-2 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-xs">
            <Truck className="h-6 w-6 text-[var(--brand-deep)]" />
            <h4 className="font-heading font-bold text-[var(--ink)]">Collectors & Drivers</h4>
            <p className="text-xs text-[var(--muted)]">
              Suffer from inefficient static routes, vehicle overloads, and transit spoilage risks.
            </p>
          </div>

          <div className="flex flex-col gap-2 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-xs">
            <Factory className="h-6 w-6 text-[var(--brand-deep)]" />
            <h4 className="font-heading font-bold text-[var(--ink)]">Factories & QA Officers</h4>
            <p className="text-xs text-[var(--muted)]">
              Receive unverified latex batches, facing chemical quality mismatch and processing defects.
            </p>
          </div>

          <div className="flex flex-col gap-2 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-xs">
            <Leaf className="h-6 w-6 text-[var(--brand-deep)]" />
            <h4 className="font-heading font-bold text-[var(--ink)]">Environment</h4>
            <p className="text-xs text-[var(--muted)]">
              Incur excessive fuel consumption and emissions due to unoptimized transport routes.
            </p>
          </div>
        </div>

        {/* Two Connected Systems */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col gap-4 rounded-2xl border border-[var(--brand-deep)]/40 bg-[var(--brand-soft)]/20 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-[var(--brand-deep)]" />
              <h3 className="font-heading text-lg font-bold text-[var(--ink)]">
                Solution 1: IoT Metrolac VFA Tool
              </h3>
            </div>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              A handheld ESP32 multi-sensor device capturing pH, temperature, turbidity, and conductivity. Moving-average filtering removes signal noise before cloud Random Forest soft-sensing estimates VFA values on-site prior to batch mixing.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-[var(--brand-deep)]/40 bg-[var(--brand-soft)]/20 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-[var(--brand-deep)]" />
              <h3 className="font-heading text-lg font-bold text-[var(--ink)]">
                Solution 2: Streamlined Collection Logistics
              </h3>
            </div>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Mobile application suite connecting farmers, supervisors, and factory managers. Deep Q-Network (DRL) algorithms generate optimal collection routes prioritizing high-VFA latex, paired with live GPS tracking and arrival notifications.
            </p>
          </div>
        </div>

        {/* Step-by-Step Flow Diagrams */}
        <div className="flex flex-col gap-8">
          <FlowSteps title="IoT Multi-Sensor Device Flow" steps={deviceFlowSteps} />
          <FlowSteps title="Streamlined Collection Workflow" steps={collectionFlowSteps} />
        </div>
      </Section>

      {/* 4. RESEARCH OBJECTIVES */}
      <Section id="objectives" bg="card">
        <SectionHeading
          badge="Project Milestones"
          title="Research Objectives & Component Goals"
          description="Framed strictly as system-wide engineering goals to deliver an integrated latex collection ecosystem."
        />

        {/* Main Objective */}
        <div className="mb-12 rounded-2xl border border-[var(--brand-deep)] bg-[var(--brand-soft)] p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-6 w-6 text-[var(--brand-deep)]" />
            <h3 className="font-heading text-xl font-bold text-[var(--ink)]">
              Main System Objective
            </h3>
          </div>
          <p className="text-base font-medium text-[var(--ink)] leading-relaxed">
            &ldquo;{mainObjective}&rdquo;
          </p>
        </div>

        {/* General Objectives */}
        <h3 className="font-heading text-lg font-bold text-[var(--ink)] mb-6">
          General Research Objectives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {generalObjectives.map((obj) => (
            <div
              key={obj.id}
              className="flex flex-col gap-3 rounded-2xl border border-[var(--line)] bg-[var(--wash)] p-6 shadow-xs"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--brand-deep)] font-mono text-xs font-bold text-white">
                0{obj.id}
              </span>
              <h4 className="font-heading text-base font-bold text-[var(--ink)]">
                {obj.title}
              </h4>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                {obj.description}
              </p>
            </div>
          ))}
        </div>

        {/* Component Objectives (2x2 Grid, No Member Names) */}
        <h3 className="font-heading text-lg font-bold text-[var(--ink)] mb-6">
          Component Objectives (2&times;2 System Layout)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {componentObjectives.map((comp) => (
            <div
              key={comp.componentId}
              className="flex flex-col gap-3 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-xs border-l-4 border-l-[var(--brand-deep)]"
            >
              <h4 className="font-heading text-base font-bold text-[var(--ink)]">
                {comp.componentTitle}
              </h4>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                {comp.summary}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
