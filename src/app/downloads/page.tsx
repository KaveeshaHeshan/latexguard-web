"use client";

import React from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { downloadsData } from "@/data/downloads";
import { withBasePath } from "@/lib/url";
import { FileText, Presentation, Download, ExternalLink, AlertCircle } from "lucide-react";

export default function DownloadsPage() {
  const documents = downloadsData.filter((d) => d.category === "documents");
  const presentations = downloadsData.filter((d) => d.category === "presentations");

  const renderDownloadCard = (item: (typeof downloadsData)[0]) => {
    return (
      <div
        key={item.id}
        className="flex flex-col justify-between gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-xs hover:border-[var(--brand-deep)] transition-all h-full"
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand-deep)]">
              {item.category === "documents" ? (
                <FileText className="h-5 w-5" />
              ) : (
                <Presentation className="h-5 w-5" />
              )}
            </div>
            <Badge variant="neutral">{item.fileType}</Badge>
          </div>

          <h3 className="font-heading text-lg font-bold text-[var(--ink)]">
            {item.title}
          </h3>

          <p className="text-xs text-[var(--muted)] leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-4 border-t border-[var(--line)]">
          {item.isAvailable && item.localPath ? (
            <Button
              href={withBasePath(item.localPath)}
              isExternal
              variant="primary"
              size="sm"
              className="w-full"
            >
              <Download className="mr-2 h-4 w-4" />
              <span>Download {item.fileType}</span>
            </Button>
          ) : (
            <Button variant="outline" size="sm" disabled className="w-full">
              <AlertCircle className="mr-2 h-4 w-4 text-[var(--muted)]" />
              <span>Coming Soon</span>
            </Button>
          )}

          {item.driveUrl ? (
            <Button
              href={item.driveUrl}
              isExternal
              variant="ghost"
              size="sm"
              className="w-full text-xs text-[var(--brand-deep)]"
            >
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
              <span>Open in Google Drive</span>
            </Button>
          ) : (
            <span className="text-center font-mono text-[11px] text-[var(--muted)]">
              Drive Link: TODO(confirm)
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--card)] border-b border-[var(--line)] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-3">
            Academic Artifacts
          </Badge>
          <h1 className="font-heading text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
            Downloads & Documents
          </h1>
          <p className="mt-3 max-w-3xl text-base text-[var(--muted)] leading-relaxed">
            Access official academic reports, topic assessment forms, research proposals, presentation slide decks, and project archives for R26-IT-120.
          </p>
        </div>
      </section>

      {/* 1. DOCUMENTS GROUP */}
      <Section bg="wash">
        <SectionHeading
          badge="Formal Documentation"
          title="Project Documents & Reports"
          description="Official written thesis chapters, topic assessment form, and research paper drafts."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, idx) => (
            <Reveal key={doc.id} direction="up" delay={idx * 0.05}>
              {renderDownloadCard(doc)}
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 2. PRESENTATIONS GROUP */}
      <Section bg="card">
        <SectionHeading
          badge="Slide Decks"
          title="Evaluation Presentations"
          description="Oral defense presentation slide decks used during progress reviews and final viva."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {presentations.map((pres, idx) => (
            <Reveal key={pres.id} direction="up" delay={idx * 0.05}>
              {renderDownloadCard(pres)}
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
