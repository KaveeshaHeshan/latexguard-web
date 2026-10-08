import { describe, it, expect } from "vitest";
import { gradeFor } from "@/lib/gradeFor";

describe("gradeFor Logic Unit Tests", () => {
  it("returns Grade A for VFA values below 0.05", () => {
    const res1 = gradeFor(0.02);
    expect(res1.grade).toBe("A");
    expect(res1.label).toBe("Fresh");

    const res2 = gradeFor(0.049);
    expect(res2.grade).toBe("A");
  });

  it("returns Grade B for VFA values from 0.05 up to 0.08", () => {
    const res1 = gradeFor(0.05);
    expect(res1.grade).toBe("B");
    expect(res1.label).toBe("Acceptable");

    const res2 = gradeFor(0.079);
    expect(res2.grade).toBe("B");
  });

  it("returns Grade C for VFA values 0.08 and above", () => {
    const res1 = gradeFor(0.08);
    expect(res1.grade).toBe("C");
    expect(res1.label).toBe("Degraded");

    const res2 = gradeFor(0.12);
    expect(res2.grade).toBe("C");
  });
});
