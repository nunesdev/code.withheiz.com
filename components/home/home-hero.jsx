import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { siteLinks } from "@/config/site-links";

const actionLinkClass =
  "inline-flex items-center justify-center rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-surface";

const externalLinkClass = `${actionLinkClass} focus:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background`;

export async function HomeHero() {
  const t = await getTranslations("home");
  const tNav = await getTranslations("nav");
  const tFooter = await getTranslations("footer");

  return (
    <section className="flex w-full flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-start">
      <img
        src="/bruno.jpg"
        alt={t("name")}
        className="h-32 w-32 shrink-0 rounded-lg border border-border object-cover"
      />
      <div className="min-w-0 flex-1 space-y-4 text-left">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("name")}
          </h1>
          <p className="text-base font-medium text-foreground">{t("roleHeadline")}</p>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {t("bio")}
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {t("availability")}
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-2"
          aria-label={t("actionsAriaLabel")}
        >
          <a
            href={siteLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className={externalLinkClass}
          >
            {tFooter("github")}
          </a>
          <a
            href={siteLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={externalLinkClass}
          >
            {tFooter("linkedin")}
          </a>
          <Link href="/resume" className={actionLinkClass}>
            {tNav("resume")}
          </Link>
          <a href={siteLinks.email} className={actionLinkClass}>
            {siteLinks.emailDisplay}
          </a>
        </nav>

        <p className="text-xs text-muted-foreground">{t("previousExperience")}</p>
      </div>
    </section>
  );
}