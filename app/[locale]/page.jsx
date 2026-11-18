import { getTranslations, setRequestLocale } from "next-intl/server";
import { getLatestProjects } from "@/data/projects";
import { ProjectCard } from "@/components/project/project-card";

export default async function HomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const latestProjects = getLatestProjects();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 bg-background px-6 py-12 text-foreground">
      <section className="flex flex-col items-start gap-6 border-b border-border pb-8 sm:flex-row sm:items-center">
        <img
          src="/bruno.jpg"
          alt={t("name")}
          className="h-32 w-32 rounded-lg border border-border object-cover"
        />
        <div className="text-left">
          <h1 className="text-3xl font-semibold tracking-tight">{t("name")}</h1>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {t("bio")}
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="animate-fadeIn flex w-full max-w-3xl flex-col gap-10"
      >
        <h2 className="border-b border-border pb-2 text-2xl font-semibold tracking-tight">
          {t("projectsHeading")}
        </h2>
        {latestProjects.map((project) => (
          <ProjectCard
            key={project.slug ?? project.link ?? project.title}
            project={project}
            viewProjectLabel={t("viewProject")}
            imageAlt={t("projectVisualAlt")}
          />
        ))}
      </section>
    </main>
  );
}