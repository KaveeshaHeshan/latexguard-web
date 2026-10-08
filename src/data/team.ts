import { TeamMember } from "@/types/content";

export const supervisoryTeam: TeamMember[] = [
  {
    id: "sup-pradeep",
    name: "Prof. Pradeep Abeygunawardena",
    role: "Supervisor",
    supervisorTitle: "Supervisor",
    department: "Department of Information Technology",
    university: "Sri Lanka Institute of Information Technology (SLIIT)",
    email: "pradeep.a@sliit.lk", // TODO(confirm): Confirm official academic email address
    photoUrl: null, // TODO(confirm): Add supervisor photo URL if available
    isSupervisor: true
  },
  {
    id: "sup-ashvinda",
    name: "Mr. Ashvinda Iddemagoda",
    role: "Co-Supervisor",
    supervisorTitle: "Co-Supervisor",
    department: "Department of Information Technology",
    university: "Sri Lanka Institute of Information Technology (SLIIT)",
    email: "ashvinda.i@sliit.lk", // TODO(confirm): Confirm official academic email address
    photoUrl: null, // TODO(confirm)
    isSupervisor: true
  },
  {
    id: "sup-asha",
    name: "Prof. Asha Galhenage",
    role: "External Supervisor",
    supervisorTitle: "External Supervisor",
    department: "Department of Information Technology",
    university: "Sri Lanka Institute of Information Technology (SLIIT)",
    email: "asha.g@sliit.lk", // TODO(confirm): Confirm official academic email address
    photoUrl: null, // TODO(confirm)
    isSupervisor: true
  }
];

export const researchMembers: TeamMember[] = [
  {
    id: "member-senarathna",
    name: "Senarathna V K P K H",
    registrationId: "IT22167132",
    role: "Research Member",
    department: "Department of Information Technology",
    university: "Sri Lanka Institute of Information Technology (SLIIT)",
    email: "it22167132@my.sliit.lk", // TODO(confirm): Confirm student email address
    photoUrl: null, // TODO(confirm): Add member photo URL if available
    isSupervisor: false
  },
  {
    id: "member-perera",
    name: "Perera C A",
    registrationId: "IT22218162",
    role: "Research Member",
    department: "Department of Information Technology",
    university: "Sri Lanka Institute of Information Technology (SLIIT)",
    email: "it2218162@my.sliit.lk", // TODO(confirm): Confirm student email address
    photoUrl: null, // TODO(confirm)
    isSupervisor: false
  },
  {
    id: "member-wickramasinghe",
    name: "Wickramasinghe R M",
    registrationId: "IT22182432",
    role: "Research Member",
    department: "Department of Information Technology",
    university: "Sri Lanka Institute of Information Technology (SLIIT)",
    email: "it22182432@my.sliit.lk", // TODO(confirm): Confirm student email address
    photoUrl: null, // TODO(confirm)
    isSupervisor: false
  },
  {
    id: "member-mihisarani",
    name: "Mihisarani A K S",
    registrationId: "IT22175366",
    role: "Research Member",
    department: "Department of Information Technology",
    university: "Sri Lanka Institute of Information Technology (SLIIT)",
    email: "it22175366@my.sliit.lk", // TODO(confirm): Confirm student email address
    photoUrl: null, // TODO(confirm)
    isSupervisor: false
  }
];

export const ethicalClearanceNotice = {
  title: "Ethical Clearance & Data Privacy Standards",
  description:
    "Human-centric data recorded during field testing—such as smallholder daily yield volumes, mobile GPS tracking logs, and digital verification signatures—are collected under strict SLIIT Research Ethics Committee approval and informed consent procedures.",
  privacyPolicy:
    "Individual farmer transaction records and pricing history are encrypted and accessible exclusively to authorized accounts via Role-Based Access Control (RBAC). Data will not be shared with unauthorized third parties."
};
