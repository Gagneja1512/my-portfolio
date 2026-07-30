import { useEffect, useRef, useState } from "react";

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

export default Terminal;
