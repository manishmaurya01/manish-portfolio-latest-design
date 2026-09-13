export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
    icon?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & Vibe Coding",
    description: "Leveraging frontier AI models, AI-first IDEs, and vibe coding techniques to rapidly conceptualize, architect, and ship production-grade digital products from scratch.",
    skills: [
      { name: "Vibe Coding & Rapid Prototyping", level: "Expert", description: "Harnessing LLMs to build full-scale web apps, automated tools, and backend logic at 10x velocity" },
      { name: "Cursor & Windsurf AI", level: "Advanced", description: "AI composer workflows, codebase indexing, multi-file edits, and automated refactoring" },
      { name: "Frontier LLMs & Prompting", level: "Advanced", description: "Claude 3.5 Sonnet, GPT-4o, Gemini API integrations, structured outputs, prompt engineering" },
      { name: "Autonomous AI Workflows", level: "Advanced", description: "Autonomous AI agents, automated testing, real-time intelligence feeds, and zero-interference systems" }
    ]
  },
  {
    category: "Frontend Development",
    description: "Architecting responsive, high-performance interfaces with modern React, semantic structure, and reactive styling.",
    skills: [
      { name: "React.js", level: "Advanced", description: "Hooks, component architecture, state management, SPA design" },
      { name: "JavaScript (ES6+)", level: "Advanced", description: "Async/await, closures, DOM manipulation, modular JS" },
      { name: "Tailwind CSS", level: "Expert", description: "Design systems, utility-first CSS, dark mode, custom keyframes" },
      { name: "HTML5 & CSS3", level: "Expert", description: "Semantic markup, CSS Grid, Flexbox, responsive layouts" }
    ]
  },
  {
    category: "Backend & Systems",
    description: "Building scalable APIs, server-side business logic, and robust authentication layers.",
    skills: [
      { name: "Node.js", level: "Intermediate", description: "Server runtimes, npm ecosystems, event-driven I/O" },
      { name: "Express.js", level: "Intermediate", description: "RESTful endpoints, middleware architecture, routing" },
      { name: "Java", level: "Proficient", description: "Object-oriented programming, data structures, algorithms" },
      { name: "PHP", level: "Proficient", description: "Server scripting, session handling, relational queries" }
    ]
  },
  {
    category: "Databases & Cloud",
    description: "Designing schema models, real-time data synchronization, and cloud hosting architectures.",
    skills: [
      { name: "MongoDB", level: "Intermediate", description: "NoSQL document stores, aggregation pipelines, Mongoose" },
      { name: "MySQL", level: "Advanced", description: "Relational modeling, indexing, joins, ACID transactions" },
      { name: "Firebase", level: "Advanced", description: "Cloud Firestore, Realtime DB, Firebase Auth, Security Rules" }
    ]
  },
  {
    category: "Automation & Developer Tools",
    description: "Automating operational workflows and standardizing productive developer pipelines.",
    skills: [
      { name: "n8n Automation", level: "Advanced", description: "Webhook triggers, API integrations, smart workflow automation" },
      { name: "VS Code", level: "Expert", description: "Modern debugging, developer extensions, command palette mastery" },
      { name: "Git & GitHub", level: "Proficient", description: "Version control, branching, repository management" }
    ]
  }
];

export const allSkillsList = [
  "Vibe Coding",
  "Cursor AI",
  "Prompt Engineering",
  "Claude 3.5 & GPT-4o",
  "AI Orchestration",
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Java",
  "PHP",
  "MongoDB",
  "MySQL",
  "Firebase",
  "n8n Automation",
  "VS Code",
  "Git & GitHub",
  "REST APIs"
];
