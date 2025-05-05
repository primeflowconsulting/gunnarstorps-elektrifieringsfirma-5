import React from 'react';
import Section from '../ui/Section';
import Icon from '../ui/Icon';
import { Location } from '@/lib/data';

type LocationInfoProps = {
  location: Location;
  className?: string;
};

export default function LocationInfo({ location, className = '' }: LocationInfoProps) {
  return (
    <Section background="light" className={className}>
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
          <Icon name="location" size="lg" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Våra tjänster i {location.name}
        </h2>
        <p className="mt-4 text-lg text-gray-600">{location.description}</p>

        <div className="mt-8 grid gap-8 text-left sm:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Lokalkännedom</h3>
            <p className="mt-2 text-gray-600">
              Med vår lokala kännedom om {location.name} kan vi erbjuda skräddarsydda lösningar som passar just dina behov och förutsättningar.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Snabb service</h3>
            <p className="mt-2 text-gray-600">
              Vi finns nära dig i {location.name}, vilket betyder att vi kan erbjuda snabb service och support när du behöver det.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
