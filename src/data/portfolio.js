export const skills = [
  { title: "Languages", values: "Python, Java, Ruby, C++" },
  { title: "Frameworks", values: "FastAPI, Sanic, Ruby on Rails" },
  { title: "Databases", values: "MongoDB, PostgreSQL, Redis" },
  {
    title: "Tools & Infra",
    values: "AWS (S3/SQS/SNS/EC2), Kafka, Git, Linux, GitHub, Bitbucket, Kloudfuse, Sentry",
  },
  {
    title: "Backend Concepts",
    values: "REST, Event-Driven Architecture, Async Processing, Indexing, Caching, Microservices",
  },
  {
    title: "Fundamentals",
    values: "DBMS, Operating Systems, DSA, Object-Oriented Programming, Computer Networks",
  },
];

export const impact = [
  { value: "50K+", label: "REQUESTS / DAY", detail: "Insurance Service ownership" },
  { value: "<200ms", label: "P99 LATENCY", detail: "Across critical APIs" },
  { value: "60%", label: "LATENCY REDUCTION", detail: "Via concurrent orchestration" },
  { value: "15+", label: "APIs MIGRATED", detail: "Rails to FastAPI" },
];

export const experience = [
  {
    date: "APR 2026 — PRESENT",
    role: "SDE 2",
    company: "Tata 1mg",
    highlights: [
      "Led migration of Insurance Category and Upsell services—10+ APIs, 2+ cron jobs, and AWS integrations—from Ruby on Rails to FastAPI.",
      "Guided an intern through implementation, code reviews, and rollout support, delivering a zero-downtime production transition.",
    ],
  },
  {
    date: "JUL 2024 — APR 2026",
    role: "SDE 1",
    company: "Tata 1mg",
    highlights: [
      "Owned the Insurance Service end-to-end, serving 50K+ requests/day with sub-200ms p99 latency and 3+ third-party integrations.",
      "Built asynchronous PDF invoice and S3 upload workflows, removing blocking I/O from synchronous request paths.",
      "Reduced p99 latency by 60% using concurrent WhatsApp, SMS, and email orchestration.",
      "Owned critical user journeys and resolved high-priority production incidents within 12 hours.",
    ],
  },
  {
    date: "JAN 2021 — MAY 2024",
    role: "Coordinator",
    company: "App Team NITH",
    highlights: [
      "Architected Node.js APIs for a college fest management platform.",
      "Mentored junior batches through hands-on Git and GitHub workshops.",
    ],
  },
  {
    date: "JAN 2023 — MAR 2023",
    role: "Problem Setter",
    company: "Coding Shuttle · Remote",
    highlights: [
      "Designed and curated 80+ coding challenges to strengthen platform users' problem-solving skills.",
    ],
  },
];

export const projects = [
  {
    icon: "↗",
    title: "Air India Maharaja Club",
    details: [
      "Independently developed backend APIs for member ID validation and database reconciliation, enabling reliable SSO authentication across complex edge cases.",
      "Revamped corporate membership workflows to support dual association with standard and SSO corporates while preserving existing user journeys and dashboard routing.",
    ],
    tags: ["FASTAPI", "PYTHON", "POSTGRESQL", "SSO"],
    liveUrl: "https://www.1mg.com/information/maharaja-air-india",
  },
  {
    icon: "⌘",
    title: "Personal Portfolio Platform",
    details: [
      "Designed and developed a responsive personal portfolio showcasing projects, technical skills, and professional experience.",
      "Built with React.js and JavaScript, including an EmailJS-powered communication workflow for direct visitor enquiries.",
    ],
    tags: ["REACT", "JAVASCRIPT"],
    liveUrl: "https://aadityagagneja.vercel.app/",
  },
];
