import { ArrowRight, ExternalLink } from "lucide-react";

const baseClass =
  "pointer-events-none inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:underline";

export function ProjectCardCta({ external, label }) {
  return (
    <span className={baseClass}>
      {label}
      {external ? (
        <ExternalLink
          className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      ) : (
        <ArrowRight
          className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      )}
    </span>
  );
}