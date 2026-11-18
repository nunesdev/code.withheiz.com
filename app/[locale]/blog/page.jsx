import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function BlogPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const nav = await getTranslations("nav");
  const placeholders = await getTranslations("placeholders");

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-foreground">
      <h1 className="text-2xl font-semibold">{nav("blog")}</h1>
      <p className="mt-4 text-sm text-muted">{placeholders("comingSoon")}</p>
    </main>
  );
}