import { ResumeAnchorSection } from "@/components/resume/resume-anchor-section";

export function ResumeCertificationsSection({ sectionId, title, items }) {
  return (
    <ResumeAnchorSection id={sectionId} title={title}>
      <ul className="divide-y divide-border border-y border-border">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-sm text-foreground">{item.name}</span>
            <span className="text-sm tabular-nums text-muted-foreground">
              {item.year}
            </span>
          </li>
        ))}
      </ul>
    </ResumeAnchorSection>
  );
}