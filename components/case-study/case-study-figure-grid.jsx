export function CaseStudyFigureGrid({ figures }) {
  if (!figures?.length) return null;

  return (
    <div className="not-prose grid grid-cols-1 gap-6">
      {figures.map((figure) => (
        <figure key={figure.src} className="space-y-2">
          <div className="overflow-hidden rounded-md border border-border">
            <img
              src={figure.src}
              alt={figure.alt}
              className="h-auto w-full bg-background object-cover"
            />
          </div>
          {figure.caption ? (
            <figcaption className="text-xs leading-relaxed text-muted-foreground">
              {figure.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}