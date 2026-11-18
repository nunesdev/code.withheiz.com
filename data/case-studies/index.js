import { netflixUserbaseProject } from "./netflix-userbase";

const caseStudiesBySlug = {
  [netflixUserbaseProject.slug]: netflixUserbaseProject,
};

export function getCaseStudyBySlug(slug) {
  return caseStudiesBySlug[slug] ?? null;
}

export function getAllCaseStudySlugs() {
  return Object.keys(caseStudiesBySlug);
}
