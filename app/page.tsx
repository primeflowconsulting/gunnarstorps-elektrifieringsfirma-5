import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import CtaSection from '@/components/sections/CtaSection';
import { services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Gunnarstorps Elektrifieringsfirma | Professionella eltjänster i Sätila',
  description: 'Vi erbjuder professionella eltjänster inklusive solenergi, laddboxar, villainstallation, elrenovering och smart teknik. Över 30 års erfarenhet.',
};

export default function Home() {
  return (
    <>
      <Hero
        title="Professionella eltjänster med över 30 års erfarenhet"
        subtitle="Vi erbjuder kompletta elektriska lösningar för hem och företag i Sätila och närliggande områden."
        image="/images/An electrician working.jpg"
        primaryCta={{ text: 'Kontakta oss', href: '/kontakt' }}
        secondaryCta={{ text: 'Våra tjänster', href: '#tjanster' }}
      />

      <ServicesSection
        title="Våra tjänster"
        subtitle="Vi erbjuder ett brett utbud av elektriska tjänster för att möta alla dina behov"
        services={services}
        variant="featured"
        id="tjanster"
      />

      <AboutSection />

      <ServicesSection
        title="Specialiserade eltjänster"
        subtitle="Upptäck våra specialiserade tjänster för hem och företag"
        services={services.slice(5)}
        background="light"
      />

      <CtaSection
        title="Redo att påbörja ditt projekt?"
        description="Kontakta oss idag för en kostnadsfri offert och låt oss hjälpa dig med dina elektriska behov."
        primaryCta={{ text: 'Kontakta oss', href: '/kontakt' }}
        secondaryCta={{ text: 'Läs mer om våra tjänster', href: '#tjanster' }}
      />
    </>
  );
}
