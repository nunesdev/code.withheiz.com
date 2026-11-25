import { ResumeAnchorSection } from "@/components/resume/resume-anchor-section";

export function ResumeLanguagesSection({ sectionId, title, items }) {
  return (
    <ResumeAnchorSection id={sectionId} title={title}>
      <ul className="space-y-6">
        {items.map((item) => (
          <li key={item.id}>
            <article className="space-y-1 border-b border-border pb-6 last:border-b-0 last:pb-0">
              <h3 className="text-sm font-semibold text-foreground">
                {item.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.level}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </ResumeAnchorSection>
  );
}