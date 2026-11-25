import {
  ProjectSection,
  ProjectSubsection,
} from "@/components/case-study/project-section";
import { ProjectHeader } from "@/components/case-study/project-header";
import { ChartContainer } from "@/components/case-study/chart-container";
import { CalloutBlock } from "@/components/case-study/callout-block";
import { MlEngineeringCaseStudyView } from "@/components/case-study/ml-engineering-case-study-view";
import { FullStackCaseStudyView } from "@/components/case-study/full-stack-case-study-view";

function highlightPandas(text) {
  if (!text?.includes("pandas")) return text;
  const [before, after] = text.split("pandas");
  return (
    <>
      {before}
      <strong className="font-semibold text-foreground">pandas</strong>
      {after}
    </>
  );
}

export function CaseStudyView({ study }) {
  if (study.template === "ml-engineering") {
    return <MlEngineeringCaseStudyView study={study} />;
  }

  if (study.template === "full-stack") {
    return <FullStackCaseStudyView study={study} />;
  }

  return (
    <article className="mx-auto w-full max-w-[720px] space-y-10 px-4 py-10 md:py-14">
      <ProjectHeader
        breadcrumbs={study.breadcrumbs ?? study.badge?.split("·").map((s) => s.trim())}
        title={study.title}
        subtitle={highlightPandas(study.heroDescription)}
        meta={study.meta}
      />

      <ProjectSection title="Objetivos do projeto">
        <p>A análise foi estruturada em etapas para responder a perguntas como:</p>
        <ul>
          {study.objectives.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection title="Sobre o dataset">
        <p>
          O dataset{" "}
          <code className="rounded bg-surface px-1 py-0.5 text-xs">
            {study.dataset.fileName}
          </code>{" "}
          {study.dataset.description}
        </p>
        <div className="not-prose grid gap-4 rounded-xl border border-border bg-surface p-4 text-sm sm:grid-cols-2">
          <FieldList title="Campos principais" items={study.dataset.mainFields} />
          <FieldList
            title="Atributos de segmentação"
            items={study.dataset.segmentationFields}
          />
        </div>
      </ProjectSection>

      <ProjectSection title="Técnicas e ferramentas utilizadas">
        <div className="space-y-4">
          <ProjectSubsection title="Stack e ambiente">
            <ul>
              {study.techniques.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ProjectSubsection>
          <ProjectSubsection title="Data wrangling">
            <ul>
              {study.techniques.wrangling.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ProjectSubsection>
          <ProjectSubsection title="Modelagem dos dados">
            <ul>
              {study.techniques.modeling.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ProjectSubsection>
          <ProjectSubsection title="Simulações de negócio">
            <ul>
              {study.techniques.simulations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ProjectSubsection>
        </div>
      </ProjectSection>

      <ProjectSection title="Exploração e visualizações">
        <p>{study.sections.exploration}</p>
        <div className="not-prose space-y-6">
          {study.charts.map((chart) => (
            <ChartContainer
              key={chart.id}
              title={chart.title}
              description={chart.description}
              imageSrc={chart.imageSrc}
              alt={chart.alt}
            />
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Simulações e cenários">
        <p>{study.sections.scenariosIntro}</p>
        <p>{study.sections.scenariosBusiness}</p>
      </ProjectSection>

      <ProjectSection title="Índice hierárquico">
        <p>{study.sections.hierarchicalIntro}</p>
        <CodeExample text={study.sections.hierarchicalExample} />
      </ProjectSection>

      <ProjectSection title="Análises complementares">
        <p>{study.additionalAnalyses.aggregates}</p>
        <p>{study.additionalAnalyses.ageGroups}</p>
        <p>{study.additionalAnalyses.riskFilter}</p>
      </ProjectSection>

      <ProjectSection title="Principais aprendizados">
        <ul>
          {study.learnings.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection title="Principais conclusões">
        <ul>
          {study.conclusions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection title="Próximos passos" className="pb-2">
        <ul>
          {study.nextSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProjectSection>

      <section className="space-y-4 border-t border-border pt-6">
        <CalloutBlock
          variant="notebook"
          label="Notebook"
          actionHref={study.meta.githubUrl}
          actionLabel="Ver notebook no GitHub"
        >
          Este projeto foi originalmente desenvolvido em um notebook Jupyter. Você
          pode ver o código completo, células e saídas diretamente no repositório.
        </CalloutBlock>
        <p className="text-xs leading-relaxed text-muted">
          As visualizações exibidas nesta página são representações estáticas dos
          gráficos gerados no notebook original. No ambiente de análise, elas foram
          construídas com a API de visualização padrão do pandas/matplotlib.
        </p>
      </section>
    </article>
  );
}

function FieldList({ title, items }) {
  return (
    <div className="space-y-2">
      <p className="font-semibold text-foreground">{title}</p>
      <ul className="space-y-1 text-muted">
        {items.map((field) => (
          <li key={field.label}>
            <span className="font-medium text-foreground">{field.label}:</span>{" "}
            {field.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CodeExample({ text }) {
  const [code, rest] = text.includes(" retorna")
    ? text.split(" retorna")
    : [text, ""];

  return (
    <div className="not-prose rounded-xl border border-border bg-surface p-4 text-sm text-muted">
      <p className="mb-2 font-semibold text-foreground">Exemplo conceitual</p>
      <p>
        <code className="text-xs text-foreground">{code}</code>
        {rest ? ` retorna${rest}` : null}
      </p>
    </div>
  );
}