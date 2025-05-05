import React from 'react';
import Section from '../ui/Section';
import ServiceCard from '../ui/ServiceCard';
import { services } from '@/lib/data';

type RelatedServicesProps = {
  currentServiceId: string;
  limit?: number;
  className?: string;
};

export default function RelatedServices({
  currentServiceId,
  limit = 3,
  className = '',
}: RelatedServicesProps) {
  // Filter out the current service and get a limited number of related services
  const relatedServices = services
    .filter((service) => service.id !== currentServiceId)
    .slice(0, limit);

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <Section background="light" className={className}>
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
        Andra tjänster vi erbjuder
      </h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {relatedServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
}
