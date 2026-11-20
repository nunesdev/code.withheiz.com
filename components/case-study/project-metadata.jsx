const defaultFields = [
  { key: "context", labelKey: "context" },
  { key: "stack", labelKey: "stack", array: true },
  { key: "datasetSummary", labelKey: "dataset" },
];

export function ProjectMetadata({ meta, fieldConfig, labels }) {
  const fields = fieldConfig ?? defaultFields;
  const resolvedLabels = labels ?? {
    heading: "Metadados",
    context: "Context",
    stack: "Stack",
    dataset: "Dataset",
    model: "Model",
    inferenceCost: "Inference Cost",
  };

  return (
    <div
      className="rounded-md border border-border bg-surface p-5 text-sm"
      aria-label={resolvedLabels.heading}
    >
      <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {resolvedLabels.heading}
      </p>
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {fields.map(({ key, labelKey, array }) => {
          const value = meta[key];
          if (value === undefined || value === null || value === "") return null;
          const display =
            array && Array.isArray(value) ? value.join(", ") : value;
          const label = resolvedLabels[labelKey] ?? labelKey;

          return (
            <div key={key}>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {label}
              </dt>
              <dd className="mt-1 text-sm font-normal leading-relaxed text-foreground">
                {display}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}