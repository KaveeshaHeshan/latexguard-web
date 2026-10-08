"use client";

import React, { useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { milestonesData } from "@/data/milestones";
import { formatDate } from "@/lib/format";
import { CheckCircle2, Clock, Calendar, CheckSquare, Layers } from "lucide-react";

export default function MilestonesPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const completedCount = milestonesData.filter((m) => m.status === "completed").length;
  const inProgressCount = milestonesData.filter((m) => m.status === "in-progress").length;
  const upcomingCount = milestonesData.filter((m) => m.status === "upcoming").length;

  const filteredMilestones =
    selectedStatus === "all"
      ? milestonesData
      : milestonesData.filter((m) => m.status === selectedStatus);

  const getStatusBadge = (status: (typeof milestonesData)[0]["status"]) => {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dcfce7] px-3 py-1 font-mono text-xs font-bold text-[#166534] border border-[#86efac]">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Completed</span>
          </span>
        );
      case "in-progress":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fef3c7] px-3 py-1 font-mono text-xs font-bold text-[#92400e] border border-[#fde68a]">
            <Clock className="h-3.5 w-3.5" />
            <span>In Progress</span>
          </span>
        );
      case "upcoming":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--wash)] px-3 py-1 font-mono text-xs font-bold text-[var(--muted)] border border-[var(--line)]">
            <Calendar className="h-3.5 w-3.5" />
            <span>Upcoming</span>
          </span>
        );
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--card)] border-b border-[var(--line)] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-3">
            Academic Timeline
          </Badge>
          <h1 className="font-heading text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
            Research Evaluation Milestones
          </h1>
          <p className="mt-3 max-w-3xl text-base text-[var(--muted)] leading-relaxed">
            Tracking academic deliverables for SLIIT IT4010 Research Project 2026 across eight evaluation milestones.
          </p>
        </div>
      </section>

      {/* Counters & Filter Section */}
      <Section bg="wash">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#dcfce7] text-[#166534]">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-3xl font-black text-[#166534]">
                <Counter end={completedCount} />
              </span>
              <span className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider">
                Completed Milestones
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fef3c7] text-[#92400e]">
              <Clock className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-3xl font-black text-[#92400e]">
                <Counter end={inProgressCount} />
              </span>
              <span className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider">
                In Progress Milestones
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--wash)] text-[var(--muted)] border border-[var(--line)]">
              <Layers className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-3xl font-black text-[var(--ink)]">
                <Counter end={upcomingCount} />
              </span>
              <span className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider">
                Upcoming Milestones
              </span>
            </div>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 mb-10 overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-start">
          <Tag
            isActive={selectedStatus === "all"}
            onClick={() => setSelectedStatus("all")}
          >
            All Milestones ({milestonesData.length})
          </Tag>
          <Tag
            isActive={selectedStatus === "completed"}
            onClick={() => setSelectedStatus("completed")}
          >
            Completed ({completedCount})
          </Tag>
          <Tag
            isActive={selectedStatus === "in-progress"}
            onClick={() => setSelectedStatus("in-progress")}
          >
            In Progress ({inProgressCount})
          </Tag>
          <Tag
            isActive={selectedStatus === "upcoming"}
            onClick={() => setSelectedStatus("upcoming")}
          >
            Upcoming ({upcomingCount})
          </Tag>
        </div>

        {/* Vertical Timeline Cards */}
        <SectionHeading
          badge="Deliverable Schedule"
          title="Milestone Cards"
          description="Click or filter cards to review deliverables, dates, and status."
        />

        <div className="relative flex flex-col gap-8 pl-4 sm:pl-6">
          <div
            className="absolute top-4 bottom-4 left-4 sm:left-6 w-0.5 bg-[var(--line)] -translate-x-1/2"
            aria-hidden="true"
          />

          {filteredMilestones.map((m, idx) => (
            <Reveal key={m.id} direction="up" delay={idx * 0.05}>
              <div className="relative flex items-start gap-4 sm:gap-6">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-xs font-extrabold ring-4 ring-[var(--wash)] z-10 ${
                    m.status === "completed"
                      ? "bg-[#166534] text-white"
                      : m.status === "in-progress"
                      ? "bg-[#92400e] text-white"
                      : "bg-[var(--line)] text-[var(--muted)]"
                  }`}
                >
                  0{idx + 1}
                </div>

                <div className="flex-1 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-xs hover:border-[var(--brand-deep)] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--line)] pb-4 mb-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-[var(--ink)]">
                        {m.title}
                      </h3>
                      <span className="font-mono text-xs font-semibold text-[var(--muted)] flex items-center gap-1 mt-1">
                        <Calendar className="h-3.5 w-3.5 text-[var(--brand-deep)]" />
                        {formatDate(m.date)}
                      </span>
                    </div>
                    <div>{getStatusBadge(m.status)}</div>
                  </div>

                  <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
                    {m.description}
                  </p>

                  <div className="rounded-xl bg-[var(--wash)] p-4 border border-[var(--line)]">
                    <span className="font-heading text-xs font-bold text-[var(--ink)] flex items-center gap-1.5 mb-2">
                      <CheckSquare className="h-4 w-4 text-[var(--brand-deep)]" />
                      Key Deliverables & Artifacts:
                    </span>
                    <ul className="list-disc list-inside flex flex-col gap-1 text-xs text-[var(--text)]">
                      {m.deliverables.map((del, dIdx) => (
                        <li key={dIdx}>{del}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
