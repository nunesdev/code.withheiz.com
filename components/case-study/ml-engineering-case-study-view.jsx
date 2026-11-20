import { ProjectSection } from "@/components/case-study/project-section";
import { ProjectHeader } from "@/components/case-study/project-header";
import { CalloutBlock } from "@/components/case-study/callout-block";
import { ArchitectureFlow } from "@/components/case-study/architecture-flow";
import { ComparisonTable } from "@/components/case-study/comparison-table";
import { CaseStudyKpiGrid } from "@/components/case-study/case-study-kpi-grid";
import { CaseStudyCodeBlock } from "@/components/case-study/case-study-code-block";
import { CaseStudyOriginNote } from "@/components/case-study/case-study-origin-note";

export function MlEngineeringCaseStudyView({ study }) {
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

      <ProjectSection title={s.problem.title}>
        <p>{s.problem.body}</p>
      </ProjectSection>

      <ProjectSection title={s.architecture.title}>
        <ArchitectureFlow steps={s.architecture.flowSteps} />
        <ul className="mt-6 space-y-4">
          {s.architecture.decisions.map((item) => (
            <li key={item.title}>
              <p className="font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection title={s.modelComparison.title}>
        <ComparisonTable
          columns={s.modelComparison.columns}
          rows={s.modelComparison.rows}
        />
      </ProjectSection>

      <ProjectSection title={s.benchmark.title}>
        <p className="text-sm text-muted-foreground">{s.benchmark.intro}</p>
        <div className="mt-6">
          <CaseStudyKpiGrid items={s.benchmark.kpis} />
        </div>
        <BenchmarkSamplesTable
          caption={s.benchmark.tableCaption}
          rows={s.benchmark.samples}
        />
      </ProjectSection>

      <ProjectSection title={s.engineering.title}>
        <CaseStudyCodeBlock
          code={s.engineering.code}
          caption={s.engineering.caption}
        />
      </ProjectSection>

      <ProjectSection title={s.limitations.title}>
        <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
          {s.limitations.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 text-sm font-semibold text-foreground">
          {s.limitations.nextStepsTitle}
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
          {s.limitations.nextSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProjectSection>

      {study.originNote ? (
        <CaseStudyOriginNote
          label={study.originNote.label}
          body={study.originNote.body}
        />
      ) : null}

      <section className="border-t border-border pt-8">
        <CalloutBlock
          variant="notebook"
          label={study.footerCallout.label}
          actionHref={study.githubUrl}
          actionLabel={study.footerCallout.cta}
        >
          {study.footerCallout.body}
        </CalloutBlock>
      </section>
    </article>
  );
}

function BenchmarkSamplesTable({ caption, rows }) {
  return (
    <div className="not-prose mt-8 overflow-x-auto rounded-md border border-border">
      {caption ? (
        <p className="border-b border-border bg-surface px-4 py-2 text-xs font-medium text-muted-foreground">
          {caption}
        </p>
      ) : null}
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-background">
            <th className="px-4 py-3 text-xs font-semibold text-foreground">Sample</th>
            <th className="px-4 py-3 text-xs font-semibold text-foreground">Chars</th>
            <th className="px-4 py-3 text-xs font-semibold text-foreground">Latency</th>
            <th className="px-4 py-3 text-xs font-semibold text-foreground">Score</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-b border-border last:border-0">
              <td className="px-4 py-3 text-foreground">{row.name}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.chars}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.latency}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
