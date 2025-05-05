import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
  className?: string;
};

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative h-20 w-80">
        <Image
          src="/images/Gunnarstorp-logga.png"
          alt="Gunnarstorps Elektrifieringsfirma"
          fill
          priority
          className="object-contain"
        />
      </div>
    </Link>
  );
}
