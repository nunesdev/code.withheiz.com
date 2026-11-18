export function ChartContainer({ title, description, imageSrc, alt }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="border-b border-border bg-background p-3 sm:p-4">
        <p className="text-sm font-semibold text-foreground">{title}</p>
      </div>
      <div className="bg-background p-2 sm:p-3">
        <img
          src={imageSrc}
          alt={alt ?? title}
          className="mx-auto max-h-[480px] w-full object-contain"
        />
      </div>
      {description ? (
        <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted">
          {description}
        </figcaption>
      ) : null}
    </figure>
  );
}