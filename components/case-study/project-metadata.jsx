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
        {fields.map(({ key, labelKey, array, hrefKey, wide, linkList }) => {
          const value = meta[key];
          if (value === undefined || value === null || value === "") return null;
          if (linkList && Array.isArray(value) && value.length === 0) return null;
          const display =
            array && Array.isArray(value) ? value.join(", ") : value;
          const label = resolvedLabels[labelKey] ?? labelKey;
          const href = hrefKey ? meta[hrefKey] : null;
          const linkClass =
            "text-foreground underline decoration-border underline-offset-2 transition-colors hover:text-accent";

          return (
            <div
              key={key}
              className={wide ? "sm:col-span-2 lg:col-span-4" : undefined}
            >
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {label}
              </dt>
              <dd className="mt-1 text-sm font-normal leading-relaxed text-foreground">
                {linkList && Array.isArray(value) ? (
                  <ul className="space-y-1.5">
                    {value.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {display}
                  </a>
                ) : (
                  display
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}