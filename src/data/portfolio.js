export const skills = [
  { title: "Languages", values: "Python, Go, Ruby, C++, JavaScript, SQL" },
  {
    title: "Frameworks",
    values: "FastAPI, Sanic, Ruby on Rails, Node.js, React",
  },
  {
    title: "Data & Infrastructure",
    values:
      "PostgreSQL, MongoDB, Redis, Kafka, AWS (S3/SQS/SNS/EC2), Docker, Linux",
  },
  {
    title: "AI Engineering",
    values:
      "Agentic AI workflows, Model Context Protocol (MCP), reusable skills, AI-assisted development",
  },
  {
    title: "Engineering",
    values:
      "REST APIs, microservices, distributed systems, event-driven architecture, async processing, caching, indexing, idempotency, observability",
  },
  {
    title: "Developer Tools",
    values: "Git, GitHub, Bitbucket, Sentry, Kloudfuse",
  },
];

export const impact = [
  {
    value: "50K+",
    label: "REQUESTS / DAY",
    detail: "Insurance Service ownership",
  },
  { value: "<200ms", label: "P99 LATENCY", detail: "Across critical APIs" },
  {
    value: "60%",
    label: "LATENCY REDUCTION",
    detail: "Via concurrent orchestration",
  },
  {
    value: "99.9%",
    label: "PIPELINE AVAILABILITY",
    detail: "Asynchronous invoice processing",
  },
];

export const experience = [
  {
    date: "APR 2026 — PRESENT",
    role: "Software Development Engineer 2",
    company: "Tata 1mg · Chandigarh, India",
    highlights: [
      "Owned an insurance-operations dashboard and mentored 2 interns through implementation and rollout, reducing manual processing from approximately 2 hours to 15 minutes.",
      "Led the zero-downtime migration of Insurance Category and Insurance Upsell from Ruby on Rails to FastAPI across 15+ APIs, 5+ scheduled jobs, and AWS integrations.",
      "Directed engineering quality and rollout by reviewing 30+ pull requests, resolving design risks, and coordinating 5+ production releases.",
    ],
  },
  {
    date: "JUL 2024 — APR 2026",
    role: "Software Development Engineer 1",
    company: "Tata 1mg · Chandigarh, India",
    highlights: [
      "Owned the Insurance Service end-to-end, serving 50K+ requests/day at sub-200ms p99 latency with 3+ third-party integrations.",
      "Launched and scaled Insurance Category and Super Top-Up platforms across schemas, business workflows, APIs, and partner integrations.",
      "Reduced p99 latency by approximately 60% by moving notification orchestration off critical paths and running WhatsApp, SMS, and email calls concurrently.",
      "Built asynchronous PDF invoice and Amazon S3 upload pipelines that removed blocking I/O while maintaining 99.9% availability.",
      "Developed member validation, reconciliation, and SSO APIs for Air India Maharaja Club, including standard and SSO corporate membership flows.",
      "Delivered 3 partner initiatives across Home, Product Detail, and Order History, resolving high-priority incidents within 12 hours.",
    ],
  },
  {
    date: "JAN 2021 — MAY 2024",
    role: "Coordinator",
    company: "App Team, NIT Hamirpur",
    highlights: [
      "Led backend delivery for a college-fest management platform, designing Node.js APIs that streamlined event and activity coordination.",
      "Mentored junior developers through Git and GitHub workshops focused on version control, code review, and team collaboration.",
    ],
  },
];

export const projects = [
  {
    icon: "↗",
    title: "Distributed Event Scheduler (CRON-OS)",
    details: [
      "Designed a horizontally scalable scheduler that claims due tasks with PostgreSQL SKIP LOCKED, records a transactional outbox, and dispatches partition-ordered Kafka events to concurrent Go workers.",
      "Implemented at-least-once delivery with idempotency, Redis locks and token buckets, exponential retries, dead-letter isolation, JWT authentication, optimistic concurrency, and Prometheus metrics.",
    ],
    tags: ["FASTAPI", "GO", "KAFKA", "POSTGRESQL", "REDIS", "REACT"],
    liveUrl: "https://distributed-event-scheduler.vercel.app/",
  },
  {
    icon: "⌘",
    title: "ReelScore",
    details: [
      "Built a privacy-first Chrome and Firefox extension that captures Instagram Reel activity through browser event listeners without private APIs or server-side tracking.",
      "Persisted activity locally across 8 IndexedDB tables and transformed it into rolling analytics, score trends, heatmaps, leaderboards, search, and exportable reports.",
    ],
    tags: ["TYPESCRIPT", "REACT", "INDEXEDDB", "DEXIE", "MV3"],
    liveUrl: "https://addons.mozilla.org/en-US/firefox/addon/reelscore/",
  },
];
