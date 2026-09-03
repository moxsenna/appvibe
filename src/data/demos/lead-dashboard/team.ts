export type TeamMember = {
  id: string;
  initials: string;
  name: string;
  role: "Owner" | "Admin" | "Sales" | "Supervisor";
  workload: number;
  color: string;
};

export const team: TeamMember[] = [
  {
    id: "rina-w",
    initials: "RW",
    name: "Rina Wulandari",
    role: "Admin",
    workload: 18,
    color: "#2563EB",
  },
  {
    id: "bayu-p",
    initials: "BP",
    name: "Bayu Pratama",
    role: "Sales",
    workload: 12,
    color: "#4C1D95",
  },
  {
    id: "sari-m",
    initials: "SM",
    name: "Sari Melati",
    role: "Sales",
    workload: 14,
    color: "#E11D48",
  },
  {
    id: "dimas-a",
    initials: "DA",
    name: "Dimas Arya",
    role: "Supervisor",
    workload: 6,
    color: "#059669",
  },
];
