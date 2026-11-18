const contacts = [
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/brunodev/",
    label: "LinkedIn",
  },
  { key: "github", href: "https://github.com/nunesdev", label: "GitHub" },
];

export function ResumeProfile({ profile, contactLabels }) {
  return (
    <header className="mb-12 flex flex-col gap-6 border-b border-border pb-12 sm:flex-row sm:items-start">
      <img
        src="/bruno.jpg"
        alt={profile.photoAlt}
        className="size-24 rounded-lg border border-border object-cover sm:size-28"
      />
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="text-base text-muted-foreground">{profile.role}</p>
        <p className="text-sm text-muted-foreground">{profile.location}</p>
        <ContactLinks labels={contactLabels} />
      </div>
    </header>
  );
}

function ContactLinks({ labels }) {
  return (
    <div className="flex flex-wrap gap-4 pt-1 text-sm">
      {contacts.map(({ key, href, label }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent transition-colors hover:underline"
        >
          {labels[key] ?? label}
        </a>
      ))}
    </div>
  );
}