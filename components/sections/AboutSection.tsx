import React from 'react';
import Image from 'next/image';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { companyInfo } from '@/lib/data';

type AboutSectionProps = {
  className?: string;
  image?: string;
};

export default function AboutSection({ className = '', image = '/images/An electrician holding wires.jpg' }: AboutSectionProps) {
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
            Om Gunnarstorps Elektrifieringsfirma
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            {companyInfo.description}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
            <div>
              <p className="text-3xl font-bold text-blue-700">{companyInfo.experience}</p>
              <p className="mt-2 text-gray-600">Erfarenhet</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-700">{companyInfo.founded}</p>
              <p className="mt-2 text-gray-600">Grundat</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-700">{companyInfo.employees}</p>
              <p className="mt-2 text-gray-600">Medarbetare</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-700">98%+</p>
              <p className="mt-2 text-gray-600">Nöjda kunder</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href="/kontakt">Kontakta oss</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
