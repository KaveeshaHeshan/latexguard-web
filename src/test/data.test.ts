import { describe, it, expect } from "vitest";
import { projectInfo } from "@/data/project";
import { referencesData } from "@/data/references";
import { literatureSurveyData } from "@/data/literature";
import { comparisonTableData } from "@/data/gap";
import { mainObjective, generalObjectives, componentObjectives } from "@/data/objectives";
import { methodologyPhases } from "@/data/methodology";
import { systemArchitectureData } from "@/data/architecture";
import { technologyCategories, technologyItems } from "@/data/technologies";
import { milestonesData } from "@/data/milestones";
import { downloadsData } from "@/data/downloads";
import { supervisoryTeam, researchMembers } from "@/data/team";
import { experimentalResults } from "@/data/results";

describe("Data Integrity Tests", () => {
  it("projectInfo has non-empty required strings", () => {
    expect(projectInfo.id).toBe("R26-IT-120");
    expect(projectInfo.title.length).toBeGreaterThan(0);
    expect(projectInfo.brandName).toBe("LatexGuard");
    expect(projectInfo.slogan.length).toBeGreaterThan(0);
    expect(projectInfo.university.length).toBeGreaterThan(0);
  });

  it("referencesData contains 5 citations with valid URLs", () => {
    expect(referencesData.length).toBe(5);
    referencesData.forEach((ref) => {
      expect(ref.id).toBeGreaterThan(0);
      expect(ref.authors.length).toBeGreaterThan(0);
      expect(ref.title.length).toBeGreaterThan(0);
      expect(ref.url.startsWith("http")).toBe(true);
    });
  });

  it("literatureSurveyData has 4 component blocks", () => {
    expect(literatureSurveyData.length).toBe(4);
    literatureSurveyData.forEach((lit) => {
      expect(lit.componentTitle.length).toBeGreaterThan(0);
      expect(lit.existingWork.length).toBeGreaterThan(0);
      expect(lit.limitations.length).toBeGreaterThan(0);
      expect(lit.latexGuardApproach.length).toBeGreaterThan(0);
    });
  });

  it("comparisonTableData has non-empty fields", () => {
    expect(comparisonTableData.length).toBeGreaterThan(0);
    comparisonTableData.forEach((row) => {
      expect(row.aspect.length).toBeGreaterThan(0);
      expect(row.currentPractice.length).toBeGreaterThan(0);
      expect(row.latexGuardSystem.length).toBeGreaterThan(0);
    });
  });

  it("objectives content is complete", () => {
    expect(mainObjective.length).toBeGreaterThan(50);
    expect(generalObjectives.length).toBe(5);
    expect(componentObjectives.length).toBe(4);
  });

  it("methodologyPhases has 4 phases", () => {
    expect(methodologyPhases.length).toBe(4);
    methodologyPhases.forEach((p) => {
      expect(p.goals.length).toBeGreaterThan(0);
      expect(p.activities.length).toBeGreaterThan(0);
      expect(p.outputs.length).toBeGreaterThan(0);
    });
  });

  it("systemArchitectureData has 4 components, backend, and frontend", () => {
    expect(systemArchitectureData.components.length).toBe(4);
    expect(systemArchitectureData.backendServices.features.length).toBeGreaterThan(0);
    expect(systemArchitectureData.frontendPlatforms.features.length).toBeGreaterThan(0);
  });

  it("technologyItems has required items", () => {
    expect(technologyItems.length).toBeGreaterThan(10);
    expect(technologyCategories.length).toBe(6);
  });

  it("milestonesData contains exactly 8 milestones", () => {
    expect(milestonesData.length).toBe(8);
  });

  it("downloadsData has documents and presentations", () => {
    expect(downloadsData.length).toBe(8);
    const docs = downloadsData.filter((d) => d.category === "documents");
    const pres = downloadsData.filter((d) => d.category === "presentations");
    expect(docs.length).toBe(4);
    expect(pres.length).toBe(4);
  });

  it("team data contains 3 supervisors and 4 research members", () => {
    expect(supervisoryTeam.length).toBe(3);
    expect(researchMembers.length).toBe(4);
    researchMembers.forEach((m) => {
      expect(m.role).toBe("Research Member");
    });
  });

  it("experimentalResults is initialized without fake numbers", () => {
    expect(experimentalResults.vfaAccuracyMae).toBeNull();
    expect(experimentalResults.adulterationDetectionRate).toBeNull();
  });
});
