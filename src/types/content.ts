export interface ReferenceItem {
  id: number;
  authors: string;
  title: string;
  source: string;
  year: number;
  url: string;
  note?: string;
}

export interface LiteratureComponentSurvey {
  componentId: string;
  componentTitle: string;
  existingWork: string;
  limitations: string;
  latexGuardApproach: string;
  citationIds: number[];
}

export interface ComparisonRow {
  aspect: string;
  currentPractice: string;
  latexGuardSystem: string;
}

export interface ObjectiveItem {
  id: number;
  title: string;
  description: string;
}

export interface ComponentObjective {
  componentId: string;
  componentTitle: string;
  summary: string;
}

export interface MethodologyPhase {
  phaseNumber: number;
  title: string;
  goals: string[];
  activities: string[];
  outputs: string[];
}

export interface ArchitectureComponent {
  id: string;
  title: string;
  shortSummary: string;
  novelty: string;
  details: string[];
  inputs: string[];
  outputs: string[];
  technologies: string[];
}

export interface SystemArchitectureData {
  overview: string;
  components: ArchitectureComponent[];
  backendServices: {
    title: string;
    description: string;
    features: string[];
  };
  frontendPlatforms: {
    title: string;
    description: string;
    features: string[];
  };
}

export interface TechnologyItem {
  name: string;
  category: "ai-ml" | "frontend" | "backend" | "iot" | "cloud" | "testing";
  purpose: string;
  isConfirmed?: boolean;
}

export interface TechnologyCategory {
  id: "ai-ml" | "frontend" | "backend" | "iot" | "cloud" | "testing";
  label: string;
  description: string;
}

export interface MilestoneItem {
  id: string;
  title: string;
  date: string | null; // null if date to be announced
  status: "completed" | "in-progress" | "upcoming";
  description: string;
  deliverables: string[];
}

export interface DownloadItem {
  id: string;
  title: string;
  category: "documents" | "presentations";
  description: string;
  fileType: "PDF" | "PPTX" | "DOCX";
  localPath: string | null; // e.g. "/docs/R26-IT-120_Topic_Assessment_Form.pdf"
  driveUrl: string | null; // TODO(confirm)
  isAvailable: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  registrationId?: string;
  department: string;
  university: string;
  email: string;
  photoUrl: string | null; // TODO(confirm)
  isSupervisor: boolean;
  supervisorTitle?: string;
}

export interface ResultsData {
  vfaAccuracyMae?: number | null; // TODO(confirm)
  adulterationDetectionRate?: number | null; // TODO(confirm)
  routeDistanceReductionPct?: number | null; // TODO(confirm)
  susUsabilityScore?: number | null; // TODO(confirm)
  notes: string;
}
