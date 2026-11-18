import { ProjectCardCta } from "@/components/project/project-card-cta";

export function ProjectCard({ project, viewProjectLabel, imageAlt }) {
  return (
    <article className="animate-fadeIn border-b border-border pb-8 last:border-b-0">
      <h2 className="mb-1 text-lg font-semibold tracking-tight text-foreground">
        {project.title}
      </h2>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

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
              className="rounded-md border border-border bg-surface px-2 py-1 text-xs font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      <ProjectCardCta project={project} label={viewProjectLabel} />
    </article>
  );
}