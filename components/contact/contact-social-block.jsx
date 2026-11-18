import { ExternalLink } from "lucide-react";

const linkClass =
  "group flex items-center justify-between gap-4 rounded-md border border-border bg-background px-4 py-3 transition-colors hover:bg-surface";

export function ContactSocialBlock({ title, items }) {
  return (
    <section className="space-y-4" aria-labelledby="social-profiles-heading">
      <h2
        id="social-profiles-heading"
        className="text-sm font-semibold tracking-tight text-foreground"
      >
        {title}
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <span className="text-sm font-medium text-foreground group-hover:text-accent">
                {item.label}
              </span>
              <ExternalLink
                className="size-4 shrink-0 text-muted-foreground"
                aria-hidden
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}