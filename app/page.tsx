import { EmailRail } from '@/app/components/email-rail';
import { InitialLoader } from '@/app/components/initial-loader';
import { SiteFooter } from '@/app/components/site-footer';
import { SiteHeader } from '@/app/components/site-header';
import { SocialRail } from '@/app/components/social-rail';
import { AboutSection } from '@/app/components/sections/about-section';
import { ContactSection } from '@/app/components/sections/contact-section';
import { ExperienceSection } from '@/app/components/sections/experience-section';
import { HeroSection } from '@/app/components/sections/hero-section';
import { WorkSection } from '@/app/components/sections/work-section';

export default function Home() {
  return (
    <>
      <InitialLoader />
      <SiteHeader />
      <SocialRail />
      <EmailRail />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
