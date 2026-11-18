"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleSwitcher } from "@/components/locale-switcher";

const navItems = [
  { key: "home", href: "/" },
  { key: "projects", href: "/#projects" },
  { key: "resume", href: "/resume" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
];

export function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <nav
          className="flex min-w-0 flex-1 flex-wrap items-center gap-5 text-sm text-muted-foreground"
          aria-label="Main"
        >
          {navItems.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="transition-colors hover:text-foreground"
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}