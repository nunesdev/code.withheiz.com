import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactView } from "@/components/contact/contact-view";

export default async function ContactPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");

  const content = {
    pageTitle: t("pageTitle"),
    contactInfo: {
      title: t("contactInfo.title"),
      emailLabel: t("contactInfo.emailLabel"),
      locationLabel: t("contactInfo.locationLabel"),
      remoteLabel: t("contactInfo.remoteLabel"),
      timezoneLabel: t("contactInfo.timezoneLabel"),
      email: t("contactInfo.email"),
      location: t("contactInfo.location"),
      remote: t("contactInfo.remote"),
      timezone: t("contactInfo.timezone"),
    },
    socialProfiles: {
      title: t("socialProfiles.title"),
      items: t.raw("socialProfiles.items"),
    },
    cta: {
      title: t("cta.title"),
      text: t("cta.text"),
      button: t("cta.button"),
      email: t("cta.email"),
    },
  };

  return (
    <main className="bg-background text-foreground">
      <ContactView content={content} />
    </main>
  );
}