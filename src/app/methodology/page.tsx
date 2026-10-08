"use client";

import React, { useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Tabs from "@/components/ui/Tabs";
import Reveal from "@/components/ui/Reveal";
import Timeline from "@/components/ui/Timeline";
import SystemDiagram from "@/components/viz/SystemDiagram";
import { methodologyPhases, methodologyAchievements } from "@/data/methodology";
import { systemArchitectureData } from "@/data/architecture";
import { Cpu, ShieldCheck, Navigation, BarChart3, Cloud, Smartphone, CheckCircle2, Award, Zap } from "lucide-react";

export default function MethodologyPage() {
  const [activeArchTab, setActiveArchTab] = useState<string>("comp-1");

  const timelineSteps = methodologyPhases.map((phase) => ({
    number: phase.phaseNumber,
    title: phase.title,
    subtitle: `Phase 0${phase.phaseNumber} Roadmap`,
    content: (
      <div className="flex flex-col gap-4 text-xs">
        <div>
          <span className="font-heading font-bold text-[var(--ink)] block mb-1">
            Phase Goals:
          </span>
          <ul className="list-disc list-inside flex flex-col gap-1 text-[var(--muted)]">
            {phase.goals.map((g, idx) => (
              <li key={idx}>{g}</li>
            ))}
          </ul>
        </div>
        <div>
          <span className="font-heading font-bold text-[var(--ink)] block mb-1">
            Key Execution Activities:
          </span>
          <ul className="list-disc list-inside flex flex-col gap-1 text-[var(--muted)]">
            {phase.activities.map((act, idx) => (
              <li key={idx}>{act}</li>
            ))}
          </ul>
        </div>
        <div className="pt-2 border-t border-[var(--line)]">
          <span className="font-heading font-bold text-[var(--brand-deep)] block mb-1">
            Phase Deliverables & Outputs:
          </span>
          <ul className="list-disc list-inside flex flex-col gap-1 text-[var(--text)] font-medium">
            {phase.outputs.map((out, idx) => (
              <li key={idx}>{out}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }));

  const architectureTabs = [
    {
      id: "comp-1",
      label: "Component 1: Sensing & VFA",
      content: (
        <div className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--wash)] p-6">
          <div className="flex items-center gap-3">
            <Cpu className="h-6 w-6 text-[var(--brand-deep)]" />
            <h4 className="font-heading text-lg font-bold text-[var(--ink)]">
              {systemArchitectureData.components[0]?.title}
            </h4>
          </div>
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            {systemArchitectureData.components[0]?.shortSummary}
          </p>
          <div className="rounded-xl bg-[var(--card)] p-4 border border-[var(--line)] text-xs">
            <span className="font-bold text-[var(--brand-deep)] block mb-1">
              Novelty:
            </span>
            <p className="text-[var(--ink)]">{systemArchitectureData.components[0]?.novelty}</p>
          </div>
          <ul className="list-disc list-inside flex flex-col gap-1 text-xs text-[var(--text)]">
            {systemArchitectureData.components[0]?.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "comp-2",
      label: "Component 2: Security & Anomaly",
      content: (
        <div className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--wash)] p-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-[var(--brand-deep)]" />
            <h4 className="font-heading text-lg font-bold text-[var(--ink)]">
              {systemArchitectureData.components[1]?.title}
            </h4>
          </div>
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            {systemArchitectureData.components[1]?.shortSummary}
          </p>
          <div className="rounded-xl bg-[var(--card)] p-4 border border-[var(--line)] text-xs">
            <span className="font-bold text-[var(--brand-deep)] block mb-1">
              Novelty:
            </span>
            <p className="text-[var(--ink)]">{systemArchitectureData.components[1]?.novelty}</p>
          </div>
          <ul className="list-disc list-inside flex flex-col gap-1 text-xs text-[var(--text)]">
            {systemArchitectureData.components[1]?.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "comp-3",
      label: "Component 3: BLE & DRL Logistics",
      content: (
        <div className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--wash)] p-6">
          <div className="flex items-center gap-3">
            <Navigation className="h-6 w-6 text-[var(--brand-deep)]" />
            <h4 className="font-heading text-lg font-bold text-[var(--ink)]">
              {systemArchitectureData.components[2]?.title}
            </h4>
          </div>
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            {systemArchitectureData.components[2]?.shortSummary}
          </p>
          <div className="rounded-xl bg-[var(--card)] p-4 border border-[var(--line)] text-xs">
            <span className="font-bold text-[var(--brand-deep)] block mb-1">
              Novelty:
            </span>
            <p className="text-[var(--ink)]">{systemArchitectureData.components[2]?.novelty}</p>
          </div>
          <ul className="list-disc list-inside flex flex-col gap-1 text-xs text-[var(--text)]">
            {systemArchitectureData.components[2]?.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "comp-4",
      label: "Component 4: Predictive & Traceability",
      content: (
        <div className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--wash)] p-6">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-[var(--brand-deep)]" />
            <h4 className="font-heading text-lg font-bold text-[var(--ink)]">
              {systemArchitectureData.components[3]?.title}
            </h4>
          </div>
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            {systemArchitectureData.components[3]?.shortSummary}
          </p>
          <div className="rounded-xl bg-[var(--card)] p-4 border border-[var(--line)] text-xs">
            <span className="font-bold text-[var(--brand-deep)] block mb-1">
              Novelty:
            </span>
            <p className="text-[var(--ink)]">{systemArchitectureData.components[3]?.novelty}</p>
          </div>
          <ul className="list-disc list-inside flex flex-col gap-1 text-xs text-[var(--text)]">
            {systemArchitectureData.components[3]?.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "backend-services",
      label: "Backend Services",
      content: (
        <div className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--wash)] p-6">
          <div className="flex items-center gap-3">
            <Cloud className="h-6 w-6 text-[var(--brand-deep)]" />
            <h4 className="font-heading text-lg font-bold text-[var(--ink)]">
              {systemArchitectureData.backendServices.title}
            </h4>
          </div>
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            {systemArchitectureData.backendServices.description}
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1.5 text-xs text-[var(--text)]">
            {systemArchitectureData.backendServices.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "frontend-platforms",
      label: "Frontend Platforms",
      content: (
        <div className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--wash)] p-6">
          <div className="flex items-center gap-3">
            <Smartphone className="h-6 w-6 text-[var(--brand-deep)]" />
            <h4 className="font-heading text-lg font-bold text-[var(--ink)]">
              {systemArchitectureData.frontendPlatforms.title}
            </h4>
          </div>
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            {systemArchitectureData.frontendPlatforms.description}
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1.5 text-xs text-[var(--text)]">
            {systemArchitectureData.frontendPlatforms.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      )
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--card)] border-b border-[var(--line)] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-3">
            Research Strategy
          </Badge>
          <h1 className="font-heading text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
            System Methodology & Architecture
          </h1>
          <p className="mt-3 max-w-3xl text-base text-[var(--muted)] leading-relaxed">
            A multidisciplinary engineering approach integrating agricultural science, embedded hardware firmware, cloud machine-learning inference, and cross-platform mobile logistics.
          </p>
        </div>
      </section>

      {/* 1. FOUR PHASES TIMELINE */}
      <Section bg="wash">
        <SectionHeading
          badge="Phased Execution"
          title="Four Research Development Phases"
          description="Structured lifecycle from preliminary stakeholder surveys through hardware design, machine learning model training, and lab validation."
        />
        <Reveal direction="up">
          <Timeline steps={timelineSteps} />
        </Reveal>
      </Section>

      {/* 2. SYSTEM / COMPONENT ARCHITECTURE */}
      <Section bg="card">
        <SectionHeading
          badge="Interactive Specification"
          title="System Architecture & Component Deep Dive"
          description="Interactive diagram and architectural specifications for the four core research components, cloud backend, and user interface platforms."
        />

        <div className="flex flex-col gap-12">
          {/* Interactive SVG System Diagram */}
          <Reveal direction="up">
            <SystemDiagram />
          </Reveal>

          {/* Component Tabs & Accordion Details */}
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-xs">
            <h3 className="font-heading text-xl font-bold text-[var(--ink)] mb-6">
              Component & Platform Specifications
            </h3>
            <Tabs
              tabs={architectureTabs}
              activeTabId={activeArchTab}
              onTabChange={(id) => setActiveArchTab(id)}
            />
          </div>
        </div>
      </Section>

      {/* 3. METHODOLOGY ACHIEVEMENTS */}
      <Section bg="wash">
        <SectionHeading
          badge="Design Outcomes"
          title="Methodology Achievements & System Impact"
          description="Outlining the structural innovations engineered to deliver real-time field grading and logistics optimization."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Development Strategy */}
          <Reveal direction="up">
            <div className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-xs h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand-deep)]">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[var(--ink)]">
                Development Strategy
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                {methodologyAchievements.developmentStrategy}
              </p>
            </div>
          </Reveal>

          {/* Main Innovations */}
          <Reveal direction="up" delay={0.1}>
            <div className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-xs h-full md:col-span-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand-deep)]">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[var(--ink)]">
                Key Technical Innovations
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[var(--text)]">
                {methodologyAchievements.mainInnovations.map((inn, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-deep)] shrink-0 mt-0.5" />
                    <span>{inn}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
