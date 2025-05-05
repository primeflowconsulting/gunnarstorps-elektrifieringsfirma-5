import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/sections/Hero';
import ServiceDetails from '@/components/sections/ServiceDetails';
import RelatedServices from '@/components/sections/RelatedServices';
import CtaSection from '@/components/sections/CtaSection';
import { getServiceById } from '@/lib/utils';
import { generateServiceParams } from '@/lib/utils';

type ServicePageProps = {
  params: {
    service: string;
  };
};

export function generateStaticParams() {
  return generateServiceParams();
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceById(params.service);
  
  if (!service) {
    return {
      title: 'Tjänst hittades inte',
      description: 'Den begärda tjänsten kunde inte hittas.',
    };
  }
  
  return {
    title: `${service.title} | Gunnarstorps Elektrifieringsfirma`,
    description: service.longDescription,
    keywords: `${service.title}, elektriker, elinstallation, Sätila, ${service.benefits.join(', ')}`,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceById(params.service);
  
  if (!service) {
    notFound();
  }
  
  return (
    <>
      <Hero
        title={service.title}
        subtitle={service.description}
        image={service.heroImage}
        primaryCta={{ text: 'Kontakta oss', href: '/kontakt' }}
      />
      
      <ServiceDetails service={service} />
      
      <RelatedServices currentServiceId={service.id} />
      
      <CtaSection
        title="Behöver du hjälp med ditt projekt?"
        description="Kontakta oss idag för en kostnadsfri offert och låt oss hjälpa dig med dina elektriska behov."
        primaryCta={{ text: 'Kontakta oss', href: '/kontakt' }}
        background="primary"
      />
    </>
  );
}
