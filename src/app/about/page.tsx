import React from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { supervisoryTeam, researchMembers, ethicalClearanceNotice } from "@/data/team";
import { Mail, GraduationCap, Building2, ShieldCheck, Target, Eye } from "lucide-react";

export default function AboutPage() {
  const renderPersonCard = (person: (typeof supervisoryTeam)[0]) => {
    // Generate clean initial avatar fallback
    const initials = person.name
      .split(" ")
      .map((part) => part[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("");

    return (
      <div
        key={person.id}
        className="flex flex-col items-center text-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-xs hover:border-[var(--brand-deep)] transition-all h-full"
      >
        {/* Avatar or Initial Fallback */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand-soft)] border-2 border-[var(--brand-deep)] text-[var(--brand-deep)] font-heading text-xl font-extrabold shadow-inner">
          {person.photoUrl ? (
            <Image
              src={person.photoUrl}
              alt={person.name}
              width={80}
              height={80}
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>

        <div className="flex flex-col gap-1 w-full">
          <h3 className="font-heading text-base font-bold text-[var(--ink)]">
            {person.name}
          </h3>
          <Badge variant={person.isSupervisor ? "brand" : "neutral"} size="sm" className="mx-auto mt-1">
            {person.role}
          </Badge>
          {person.registrationId && (
            <span className="font-mono text-[11px] font-semibold text-[var(--muted)]">
              {person.registrationId}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 text-xs text-[var(--muted)] border-t border-[var(--line)] pt-3 w-full">
          <span className="flex items-center justify-center gap-1">
            <Building2 className="h-3.5 w-3.5 text-[var(--brand-deep)] shrink-0" />
            <span className="truncate">{person.department}</span>
          </span>
          <span className="flex items-center justify-center gap-1">
            <GraduationCap className="h-3.5 w-3.5 text-[var(--brand-deep)] shrink-0" />
            <span className="truncate">{person.university}</span>
          </span>
        </div>

        <a
          href={`mailto:${person.email}`}
          className="mt-auto inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--wash)] px-3 py-1.5 font-mono text-xs font-semibold text-[var(--brand-deep)] transition-colors hover:bg-[var(--brand-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep)] w-full"
        >
          <Mail className="h-3.5 w-3.5 shrink-0" />
          <span className="[overflow-wrap:anywhere]">{person.email}</span>
        </a>
      </div>
    );
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--card)] border-b border-[var(--line)] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-3">
            Research Team
          </Badge>
          <h1 className="font-heading text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
            About Our Research Group
          </h1>
          <p className="mt-3 max-w-3xl text-base text-[var(--muted)] leading-relaxed">
            Representing the Computing Infrastructure (CI) research group under the Department of Information Technology at the Sri Lanka Institute of Information Technology (SLIIT).
          </p>
        </div>
      </section>

      {/* 1. VISION & GOAL */}
      <Section bg="wash">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal direction="up">
            <div className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-8 shadow-xs h-full">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand-deep)]">
                  <Eye className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[var(--ink)]">
                  Research Vision
                </h2>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                To transform natural rubber agricultural supply chains by replacing subjective manual testing with automated, non-destructive field sensing, transparent cloud data management, and dynamic logistics.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <div className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-8 shadow-xs h-full">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand-deep)]">
                  <Target className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[var(--ink)]">
                  Core Project Goal
                </h2>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                To deliver a fully integrated, trustworthy research ecosystem combining ESP32 multi-sensor probes, cloud Random Forest soft-sensing, DRL route optimization, and time-series forecasting for sustainable latex processing.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 2. OUR TEAM - SUPERVISION & MEMBERS */}
      <Section bg="card">
        {/* Supervision Panel */}
        <SectionHeading
          badge="Academic Guidance"
          title="Supervisory Panel"
          description="Under the academic direction and supervision of senior faculty members."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {supervisoryTeam.map((sup, idx) => (
            <Reveal key={sup.id} direction="up" delay={idx * 0.05}>
              {renderPersonCard(sup)}
            </Reveal>
          ))}
        </div>

        {/* Research Members */}
        <SectionHeading
          badge="Student Researchers"
          title="Research Members"
          description="SLIIT IT4010 Research Project 2026 group members presented with equal research prominence."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchMembers.map((member, idx) => (
            <Reveal key={member.id} direction="up" delay={idx * 0.05}>
              {renderPersonCard(member)}
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. ETHICAL CLEARANCE & DATA PRIVACY NOTE */}
      <Section bg="wash">
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-6 w-6 text-[var(--brand-deep)]" />
            <h3 className="font-heading text-xl font-bold text-[var(--ink)]">
              {ethicalClearanceNotice.title}
            </h3>
          </div>
          <p className="text-xs text-[var(--muted)] leading-relaxed mb-3">
            {ethicalClearanceNotice.description}
          </p>
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            <strong>Data Privacy Policy:</strong> {ethicalClearanceNotice.privacyPolicy}
          </p>
        </div>
      </Section>
    </>
  );
}
