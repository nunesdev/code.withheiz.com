export function ArchitectureFlow({ steps }) {
  return (
    <div className="not-prose flex flex-col gap-3 md:flex-row md:flex-wrap md:items-stretch">
      {steps.map((step, index) => (
        <div key={step} className="flex min-w-0 flex-1 flex-col gap-3 md:min-w-[8rem]">
          <div className="rounded-md border border-border bg-surface px-3 py-3 text-center text-xs font-medium leading-snug text-foreground md:text-sm">
            {step}
          </div>
          {index < steps.length - 1 ? (
            <span
              className="hidden text-center text-muted-foreground md:block"
              aria-hidden
            >
              →
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}