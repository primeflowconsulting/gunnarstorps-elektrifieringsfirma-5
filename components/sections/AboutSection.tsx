import React from 'react';
import Image from 'next/image';
import Section from '../ui/Section';
import Button from '../ui/Button';

type AboutSectionProps = {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  experience?: string;
  founded?: string;
  employees?: string;
  satisfaction?: string;
  cta?: {
    text: string;
    href: string;
  };
};

export default function AboutSection({ 
  className = '', 
  title = 'Om Gunnarstorps Elektrifieringsfirma',
  description = 'Vi utför professionella elinstallationer för både moderna och äldre fastigheter. Vår ägare Martin Andersson grundade företaget 2012 och har över 30 års gedigen erfarenhet inom elbranschen.',
  image = '/images/An electrician holding wires.jpg',
  experience = '30+ år',
  founded = '2012',
  employees = '4',
  satisfaction = '98%+',
  cta = { text: 'Kontakta oss', href: '/kontakt' }
}: AboutSectionProps) {
  return (
    <Section background="light" className={className}>
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-square overflow-hidden rounded-xl md:aspect-auto md:h-full">
          <Image
            src={image}
            alt="Elektriker från Gunnarstorps Elektrifieringsfirma"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            {description}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
            <div>
              <p className="text-3xl font-bold text-blue-700">{experience}</p>
              <p className="mt-2 text-gray-600">Erfarenhet</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-700">{founded}</p>
              <p className="mt-2 text-gray-600">Grundat</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-700">{employees}</p>
              <p className="mt-2 text-gray-600">Medarbetare</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-700">{satisfaction}</p>
              <p className="mt-2 text-gray-600">Nöjda kunder</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={cta.href}>{cta.text}</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
