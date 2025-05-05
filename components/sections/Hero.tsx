import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
};

export default function Hero({
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
      </div>

      <Container className="relative z-10">
        <div className="flex min-h-[80vh] flex-col items-center justify-center py-20 text-center md:min-h-[70vh] md:items-start md:text-left lg:min-h-[80vh]">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-300">{subtitle}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {primaryCta && (
              <Button href={primaryCta.href} size="lg">
                {primaryCta.text}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
