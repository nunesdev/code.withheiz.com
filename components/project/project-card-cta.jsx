import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "@/i18n/navigation";

const baseClass =
  "inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent";

export function ProjectCardCta({ project, label }) {
  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        {label}
        <ExternalLink className="size-4 shrink-0" aria-hidden />
      </a>
    );
  }

  if (project.slug) {
    return (
      <Link href={`/project/${project.slug}`} className={baseClass}>
        {label}
        <ArrowRight className="size-4 shrink-0" aria-hidden />
      </Link>
    );
  }

  return null;
}