import React from 'react';
import Section from '../ui/Section';
import ServiceCard from '../ui/ServiceCard';
import Button from '../ui/Button';
import { Service } from '@/lib/data';
import { tinaField } from "tinacms/dist/react";

type ServicesSectionProps = {
  title: string;
  subtitle?: string;
  services: Service[];
  variant?: 'grid' | 'featured';
  showMoreLink?: boolean;
  className?: string;
  id?: string;
  background?: string;
};

export default function ServicesSection({
  title,
  subtitle,
  services,
  variant = 'grid',
  showMoreLink = false,
  className = '',
  id,
  background = 'white',
}: ServicesSectionProps) {
  if (variant === 'featured') {
    // Featured layout with one large card and others in a grid
    const [featured, ...rest] = services;

    return (
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      <Section id={id} background={background as any} className={className}>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
          {subtitle && <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">{subtitle}</p>}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ServiceCard 
              service={featured} 
              variant="featured" 
              className="h-full" 
              tinaField={featured._tina_metadata ? tinaField(featured._tina_metadata.parent, 'serviceItems', featured._tina_metadata.index) : null}
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2">
            {rest.slice(0, 4).map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                variant="compact" 
                tinaField={service._tina_metadata ? tinaField(service._tina_metadata.parent, 'serviceItems', service._tina_metadata.index) : null}
              />
            ))}
          </div>
        </div>

        {showMoreLink && (
          <div className="mt-12 text-center">
            <Button href="/tjanster" variant="outline">
              Se alla våra tjänster
            </Button>
          </div>
        )}
      </Section>
    );
  }

  // Default grid layout
  return (
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    <Section id={id} background={background as any} className={className}>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">{subtitle}</p>}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            tinaField={service._tina_metadata ? tinaField(service._tina_metadata.parent, 'serviceItems', service._tina_metadata.index) : null}
          />
        ))}
      </div>

      {showMoreLink && (
        <div className="mt-12 text-center">
          <Button href="/tjanster" variant="outline">
            Se alla våra tjänster
          </Button>
        </div>
      )}
    </Section>
  );
}
