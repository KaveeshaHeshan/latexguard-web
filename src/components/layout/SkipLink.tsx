import React from "react";

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-[var(--brand-deep)] focus:px-4 focus:py-2.5 focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-[var(--brand)]"
    >
      Skip to main content
    </a>
  );
}
