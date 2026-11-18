"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels = { en: "EN", pt: "PT" };

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale) {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div
      className="inline-flex h-9 items-center rounded-md border border-border p-0.5 text-xs font-medium"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchLocale(loc)}
            className={`rounded px-2.5 py-1 transition-colors ${
              active
                ? "bg-foreground text-background"
                : "text-muted hover:text-foreground"
            }`}
            aria-pressed={active}
          >
            {labels[loc]}
          </button>
        );
      })}
    </div>
  );
}