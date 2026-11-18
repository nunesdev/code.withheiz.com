export const resumeTagClassName =
  "rounded-md border border-border bg-surface px-2 py-1 text-xs font-medium text-foreground";

export function ResumeTechTag({ children }) {
  return <span className={resumeTagClassName}>{children}</span>;
}