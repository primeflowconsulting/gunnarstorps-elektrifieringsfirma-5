"use client";

import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import Hero from '@/components/sections/Hero';
import ContactSection from '@/components/sections/ContactSection';

export interface ClientPageProps {
  data: any;
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function ContactClientPage(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const blocks = data.page?.blocks || [];

  return (
    <>
      {blocks.map((block: any, i: number) => {
        if (!block) return null;
        
        switch (block.__typename) {
          case "PageBlocksHero":
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Hero
                  title={block.heroTitle || ""}
                  subtitle={block.subtitle || ""}
                  image={block.image || ""}
                  primaryCta={block.primaryCta ? {
                    text: block.primaryCta.text || "",
                    href: block.primaryCta.href || ""
                  } : undefined}
                  secondaryCta={block.secondaryCta ? {
                    text: block.secondaryCta.text || "",
                    href: block.secondaryCta.href || ""
                  } : undefined}
                />
              </div>
            );
          case "PageBlocksContact":
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <ContactSection
                  title={block.title || ""}
                  description={block.description || ""}
                  phone={block.phone || ""}
                  email={block.email || ""}
                  address={block.address || []}
                  postalCode={block.postalCode || ""}
                  city={block.city || ""}
                  hours={block.hours || []}
                  mapUrl={block.mapUrl || ""}
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
