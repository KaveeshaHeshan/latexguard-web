import { DownloadItem } from "@/types/content";

export const downloadsData: DownloadItem[] = [
  // Documents
  {
    id: "doc-topic-assessment",
    title: "Topic Assessment Form",
    category: "documents",
    description:
      "Official SLIIT IT4010 Topic Assessment Form approved by the Supervisor, Co-Supervisor, and External Supervisor outlining project scope and research cluster alignment.",
    fileType: "PDF",
    localPath: "/docs/R26-IT-120_Topic_Assessment_Form.pdf",
    driveUrl: null, // TODO(confirm): Add Google Drive link if available
    isAvailable: true
  },
  {
    id: "doc-project-proposal",
    title: "Project Proposal Document",
    category: "documents",
    description:
      "Comprehensive research proposal detailing problem formulation, literature survey, research gap, component objectives, and methodology.",
    fileType: "PDF",
    localPath: null, // TODO(confirm): Place PDF in public/docs/ and update path
    driveUrl: null, // TODO(confirm): Add Google Drive shareable link
    isAvailable: false
  },
  {
    id: "doc-research-paper",
    title: "Research Paper Manuscript",
    category: "documents",
    description:
      "Academic manuscript detailing the non-destructive VFA soft-sensing model, Isolation Forest adulteration detection, and DRL dynamic routing results.",
    fileType: "PDF",
    localPath: null, // TODO(confirm)
    driveUrl: null, // TODO(confirm)
    isAvailable: false
  },
  {
    id: "doc-final-report",
    title: "Final Research Thesis & Report",
    category: "documents",
    description:
      "Complete final research report containing exhaustive experimental methodology, empirical validation metrics, system user guides, and conclusion.",
    fileType: "PDF",
    localPath: null, // TODO(confirm)
    driveUrl: null, // TODO(confirm)
    isAvailable: false
  },

  // Presentations
  {
    id: "pres-proposal",
    title: "Proposal Presentation",
    category: "presentations",
    description:
      "Slides deck presented during the initial research proposal defense covering problem statement, system architecture, and planned research roadmap.",
    fileType: "PPTX",
    localPath: null, // TODO(confirm)
    driveUrl: null, // TODO(confirm)
    isAvailable: false
  },
  {
    id: "pres-progress-1",
    title: "Progress Presentation I",
    category: "presentations",
    description:
      "Presentation slides for the first progress evaluation reviewing multi-sensor hardware enclosure design and initial Random Forest training.",
    fileType: "PPTX",
    localPath: null, // TODO(confirm)
    driveUrl: null, // TODO(confirm)
    isAvailable: false
  },
  {
    id: "pres-progress-2",
    title: "Progress Presentation II",
    category: "presentations",
    description:
      "Slide deck for the second evaluation covering BLE JSON telemetry integration, mobile supervisor app, and DRL collection routing.",
    fileType: "PPTX",
    localPath: null, // TODO(confirm)
    driveUrl: null, // TODO(confirm)
    isAvailable: false
  },
  {
    id: "pres-final",
    title: "Final Viva Presentation",
    category: "presentations",
    description:
      "Comprehensive viva defense slide deck summarizing the end-to-end system results, laboratory ground-truth validation, and future work.",
    fileType: "PPTX",
    localPath: null, // TODO(confirm)
    driveUrl: null, // TODO(confirm)
    isAvailable: false
  }
];
