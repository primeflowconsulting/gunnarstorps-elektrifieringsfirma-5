"use client";

import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import CtaSection from '@/components/sections/CtaSection';
// Import services as a fallback
import { services as defaultServices } from '@/lib/data';
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import { PageQuery, PageBlocksServicesServiceItems } from "@/tina/__generated__/types";

export interface ClientPageProps {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function HomeClientPage(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const blocks = data.page?.blocks || [];

  return (
    <>
      {blocks.map((block, i) => {
        if (!block) return null;
        
        switch (block.__typename) {
          case "PageBlocksHero":
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Hero
                  title={block.heroTitle || ""}
                  subtitle={block.subtitle || ""}
                  image={block.image || ""}
                  primaryCta={{
                    text: block.primaryCta?.text || "",
                    href: block.primaryCta?.href || ""
                  }}
                  secondaryCta={{
                    text: block.secondaryCta?.text || "",
                    href: block.secondaryCta?.href || ""
                  }}
                />
              </div>
            );
          case "PageBlocksServices":
            // Convert TinaCMS service items to the format expected by ServicesSection
            const serviceItems = block.serviceItems || [];
            // Filter out null or undefined items first
            const validServiceItems = serviceItems.filter(Boolean) as PageBlocksServicesServiceItems[]; 
            
            const mappedServices = validServiceItems.map((item: PageBlocksServicesServiceItems, index: number) => ({
              // item here is PageBlocksServicesServiceItems (non-nullable)
              id: item.id || "",
              title: item.title || "",
              description: item.description || "",
              image: item.image || "",
              icon: item.icon || "",
              // Add other required fields with default values
              longDescription: "",
              benefits: [],
              features: [],
              heroImage: item.image || "",
              // Add data-tina-field attributes directly to each service card
              _tina_metadata: {
                parent: block,
                index: index
              }
            }));
            
            // Use mapped services if available, otherwise fall back to default services
            const servicesToUse = mappedServices.length > 0 ? mappedServices : defaultServices;
            
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <ServicesSection
                  title={block.sectionTitle || ""}
                  subtitle={block.subtitle || ""}
                  services={servicesToUse}
                  variant={(block.variant as "featured" | "grid") || "featured"}
                  id={block.id || undefined}
                  background={block.background || "none"}
                  showMoreLink={block.showMoreLink || false}
                />
              </div>
            );
          case "PageBlocksAbout":
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <AboutSection 
                  title={block.title || ""}
                  description={block.description || ""}
                  image={block.image || ""}
                  experience={block.experience || ""}
                  founded={block.founded || ""}
                  employees={block.employees || ""}
                  satisfaction={block.satisfaction || ""}
                  cta={block.cta ? {
                    text: block.cta.text || "",
                    href: block.cta.href || ""
                  } : undefined}
                />
              </div>
            );
          case "PageBlocksCta":
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <CtaSection
                  title={block.ctaTitle || ""}
                  description={block.description || ""}
                  primaryCta={{
                    text: block.primaryCta?.text || "",
                    href: block.primaryCta?.href || ""
                  }}
                  secondaryCta={{
                    text: block.secondaryCta?.text || "",
                    href: block.secondaryCta?.href || ""
                  }}
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
