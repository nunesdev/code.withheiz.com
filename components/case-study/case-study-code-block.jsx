export function CaseStudyCodeBlock({ code, caption }) {
  return (
    <figure className="not-prose space-y-2">
      <pre className="overflow-x-auto rounded-md border border-border bg-surface p-4 text-xs leading-relaxed text-foreground">
        <code>{code}</code>
      </pre>
      {caption ? (
        <figcaption className="text-xs text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
}