export const resumeTagClassName =
  "rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300";

export function ResumeTechTag({ children }) {
  return <span className={resumeTagClassName}>{children}</span>;
}