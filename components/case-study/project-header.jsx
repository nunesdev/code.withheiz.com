import { Link } from "@/i18n/navigation";
import { ProjectMetadata } from "@/components/case-study/project-metadata";

export function ProjectHeader({
  breadcrumbs,
  title,
  subtitle,
  meta,
  metaFieldConfig,
  metaLabels,
}) {
  return (
    <header className="space-y-6 border-b border-border pb-8">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 text-xs text-muted"
      >
        <Link href="/projects" className="transition-colors hover:text-accent">
          Projects
        </Link>
        {breadcrumbs.map((crumb) => (
          <span key={crumb} className="flex items-center gap-1.5">
            <span aria-hidden className="text-border">
              /
            </span>
            <span>{crumb}</span>
          </span>
        ))}
      </nav>

      <div className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        ) : null}
      </div>

      {meta ? (
        <ProjectMetadata
          meta={meta}
          fieldConfig={metaFieldConfig}
          labels={metaLabels}
        />
      ) : null}
    </header>
  );
}