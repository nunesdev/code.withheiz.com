import { setRequestLocale } from "next-intl/server";
import { ResumePageClient } from "@/components/resume/resume-page-client";

export default async function ResumePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-background text-foreground">
      <ResumePageClient />
    </main>
  );
}