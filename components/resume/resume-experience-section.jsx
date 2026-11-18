"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ResumeAnchorSection } from "@/components/resume/resume-anchor-section";
import { ResumeTechTag } from "@/components/resume/resume-tech-tag";

export function ResumeExperienceSection({
  sectionId,
  title,
  items,
  techLabel,
  showMoreLabel,
  showLessLabel,
  defaultVisibleCount = 5,
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > defaultVisibleCount;
  const visibleItems = expanded ? items : items.slice(0, defaultVisibleCount);

  return (
    <ResumeAnchorSection id={sectionId} title={title}>
      <ul className="space-y-10">
        {visibleItems.map((item) => (
          <li
            key={item.id}
            className="border-b border-border pb-10 last:border-b-0 last:pb-0"
          >
            <ExperienceRole techLabel={techLabel} {...item} />
          </li>
        ))}
      </ul>

      {hasMore ? (
        <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 transition-colors hover:underline"
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              <ChevronUp className="size-4" aria-hidden />
              {showLessLabel}
            </>
          ) : (
            <>
              <ChevronDown className="size-4" aria-hidden />
              {showMoreLabel}
            </>
          )}
        </button>
        </div>
      ) : null}
    </ResumeAnchorSection>
  );
}

function ExperienceRole({
  role,
  company,
  modality,
  period,
  duration,
  highlights,
  tech,
  techLabel,
}) {
  const companyLine = modality ? `${company} (${modality})` : company;

  return (
    <article className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {role}
          </h3>
          <p className="text-sm text-muted-foreground">{companyLine}</p>
        </div>
        <div className="shrink-0 sm:text-right">
          <p className="text-sm tabular-nums text-muted-foreground">{period}</p>
          {duration ? (
            <span className="mt-1 block text-xs text-muted-foreground">
              {duration}
            </span>
          ) : null}
        </div>
      </div>

      {highlights?.length > 0 ? (
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          {highlights.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      ) : null}

      {tech?.length > 0 ? (
        <footer className="flex flex-col gap-2 pt-2 sm:flex-row sm:items-start sm:gap-3">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-foreground">
            {techLabel}
          </span>
          <ul className="flex flex-wrap gap-2">
            {tech.map((tag) => (
              <li key={tag}>
                <ResumeTechTag>{tag}</ResumeTechTag>
              </li>
            ))}
          </ul>
        </footer>
      ) : null}
    </article>
  );
}