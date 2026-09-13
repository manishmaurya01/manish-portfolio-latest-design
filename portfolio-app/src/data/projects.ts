export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  featured: boolean;
  image: string;
  secondaryImage?: string;
  liveUrl: string;
  githubUrl?: string;
  technologies: string[];
  role: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  highlights: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "project-luminalearn",
    slug: "luminalearn-ai-lms",
    title: "LuminaLearn — Autonomous AI LMS",
    subtitle: "Autonomous Learning Engine with Self-Operating AI Teacher, Roadmaps & Virtual Interviewer",
    category: "Generative AI Platform",
    year: "2025",
    featured: true,
    image: "/assets/lumina_lms.png",
    liveUrl: "https://impact-lms-live.vercel.app/",
    technologies: [
      "Generative AI",
      "LLM Orchestration",
      "React.js",
      "Next.js",
      "Vibe Coding",
      "Tailwind CSS",
      "Adaptive Matrix"
    ],
    role: "Lead AI Architect & Full-Stack Developer",
    summary: "An autonomous AI-powered learning management ecosystem where an artificial intelligence engine functions as an end-to-end teacher without human interference—generating full dynamic courses, structured roadmaps, live quizzes, multi-lingual lessons in native languages, video references, real-time data, and conversational AI mock interviews.",
    problem: "Traditional online learning relies on static, outdated video libraries with no active 1-on-1 mentorship, zero real-time syllabus adaptation, language barriers for regional students, and no simulated interactive interview evaluations.",
    solution: "Engineered LuminaLearn from the ground up: an autonomous teacher platform that takes any user prompt (technical or non-technical) and instantly constructs personalized multi-stage learning roadmaps, rich modular lessons with diagrams and vetted video references, adaptive tests with grading, AI-synthesized notes, and real-time conversational interview sessions.",
    features: [
      "Autonomous AI Teacher: Synthesizes complete curriculums, lesson breakdown, and deep explanations with zero human intervention required",
      "Quantum Roadmaps & Adaptive Learning Matrix: Continuously tracks progress (e.g. 92% metric completion) and dynamically injects adaptive modules into weak areas",
      "Class Tests, Quizzes & Assignments: Auto-generates timed quizzes and practical coding/theory assignments with automated evaluation",
      "Native Language Instruction: Learn complex technical or non-technical topics explained clearly in native regional languages",
      "Rich Multi-Modal Learning: Embeds architectural diagrams, curated video references, and real-time data benchmarks directly into chapters",
      "AI-Based Mock Interviewer: Conducts interactive technical and behavioral mock interview sessions with contextual scoring and actionable feedback",
      "Smart AI Notes & Custom Annotations: Generates concise summaries with rich key takeaways, allowing students to seamlessly add personal notes"
    ],
    highlights: [
      { label: "Live Deployment", value: "impact-lms-live.vercel.app" },
      { label: "AI Core", value: "Autonomous Teacher Engine" },
      { label: "Capabilities", value: "Roadmaps + LMS + AI Interviewer" },
      { label: "Language Support", value: "Multilingual & Native Speech" }
    ]
  },
  {
    id: "project-1",
    slug: "hr-management-system",
    title: "HR Management System",
    subtitle: "Enterprise Attendance & Automated Payroll Platform",
    category: "Full Stack Web App",
    year: "2024",
    featured: true,
    image: "/assets/payroll.png",
    liveUrl: "https://apnapp.netlify.app/",
    technologies: ["React.js", "Firebase", "Cloud Firestore", "Tailwind CSS", "Authentication"],
    role: "Full-Stack Developer & UI Architect",
    summary: "A modern web-based HR & Payroll application engineered to eliminate payroll discrepancies, automate leave approval workflows, and simplify daily attendance logging.",
    problem: "Traditional small businesses face administrative delays tracking employee hours manually on spreadsheets, leading to errors in salary computations, unrecorded leaves, and delayed monthly payouts.",
    solution: "Built a centralized cloud platform featuring dual Admin & Employee dashboards. Integrated reactive attendance check-ins, automated leave request management with instant approval actions, and automatic gross/net salary calculations.",
    features: [
      "Real-time employee clock-in and daily attendance monitoring",
      "Role-based access security separating admin controls from employee records",
      "Interactive leave application portal with instant status notifications",
      "Automated salary computation engine accounting for leave deductions",
      "Fast cloud sync powered by Firebase Firestore with zero server maintenance"
    ],
    highlights: [
      { label: "Architecture", value: "Single Page App + BaaS" },
      { label: "Live Demo", value: "apnapp.netlify.app" },
      { label: "Database", value: "Cloud Firestore" },
      { label: "Status", value: "Production Ready" }
    ]
  },
  {
    id: "project-2",
    slug: "food-ordering-system",
    title: "Food Ordering Platform",
    subtitle: "Sasta Zomato — Fast Digital Menu & Ordering System",
    category: "Web Application",
    year: "2024",
    featured: true,
    image: "/assets/food.png",
    liveUrl: "https://sastazomato.netlify.app/",
    technologies: ["React.js", "Firebase", "Realtime Database", "State Management", "Responsive UI"],
    role: "Frontend Engineer & UX Designer",
    summary: "A high-speed food delivery web application crafted for frictionless online ordering, featuring categorized menu exploration, instant search, and real-time cart calculations.",
    problem: "Many food ordering applications suffer from sluggish mobile performance, confusing navigation, and delayed cart sync, causing cart abandonment during peak meal hours.",
    solution: "Engineered a lightweight, mobile-first ordering application with instant live search, instant item additions, persistent local cart state, and seamless Firebase checkout pipeline.",
    features: [
      "Dynamic catalog browsing with quick category filters (Snacks, Meals, Beverages)",
      "Instant fuzzy search across menu items with live pricing updates",
      "Persistent cart drawer with instant quantity modifications and discount logic",
      "Firebase user authentication for saved delivery preferences",
      "Optimized lightweight UI for smooth rendering on 4G and mobile devices"
    ],
    highlights: [
      { label: "Deployment", value: "High-Speed Edge CDN" },
      { label: "Live Demo", value: "sastazomato.netlify.app" },
      { label: "Interface", value: "Mobile-First Design" },
      { label: "Load Speed", value: "< 1.2s Fast Paint" }
    ]
  },
  {
    id: "project-3",
    slug: "kavya-computers",
    title: "Kavya Computers Portal",
    subtitle: "Commercial Institute Web Portal & Online Examination Engine",
    category: "Commercial Client Portal",
    year: "2023",
    featured: true,
    image: "/assets/kv.png",
    secondaryImage: "/assets/quiz.png",
    liveUrl: "https://kavyacomputer.com/",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3", "Admin Dashboard"],
    role: "Lead Full-Stack Web Developer",
    summary: "An end-to-end examination engine and official institution portal built for Kavya Computers, enabling automated question generation, timed student exams, and instant grading.",
    problem: "The institute was conducting computer science and software certification exams on paper, requiring hours of manual grading, result tabulation, and certificate issuance.",
    solution: "Developed an online testing platform with a full administrative back-office. Instructors can curate question banks with randomized choices, conduct timed exams, and generate automated performance reports instantly.",
    features: [
      "Timed examination module with anti-cheat page visibility detection",
      "Randomized question picker from a structured MySQL question repository",
      "Instant score evaluation with auto-generated result certificates",
      "Comprehensive Admin dashboard to manage batches, courses, and students",
      "Responsive layout allowing students to take tests across desktop and tablet labs"
    ],
    highlights: [
      { label: "Client Domain", value: "kavyacomputer.com" },
      { label: "Backend Core", value: "PHP & MySQL" },
      { label: "Impact", value: "100% Automated Grading" },
      { label: "Role", value: "Freelance Lead Dev" }
    ]
  }
];
