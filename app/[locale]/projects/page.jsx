import { getTranslations, setRequestLocale } from "next-intl/server";
import { getLatestProjects } from "@/data/projects";
import { ProjectCard } from "@/components/project/project-card";

export default async function ProjectsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const projects = getLatestProjects(locale);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 bg-background px-6 py-12 text-foreground">
      <header className="border-b border-border pb-6">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          {t("projectsHeading")}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          {t("projectsPageIntro")}
        </p>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug ?? project.link ?? project.title}
            project={project}
            viewProjectLabel={t("viewProject")}
            imageAlt={t("projectVisualAlt")}
          />
        ))}
      </div>
    </main>
  );
}