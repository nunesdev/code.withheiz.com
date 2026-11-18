import { getTranslations } from "next-intl/server";

const social = [
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/brunodev/",
  },
  {
    key: "github",
    href: "https://github.com/nunesdev",
  },
  {
    key: "email",
    href: "mailto:hello@withheiz.com",
  },
];

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
        <p className="text-xs">
          © {new Date().getFullYear()} Bruno Nunes
        </p>
        <div className="flex flex-wrap gap-4">
          {social.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              target={key === "email" ? undefined : "_blank"}
              rel={key === "email" ? undefined : "noopener noreferrer"}
              className="transition-colors hover:text-accent"
            >
              {t(key)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}