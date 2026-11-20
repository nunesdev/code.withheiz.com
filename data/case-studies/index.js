import { netflixUserbaseProject } from "./netflix-userbase";
import { localNlpFastapi } from "./local-nlp-fastapi";

const caseStudiesBySlug = {
  [netflixUserbaseProject.slug]: netflixUserbaseProject,
  [localNlpFastapi.slug]: localNlpFastapi,
};

function localizeCaseStudy(study, locale) {
  if (!study?.content) {
    return study;
  }

  const localized =
    study.content[locale] ?? study.content.en ?? study.content.pt;

  return {
    ...study,
    ...localized,
    slug: study.slug,
    id: study.id,
    template: study.template,
    breadcrumbs: study.breadcrumbs,
    githubUrl: study.githubUrl,
    metaFieldConfig: study.metaFieldConfig,
  };
}

export function getCaseStudyBySlug(slug, locale = "en") {
  const study = caseStudiesBySlug[slug] ?? null;
  if (!study) return null;
  return localizeCaseStudy(study, locale);
}

export function getAllCaseStudySlugs() {
  return Object.keys(caseStudiesBySlug);
}