export type TeamMember = {
  id: string;
  initials: string;
  name: string;
  role: "Owner" | "Admin" | "Sales" | "Supervisor";
  workload: number;
  gradient: string;
};

export const team: TeamMember[] = [
  {
    id: "rina-w",
    initials: "RW",
    name: "Rina Wulandari",
    role: "Admin",
    workload: 18,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "bayu-p",
    initials: "BP",
    name: "Bayu Pratama",
    role: "Sales",
    workload: 12,
    gradient: "from-violet-500 to-blue-500",
  },
  {
    id: "sari-m",
    initials: "SM",
    name: "Sari Melati",
    role: "Sales",
    workload: 14,
    gradient: "from-rose-500 to-orange-500",
  },
  {
    id: "dimas-a",
    initials: "DA",
    name: "Dimas Arya",
    role: "Supervisor",
    workload: 6,
    gradient: "from-emerald-500 to-cyan-500",
  },
];
