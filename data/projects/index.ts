import { projects as portfolioProjects } from "./portfolio.js";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  slug?: string;
  link?: string;
  images?: string[];
};

export const projects: Project[] = portfolioProjects;

const slugAliases: Record<string, string> = {
  "spotify-dataset-analysis":
    "spotify-dataset-analysis-with-python-notebook-ipynb",
};

function resolveSlug(slug: string) {
  return slugAliases[slug] ?? slug;
}

export function getLatestProjects(limit = projects.length) {
  return projects.slice(0, limit);
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