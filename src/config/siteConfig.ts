export interface SiteConfig {
  projectId: string;
  brandName: string;
  title: string;
  description: string;
  slogan: string;
  university: string;
  department: string;
  group: string;
  specialization: string;
  module: string;
  year: string;
  repoUrl: string; // TODO(confirm)
  demoVideoUrl: string | null; // TODO(confirm)
  contactEmail: string; // TODO(confirm)
}

export const siteConfig: SiteConfig = {
  projectId: "R26-IT-120",
  brandName: "LatexGuard",
  title: "IoT-Enabled Rubber Quality Assessment and Streamlined Latex Collection System",
  description:
    "SLIIT IT4010 Research Project 2026: An integrated IoT, cloud, machine learning, and mobile platform for real-time natural rubber latex VFA estimation and streamlined collection logistics.",
  slogan: "Quality begins at the first drop.",
  university: "Sri Lanka Institute of Information Technology (SLIIT)",
  department: "Department of Information Technology",
  group: "CI (Computing Infrastructure)",
  specialization: "Information Technology",
  module: "IT4010 Research Project",
  year: "2026",
  repoUrl: "https://github.com/SLIIT-IT4010-2026/r26-it-120-website", // TODO(confirm): Confirm final GitHub repo URL
  demoVideoUrl: null, // TODO(confirm): Provide YouTube embed URL when live demonstration video is recorded
  contactEmail: "it22167132@my.sliit.lk" // TODO(confirm): Confirm primary project email alias
};
