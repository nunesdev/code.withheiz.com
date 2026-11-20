import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getLatestProjects } from "@/data/projects";
import { ProjectCard } from "@/components/project/project-card";

export async function HomeProjectsSection({ locale, limit }) {
  const t = await getTranslations("home");
  const projects = getLatestProjects(locale, limit);

  return (
    <section id="projects" className="animate-fadeIn w-full">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-2">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          {t("projectsHeading")}
        </h2>
        <Link
          href="/projects"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {t("viewAll")}
        </Link>
      </div>
      <ProjectGrid
        projects={projects}
        viewProjectLabel={t("viewProject")}
        imageAlt={t("projectVisualAlt")}
      />
    </section>
  );
}

function ProjectGrid({ projects, viewProjectLabel, imageAlt }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug ?? project.link ?? project.title}
          project={project}
          viewProjectLabel={viewProjectLabel}
          imageAlt={imageAlt}
        />
      ))}
    </div>
  );
}