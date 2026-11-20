import { Link } from "@/i18n/navigation";
import { ProjectCardCta } from "@/components/project/project-card-cta";

const titleLinkClass =
  "relative text-lg font-semibold tracking-tight text-foreground after:absolute after:inset-0 after:content-[''] focus:outline-none";

const cardBaseClass =
  "animate-fadeIn rounded-md border border-border bg-background p-6";

const cardInteractiveClass =
  "group relative transition-colors hover:border-muted-foreground/35 focus-within:ring-2 focus-within:ring-border focus-within:ring-offset-2 focus-within:ring-offset-background dark:hover:border-muted-foreground/50";

export function ProjectCard({ project, viewProjectLabel, imageAlt }) {
  const isExternal = Boolean(project.link);
  const hasDestination = Boolean(project.link ?? project.slug);

  const titleContent = project.title;

  return (
    <article
      className={
        hasDestination
          ? `${cardBaseClass} ${cardInteractiveClass}`
          : cardBaseClass
      }
    >
      <h2 className="mb-1">
        {hasDestination && isExternal ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={titleLinkClass}
          >
            {titleContent}
          </a>
        ) : hasDestination ? (
          <Link href={`/project/${project.slug}`} className={titleLinkClass}>
            {titleContent}
          </Link>
        ) : (
          <span className="text-lg font-semibold tracking-tight text-foreground">
            {titleContent}
          </span>
        )}
      </h2>

      {project.description ? (
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      ) : null}

      {project.images && project.images.length > 0 ? (
        <div
          className={`mb-4 grid gap-3 ${
            project.images.length === 1
              ? "grid-cols-1"
              : project.images.length === 2
                ? "grid-cols-2"
                : "grid-cols-3"
          }`}
        >
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={imageAlt}
              className="h-64 w-full rounded-lg border border-border object-cover"
            />
          ))}
        </div>
      ) : null}

      {project.tags?.length > 0 ? (
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-surface px-3 py-1 text-sm font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      {hasDestination ? (
        <ProjectCardCta external={isExternal} label={viewProjectLabel} />
      ) : null}
    </article>
  );
}