export interface GradeResult {
  grade: "A" | "B" | "C";
  label: string;
  statusText: string;
  colorHex: string;
  badgeBg: string;
  badgeText: string;
}

export function gradeFor(vfaValue: number): GradeResult {
  if (vfaValue < 0.05) {
    return {
      grade: "A",
      label: "Fresh",
      statusText: "Optimal Field Quality",
      colorHex: "#059669",
      badgeBg: "#dcfce7",
      badgeText: "#166534"
    };
  } else if (vfaValue < 0.08) {
    return {
      grade: "B",
      label: "Acceptable",
      statusText: "Moderate VFA Level",
      colorHex: "#d97706",
      badgeBg: "#fef3c7",
      badgeText: "#92400e"
    };
  } else {
    return {
      grade: "C",
      label: "Degraded",
      statusText: "High VFA / Processing Risk",
      colorHex: "#dc2626",
      badgeBg: "#fee2e2",
      badgeText: "#991b1b"
    };
  }
}
