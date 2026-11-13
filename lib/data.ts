export const SKILLS = {
  "Frontend": ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "Redux", "HTML5/CSS3"],
  "Backend": ["Node.js", "Express.js", "Python", "C#", "PHP", "ASP.NET", "MongoDB", "Oracle SQL", "SQL Server", "REST APIs"],
  "Data Visualization": ["D3.js", "Highcharts", "Highmaps", "Chart.js", "Framer Motion"],
  "AI & ML": ["OpenAI API", "LangChain", "LLMs", "Vector Databases", "Claude Code", "Agentic Workflows", "Design-to-Code Automation", "MCP Integrations"],
  "CMS": ["Drupal", "WordPress", "Contentful"],
  "Tools": ["Git", "GitHub", "VS Code", "Figma", "Docker", "Webpack", "Vite", "Gupta Team Developer"],
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "GradScape",
    description: "Compare master's programmes by tuition, campus, and intake timelines, and keep a private shortlist with admissions notes in your browser.",
    stack: ["React", "TypeScript", "Vite", "Zod"],
    githubUrl: "https://github.com/buildwithtom/gradscape",
    liveUrl: "https://gradscape.pages.dev/",
  },
  {
    title: "Fit-Trac",
    description: "A personal fitness tracker with workout logging, offline session recovery, progress tracking, and data export.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Dexie"],
    githubUrl: "https://github.com/buildwithtom/fit-trac",
    liveUrl: "https://fit-trac.pages.dev/",
  },
  {
    title: "Symbol — Metronome",
    description: "A minimal practice metronome with tap tempo, multiple time signatures, accented beats, and synchronized visual pulses.",
    stack: ["React", "TypeScript", "Web Audio API", "Tailwind CSS"],
    githubUrl: "https://github.com/buildwithtom/symbol",
    liveUrl: "https://symbol-music.pages.dev/",
  },
  {
    title: "Splitcrumb",
    description: "Split shared expenses equally, by amount, or by percentage. Track group balances and settlements, with local storage and backup export.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Zod"],
    githubUrl: "https://github.com/buildwithtom/splitcrumb",
    liveUrl: "https://splitcrumb.pages.dev/",
  },
  {
    title: "Design-to-Code AI Automation Toolkit",
    description: "Built an AI workflow that turns Figma designs into frontend components using MCP and visual-diff testing, adopted by a twelve-person team.",
    stack: ["Figma", "MCP", "Agentic AI", "Visual-Diff Testing"],
    githubUrl: "https://github.com/buildwithtom/figma-to-code-automation-starter",
  },
  {
    title: "World Bank Climate Support Facility",
    description: "Contributed interactive dashboards and maps for exploring climate action across 125 countries and six programmes.",
    stack: ["Interactive Dashboards", "Data Visualization", "Maps"],
    liveUrl: "https://www.climatesupportfacility.org/",
  },
  {
    title: "Migrant Labour Identification System",
    description: "Built a web application for registering and managing migrant worker records, with authentication and administrative workflows.",
    stack: ["ASP.NET", "C#", "SQL Server"],
  },
  {
    title: "VitalsFit Action Tracker",
    description: "A health dashboard integrating wearable APIs to visualize daily activity, heart-rate zones, and training progress, with offline support.",
    stack: ["Next.js PWA", "Chart.js", "Tailwind CSS", "IndexedDB"],
  },
  {
    title: "ATLA — African Tax Legislation Atlas",
    description: "Built an interactive map for a tax legislation platform covering all 54 African countries, with comparisons by topic.",
    stack: ["Interactive Maps", "Data Visualization"],
    liveUrl: "https://www.a-tla.org/",
  },
  {
    title: "Retrieval-Augmented Knowledge Hub",
    description: "Built an enterprise knowledge hub using RAG to search internal documents and deliver citation-backed answers within existing content workflows.",
    stack: ["Next.js", "LangChain", "OpenAI API", "Pinecone"],
  },
  {
    title: "Roadster Rush",
    description: "A browser game you can play instantly, with no installation required.",
    stack: ["Browser Game"],
    githubUrl: "https://github.com/buildwithtom/roadster-rush",
    liveUrl: "https://roadster-rushh.pages.dev/",
    liveLabel: "Play Game",
  },
  {
    title: "ICAO — International Civil Aviation Organization",
    description: "Contributed to the website of the International Civil Aviation Organization (ICAO).",
    stack: ["Web Development"],
    liveUrl: "https://www.icao.int/",
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    company: "PanApps International Pvt. Ltd.",
    role: "Software Engineer",
    duration: "Jul 2021 - Aug 2026",
    impact: [
      "Developed and maintained responsive production web applications using React, Vue.js, and Next.js.",
      "Contributed to digital platforms developed for international organizations including the World Bank, UNICEF, USAID, and the International Civil Aviation Organization (ICAO).",
      "Implemented interactive dashboards and data visualizations using Highcharts, Chart.js, and D3.js to present complex datasets effectively.",
      "Worked across CMS-driven systems (Drupal and WordPress), supporting application workflows, user management, and backend integration.",
      "Implemented authentication flows and accessibility-focused interfaces aligned with modern web standards.",
      "Participated in code reviews and mentored junior developers, contributing to maintainable and reliable software delivery.",
      "Designed and introduced an agentic AI design-to-code workflow using Figma and MCP integrations; trained a twelve-person team on the process."
    ],
  },
  {
    id: 2,
    company: "JENN Software",
    role: "Junior Software Developer",
    duration: "Aug 2019 - Apr 2021",
    impact: [
      "Progressed from trainee programmer to junior developer through structured technical training and project involvement.",
      "Worked on enterprise applications using Gupta Team Developer (OpenText) with Oracle as the backend database.",
      "Completed intensive training in the MERN stack (MongoDB, Express.js, React, Node.js) and contributed to client web applications using modern JavaScript technologies.",
      "Supported backend integration, API interaction, and database operations within full-stack development environments.",
      "Assisted in debugging and resolving production issues, improving application stability and reliability."
    ],
  },
];

