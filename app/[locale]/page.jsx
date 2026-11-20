import { setRequestLocale } from "next-intl/server";
import { HomeHero } from "@/components/home/home-hero";
import { HomeCoreStack } from "@/components/home/home-core-stack";
import { HomeProjectsSection } from "@/components/home/home-projects-section";

const HOME_PROJECTS_PREVIEW = 6;

export default async function HomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 bg-background px-6 py-12 text-foreground">
      <HomeHero />
      <HomeCoreStack />
      <HomeProjectsSection locale={locale} limit={HOME_PROJECTS_PREVIEW} />
    </main>
  );
}