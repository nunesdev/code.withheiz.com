import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {
  getAllResolvedProjectSlugs,
  resolveProjectPage,
} from "@/data/case-studies/resolve";
import { CaseStudyView } from "@/components/case-study/case-study-view";
import { PortfolioProjectView } from "@/components/project/portfolio-project-view";

type ProjectPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  const slugs = getAllResolvedProjectSlugs();

  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const resolved = resolveProjectPage(slug, locale);
  if (!resolved) {
    notFound();
  }

  if (resolved.type === "caseStudy") {
    return (
      <main className="bg-background text-foreground">
        <CaseStudyView study={resolved.data} />
      </main>
    );
  }

  const tHome = await getTranslations("home");
  const tNav = await getTranslations("nav");

  return (
    <main className="bg-background text-foreground">
      <PortfolioProjectView
        project={resolved.data}
        backLabel={`← ${tNav("projects")}`}
        imageAlt={tHome("projectVisualAlt")}
      />
    </main>
  );
}