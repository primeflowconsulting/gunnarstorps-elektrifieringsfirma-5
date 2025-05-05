import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Kontakta oss | Gunnarstorps Elektrifieringsfirma',
  description: 'Kontakta Gunnarstorps Elektrifieringsfirma för professionella eltjänster i Sätila. Vi erbjuder kostnadsfria offerter och snabb service.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Kontakta oss"
        subtitle="Vi är redo att hjälpa dig med alla dina elektriska behov. Kontakta oss idag för en kostnadsfri offert."
        image="/images/An electrician holding wires.jpg"
        primaryCta={{ text: 'Ring oss', href: 'tel:0707406116' }}
      />
      
      <ContactSection />
    </>
  );
}
