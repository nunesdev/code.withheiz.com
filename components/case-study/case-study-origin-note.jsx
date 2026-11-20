export function CaseStudyOriginNote({ label, body }) {
  if (!body) return null;

  return (
    <div className="rounded-md border border-border bg-background p-5">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground">{body}</p>
    </div>
  );
}