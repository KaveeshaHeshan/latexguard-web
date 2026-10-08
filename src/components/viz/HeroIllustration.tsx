"use client";

import React from "react";

/**
 * HeroIllustration – a fully self-contained SVG depicting the LatexGuard
 * end-to-end IoT pipeline: ESP32 probe → BLE → Cloud ML → DRL Routing → Factory.
 * Uses CSS custom properties so it respects the site's light/dark themes.
 */
export default function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full select-none ${className}`} aria-hidden="true">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-12 -right-12 h-64 w-64 rounded-full bg-[var(--brand)] opacity-[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-[var(--brand-deep)] opacity-[0.09] blur-2xl" />

      <svg
        viewBox="0 0 520 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xl"
        role="img"
        aria-label="LatexGuard IoT system diagram: sensor probe to factory pipeline"
      >
        {/* ── Background card ── */}
        <rect x="4" y="4" width="512" height="332" rx="20" fill="var(--card)" stroke="var(--line)" strokeWidth="1.5" />

        {/* ─────────── STEP 1: ESP32 Probe ─────────── */}
        <g transform="translate(24,100)">
          {/* Probe body */}
          <rect x="0" y="0" width="80" height="140" rx="10" fill="var(--brand-soft)" stroke="var(--brand-deep)" strokeWidth="1.5" />
          {/* Screen */}
          <rect x="8" y="10" width="64" height="40" rx="6" fill="var(--brand-deep)" />
          <text x="40" y="28" textAnchor="middle" fill="white" fontFamily="monospace" fontSize="8" fontWeight="700">VFA</text>
          <text x="40" y="42" textAnchor="middle" fill="#86efac" fontFamily="monospace" fontSize="11" fontWeight="900">0.035</text>
          {/* Sensor probes */}
          <rect x="15" y="58" width="8" height="50" rx="4" fill="var(--brand-deep)" />
          <rect x="28" y="65" width="8" height="43" rx="4" fill="var(--brand-deep)" />
          <rect x="41" y="58" width="8" height="50" rx="4" fill="var(--brand-deep)" />
          <rect x="54" y="62" width="8" height="46" rx="4" fill="var(--brand-deep)" />
          {/* Probe tip bar */}
          <rect x="10" y="108" width="60" height="6" rx="3" fill="var(--brand-deep)" />
          {/* Grade badge */}
          <rect x="8" y="120" width="64" height="16" rx="6" fill="#059669" />
          <text x="40" y="131" textAnchor="middle" fill="white" fontFamily="monospace" fontSize="8" fontWeight="700">Grade A ✓</text>
          {/* Label */}
          <text x="40" y="152" textAnchor="middle" fill="var(--brand-deep)" fontFamily="sans-serif" fontSize="9" fontWeight="700">ESP32 Probe</text>
        </g>

        {/* ─────────── BLE Signal wave ─────────── */}
        <g transform="translate(112, 148)">
          {/* Signal arcs */}
          <path d="M0 22 Q10 11 0 0" stroke="var(--brand-deep)" strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round"/>
          <path d="M8 28 Q24 14 8 0" stroke="var(--brand-deep)" strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round"/>
          <path d="M18 34 Q38 17 18 0" stroke="var(--brand-deep)" strokeWidth="2" fill="none" opacity="1" strokeLinecap="round"/>
          <text x="14" y="46" textAnchor="middle" fill="var(--muted)" fontFamily="monospace" fontSize="7">BLE</text>
        </g>

        {/* ─────────── Arrow 1 ─────────── */}
        <g transform="translate(152,164)">
          <line x1="0" y1="0" x2="44" y2="0" stroke="var(--brand-deep)" strokeWidth="1.5" strokeDasharray="4 3"/>
          <polygon points="44,0 38,-4 38,4" fill="var(--brand-deep)" />
        </g>

        {/* ─────────── STEP 2: Cloud ML ─────────── */}
        <g transform="translate(200,80)">
          <rect x="0" y="0" width="100" height="180" rx="12" fill="var(--wash)" stroke="var(--line)" strokeWidth="1.5" />
          {/* Cloud icon */}
          <ellipse cx="50" cy="34" rx="28" ry="16" fill="var(--brand-soft)" />
          <ellipse cx="34" cy="40" rx="16" ry="12" fill="var(--brand-soft)" />
          <ellipse cx="66" cy="40" rx="16" ry="12" fill="var(--brand-soft)" />
          <rect x="22" y="40" width="56" height="16" fill="var(--brand-soft)" />
          <text x="50" y="47" textAnchor="middle" fill="var(--brand-deep)" fontFamily="monospace" fontSize="8" fontWeight="700">☁</text>
          {/* ML model label */}
          <text x="50" y="74" textAnchor="middle" fill="var(--ink)" fontFamily="sans-serif" fontSize="9" fontWeight="700">Random Forest</text>
          <text x="50" y="86" textAnchor="middle" fill="var(--muted)" fontFamily="monospace" fontSize="7">VFA Soft-Sensing</text>
          {/* Anomaly detection */}
          <rect x="8" y="96" width="84" height="26" rx="6" fill="var(--card)" stroke="var(--line)" />
          <text x="50" y="107" textAnchor="middle" fill="var(--ink)" fontFamily="sans-serif" fontSize="7.5" fontWeight="700">Isolation Forest</text>
          <text x="50" y="118" textAnchor="middle" fill="var(--muted)" fontFamily="monospace" fontSize="7">Adulteration Detection</text>
          {/* RBAC pill */}
          <rect x="16" y="130" width="68" height="18" rx="9" fill="var(--brand-deep)" />
          <text x="50" y="142" textAnchor="middle" fill="white" fontFamily="monospace" fontSize="7.5" fontWeight="700">RBAC + JWT/OTP</text>
          {/* LSTM */}
          <rect x="8" y="156" width="84" height="18" rx="6" fill="#fef3c7" stroke="#fde68a" />
          <text x="50" y="168" textAnchor="middle" fill="#92400e" fontFamily="monospace" fontSize="7.5" fontWeight="700">LSTM Forecasting</text>
          {/* Label */}
          <text x="50" y="190" textAnchor="middle" fill="var(--brand-deep)" fontFamily="sans-serif" fontSize="9" fontWeight="700">Cloud Backend</text>
        </g>

        {/* ─────────── Arrow 2 ─────────── */}
        <g transform="translate(304,164)">
          <line x1="0" y1="0" x2="44" y2="0" stroke="var(--brand-deep)" strokeWidth="1.5" strokeDasharray="4 3"/>
          <polygon points="44,0 38,-4 38,4" fill="var(--brand-deep)" />
        </g>

        {/* ─────────── STEP 3: DRL Route Map ─────────── */}
        <g transform="translate(352,80)">
          <rect x="0" y="0" width="100" height="160" rx="12" fill="var(--wash)" stroke="var(--line)" strokeWidth="1.5" />
          {/* Mini map grid */}
          <rect x="8" y="10" width="84" height="90" rx="6" fill="var(--card)" stroke="var(--line)" />
          {/* Road lines */}
          <line x1="20" y1="55" x2="80" y2="55" stroke="var(--line)" strokeWidth="1" strokeDasharray="3 2"/>
          <line x1="50" y1="20" x2="50" y2="90" stroke="var(--line)" strokeWidth="1" strokeDasharray="3 2"/>
          {/* Route path */}
          <polyline points="22,80 22,56 36,56 36,30 50,30 50,56 68,56 68,38 85,38" stroke="var(--brand-deep)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Location pins */}
          <circle cx="22" cy="80" r="4" fill="#dc2626" />
          <circle cx="36" cy="30" r="3.5" fill="var(--brand-deep)" />
          <circle cx="68" cy="38" r="3.5" fill="var(--brand-deep)" />
          <circle cx="85" cy="38" r="4" fill="#059669" />
          {/* DRL label */}
          <text x="50" y="116" textAnchor="middle" fill="var(--ink)" fontFamily="sans-serif" fontSize="9" fontWeight="700">Deep Q-Network</text>
          <text x="50" y="128" textAnchor="middle" fill="var(--muted)" fontFamily="monospace" fontSize="7">DRL Route Optimizer</text>
          {/* GPS pill */}
          <rect x="14" y="138" width="72" height="16" rx="8" fill="var(--brand-soft)" stroke="var(--brand-deep)" strokeWidth="1" />
          <text x="50" y="149" textAnchor="middle" fill="var(--brand-deep)" fontFamily="monospace" fontSize="7.5" fontWeight="700">GPS Navigation</text>
          {/* Label */}
          <text x="50" y="172" textAnchor="middle" fill="var(--brand-deep)" fontFamily="sans-serif" fontSize="9" fontWeight="700">Collection Logistics</text>
        </g>

        {/* ─────────── Arrow 3 ─────────── */}
        <g transform="translate(456,164)">
          <line x1="0" y1="0" x2="44" y2="0" stroke="var(--brand-deep)" strokeWidth="1.5" strokeDasharray="4 3"/>
          <polygon points="44,0 38,-4 38,4" fill="var(--brand-deep)" />
        </g>

        {/* ─────────── STEP 4: Factory ─────────── */}
        <g transform="translate(408,120)">
          {/* Factory silhouette */}
          <rect x="64" y="0" width="40" height="70" rx="4" fill="var(--brand-soft)" stroke="var(--brand-deep)" strokeWidth="1.5" />
          <rect x="56" y="16" width="12" height="54" rx="3" fill="var(--muted)" />
          <rect x="80" y="8" width="10" height="62" rx="3" fill="var(--muted)" />
          <rect x="64" y="35" width="40" height="35" rx="4" fill="var(--card)" stroke="var(--line)" />
          {/* Quality grade output */}
          <rect x="66" y="46" width="36" height="20" rx="4" fill="#059669" />
          <text x="84" y="59" textAnchor="middle" fill="white" fontFamily="monospace" fontSize="8" fontWeight="900">Grade A</text>
          {/* Chimney smoke */}
          <ellipse cx="60" cy="12" rx="3" ry="4" fill="var(--line)" opacity="0.6" />
          <ellipse cx="85" cy="4" rx="3" ry="4" fill="var(--line)" opacity="0.4" />
          {/* Label */}
          <text x="84" y="84" textAnchor="middle" fill="var(--brand-deep)" fontFamily="sans-serif" fontSize="9" fontWeight="700">Factory QA</text>
        </g>

        {/* ─────────── Bottom caption strip ─────────── */}
        <rect x="20" y="268" width="480" height="52" rx="10" fill="var(--brand-soft)" />
        <text x="260" y="288" textAnchor="middle" fill="var(--brand-deep)" fontFamily="sans-serif" fontSize="10" fontWeight="700">LatexGuard End-to-End Pipeline</text>
        <text x="260" y="306" textAnchor="middle" fill="var(--muted)" fontFamily="monospace" fontSize="8">IoT Sensing  →  Cloud ML Inference  →  DRL Logistics  →  Factory Traceability</text>
      </svg>
    </div>
  );
}
