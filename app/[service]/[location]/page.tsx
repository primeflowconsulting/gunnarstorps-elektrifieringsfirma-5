import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/sections/Hero';
import ServiceDetails from '@/components/sections/ServiceDetails';
import LocationInfo from '@/components/sections/LocationInfo';
import CtaSection from '@/components/sections/CtaSection';
import { getServiceById, getLocationById } from '@/lib/utils';
import { generateServiceLocationParams } from '@/lib/utils';
import { formatServiceLocationTitle, formatServiceLocationDescription } from '@/lib/utils';

type ServiceLocationPageProps = {
  params: {
    service: string;
    location: string;
  };
};

export function generateStaticParams() {
  return generateServiceLocationParams();
}

export function generateMetadata({ params }: ServiceLocationPageProps): Metadata {
  const service = getServiceById(params.service);
  const location = getLocationById(params.location);
  
  if (!service || !location) {
    return {
      title: 'Sida hittades inte',
      description: 'Den begärda sidan kunde inte hittas.',
    };
  }
  
  return {
    title: formatServiceLocationTitle(params.service, params.location),
    description: formatServiceLocationDescription(params.service, params.location),
    keywords: `${service.title}, ${location.name}, elektriker, elinstallation, ${service.benefits.join(', ')}`,
  };
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const service = getServiceById(params.service);
  const location = getLocationById(params.location);
  
  if (!service || !location) {
    notFound();
  }
  
  return (
    <>
      <Hero
        title={`${service.title} i ${location.name}`}
        subtitle={`Professionella ${service.title.toLowerCase()}-tjänster i ${location.name}. Vi erbjuder expertis, kvalitet och pålitlig service.`}
        image={service.heroImage}
        primaryCta={{ text: 'Kontakta oss', href: '/kontakt' }}
      />
      
      <ServiceDetails service={service} />
      
      <LocationInfo location={location} />
      
      <CtaSection
        title={`Behöver du hjälp med ${service.title.toLowerCase()} i ${location.name}?`}
        description="Kontakta oss idag för en kostnadsfri offert och låt oss hjälpa dig med dina elektriska behov."
        primaryCta={{ text: 'Kontakta oss', href: '/kontakt' }}
        background="primary"
      />
    </>
  );
}
