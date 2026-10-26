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
    title: "Design-to-Code AI Automation Toolkit",
    description: "Developed an agentic AI workflow using MCP integrations to convert Figma designs into frontend-ready components, with automated visual-diff testing and a documented setup adopted by a twelve-person team.",
    stack: ["Figma", "MCP", "Agentic AI", "Visual-Diff Testing"],
    githubUrl: "https://github.com/buildwithtom/figma-to-code-automation-starter",
  },
  {
    title: "Migrant Labour Identification System",
    description: "Designed and built a web-based system to digitally register and manage migrant worker records, including authentication, structured data management, and administrative workflows.",
    stack: ["ASP.NET", "C#", "SQL Server"],
  },
  {
    title: "World Bank Climate Support Facility",
    description: "Contributed to interactive dashboards and maps presenting climate action activities across 125 countries and six programmes, helping users explore complex programme data.",
    stack: ["Interactive Dashboards", "Data Visualization", "Maps"],
    liveUrl: "https://www.climatesupportfacility.org/",
  },
  {
    title: "VitalsFit Action Tracker",
    description: "A Progressive Web Application health dashboard integrating wearables APIs to visualize granular daily activity metrics, heart-rate zones, and long-term training progression entirely offline.",
    stack: ["Next.js PWA", "Chart.js", "Tailwind CSS", "IndexedDB"],
  },
  {
    title: "ATLA — African Tax Legislation Atlas",
    description: "Contributed to a digital platform covering tax legislation across all 54 African countries, enabling comparison by topic. Built an interactive map as a key data component.",
    stack: ["Interactive Maps", "Data Visualization"],
    liveUrl: "https://www.a-tla.org/",
  },
  {
    title: "Retrieval-Augmented Knowledge Hub",
    description: "Architected a full-stack enterprise platform integrating Retrieval-Augmented Generation (RAG) to securely process and query millions of internal corporate documents. The system utilizes advanced vector databases and natural language processing to produce instantly verifiable, citation-backed answers directly within the company's existing content management workflows, significantly reducing manual document retrieval times across multiple departments.",
    stack: ["Next.js", "LangChain", "OpenAI API", "Pinecone"],
  },
  {
    title: "Roadster Rush",
    description: "Roadster Rush, a game you can play directly in your browser.",
    stack: ["Browser Game"],
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

