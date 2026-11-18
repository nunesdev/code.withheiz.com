import { Link } from "@/i18n/navigation";

export function PortfolioProjectView({ project, backLabel, imageAlt }) {
  return (
    <article className="mx-auto w-full max-w-[720px] px-4 py-10 md:py-14">
      <Link
        href="/#projects"
        className="text-sm text-accent transition-colors hover:underline"
      >
        {backLabel}
      </Link>

      <header className="mt-6 space-y-4 border-b border-border pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        {project.tags?.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-border bg-surface px-2 py-1 text-xs font-medium text-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      {project.images?.length > 0 ? (
        <BadgeImages images={project.images} imageAlt={imageAlt} />
      ) : null}
    </article>
  );
}

function BadgeImages({ images, imageAlt }) {
  return (
    <div
      className={`mt-10 grid gap-4 ${
        images.length === 1
          ? "grid-cols-1"
          : images.length === 2
            ? "grid-cols-2"
            : "grid-cols-3"
      }`}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={imageAlt}
          className="h-64 w-full rounded-lg border border-border object-cover"
        />
      ))}
    </div>
  );
}