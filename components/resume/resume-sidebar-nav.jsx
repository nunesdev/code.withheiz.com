"use client";

const linkBase =
  "group flex items-baseline gap-3 rounded-md px-2 py-2 text-sm transition-colors";

export function ResumeSidebarNav({
  items,
  activeId,
  onNavigate,
  className = "",
  orientation = "vertical",
}) {
  return (
    <ul
      className={
        orientation === "horizontal"
          ? `flex gap-1 overflow-x-auto pb-1 ${className}`
          : `space-y-1 ${className}`
      }
      role="list"
    >
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <li
            key={item.id}
            className={orientation === "horizontal" ? "shrink-0" : undefined}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
              }}
              className={`${linkBase} ${
                isActive
                  ? "bg-surface text-foreground"
                  : "text-muted-foreground hover:bg-surface hover:text-foreground"
              }`}
              aria-current={isActive ? "location" : undefined}
            >
              <span
                className={`font-mono text-xs tabular-nums ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.index}
              </span>
              <span className="font-medium">{item.title}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function scrollToResumeSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}