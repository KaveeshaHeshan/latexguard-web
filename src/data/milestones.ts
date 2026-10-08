import { MilestoneItem } from "@/types/content";

export const milestonesData: MilestoneItem[] = [
  {
    id: "topic-assessment-proposal",
    title: "Topic Assessment & Project Proposal",
    date: "2026-03-15", // Formally approved by supervisor panel
    status: "completed",
    description:
      "Formulation and formal submission of the research problem, scope, objectives, and system architecture for LatexGuard. Approved by the internal and external supervisor panel.",
    deliverables: [
      "Topic Assessment Form (Approved by Supervisor, Co-Supervisor, and External Supervisor)",
      "Detailed Project Proposal Document // TODO(confirm): Confirm proposal submission date & final archive link"
    ]
  },
  {
    id: "progress-presentation-1",
    title: "Progress Presentation I",
    date: null, // TODO(confirm)
    status: "upcoming",
    description:
      "First formal evaluation of preliminary system prototype, hardware multi-sensor design, initial dataset collection, and system architecture.",
    deliverables: [
      "Progress Presentation I Slide Deck // TODO(confirm)",
      "Initial ESP32 Firmware & Probe Prototype // TODO(confirm)"
    ]
  },
  {
    id: "research-paper",
    title: "Research Paper",
    date: null, // TODO(confirm)
    status: "upcoming",
    description:
      "Drafting and submission of the academic research paper detailing the novel VFA soft-sensing model, DRL collection routing, and system results.",
    deliverables: [
      "Camera-Ready Research Paper Draft // TODO(confirm)",
      "Target Journal / Conference Submission Manuscript // TODO(confirm)"
    ]
  },
  {
    id: "progress-presentation-2",
    title: "Progress Presentation II",
    date: null, // TODO(confirm)
    status: "upcoming",
    description:
      "Second formal research evaluation reviewing integrated cloud backend, mobile supervisor workflows, DRL routing performance, and initial lab validation metrics.",
    deliverables: [
      "Progress Presentation II Slide Deck // TODO(confirm)",
      "Integrated System Architecture Demonstration // TODO(confirm)"
    ]
  },
  {
    id: "website-assessment",
    title: "Website Assessment",
    date: "2026-10-11", // Due 11 October 2026
    status: "in-progress",
    description:
      "Comprehensive evaluation of the public research portfolio website on content completeness, modern aesthetics, WCAG accessibility, static deployment, and responsive design.",
    deliverables: [
      "Public Research Portfolio Website (Next.js + TypeScript Static Export)",
      "GitHub Pages Deployment & Verification Suite"
    ]
  },
  {
    id: "logbook",
    title: "Logbook",
    date: null, // TODO(confirm)
    status: "upcoming",
    description:
      "Submission of project logbooks recording research group sprint meetings, supervisor feedback, technical iterations, and development progress.",
    deliverables: [
      "Group Project Logbook Archive // TODO(confirm)",
      "Supervisor Consultation Logs // TODO(confirm)"
    ]
  },
  {
    id: "final-report",
    title: "Final Report",
    date: null, // TODO(confirm)
    status: "upcoming",
    description:
      "Submission of the complete final research thesis detailing literature, methodology, implementation, empirical validation results, and conclusions.",
    deliverables: [
      "Final Research Thesis Document // TODO(confirm)",
      "System Documentation & User Manuals // TODO(confirm)"
    ]
  },
  {
    id: "final-presentation-viva",
    title: "Final Presentation & Viva",
    date: null, // TODO(confirm)
    status: "upcoming",
    description:
      "Final viva voce defense and live system demonstration before the academic examination panel.",
    deliverables: [
      "Final Oral Viva Defense Slide Deck // TODO(confirm)",
      "Live End-to-End System Demonstration // TODO(confirm)"
    ]
  }
];
