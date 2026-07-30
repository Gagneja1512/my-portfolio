import { useEffect, useState } from "react";

const rotatingRoles = [
  "A Backend Engineer",
  "A Distributed Systems Builder",
  "A Problem Solver",
  "An Agentic AI Explorer",
];

function RotatingRole() {
  const [displayedRole, setDisplayedRole] = useState(rotatingRoles[0]);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const glyphs = "01<>/_{}[]*#";
    let roleIndex = 0;
    let scrambleTimer;

    const cycle = window.setInterval(() => {
      roleIndex = (roleIndex + 1) % rotatingRoles.length;
      setActiveRoleIndex(roleIndex);
      const nextRole = rotatingRoles[roleIndex];
      let progress = 0;

      window.clearInterval(scrambleTimer);
      scrambleTimer = window.setInterval(() => {
        setDisplayedRole(
          nextRole
            .split("")
            .map((character, index) => {
              if (character === " " || index < progress) return character;
              return glyphs[Math.floor(Math.random() * glyphs.length)];
            })
            .join("")
        );

        progress += 1;
        if (progress > nextRole.length) {
          window.clearInterval(scrambleTimer);
          setDisplayedRole(nextRole);
        }
      }, 38);
    }, 2800);

    return () => {
      window.clearInterval(cycle);
      window.clearInterval(scrambleTimer);
    };
  }, []);

  return (
    <div className="rotating-role" aria-live="polite" aria-atomic="true">
      <div className="role-window-head" aria-hidden="true">
        <span>
          <i />
          IDENTITY_STREAM
        </span>
        <small>
          LIVE // {String(activeRoleIndex + 1).padStart(2, "0")}/
          {String(rotatingRoles.length).padStart(2, "0")}
        </small>
      </div>
      <div className="role-window-body">
        <span aria-hidden="true">const role =</span>
        <strong>&quot;{displayedRole}&quot;</strong>
        <i aria-hidden="true" />
      </div>
    </div>
  );
}

export default RotatingRole;
