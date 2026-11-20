import { getTranslations } from "next-intl/server";

export async function HomeCoreStack() {
  const t = await getTranslations("home.coreStack");
  const columns = ["backend", "data", "infra"];

  return (
    <section className="w-full" aria-labelledby="core-stack-heading">
      <h2 id="core-stack-heading" className="sr-only">
        {t("srHeading")}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {columns.map((key) => (
          <div
            key={key}
            className="rounded-md border border-border bg-background p-5"
          >
            <h3 className="text-sm font-semibold tracking-tight text-foreground">
              {t(`${key}.title`)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t(`${key}.body`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}