"use client";

import { useTranslations } from "next-intl";
import { RESUME_SECTION_IDS } from "@/components/resume/resume-constants";
import { useResumeScrollSpy } from "@/components/resume/resume-use-scroll-spy";
import {
  ResumeSidebar,
  ResumeMobileNav,
} from "@/components/resume/resume-sidebar";
import { ResumeProfile } from "@/components/resume/resume-profile";
import { ResumeOverview } from "@/components/resume/resume-overview";
import { ResumeExperienceSection } from "@/components/resume/resume-experience-section";
import { ResumeEducationSection } from "@/components/resume/resume-education-section";
import { ResumeCertificationsSection } from "@/components/resume/resume-certifications-section";

export function ResumePageClient() {
  const t = useTranslations("resume");
  const activeId = useResumeScrollSpy(RESUME_SECTION_IDS);

  const navItems = RESUME_SECTION_IDS.map((id) => ({
    id,
    index: t(`sectionsNav.${id}.index`),
    title: t(`sectionsNav.${id}.title`),
  }));

  const profile = {
    name: t("profile.name"),
    role: t("profile.role"),
    location: t("profile.location"),
    photoAlt: t("profile.photoAlt"),
  };

  const contactLabels = {
    linkedin: "LinkedIn",
    github: "GitHub",
  };

  const overview = {
    title: t("overview.title"),
    body: t("overview.body"),
    stats: t.raw("overview.stats"),
  };

  const experience = {
    title: t("experience.title"),
    items: t.raw("experience.items"),
  };

  const education = {
    title: t("education.title"),
    items: t.raw("education.items"),
  };

  const certifications = {
    title: t("certifications.title"),
    items: t.raw("certifications.items"),
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
      <ResumeMobileNav
        navItems={navItems}
        activeId={activeId}
        downloadLabel={t("downloadPdf")}
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(11rem,14rem)_minmax(0,1fr)] lg:gap-20 xl:gap-24">
        <ResumeSidebar
          navLabel={t("sectionNavLabel")}
          navItems={navItems}
          activeId={activeId}
          downloadLabel={t("downloadPdf")}
        />

        <div>
          <ResumeProfile profile={profile} contactLabels={contactLabels} />

          <ResumeOverview
            sectionId="overview"
            title={overview.title}
            body={overview.body}
            stats={overview.stats}
          />
          <ResumeExperienceSection
            sectionId="experience"
            title={experience.title}
            items={experience.items}
            techLabel={t("experienceTechLabel")}
            showMoreLabel={t("experience.showMore")}
            showLessLabel={t("experience.showLess")}
            defaultVisibleCount={t.raw("experience.defaultVisibleCount")}
          />
          <ResumeEducationSection
            sectionId="education"
            title={education.title}
            items={education.items}
          />
          <ResumeCertificationsSection
            sectionId="certifications"
            title={certifications.title}
            items={certifications.items}
          />
        </div>
      </div>
    </div>
  );
}