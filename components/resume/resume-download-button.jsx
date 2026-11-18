import { Download } from "lucide-react";

export function ResumeDownloadButton({
  label,
  href = "/resume.pdf",
  className = "",
}) {
  return (
    <a
      href={href}
      download
      className={`inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface ${className}`}
    >
      <Download className="size-4 shrink-0" aria-hidden />
      {label}
    </a>
  );
}