import { ComparisonRow } from "@/types/content";

export const comparisonTableData: ComparisonRow[] = [
  {
    aspect: "Quality Measurement",
    currentPractice:
      "Traditional Metrolac hydrometer measuring basic density (DRC) only; subjective visual and smell checks by supervisors.",
    latexGuardSystem:
      "Multi-sensor ESP32 hardware capturing pH, temperature, turbidity, and conductivity for objective digital assessment."
  },
  {
    aspect: "VFA Testing",
    currentPractice:
      "Manual chemical titration conducted in centralized factory laboratories hours after collection.",
    latexGuardSystem:
      "Real-time soft-sensing Random Forest prediction of Volatile Fatty Acid (VFA) levels directly at field collection points."
  },
  {
    aspect: "Record Keeping & Integrity",
    currentPractice:
      "Handwritten paper logs or static spreadsheets; vulnerable to lost records, errors, and unverified data entry.",
    latexGuardSystem:
      "Synchronized cloud ledger with Role-Based Access Control, audit logs, and Isolation Forest adulteration detection."
  },
  {
    aspect: "Farmer Transparency",
    currentPractice:
      "No direct visibility into batch testing; delayed payment calculation and potential trust disputes.",
    latexGuardSystem:
      "Dedicated mobile portal giving farmers real-time access to daily quality grades, historical trends, and transparent pricing."
  },
  {
    aspect: "Collection Logistics",
    currentPractice:
      "Static driving routes scheduled manually without real-time tracking or quality-based prioritization.",
    latexGuardSystem:
      "Deep Q-Network (DRL) dynamic route optimization with live GPS tracking, prioritizing high-VFA latex to minimize transport degradation."
  }
];

export const researchGapSummary = {
  title: "The Critical Research & Technological Gap",
  points: [
    "Lack of field-portable VFA testing tools forcing reliance on delayed factory laboratory analysis.",
    "Fragmented collection workflows where physical sensing, route planning, and batch traceability operate in isolation.",
    "High vulnerability to latex adulteration (water, soap, starch, acids) due to unverified paper record-keeping.",
    "Inability to optimize logistics based on latex degradation state, causing preventable transport spoilage and high fuel emissions."
  ]
};
