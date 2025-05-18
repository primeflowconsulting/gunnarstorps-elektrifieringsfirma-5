"use client";

import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import Hero from '@/components/sections/Hero';
import ServiceDetails from '@/components/sections/ServiceDetails';
import RelatedServices from '@/components/sections/RelatedServices';
import CtaSection from '@/components/sections/CtaSection';

export interface ClientPageProps {
  data: any;
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function ServiceClientPage(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const service = data.service;
  if (!service) return null;

  // Create a service object that matches the expected structure
  const serviceData = {
    id: props.variables.relativePath.replace('.mdx', ''),
    title: service.title || "",
    description: service.description || "",
    longDescription: service.longDescription || "",
    benefits: service.benefits || [],
    features: service.features || [],
    image: service.image || "",
    heroImage: service.heroImage || "",
    icon: service.icon || "",
  };

  return (
    <>
      <div data-tina-field={tinaField(service, "heroTitle")}>
        <Hero
          title={service.title?.split('|')[0]?.trim() || ""}
          subtitle={service.description || ""}
          image={service.heroImage || ""}
          primaryCta={{ text: 'Kontakta oss', href: '/kontakt' }}
        />
      </div>
      
      <div data-tina-field={tinaField(service)}>
        <ServiceDetails service={serviceData} />
      </div>
      
      <RelatedServices currentServiceId={serviceData.id} limit={service.relatedServicesLimit || 3} />
      
      <div data-tina-field={tinaField(service, "cta")}>
        <CtaSection
          title={service.cta?.title || "Behöver du hjälp med ditt projekt?"}
          description={service.cta?.description || "Kontakta oss idag för en kostnadsfri offert och låt oss hjälpa dig med dina elektriska behov."}
          primaryCta={service.cta?.primaryCta || { text: 'Kontakta oss', href: '/kontakt' }}
          background="primary"
        />
      </div>
    </>
  );
}
