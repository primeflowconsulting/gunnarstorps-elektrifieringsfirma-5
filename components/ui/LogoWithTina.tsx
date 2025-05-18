"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { tinaField } from "tinacms/dist/react";
import { GlobalHeader } from "@/tina/__generated__/types";

type LogoWithTinaProps = {
  header: GlobalHeader | undefined; // Allow header to be undefined
  className?: string;
};

export default function LogoWithTina({ header, className = '' }: LogoWithTinaProps) {
  const logoSrc = header?.logo || "/images/Gunnarstorp-logga.png";
  const logoWidth = header?.logoWidth || 320;
  const logoHeight = header?.logoHeight || 80;
  
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative">
        <div 
          className="relative"
          style={{ width: `${logoWidth}px`, height: `${logoHeight}px` }}
          data-tina-field={tinaField(header, "logo")}
        >
          <Image
            src={logoSrc}
            alt="Gunnarstorps Elektrifieringsfirma"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="flex mt-1 space-x-2">
          <div data-tina-field={tinaField(header, "logoWidth")}>
            <span className="sr-only">Logo Width</span>
          </div>
          <div data-tina-field={tinaField(header, "logoHeight")}>
            <span className="sr-only">Logo Height</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
