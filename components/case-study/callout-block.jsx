const variants = {
  notebook: {
    container:
      "border-emerald-300/60 bg-emerald-50 text-emerald-950 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-50",
    label: "text-emerald-700 dark:text-emerald-300",
    button:
      "bg-emerald-600 text-emerald-50 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400",
  },
  info: {
    container:
      "border-border bg-surface text-foreground",
    label: "text-muted",
    button: "bg-foreground text-background hover:opacity-90",
  },
};

export function CalloutBlock({
  variant = "notebook",
  label,
  children,
  actionHref,
  actionLabel,
}) {
  const styles = variants[variant] ?? variants.info;

  return (
    <aside
      className={`rounded-xl border p-5 text-sm leading-relaxed ${styles.container}`}
    >
      {label ? (
        <p
          className={`mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] ${styles.label}`}
        >
          {label}
        </p>
      ) : null}
      <div className="mb-3">{children}</div>
      {actionHref && actionLabel ? (
        <a
          href={actionHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center rounded-full px-3 py-1.5 text-[0.7rem] font-medium transition ${styles.button}`}
        >
          {actionLabel}
        </a>
      ) : null}
    </aside>
  );
}