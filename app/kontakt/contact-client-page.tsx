"use client";

import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import Hero from '@/components/sections/Hero';
import ContactSection from '@/components/sections/ContactSection';
import { PageQuery, PageQueryVariables, PageBlocks } from "@/tina/__generated__/types";

export interface ClientPageProps {
  data: PageQuery;
  variables: PageQueryVariables;
  query: string;
}

export default function ContactClientPage(props: ClientPageProps) {
  const { data } = useTina<PageQuery>({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const blocks = data.page?.blocks || [];

  return (
    <>
      {blocks.map((block: PageBlocks | null, i: number) => {
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
                  address={(block.address?.filter(a => a !== null) as string[]) || []}
                  postalCode={block.postalCode || ""}
                  city={block.city || ""}
                  hours={
                    block.hours
                      ?.filter((h): h is NonNullable<typeof h> => h !== null)
                      .map(h => ({
                        days: h.days || "",
                        hours: h.hours || "",
                      })) || []
                  }
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
