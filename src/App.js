import { useEffect, useRef, useState } from "react";
import RotatingRole from "./components/RotatingRole";
import SectionHead from "./components/SectionHead";
import Terminal from "./components/Terminal";
import { experience, impact, projects, skills } from "./data/portfolio";
import "./App.css";

function App() {
  const [light, setLight] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved === "light") return true;
    if (saved === "dark") return false;
    return window.matchMedia("(prefers-color-scheme: light)").matches;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("profile");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const paletteRef = useRef(null);
  const paletteTriggerRef = useRef(null);
  const restorePaletteFocusRef = useRef(true);

  const nav = [
    "profile",
    "skills",
    "building",
    "experience",
    "projects",
    "achievements",
    "education",
    "contact",
  ];

  const paletteItems = [
    ["profile", "About", "01"],
    ["skills", "Technical stack", "02"],
    ["building", "Currently exploring", "03"],
    ["experience", "Experience", "04"],
    ["projects", "Projects", "05"],
    ["achievements", "Achievements", "06"],
    ["education", "Education", "07"],
    ["contact", "Contact", "08"],
  ];

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
    window.localStorage.setItem("portfolio-theme", light ? "light" : "dark");
    document.documentElement.style.colorScheme = light ? "light" : "dark";
  }, [light]);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };
    const handleKeyboard = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        restorePaletteFocusRef.current = true;
        setPaletteOpen((current) => !current);
      }
      if (event.key === "Escape") {
        setPaletteOpen(false);
        setMenuOpen(false);
      }
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

  useEffect(() => {
    if (!paletteOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const paletteTrigger = paletteTriggerRef.current;
    const focusable = paletteRef.current?.querySelectorAll(
      'button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];

    document.body.style.overflow = "hidden";
    first?.focus();

    const trapFocus = (event) => {
      if (event.key !== "Tab" || !focusable?.length) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", trapFocus);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", trapFocus);
      if (restorePaletteFocusRef.current) paletteTrigger?.focus();
    };
  }, [paletteOpen]);

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

  const closePalette = (restoreFocus = true) => {
    restorePaletteFocusRef.current = restoreFocus;
    setPaletteOpen(false);
  };

  const navigateTo = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    closePalette(false);
    setMenuOpen(false);
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
      </div>
      <a className="skip-link" href="#site-content">
        Skip to content
      </a>
      <header className="topbar">
        <span className="scroll-progress" style={{ "--scroll-progress": scrollProgress / 100 }} />
        <div className="nav-wrap">
          <a className="brand" href="#profile" onClick={() => setMenuOpen(false)}>
            AADITYA GAGNEJA
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
          <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation" id="main-nav">
            {nav.map((item) => (
              <a
                key={item}
                className={active === item ? "active" : ""}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
              >
                {item === "profile" ? "About" : item === "building" ? "Exploring" : item}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <a
              className="resume-small"
              href="https://drive.google.com/file/d/18NH18EiXKWzL5FZ1wgabLACe7kG6Uv1G/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Resume ↗
            </a>
            <button
              className="theme-button"
              onClick={() => setLight(!light)}
              aria-label={`Switch to ${light ? "dark" : "light"} mode`}
              aria-pressed={light}
            >
              {light ? "●" : "◐"}
            </button>
          </div>
        </div>
      </header>

      <aside className={`system-rail${scrollProgress > 4 ? " is-visible" : ""}`} aria-hidden="true">
        <span>SYS.PROGRESS</span>
        <div>
          <i style={{ "--scroll-progress": scrollProgress / 100 }} />
        </div>
        <strong>{String(Math.round(scrollProgress)).padStart(3, "0")}%</strong>
      </aside>

      <main className="portfolio-main" id="site-content" tabIndex="-1">
        <section className="hero" id="profile">
          <div className="hero-copy hero-enter">
            <div className="hero-eyebrow">
              <span className="status">[SYSTEM_STATUS: ACTIVE]</span>
              <span className="hero-note">AVAILABLE FOR SELECT BACKEND ROLES</span>
            </div>
            <h1>AADITYA GAGNEJA</h1>
            <RotatingRole />
            <p className="intro">
              Software Development Engineer 2 @ <strong>Tata 1mg</strong> | High-Throughput APIs,
              Distributed Systems &amp; Technical Ownership
            </p>
            <div className="hero-actions">
              <a className="hero-primary" href="#contact">
                START A CONVERSATION
              </a>
              <a
                className="hero-secondary"
                href="https://drive.google.com/file/d/18NH18EiXKWzL5FZ1wgabLACe7kG6Uv1G/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                VIEW RESUME ↗
              </a>
            </div>
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

        <section
          className="availability reveal reveal-up"
          data-reveal
          aria-label="Schedule a conversation"
        >
          <div className="availability-panel">
            <div className="availability-status">
              <i />
              <div>
                <strong>Open to backend and platform conversations</strong>
              </div>
            </div>
            <div className="availability-copy">
              <p>
                If you are hiring for distributed systems, platform reliability, or high-throughput
                API ownership, this is the fastest path to connect.
              </p>
            </div>
            <div className="availability-meta">
              <div className="availability-detail">
                <span>FORMAT</span>
                <strong>Intro call · Technical discussion</strong>
              </div>
              <div className="availability-detail">
                <span>TIMEZONE</span>
                <strong>IST · Flexible overlap with EU / US teams</strong>
              </div>
              <div className="availability-detail">
                <span>FOCUS</span>
                <strong>Distributed Systems · Platform Engineering</strong>
              </div>
            </div>
          </div>
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
                distributed systems, and high-throughput APIs. I own services handling 50K+ daily
                requests, lead zero-downtime migrations, and build asynchronous workflows with
                measurable latency and reliability outcomes.
              </p>
              <p>
                I enjoy turning complex business workflows into resilient systems and helping teams
                ship them safely. My recent work includes mentoring interns, reviewing 30+ pull
                requests, and coordinating 5+ production releases.
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
              <small>Secured rank 92 / 2,200+ in Starters 46</small>
            </article>
            <article className="reveal reveal-up" data-reveal style={{ "--reveal-delay": "90ms" }}>
              <h3>Codeforces Specialist</h3>
              <p>Max rating: 1418</p>
              <small>Achieved rank 1,486 / 12,000+ in Round 820</small>
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
              line or view my technical profile.
            </p>
            <a
              className="resume-large"
              href="https://drive.google.com/file/d/18NH18EiXKWzL5FZ1wgabLACe7kG6Uv1G/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              VIEW_RESUME <span>↗</span>
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
          <form
            className="reveal reveal-right"
            data-reveal
            onSubmit={sendMessage}
            aria-label="Contact form"
          >
            <label htmlFor="contact-name">
              NAME
              <input
                id="contact-name"
                name="name"
                placeholder="Aaditya Arora"
                autoComplete="name"
                required
              />
            </label>
            <label htmlFor="contact-email">
              EMAIL
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="aadityaarora1215@gmail.com"
                autoComplete="email"
                inputMode="email"
                required
              />
            </label>
            <label htmlFor="contact-message">
              MESSAGE
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="DESCRIBE THE SYSTEM ARCHITECTURE..."
                autoComplete="off"
                required
              />
            </label>
            <button type="submit">EXECUTE_SEND()</button>
          </form>
        </section>
      </main>

      <button
        ref={paletteTriggerRef}
        className={`command-trigger${scrollProgress > 4 ? " is-visible" : ""}`}
        type="button"
        onClick={() => {
          restorePaletteFocusRef.current = true;
          setPaletteOpen(true);
        }}
        aria-label="Open command palette"
        aria-haspopup="dialog"
        aria-expanded={paletteOpen}
        aria-controls="command-palette"
      >
        <i />
        <span>QUICK_NAV</span>
        <kbd>⌘ K</kbd>
      </button>

      {paletteOpen && (
        <div className="command-overlay" role="presentation" onMouseDown={() => closePalette()}>
          <section
            ref={paletteRef}
            className="command-palette"
            role="dialog"
            aria-modal="true"
            aria-labelledby="command-title"
            id="command-palette"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="command-titlebar">
              <div>
                <i />
                <span id="command-title">portfolio.command</span>
              </div>
              <button type="button" className="command-close" onClick={() => closePalette()}>
                Close
              </button>
            </div>
            <div className="command-input">
              <span>›</span>
              <p>Where would you like to go?</p>
              <b>READY</b>
            </div>
            <div className="command-list">
              {paletteItems.map(([section, label, shortcut]) => (
                <button type="button" onClick={() => navigateTo(section)} key={section}>
                  <span>{label}</span>
                  <kbd>{shortcut}</kbd>
                </button>
              ))}
            </div>
            <div className="command-actions">
              <button
                type="button"
                onClick={() => {
                  closePalette();
                  setLight((current) => !current);
                }}
              >
                {light ? "Switch to dark mode" : "Switch to light mode"}
              </button>
              <a
                href="https://drive.google.com/file/d/18NH18EiXKWzL5FZ1wgabLACe7kG6Uv1G/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                View résumé ↗
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

export default App;
