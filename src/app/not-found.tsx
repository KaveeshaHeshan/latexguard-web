import React from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Section bg="wash" className="min-h-[70vh] flex items-center justify-center">
      <div className="mx-auto max-w-lg text-center flex flex-col items-center gap-6 rounded-3xl border border-[var(--line)] bg-[var(--card)] p-8 sm:p-12 shadow-xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand-deep)]">
          <AlertCircle className="h-8 w-8" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-mono text-sm font-extrabold text-[var(--brand-deep)]">
            ERROR 404
          </span>
          <h1 className="font-heading text-3xl font-extrabold text-[var(--ink)]">
            Page Not Found
          </h1>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            The research page or resource you requested does not exist or has been relocated.
          </p>
        </div>

        <Button href="/" variant="primary" size="lg" className="w-full sm:w-auto">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Return to Homepage</span>
        </Button>
      </div>
    </Section>
  );
}
