import { ResumeAnchorSection } from "@/components/resume/resume-anchor-section";

export function ResumeEducationSection({ sectionId, title, items }) {
  return (
    <ResumeAnchorSection id={sectionId} title={title}>
      <ul className="space-y-8">
        {items.map((item) => (
          <li key={item.id}>
            <article className="space-y-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.institution}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.degree}</p>
                </div>
                <p className="text-sm tabular-nums text-muted-foreground">
                  {item.period}
                </p>
              </div>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {item.highlights.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </ResumeAnchorSection>
  );
}