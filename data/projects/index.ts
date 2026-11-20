import { projects as portfolioProjects } from "./portfolio.js";

export type Project = {
  title?: string;
  titleEn?: string;
  titlePt?: string;
  description?: string;
  summaryEn?: string;
  summaryPt?: string;
  tags: string[];
  slug?: string;
  link?: string;
  type?: "case-study" | "portfolio";
  images?: string[];
};

export const projects = portfolioProjects as Project[];

const slugAliases: Record<string, string> = {
  "spotify-dataset-analysis":
    "spotify-dataset-analysis-with-python-notebook-ipynb",
};

function resolveSlug(slug: string) {
  return slugAliases[slug] ?? slug;
}

export function localizeProject(project: Project, locale: string): Project {
  const isPt = locale === "pt";
  return {
    ...project,
    title: isPt
      ? (project.titlePt ?? project.title ?? "")
      : (project.titleEn ?? project.title ?? ""),
    description: isPt
      ? (project.summaryPt ?? project.description ?? "")
      : (project.summaryEn ?? project.description ?? ""),
  };
}

export function getLatestProjects(locale = "en", limit = projects.length) {
  return projects.slice(0, limit).map((p) => localizeProject(p, locale));
}

export function getProjectBySlug(slug: string) {
  const resolved = resolveSlug(slug);
  return projects.find((project) => project.slug === resolved) ?? null;
}

export function getAllProjectSlugs() {
  const slugs = projects.map((project) => project.slug).filter(Boolean) as string[];
  const aliasSlugs = Object.keys(slugAliases);
  return [...new Set([...slugs, ...aliasSlugs])];
}

export function getProjectCardCta(project: Project): "external" | "internal" | null {
  if (project.link) return "external";
  if (project.slug) return "internal";
  return null;
}