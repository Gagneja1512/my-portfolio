export const skills = [
  { title: "Languages", values: "Python, Go, Ruby, C++, JavaScript, SQL" },
  {
    title: "Frameworks",
    values: "FastAPI, Sanic, Ruby on Rails, Node.js, React",
  },
  {
    title: "Data & Infrastructure",
    values:
      "PostgreSQL, MongoDB, Redis, Kafka, Elasticsearch, AWS (S3/SQS/SNS/EC2), Docker, Linux",
  },
  {
    title: "AI Engineering",
    values:
      "RAG, LangChain, LangGraph, LangSmith, Qdrant, reusable skills, AI-assisted development",
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
      "Engineered fuzzy and phonetic search across symptoms and specialties on the Tata 1mg home screen using Elasticsearch, enabling typo-tolerant matching (e.g., fvrr -> fever) and Hindi/colloquial transliterations (e.g., bukhar) to enhance discoverability.",
      "Re-architected the doctor consultation assignment engine using Redis Sorted Sets (ZSETs), transitioning from workload/tie-breaking allocation to a priority-ranked routing flow that reduced First Response Time (FRT) by 30–40 seconds.",
      "Deployed an automated on-call operations bot using RAG with Qdrant vector database, LangChain, and OpenAI APIs, instrumented with LangSmith for evaluation and tracing, resolving ~50% of recurring operational queries without human triage.",
      "Spearheaded an internal insurance-operations dashboard, establishing system design, delegating execution, and mentoring 2 interns; eliminated spreadsheet-based tracking to boost operational efficiency by 90%.",
      "Led the zero-downtime migration of Insurance Category and Upsell services from Ruby on Rails to Python/FastAPI, encompassing 15+ APIs, 5+ scheduled background jobs, and AWS cloud services while steering code reviews and staged rollouts.",
    ],
  },
  {
    date: "JUL 2024 — APR 2026",
    role: "Software Development Engineer 1",
    company: "Tata 1mg · Chandigarh, India",
    highlights: [
      "Managed core Insurance backend services handling 50K+ requests/day at sub-200ms p99 latency; directed schema modeling, Redis caching, telemetry, and 3+ third-party integrations.",
      "Scaled Insurance Category and Super Top-Up platforms across underlying business logic, transactional databases, and external provider connections.",
      "Designed asynchronous invoice generation pipelines with Amazon S3 offloading, decoupling heavy I/O from request lifecycles to increase fault tolerance while maintaining 99.9% availability.",
      "Implemented secure endpoints for the Air India Maharaja Club partnership, providing member validation, data reconciliation, and corporate SSO authentication.",
      "Shipped 3 high-impact partner initiatives across consumer search, product details, and checkout journeys, driving INR 30+ crore in annual GMV.",
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
      "Designed a horizontally scalable scheduling platform that atomically claims due tasks with PostgreSQL SKIP LOCKED, records a transactional outbox, and dispatches events through Kafka to concurrent Go webhook workers.",
      "Implemented at-least-once delivery with execution-level idempotency, Redis distributed locks and token buckets, capped exponential retries, and JWT authentication.",
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
