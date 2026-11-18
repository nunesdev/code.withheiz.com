export function ResumeStatCard({ value, label }) {
  return (
    <div className="rounded-md border border-border bg-surface p-5">
      <p className="text-2xl font-semibold tracking-tight text-foreground">
        {value}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}