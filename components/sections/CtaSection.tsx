import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

type CtaSectionProps = {
  title: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  background?: 'primary' | 'secondary' | 'dark';
  className?: string;
};

export default function CtaSection({
  title,
  description,
  primaryCta,
  secondaryCta,
  background = 'primary',
  className = '',
}: CtaSectionProps) {
  return (
    <Section background={background} className={className}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-white/80">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {primaryCta && (
            <Button
              href={primaryCta.href}
              variant={background === 'primary' ? 'secondary' : 'primary'}
              size="lg"
            >
              {primaryCta.text}
            </Button>
          )}
          {secondaryCta && (
            <Button
              href={secondaryCta.href}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              {secondaryCta.text}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
