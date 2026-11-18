import { Globe, Laptop, Mail, MapPin } from "lucide-react";

const rowClass =
  "group flex items-start gap-4 rounded-md border border-border bg-background p-4 transition-colors hover:bg-surface";

function InfoRow({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-foreground">
        <Icon className="size-4" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-muted-foreground">{label}</span>
        <span
          className={`text-sm font-medium text-foreground ${
            href ? "group-hover:text-accent" : ""
          }`}
        >
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={rowClass}>
        {content}
      </a>
    );
  }

  return <div className={rowClass}>{content}</div>;
}

export function ContactInfoBlock({
  title,
  email,
  location,
  emailLabel,
  locationLabel,
  remoteLabel,
  remote,
  timezoneLabel,
  timezone,
}) {
  return (
    <section className="space-y-4" aria-labelledby="contact-info-heading">
      <h2
        id="contact-info-heading"
        className="text-sm font-semibold tracking-tight text-foreground"
      >
        {title}
      </h2>
      <div className="space-y-3">
        <InfoRow
          icon={Mail}
          label={emailLabel}
          value={email}
          href={`mailto:${email}`}
        />
        <InfoRow
          icon={MapPin}
          label={locationLabel}
          value={location}
        />
        <InfoRow icon={Laptop} label={remoteLabel} value={remote} />
        <InfoRow icon={Globe} label={timezoneLabel} value={timezone} />
      </div>
    </section>
  );
}