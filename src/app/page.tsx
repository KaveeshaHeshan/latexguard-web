"use client";

import React, { useState } from "react";
import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import Modal from "@/components/ui/Modal";
import VfaGrader from "@/components/viz/VfaGrader";
import SystemDiagram from "@/components/viz/SystemDiagram";
import { projectInfo } from "@/data/project";
import { milestonesData } from "@/data/milestones";
import { supervisoryTeam } from "@/data/team";
import { siteConfig } from "@/config/siteConfig";
import {
  ArrowRight,
  Play,
  Cpu,
  ShieldCheck,
  Navigation,
  BarChart3,
  Globe2,
  CheckCircle2,
  Clock,
  ChevronRight,
  Sparkles
} from "lucide-react";

export default function HomePage() {
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);

  // Compute milestone counts
  const completedMilestones = milestonesData.filter((m) => m.status === "completed").length;
  const inProgressMilestones = milestonesData.filter((m) => m.status === "in-progress").length;
  const upcomingMilestones = milestonesData.filter((m) => m.status === "upcoming").length;

  const componentIcons = [Cpu, ShieldCheck, Navigation, BarChart3];

  return (
    <>
      {/* 1. HERO SECTION */}
      <Section bg="wash" className="pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Text & Hero CTAs */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <Reveal direction="down">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="brand" className="px-3 py-1">
                  {projectInfo.id}
                </Badge>
                <span className="font-heading text-[13px] font-semibold text-[var(--muted)]">
                  {projectInfo.university}
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h1
                className="font-heading font-extrabold tracking-tight text-[var(--ink)] leading-tight"
                style={{ fontSize: "clamp(2rem, 1.4rem + 3vw, 4rem)" }}
              >
                {projectInfo.title}
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="font-heading text-base font-semibold text-[var(--brand-deep)] sm:text-lg">
                &ldquo;{projectInfo.slogan}&rdquo;
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="max-w-[60ch] text-base text-[var(--muted)] leading-relaxed">
                {projectInfo.shortIntro}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-col gap-3 pt-2 min-[480px]:flex-row min-[480px]:items-center min-[480px]:gap-4">
                <Button href="/scope/" variant="primary" size="lg" className="w-full min-[480px]:w-auto">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full min-[480px]:w-auto"
                  onClick={() => setDemoModalOpen(true)}
                >
                  <Play className="mr-2 h-4 w-4 fill-current text-[var(--brand-deep)]" />
                  <span>View Demo</span>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: VFA Grader Card (Desktop beside, Mobile below) */}
          <div className="lg:col-span-5">
            <Reveal direction="up" delay={0.2}>
              <VfaGrader />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 2. KEY FACTS STRIP */}
      <section className="border-y border-[var(--line)] bg-[var(--card)] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex flex-col border-l-2 border-[var(--brand-deep)] pl-4">
              <span className="font-mono text-[13px] font-bold text-[var(--muted)] uppercase tracking-wider">
                Research Cluster
              </span>
              <span className="font-heading text-base font-extrabold text-[var(--ink)] mt-1">
                {projectInfo.group}
              </span>
              <span className="text-[13px] text-[var(--muted)]">Specialization: {projectInfo.specialization}</span>
            </div>

            <div className="flex flex-col border-l-2 border-[var(--brand-deep)] pl-4">
              <span className="font-mono text-[13px] font-bold text-[var(--muted)] uppercase tracking-wider">
                System Scope
              </span>
              <span className="font-heading text-base font-extrabold text-[var(--ink)] mt-1">
                4 Core Components
              </span>
              <span className="text-[13px] text-[var(--muted)]">Unified Architecture</span>
            </div>

            <div className="flex flex-col border-l-2 border-[var(--brand-deep)] pl-4">
              <span className="font-mono text-[13px] font-bold text-[var(--muted)] uppercase tracking-wider">
                Academic Supervision
              </span>
              <span className="font-heading text-base font-extrabold text-[var(--ink)] mt-1">
                {supervisoryTeam.length} Panel Members
              </span>
              <span className="text-[13px] text-[var(--muted)]">Internal & External</span>
            </div>

            <div className="flex flex-col border-l-2 border-[var(--brand-deep)] pl-4">
              <span className="font-mono text-[13px] font-bold text-[var(--muted)] uppercase tracking-wider">
                Academic Module
              </span>
              <span className="font-heading text-base font-extrabold text-[var(--ink)] mt-1">
                SLIIT IT4010
              </span>
              <span className="text-[13px] text-[var(--muted)]">Research Project 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SYSTEM AT A GLANCE (SVG/CSS Diagram) */}
      <Section id="system-diagram" bg="wash">
        <SectionHeading
          badge="Integrated Ecosystem"
          title="The LatexGuard System at a Glance"
          description="Explore how multi-sensor IoT probes, cloud ML soft-sensing, security protocols, DRL route planning, and predictive analytics communicate in real time."
        />
        <div className="mx-auto mb-10 flex max-w-3xl flex-col gap-4 text-sm text-[var(--muted)] leading-relaxed">
          {projectInfo.heroExpandedExplanation.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <Reveal direction="up">
          <SystemDiagram />
        </Reveal>
      </Section>

      {/* 4. THE PROBLEM IN NUMBERS-FREE TERMS */}
      <Section bg="card">
        <SectionHeading
          badge="Industry Challenge"
          title="The Natural Rubber Processing Problem"
          description="Traditional latex collection relies on subjective field checks and manual record keeping, introducing operational delays and supply chain conflicts."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectInfo.problemStatements.map((prob, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="flex flex-col gap-3 rounded-2xl border border-[var(--line)] bg-[var(--wash)] p-6 shadow-xs h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-soft)] font-mono text-sm font-bold text-[var(--brand-deep)]">
                  0{idx + 1}
                </div>
                <h3 className="font-heading text-lg font-bold text-[var(--ink)]">
                  {prob.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {prob.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. FOUR SYSTEM COMPONENTS OVERVIEW */}
      <Section bg="wash">
        <SectionHeading
          badge="Core Research Pillars"
          title="Four Interconnected System Components"
          description="Described as equal parts of one single system, each component addresses a specific challenge across the field-to-factory pipeline."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectInfo.systemComponentsSummary.map((comp, idx) => {
            const IconComponent = componentIcons[idx] || Cpu;
            return (
              <Reveal key={comp.id} direction="up" delay={idx * 0.1}>
                <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-sm hover:border-[var(--brand-deep)] transition-all h-full">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-deep)] text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant="brand">Component 0{idx + 1}</Badge>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[var(--ink)]">
                      {comp.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {comp.summary}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[var(--line)] flex justify-end">
                    <Link
                      href="/methodology/"
                      className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-[var(--brand-deep)] hover:underline focus-visible:outline-none"
                    >
                      <span>Component Architecture</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 6. SDG ROW */}
      <Section bg="card">
        <SectionHeading
          badge="Sustainability Impact"
          title="United Nations SDG Alignment"
          description="LatexGuard directly supports global sustainability goals by introducing digital agricultural infrastructure, reducing waste, and cutting transport emissions."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectInfo.sdgAlignments.map((sdg) => (
            <Reveal key={sdg.number} direction="up">
              <div className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--wash)] p-6 shadow-xs h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-deep)] font-mono text-xl font-black text-white">
                    {sdg.number}
                  </div>
                  <Globe2 className="h-6 w-6 text-[var(--brand-deep)]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[var(--ink)]">
                  SDG {sdg.number}: {sdg.name}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {sdg.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. MILESTONE PROGRESS TEASER */}
      <Section bg="wash">
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-8 sm:p-12 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <Badge variant="brand" className="w-fit">
                Research Timeline
              </Badge>
              <h2 className="font-heading text-2xl font-extrabold text-[var(--ink)] sm:text-3xl">
                Milestone Progress Overview
              </h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Track our academic evaluation milestones from approved Topic Assessment to the final viva defense.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center justify-center rounded-2xl bg-[var(--wash)] p-4 border border-[var(--line)] min-w-[100px]">
                <span className="font-mono text-3xl font-extrabold text-[#166534]">
                  {completedMilestones}
                </span>
                <span className="text-[13px] font-semibold text-[var(--muted)] flex items-center gap-1 mt-1">
                  <CheckCircle2 className="h-3 w-3 text-[#166534]" /> Completed
                </span>
              </div>

              <div className="flex flex-col items-center justify-center rounded-2xl bg-[var(--wash)] p-4 border border-[var(--line)] min-w-[100px]">
                <span className="font-mono text-3xl font-extrabold text-[#92400e]">
                  {inProgressMilestones}
                </span>
                <span className="text-[13px] font-semibold text-[var(--muted)] flex items-center gap-1 mt-1">
                  <Clock className="h-3 w-3 text-[#92400e]" /> In Progress
                </span>
              </div>

              <div className="flex flex-col items-center justify-center rounded-2xl bg-[var(--wash)] p-4 border border-[var(--line)] min-w-[100px]">
                <span className="font-mono text-3xl font-extrabold text-[var(--muted)]">
                  {upcomingMilestones}
                </span>
                <span className="text-[13px] font-semibold text-[var(--muted)] flex items-center gap-1 mt-1">
                  Upcoming
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--line)] flex justify-end">
            <Button href="/milestones/" variant="secondary" size="md">
              <span>View All Milestones</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>

      {/* 8. CALL TO ACTION */}
      <Section bg="brandSoft" className="text-center py-16">
        <div className="mx-auto max-w-3xl flex flex-col items-center gap-6">
          <Sparkles className="h-8 w-8 text-[var(--brand-deep)]" />
          <h2 className="font-heading text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
            Explore the LatexGuard Research Portfolio
          </h2>
          <p className="text-base text-[var(--muted)] leading-relaxed">
            Review detailed literature analysis, research objectives, component architecture, tech stack specifications, and downloadable academic project forms.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button href="/scope/" variant="primary" size="lg">
              <span>Project Scope</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/downloads/" variant="outline" size="lg">
              <span>Download Documents</span>
            </Button>
          </div>
        </div>
      </Section>

      {/* VIEW DEMO ACCESSIBLE MODAL */}
      <Modal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        title="LatexGuard Interactive System Demonstration"
      >
        <div className="flex flex-col gap-6">
          {siteConfig.demoVideoUrl ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-black">
              <iframe
                src={siteConfig.demoVideoUrl}
                title="LatexGuard System Demonstration Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="rounded-xl bg-[var(--wash)] p-4 text-[13px] text-[var(--muted)] border border-[var(--line)]">
                <p className="font-semibold text-[var(--ink)]">
                  Demo Video Notice: // TODO(confirm)
                </p>
                <p className="mt-1">
                  Demonstration video coming soon. In the meantime, test the interactive VFA Grader soft-sensing model below.
                </p>
              </div>
              <VfaGrader isModal />
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
