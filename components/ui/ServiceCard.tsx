import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/lib/data';
import Icon from './Icon';

type ServiceCardProps = {
  service: Service;
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
};

export default function ServiceCard({
  service,
  variant = 'default',
  className = '',
}: ServiceCardProps) {
  if (variant === 'compact') {
    return (
      <Link
        href={`/${service.id}`}
        className={`group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md ${className}`}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Icon name={service.icon as any} size="md" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700">
              {service.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600">{service.description}</p>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <div className={`group overflow-hidden rounded-xl bg-white shadow-lg ${className}`}>
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Icon name={service.icon as any} size="md" />
            </div>
            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">{service.description}</p>
          <div className="mt-6">
            <Link
              href={`/${service.id}`}
              className="inline-flex items-center font-medium text-blue-700 hover:text-blue-800"
            >
              Läs mer
              <Icon name="chevron-right" size="sm" className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <Link
      href={`/${service.id}`}
      className={`group block overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg ${className}`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <Icon name={service.icon as any} size="md" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700">
          {service.title}
        </h3>
        <p className="mt-2 text-gray-600">{service.description}</p>
        <div className="mt-4 flex items-center text-blue-700">
          <span className="font-medium">Läs mer</span>
          <Icon name="chevron-right" size="sm" className="ml-1" />
        </div>
      </div>
    </Link>
  );
}
