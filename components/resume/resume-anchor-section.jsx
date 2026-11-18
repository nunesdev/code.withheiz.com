export function ResumeAnchorSection({ id, title, children, className = "" }) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-b border-border py-12 last:border-b-0 md:scroll-mt-24 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <h2
        id={`${id}-heading`}
        className="mb-8 text-xl font-semibold tracking-tight text-foreground"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}