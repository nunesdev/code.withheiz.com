const fields = [
  { key: "context", label: "Context" },
  { key: "stack", label: "Stack", array: true },
  { key: "datasetSummary", label: "Dataset" },
];

export function ProjectMetadata({ meta }) {
  return (
    <div
      className="rounded-xl border border-border bg-surface p-5 text-sm text-muted"
      aria-label="Project metadata"
    >
      <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted">
        Metadados
      </p>
      <dl className="grid gap-4 sm:grid-cols-3">
        {fields.map(({ key, label, array }) => {
          const value = meta[key];
          if (!value) return null;
          const display = array && Array.isArray(value) ? value.join(", ") : value;

          return (
            <div key={key}>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted">
                {label}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-foreground">
                {display}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}