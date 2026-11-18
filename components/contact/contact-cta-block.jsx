export function ContactCtaBlock({ title, text, buttonLabel, email }) {
  return (
    <section
      className="rounded-md border border-border bg-surface p-6"
      aria-labelledby="contact-cta-heading"
    >
      <h2
        id="contact-cta-heading"
        className="text-lg font-semibold tracking-tight text-foreground"
      >
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>
      <a
        href={`mailto:${email}`}
        className="mt-6 inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
      >
        {buttonLabel}
      </a>
    </section>
  );
}