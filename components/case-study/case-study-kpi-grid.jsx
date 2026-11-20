export function CaseStudyKpiGrid({ items }) {
  return (
    <div className="not-prose grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-md border border-border bg-surface p-5"
        >
          <p className="text-2xl font-semibold tracking-tight text-foreground">
            {item.value}
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">{item.label}</p>
          {item.hint ? (
            <p className="mt-1 text-xs text-muted-foreground">{item.hint}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}