import { ContactInfoBlock } from "@/components/contact/contact-info-block";
import { ContactSocialBlock } from "@/components/contact/contact-social-block";
import { ContactCtaBlock } from "@/components/contact/contact-cta-block";

export function ContactView({ content }) {
  const { pageTitle, contactInfo, socialProfiles, cta } = content;

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
      <header className="mb-12 border-b border-border pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          {pageTitle}
        </h1>
      </header>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <ContactInfoBlock {...contactInfo} />
        <div className="space-y-10">
          <ContactSocialBlock
            title={socialProfiles.title}
            items={socialProfiles.items}
          />
          <ContactCtaBlock
            title={cta.title}
            text={cta.text}
            buttonLabel={cta.button}
            email={cta.email}
          />
        </div>
      </div>
    </div>
  );
}