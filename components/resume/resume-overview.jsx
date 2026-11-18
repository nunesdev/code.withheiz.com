import { ResumeAnchorSection } from "@/components/resume/resume-anchor-section";
import { ResumeStatCard } from "@/components/resume/resume-stat-card";

export function ResumeOverview({ sectionId, title, body, stats }) {
  return (
    <ResumeAnchorSection id={sectionId} title={title}>
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
        {body}
      </p>
      <StatsGrid stats={stats} />
    </ResumeAnchorSection>
  );
}

function StatsGrid({ stats }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {stats.map((stat) => (
        <ResumeStatCard key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}