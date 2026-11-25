import { ProjectSection } from "@/components/case-study/project-section";
import { ProjectHeader } from "@/components/case-study/project-header";
import { CalloutBlock } from "@/components/case-study/callout-block";
import { CaseStudyFigureGrid } from "@/components/case-study/case-study-figure-grid";

export function FullStackCaseStudyView({ study }) {
  const s = study.sections;

  return (
    <article className="mx-auto w-full max-w-[720px] space-y-10 px-4 py-10 md:py-14">
      <ProjectHeader
        breadcrumbs={study.breadcrumbs}
        title={study.title}
        subtitle={study.heroDescription}
        meta={study.meta}
        metaFieldConfig={study.metaFieldConfig}
        metaLabels={study.metaLabels}
      />

      {study.figures?.length ? (
        <CaseStudyFigureGrid figures={study.figures} />
      ) : null}

      <ProjectSection title={s.problem.title}>
        <p>{s.problem.body}</p>
      </ProjectSection>

      <ProjectSection title={s.architecture.title}>
        <ul className="space-y-4">
          {s.architecture.decisions.map((item) => (
            <li key={item.title}>
              <p className="font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection title={s.impact.title}>
        <ul className="space-y-4">
          {s.impact.items.map((item) => (
            <li key={item.title}>
              <p className="font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection title={s.tradeoffs.title}>
        <ul className="space-y-4">
          {s.tradeoffs.items.map((item) => (
            <li key={item.title}>
              <p className="font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </ProjectSection>

      {study.footerCallout ? (
        <section className="border-t border-border pt-8">
          <CalloutBlock
            variant="info"
            label={study.footerCallout.label}
            actionHref={study.footerCallout.href}
            actionLabel={study.footerCallout.cta}
          >
            {study.footerCallout.body}
          </CalloutBlock>
        </section>
      ) : null}
    </article>
  );
}