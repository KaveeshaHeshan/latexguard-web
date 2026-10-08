"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Mail } from "lucide-react";
import Logo from "@/components/brand/Logo";
import { siteConfig } from "@/config/siteConfig";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/scope/", label: "Project Scope" },
  { href: "/methodology/", label: "Methodology" },
  { href: "/technologies/", label: "Technologies" },
  { href: "/milestones/", label: "Milestones" },
  { href: "/downloads/", label: "Downloads" },
  { href: "/about/", label: "About Us" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--card)] text-[var(--text)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand & SLIIT details */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-xs leading-relaxed text-[var(--muted)]">
              {siteConfig.slogan}
            </p>
            <div className="rounded-lg bg-[var(--wash)] p-3 text-xs text-[var(--muted)] border border-[var(--line)]">
              <p className="font-semibold text-[var(--ink)]">{siteConfig.university}</p>
              <p>{siteConfig.department}</p>
              <p className="mt-1 font-mono">{siteConfig.module} | {siteConfig.projectId}</p>
              <p>{siteConfig.group}</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--ink)]">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-[44px] w-full items-center text-[var(--muted)] transition-colors hover:text-[var(--brand-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Research Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--ink)]">
              Research Contacts
            </h3>
            <p className="text-xs text-[var(--muted)]">
              Direct inquiries for research collaboration or datasets:
            </p>
            <div className="flex flex-col gap-2 text-xs font-mono">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="flex min-h-[44px] items-center gap-2 text-[13px] text-[var(--brand-deep)] hover:underline focus-visible:outline-none"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="[overflow-wrap:anywhere]">{siteConfig.contactEmail}</span>
              </a>
              <span className="text-[13px] text-[var(--muted)]">
                SLIIT IT4010 Research Group R26-IT-120
              </span>
            </div>
          </div>

          {/* Col 4: Repository & Actions */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--ink)]">
              Open Source
            </h3>
            <p className="text-xs text-[var(--muted)]">
              Research architecture and static portfolio codebase are published under open access.
            </p>
            <a
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--wash)] px-4 py-2.5 text-[13px] font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--brand-soft)] hover:text-[var(--brand-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep)]"
            >
              <Github className="h-4 w-4" />
              <span>GitHub Repository</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-auto inline-flex min-h-[44px] items-center gap-2 text-[13px] font-semibold text-[var(--brand-deep)] hover:underline focus-visible:outline-none"
            >
              <ArrowUp className="h-4 w-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-[var(--line)] pt-8 sm:flex-row">
          <p className="text-[13px] text-[var(--muted)]">
            © {currentYear} {siteConfig.brandName} ({siteConfig.projectId}). {siteConfig.university}. All rights reserved.
          </p>
          <p className="mt-2 text-[13px] text-[var(--muted)] sm:mt-0 font-mono">
            Static Export for GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
