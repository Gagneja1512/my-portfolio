import { useEffect, useRef, useState } from "react";
import "./App.css";

const skills = [
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

const impact = [
  { value: "50K+", label: "REQUESTS / DAY", detail: "Insurance Service ownership" },
  { value: "<200ms", label: "P99 LATENCY", detail: "Across critical APIs" },
  { value: "60%", label: "LATENCY REDUCTION", detail: "Via concurrent orchestration" },
  { value: "15+", label: "APIs MIGRATED", detail: "Rails to FastAPI" },
];

const experience = [
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

const projects = [
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

function App() {
  const [light, setLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("profile");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const sections = [...document.querySelectorAll("main section[id]")];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-30% 0px -60%" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const animatedElements = [...document.querySelectorAll("[data-reveal]")];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.14, rootMargin: "0px 0px -7%" }
    );

    animatedElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };
    const handleKeyboard = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((current) => !current);
      }
      if (event.key === "Escape") setPaletteOpen(false);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    window.addEventListener("keydown", handleKeyboard);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, []);

  const moveSpotlight = (event) => {
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY}px`);
  };

  const setCursorState = (event, state, enabled = true) => {
    event.currentTarget.classList.toggle(`cursor-${state}`, enabled);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\nFrom: ${data.get("name")}\nEmail: ${data.get("email")}`
    );
    window.location.href = `mailto:aadityaarora1215@gmail.com?subject=${subject}&body=${body}`;
  };

  const nav = [
    "profile",
    "skills",
    "experience",
    "projects",
    "achievements",
    "education",
    "contact",
  ];

  const navigateTo = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setPaletteOpen(false);
  };

  return (
    <div
      className={light ? "app light" : "app"}
      onPointerMove={moveSpotlight}
      onPointerEnter={(event) => setCursorState(event, "visible")}
      onPointerLeave={(event) => {
        setCursorState(event, "visible", false);
        setCursorState(event, "pressed", false);
      }}
      onPointerDown={(event) => setCursorState(event, "pressed")}
      onPointerUp={(event) => setCursorState(event, "pressed", false)}
      onPointerOver={(event) =>
        setCursorState(
          event,
          "interactive",
          Boolean(event.target.closest("a, button, input, textarea"))
        )
      }
    >
      <div className="code-cursor" aria-hidden="true">
        <i className="cursor-dot" />
        <i className="cursor-reticle" />
        <span>PTR</span>
      </div>
      <header className="topbar">
        <span className="scroll-progress" style={{ "--scroll-progress": `${scrollProgress}%` }} />
        <div className="nav-wrap">
          <a className="brand" href="#profile">
            AADITYA GAGNEJA
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
          <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
            {nav.map((item) => (
              <a
                key={item}
                className={active === item ? "active" : ""}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
              >
                {item === "profile" ? "About" : item}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <a
              className="resume-small"
              href="/Aaditya_Gagneja_Resume.pdf"
              download="Aaditya_Gagneja_Resume.pdf"
            >
              Resume
            </a>
            <button
              className="theme-button"
              onClick={() => setLight(!light)}
              aria-label={`Switch to ${light ? "dark" : "light"} mode`}
            >
              {light ? "●" : "◐"}
            </button>
          </div>
        </div>
      </header>

      <aside className="system-rail" aria-hidden="true">
        <span>SYS.PROGRESS</span>
        <div>
          <i style={{ height: `${scrollProgress}%` }} />
        </div>
        <strong>{String(Math.round(scrollProgress)).padStart(3, "0")}%</strong>
      </aside>

      <main>
        <section className="hero" id="profile">
          <div className="hero-copy hero-enter">
            <span className="status">[SYSTEM_STATUS: ACTIVE]</span>
            <h1>AADITYA GAGNEJA</h1>
            <p className="intro">
              Software Development Engineer 2 @ <strong>Tata 1mg</strong> | Backend Architecture,
              Distributed Systems &amp; High-Throughput APIs
            </p>
            <div className="facts">
              <div>
                <span>LOCATION</span>CHANDIGARH, INDIA
              </div>
              <div>
                <span>CONTACT</span>+91 9462160551
              </div>
            </div>
          </div>
          <div className="hero-terminal">
            <Terminal />
          </div>
        </section>

        <section className="impact-strip" aria-label="Engineering impact">
          {impact.map((metric, index) => (
            <article
              className="reveal reveal-up"
              data-reveal
              style={{ "--reveal-delay": `${index * 80}ms` }}
              key={metric.label}
            >
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <small>{metric.detail}</small>
            </article>
          ))}
        </section>

        <section className="availability reveal reveal-up" data-reveal>
          <div className="availability-status">
            <i />
            <div>
              <span>PROFESSIONAL_STATUS : </span>
              <strong>Open to opportunities</strong>
            </div>
          </div>
          <div className="availability-detail">
            <span>FOCUS</span>
            <strong>Distributed Systems · Platform Engineering</strong>
          </div>
          <div className="availability-detail">
            <span>PREFERRED ROLES</span>
            <strong>Backend Engineer · Platform Engineer</strong>
          </div>
          <div className="availability-detail">
            <span>LOCATION</span>
            <strong>Chandigarh, India</strong>
          </div>
          <a href="mailto:aadityaarora1215@gmail.com?subject=Backend%20opportunity">
            DISCUSS A ROLE ↗
          </a>
        </section>

        <section className="section about-section" aria-labelledby="about-title">
          <div className="reveal reveal-left" data-reveal>
            <SectionHead number="00" title="ABOUT_ME" aside="[ENGINEERING_WITH_INTENT]" />
          </div>
          <div className="about-layout">
            <div className="about-copy reveal reveal-left" data-reveal>
              <h2 id="about-title">
                I build backend systems that stay fast when the stakes get high.
              </h2>
              <p>
                I’m a Software Development Engineer at Tata 1mg, focused on backend architecture,
                distributed systems, and high-throughput APIs. My work spans service ownership,
                zero-downtime migrations, asynchronous workflows, caching, partner integrations, and
                production reliability.
              </p>
              <p>
                I enjoy turning complex business workflows into simple, resilient systems. I value
                measurable performance, thoughtful trade-offs, clear code reviews, and engineering
                decisions that make systems easier for the next person to operate and extend.
              </p>
            </div>
            <div className="principles reveal reveal-right" data-reveal>
              <article>
                <span>01</span>
                <div>
                  <h3>OWN THE OUTCOME</h3>
                  <p>From architecture and implementation to rollout and incident response.</p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>DESIGN FOR FAILURE</h3>
                  <p>Build observable, resilient workflows around real production constraints.</p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>MEASURE THE IMPACT</h3>
                  <p>
                    Optimize for latency, reliability, and outcomes—not complexity for its own sake.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="reveal reveal-left" data-reveal>
            <SectionHead number="01" title="TECH_STACK" aside="[CONSTANT_EVOLUTION]" />
          </div>
          <div className="skill-grid">
            {skills.map((skill, index) => (
              <article
                className="reveal reveal-up"
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` }}
                key={skill.title}
              >
                <h3>{skill.title}</h3>
                <p>{skill.values}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section building-section" id="building">
          <div className="reveal reveal-right" data-reveal>
            <SectionHead number="02" title="CURRENTLY_EXPLORING" aside="[LEARNING_IN_PUBLIC]" />
          </div>
          <div className="building-grid">
            <article className="reveal reveal-left" data-reveal>
              <span>01 / INTELLIGENCE</span>
              <h3>Agentic AI</h3>
              <p>
                Exploring autonomous agent workflows, tool use, orchestration, memory, and reliable
                AI-assisted backend systems.
              </p>
            </article>
            <article className="reveal reveal-up" data-reveal style={{ "--reveal-delay": "90ms" }}>
              <span>02 / INFRASTRUCTURE</span>
              <h3>Docker</h3>
              <p>
                Deepening my understanding of reproducible environments, image optimization,
                container networking, and deployment workflows.
              </p>
            </article>
            <article
              className="reveal reveal-right"
              data-reveal
              style={{ "--reveal-delay": "180ms" }}
            >
              <span>03 / LANGUAGE</span>
              <h3>Go</h3>
              <p>
                Learning Go for concurrent, efficient network services and simple, maintainable
                production tooling.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="reveal reveal-right" data-reveal>
            <SectionHead number="03" title="EXPERIENCE" />
          </div>
          <div className="timeline">
            {experience.map((job, index) => (
              <article
                className={`${index % 2 ? "right reveal-right" : "left reveal-left"} reveal`}
                data-reveal
                style={{ "--reveal-delay": `${index * 100}ms` }}
                key={job.date}
              >
                <span className="node"></span>
                <div>
                  <time>{job.date}</time>
                  <h3>{job.role}</h3>
                  <small>{job.company}</small>
                  <ul className="experience-details">
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="reveal reveal-left" data-reveal>
            <SectionHead
              number="04"
              title="PROJECTS"
              aside={
                <a href="https://github.com/Gagneja1512" target="_blank" rel="noreferrer">
                  VIEW_ALL_REPOS →
                </a>
              }
            />
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`reveal ${index % 2 ? "reveal-right" : "reveal-left"}`}
                data-reveal
                style={{ "--reveal-delay": `${index * 120}ms` }}
                key={project.title}
              >
                <span className="project-icon">{project.icon}</span>
                <h3>{project.title}</h3>
                <ul className="project-details">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="project-footer">
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.liveUrl ? (
                    <a
                      className="live-project"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LIVE_PROJECT ↗
                    </a>
                  ) : (
                    <button
                      className="live-project unavailable"
                      type="button"
                      disabled
                      title="Live project coming soon"
                    >
                      LIVE_PROJECT · SOON
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="achievements">
          <div className="reveal reveal-right" data-reveal>
            <SectionHead number="05" title="ACHIEVEMENTS" />
          </div>
          <div className="achievement-grid">
            <article className="reveal reveal-up" data-reveal style={{ "--reveal-delay": "0ms" }}>
              <h3>CodeChef 4★</h3>
              <p>Max rating: 1828</p>
              <small>Ranked 92 / 2,200+ in Starters 46</small>
            </article>
            <article className="reveal reveal-up" data-reveal style={{ "--reveal-delay": "90ms" }}>
              <h3>Codeforces Specialist</h3>
              <p>Max rating: 1418</p>
              <small>Ranked 1,486 / 12,000+ in Round 820</small>
            </article>
            <article className="reveal reveal-up" data-reveal style={{ "--reveal-delay": "180ms" }}>
              <h3>80+ Problems</h3>
              <p>Authored for Coding Shuttle</p>
              <small>Algorithmic challenges for platform learners</small>
            </article>
          </div>
        </section>

        <section className="section education" id="education">
          <div className="reveal reveal-left" data-reveal>
            <SectionHead number="06" title="EDUCATION" aside="[FOUNDATION]" />
          </div>
          <article className="education-card reveal reveal-right" data-reveal>
            <div>
              <span className="education-date">DEC 2020 — JUN 2024</span>
              <h3>National Institute of Technology Hamirpur</h3>
              <p>Bachelor of Technology · Computer Science and Engineering</p>
            </div>
            <div className="education-score">
              <strong>9.01</strong>
              <span>GPA / 10</span>
            </div>
          </article>
        </section>

        <section className="contact section" id="contact">
          <div className="reveal reveal-left" data-reveal>
            <h2>
              LET'S BUILD
              <br />
              SOMETHING SCALABLE.
            </h2>
            <p>
              Interested in backend architecture, system design, or technical leadership? Drop a
              line or download my technical profile.
            </p>
            <a
              className="resume-large"
              href="/Aaditya_Gagneja_Resume.pdf"
              download="Aaditya_Gagneja_Resume.pdf"
            >
              DOWNLOAD_RESUME.PDF <span>⇩</span>
            </a>
            <div className="contact-links" aria-label="Contact and profile links">
              <a
                href="https://www.linkedin.com/in/aaditya-gagneja-b727a0203/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a href="https://github.com/Gagneja1512" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://leetcode.com/Aaditya_Gagneja/" target="_blank" rel="noreferrer">
                LeetCode ↗
              </a>
              <a href="mailto:aadityaarora1215@gmail.com">Email ↗</a>
              <a href="mailto:aadityaarora1215@gmail.com?subject=Let%27s%20schedule%20a%20conversation">
                Schedule a conversation ↗
              </a>
            </div>
          </div>
          <form className="reveal reveal-right" data-reveal onSubmit={sendMessage}>
            <label>
              NAME
              <input name="name" placeholder="Aaditya Arora" required />
            </label>
            <label>
              EMAIL
              <input name="email" type="email" placeholder="aadityaarora1215@gmail.com" required />
            </label>
            <label>
              MESSAGE
              <textarea
                name="message"
                rows="4"
                placeholder="DESCRIBE THE SYSTEM ARCHITECTURE..."
                required
              />
            </label>
            <button type="submit">EXECUTE_SEND()</button>
          </form>
        </section>
      </main>

      <button
        className="command-trigger"
        type="button"
        onClick={() => setPaletteOpen(true)}
        aria-label="Open command palette"
        aria-haspopup="dialog"
      >
        <i />
        <span>QUICK_NAV</span>
        <kbd>⌘ K</kbd>
      </button>

      {paletteOpen && (
        <div
          className="command-overlay"
          role="presentation"
          onMouseDown={() => setPaletteOpen(false)}
        >
          <section
            className="command-palette"
            role="dialog"
            aria-modal="true"
            aria-labelledby="command-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="command-titlebar">
              <div>
                <i />
                <span id="command-title">portfolio.command</span>
              </div>
              <kbd>ESC</kbd>
            </div>
            <div className="command-input">
              <span>›</span>
              <p>Where would you like to go?</p>
              <b>READY</b>
            </div>
            <div className="command-list">
              {[
                ["profile", "About", "01"],
                ["skills", "Technical stack", "02"],
                ["building", "Currently exploring", "03"],
                ["experience", "Experience", "04"],
                ["projects", "Projects", "05"],
                ["achievements", "Achievements", "06"],
                ["education", "Education", "07"],
                ["contact", "Contact", "08"],
              ].map(([section, label, shortcut]) => (
                <button type="button" onClick={() => navigateTo(section)} key={section}>
                  <span>{label}</span>
                  <kbd>{shortcut}</kbd>
                </button>
              ))}
            </div>
            <div className="command-actions">
              <button type="button" onClick={() => setLight((current) => !current)}>
                {light ? "Switch to dark mode" : "Switch to light mode"}
              </button>
              <a href="/Aaditya_Gagneja_Resume.pdf" download="Aaditya_Gagneja_Resume.pdf">
                Download résumé ↓
              </a>
            </div>
          </section>
        </div>
      )}

      <footer>
        <div>
          <b>AADITYA GAGNEJA</b>
          <span>© {new Date().getFullYear()} Backend Architect. Built with precision.</span>
          <nav>
            <a
              href="https://www.linkedin.com/in/aaditya-gagneja-b727a0203/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/Gagneja1512" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://leetcode.com/Aaditya_Gagneja/" target="_blank" rel="noreferrer">
              LeetCode
            </a>
            <a href="mailto:aadityaarora1215@gmail.com">Email</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ number, title, aside }) {
  return (
    <div className="section-head">
      <h2>{`${number} // ${title}`}</h2>
      {aside && <span>{aside}</span>}
    </div>
  );
}

const files = {
  "~": ["README.md", "contact.txt", "metrics", "projects", "skills.txt"],
  "~/metrics": ["latency.txt", "requests.txt", "reliability.txt"],
  "~/projects": ["air-india-api", "portfolio"],
  "~/projects/air-india-api": ["README.md", "stack.txt"],
  "~/projects/portfolio": ["README.md", "stack.txt"],
};

const fileContents = {
  "~/README.md":
    "Aaditya Gagneja — Backend Architect\nSDE 2 at Tata 1mg, building reliable high-throughput systems.",
  "~/contact.txt":
    "Email: aadityaarora1215@gmail.com\nPhone: +91 9462160551\nLocation: Chandigarh, India",
  "~/skills.txt":
    "Languages: Python, Java, Ruby, C++\nFrameworks: FastAPI, Sanic, Ruby on Rails\nData: MongoDB, PostgreSQL, Redis\nInfra: AWS, Kafka, Linux, Sentry",
  "~/metrics/latency.txt": "p99 latency: sub-200ms\noptimization: 60% reduction",
  "~/metrics/requests.txt": "50K+ daily API requests served",
  "~/metrics/reliability.txt": "status: operational\nfocus: resilient distributed systems",
  "~/projects/air-india-api/README.md":
    "Air India Maharaja Club\n\n- Developed backend APIs for member ID validation and database reconciliation, enabling reliable SSO authentication across complex edge cases.\n- Revamped corporate membership workflows for dual standard and SSO corporate association while preserving user journeys and dashboard routing.",
  "~/projects/air-india-api/stack.txt": "FastAPI, Python , Postgresql",
  "~/projects/portfolio/README.md":
    "Personal Portfolio Platform\n\n- Responsive portfolio showcasing projects, skills, and professional experience.\n- React and JavaScript application with an EmailJS-powered visitor communication workflow.",
  "~/projects/portfolio/stack.txt": "React, JavaScript",
};

function Terminal() {
  const [cwd, setCwd] = useState("~");
  const [command, setCommand] = useState("");
  const [lines, setLines] = useState([
    { type: "system", text: "Portfolio shell v1.0. Type 'help' to list commands." },
  ]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight });
  }, [lines]);

  const resolvePath = (raw = ".") => {
    if (raw === "~" || raw === "/home/aaditya") return "~";
    const source = raw.startsWith("~/") ? raw : raw.startsWith("/") ? raw : `${cwd}/${raw}`;
    const parts = source.replace("/home/aaditya", "~").split("/");
    const resolved = [];
    parts.forEach((part) => {
      if (!part || part === ".") return;
      if (part === "..") resolved.pop();
      else resolved.push(part);
    });
    return resolved.join("/") || "~";
  };

  const run = (rawCommand) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;
    const [name, ...args] = trimmed.split(/\s+/);
    const path = resolvePath(args[0]);
    let output = "";

    switch (name.toLowerCase()) {
      case "help":
        output =
          "Available commands:\nhelp  ls  pwd  cd  cat  whoami  date  echo  clear  history  tree  uname";
        break;
      case "pwd":
        output = cwd.replace("~", "/home/aaditya");
        break;
      case "whoami":
        output = "aaditya";
        break;
      case "date":
        output = new Date().toString();
        break;
      case "echo":
        output = args.join(" ");
        break;
      case "uname":
        output =
          args[0] === "-a" ? "PortfolioOS browser 1.0 React x86_64 JavaScript" : "PortfolioOS";
        break;
      case "history":
        output = [...history, trimmed].map((item, index) => `${index + 1}  ${item}`).join("\n");
        break;
      case "ls": {
        const target = args[0]?.startsWith("-") ? cwd : path;
        output =
          files[target]?.join("  ") ??
          (fileContents[target]
            ? target.split("/").pop()
            : `ls: cannot access '${args[0] || "."}': No such file or directory`);
        break;
      }
      case "tree": {
        const target = files[path] ? path : cwd;
        output = [
          target,
          ...(files[target] || []).map(
            (item, index, list) => `${index === list.length - 1 ? "└──" : "├──"} ${item}`
          ),
        ].join("\n");
        break;
      }
      case "cat":
        output = !args[0]
          ? "cat: missing file operand"
          : (fileContents[path] ?? `cat: ${args[0]}: No such file`);
        break;
      case "cd":
        if (files[path]) setCwd(path);
        else output = `cd: ${args[0] || "~"}: No such directory`;
        break;
      case "clear":
        setLines([]);
        setHistory((current) => [...current, trimmed]);
        setHistoryIndex(history.length + 1);
        return;
      default:
        output = `${name}: command not found. Type 'help'.`;
    }

    setLines((current) => [
      ...current,
      { type: "command", prompt: `aaditya@portfolio:${cwd}$`, text: trimmed },
      ...(output ? [{ type: "output", text: output }] : []),
    ]);
    setHistory((current) => [...current, trimmed]);
    setHistoryIndex(history.length + 1);
  };

  const submit = (event) => {
    event.preventDefault();
    run(command);
    setCommand("");
  };

  const keyDown = (event) => {
    if (event.key === "ArrowUp" && history.length) {
      event.preventDefault();
      const next = Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setCommand(history[next] || "");
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = Math.min(history.length, historyIndex + 1);
      setHistoryIndex(next);
      setCommand(history[next] || "");
    }
    if (event.key === "c" && event.ctrlKey) {
      setLines((current) => [
        ...current,
        { type: "command", prompt: `aaditya@portfolio:${cwd}$`, text: `${command}^C` },
      ]);
      setCommand("");
    }
  };

  return (
    <div
      className="terminal"
      aria-label="Interactive portfolio terminal"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="terminal-bar">
        <i></i>
        <i></i>
        <i></i>
        <span>portfolio-shell — interactive</span>
      </div>
      <div className="terminal-body" ref={outputRef} role="log" aria-live="polite">
        {lines.map((line, index) => (
          <div className={`terminal-line ${line.type}`} key={`${index}-${line.text}`}>
            {line.prompt && <span className="prompt">{line.prompt} </span>}
            <span>{line.text}</span>
          </div>
        ))}
        <form className="terminal-input-row" onSubmit={submit}>
          <label htmlFor="terminal-command">aaditya@portfolio:{cwd}$</label>
          <input
            id="terminal-command"
            ref={inputRef}
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            onKeyDown={keyDown}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
            aria-label="Terminal command"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
