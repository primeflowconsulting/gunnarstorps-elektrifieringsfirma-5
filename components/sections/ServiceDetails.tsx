import React from 'react';
import Image from 'next/image';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { Service } from '@/lib/data';

type ServiceDetailsProps = {
  service: Service;
  className?: string;
};

export default function ServiceDetails({ service, className = '' }: ServiceDetailsProps) {
  return (
    <Section className={className}>
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Icon name={service.icon as any} size="lg" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {service.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{service.longDescription}</p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Fördelar</h2>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Button href="/kontakt" size="lg">
              Kontakta oss för offert
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Vad vi erbjuder</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
