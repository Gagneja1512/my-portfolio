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
];

const experience = [
  {
    date: "APR 2026 — PRESENT",
    role: "SDE 2",
    company: "Tata 1mg",
    detail:
      "Led migration of Insurance services from RoR to FastAPI. Architecting high-throughput backend systems.",
  },
  {
    date: "JUL 2024 — APR 2026",
    role: "SDE 1",
    company: "Tata 1mg",
    detail:
      "Owned Insurance Service (50K+ req/day), engineered asynchronous invoice workflows, and reduced p99 latency by 60%.",
  },
  {
    date: "JAN 2021 — MAY 2024",
    role: "Coordinator",
    company: "App Team NITH",
    detail: "Managed development teams and technical events at NIT Hamirpur.",
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
    liveUrl: 'https://www.1mg.com/information/maharaja-air-india',
  },
  {
    icon: "⌘",
    title: "Personal Portfolio Platform",
    details: [
      "Designed and developed a responsive personal portfolio showcasing projects, technical skills, and professional experience.",
      "Built with React.js and JavaScript, including an EmailJS-powered communication workflow for direct visitor enquiries.",
    ],
    tags: ["REACT", "JAVASCRIPT", "EMAILJS"],
    liveUrl: null,
  },
];

function App() {
  const [light, setLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("profile");

  useEffect(() => {
    const sections = [...document.querySelectorAll("main section[id]")];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-30% 0px -60%" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\nFrom: ${data.get("name")}\nEmail: ${data.get("email")}`
    );
    window.location.href = `mailto:aadityaarora1215@gmail.com?subject=${subject}&body=${body}`;
  };

  const nav = ["profile", "skills", "experience", "projects", "achievements", "contact"];

  return (
    <div className={light ? "app light" : "app"}>
      <header className="topbar">
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
              href="https://drive.google.com/file/d/1dxEVFh2FnqVREfScM9iKmNbUoPkOV3g3/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
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

      <main>
        <section className="hero" id="profile">
          <div className="hero-copy">
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
          <Terminal />
        </section>

        <section className="section skills-section" id="skills">
          <SectionHead number="01" title="TECH_STACK" aside="[CONSTANT_EVOLUTION]" />
          <div className="skill-grid">
            {skills.map((skill) => (
              <article key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.values}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHead number="02" title="EXPERIENCE" />
          <div className="timeline">
            {experience.map((job, index) => (
              <article className={index % 2 ? "right" : "left"} key={job.date}>
                <span className="node"></span>
                <div>
                  <time>{job.date}</time>
                  <h3>{job.role}</h3>
                  <small>{job.company}</small>
                  <p>{job.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHead
            number="03"
            title="PROJECTS"
            aside={
              <a href="https://github.com/Gagneja1512" target="_blank" rel="noreferrer">
                VIEW_ALL_REPOS →
              </a>
            }
          />
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title}>
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
          <SectionHead number="04" title="ACHIEVEMENTS" />
          <div className="achievement-grid">
            <article>
              <h3>CodeChef 4★</h3>
              <p>Rating: 1828</p>
            </article>
            <article>
              <h3>Codeforces Specialist</h3>
              <p>Rating: 1418</p>
            </article>
            <article>
              <h3>9.01 GPA</h3>
              <p>NIT Hamirpur B.Tech</p>
            </article>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div>
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
              href="https://drive.google.com/file/d/1dxEVFh2FnqVREfScM9iKmNbUoPkOV3g3/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              DOWNLOAD_RESUME.PDF <span>⇩</span>
            </a>
          </div>
          <form onSubmit={sendMessage}>
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
  "~/projects/portfolio/stack.txt": "React, JavaScript, EmailJS",
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
