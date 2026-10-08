import { describe, it, expect } from "vitest";
import { milestonesData } from "@/data/milestones";

describe("Milestones Counter Verification", () => {
  it("computes accurate counts per status", () => {
    const completedCount = milestonesData.filter((m) => m.status === "completed").length;
    const inProgressCount = milestonesData.filter((m) => m.status === "in-progress").length;
    const upcomingCount = milestonesData.filter((m) => m.status === "upcoming").length;

    expect(completedCount + inProgressCount + upcomingCount).toBe(milestonesData.length);
    expect(completedCount).toBe(1); // Topic Assessment / Proposal card completed
    expect(inProgressCount).toBe(1); // Website Assessment due 11 Oct 2026
    expect(upcomingCount).toBe(6);
  });
});
