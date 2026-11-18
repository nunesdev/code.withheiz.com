const proseClass =
  "prose prose-sm prose-neutral max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted prose-li:text-muted prose-strong:text-foreground prose-a:text-accent";

export function ProjectSection({ title, children, className = "" }) {
  return (
    <section className={`space-y-4 ${className}`}>
      {title ? (
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      ) : null}
      <div className={proseClass}>{children}</div>
    </section>
  );
}

export function ProjectSubsection({ title, children }) {
  return (
    <div className="space-y-2">
      {title ? (
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
      ) : null}
      <div className={proseClass}>{children}</div>
    </div>
  );
}