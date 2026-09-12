export interface EducationMilestone {
  degree: string;
  field?: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: "CGPA" | "Percentage" | "Status";
  status: "In Progress" | "Completed";
  description: string;
  highlights: string[];
}

export const educationList: EducationMilestone[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    field: "Computer Science & Advanced Software Engineering",
    institution: "Parul University",
    location: "Vadodara, Gujarat",
    period: "2024 — Present",
    score: "Ongoing",
    scoreType: "Status",
    status: "In Progress",
    description: "Deepening expertise in full-stack cloud computing, distributed systems, modern web frameworks, and algorithmic problem solving.",
    highlights: ["Active participant in Hackathons", "Advanced Database & System Design", "Modern Web Technologies"]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Computer Applications & Software Development",
    institution: "Hemchandracharya North Gujarat University (HNGU)",
    location: "Patan, Gujarat",
    period: "2021 — 2024",
    score: "7.56 CGPA",
    scoreType: "CGPA",
    status: "Completed",
    description: "Built strong foundation in OOP concepts, Database Management Systems, Web Development basics, and practical software engineering.",
    highlights: ["Graduated with First Class Distinction", "Core focus on Java, Web Dev & DBMS", "Real-world capstone development"]
  },
  {
    degree: "Higher Secondary Certificate (12th - GSEB)",
    institution: "Shree S K Highschool",
    location: "Lunawada, Gujarat",
    period: "2020 — 2021",
    score: "74.14%",
    scoreType: "Percentage",
    status: "Completed",
    description: "Completed higher secondary education with strong analytical and problem-solving fundamentals.",
    highlights: ["Top quartile achievement in school", "Analytical thinking and mathematics foundation"]
  },
  {
    degree: "Secondary School Certificate (10th - GSEB)",
    institution: "Shree S K Highschool",
    location: "Lunawada, Gujarat",
    period: "2018 — 2019",
    score: "57.85%",
    scoreType: "Percentage",
    status: "Completed",
    description: "Completed secondary school examinations with early passion for computer literacy and digital tools.",
    highlights: ["Early curiosity into software and coding"]
  }
];
