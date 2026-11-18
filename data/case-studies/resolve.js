import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/data/case-studies";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";

export function resolveProjectPage(slug) {
  const caseStudy = getCaseStudyBySlug(slug);
  if (caseStudy) {
    return { type: "caseStudy", data: caseStudy };
  }

  const project = getProjectBySlug(slug);
  if (project) {
    return { type: "portfolio", data: project };
  }

  return null;
}

export function getAllResolvedProjectSlugs() {
  return [...new Set([...getAllCaseStudySlugs(), ...getAllProjectSlugs()])];
}