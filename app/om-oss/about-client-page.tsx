"use client";

import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import {
  PageQuery,
  PageQueryVariables,
  PageBlocks,
  PageBlocksCompanyOverviewStats,
  PageBlocksValuesValues,
  PageBlocksTestimonialsTestimonials
} from "@/tina/__generated__/types";

export interface ClientPageProps {
  data: PageQuery;
  variables: PageQueryVariables;
  query: string;
}

export default function AboutClientPage(props: ClientPageProps) {
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
                  primaryCta={{
                    text: block.primaryCta?.text || "",
                    href: block.primaryCta?.href || ""
                  }}
                  secondaryCta={block.secondaryCta ? {
                    text: block.secondaryCta.text || "",
                    href: block.secondaryCta.href || ""
                  } : undefined}
                />
              </div>
            );
            
          case "PageBlocksCompanyOverview":
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Section>
                  <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    <div className="relative aspect-square overflow-hidden rounded-xl md:aspect-auto md:h-full">
                      <Image
                        src={block.image || ""}
                        alt="Elektriker från Gunnarstorps Elektrifieringsfirma"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {block.title || ""}
                      </h2>
                      <div className="mt-6 text-lg text-gray-600 whitespace-pre-wrap">
                        {block.description || ""}
                      </div>
                      <div className="mt-8 grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
                        {(block.stats?.filter(Boolean) as PageBlocksCompanyOverviewStats[] | undefined)?.map((stat, index: number) => (
                          <div key={index}>
                            <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
                            <p className="mt-2 text-gray-600">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Section>
              </div>
            );
            
          case "PageBlocksValues":
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Section background="light">
                  <Container>
                    <div className="text-center">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {block.title || ""}
                      </h2>
                      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        {block.description || ""}
                      </p>
                    </div>
                    
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {(block.values?.filter(Boolean) as PageBlocksValuesValues[] | undefined)?.map((value, index: number) => (
                        <div key={index} className="rounded-lg bg-white p-8 shadow-sm">
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                            {getIconForValue(value.icon || "")}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                          <p className="mt-4 text-gray-600">
                            {value.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Container>
                </Section>
              </div>
            );
            
          case "PageBlocksCertifications":
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Section background="light">
                  <Container>
                    <div className="text-center">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {block.title || ""}
                      </h2>
                      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        {block.description || ""}
                      </p>
                    </div>
                    
                    <div className="mt-12 grid gap-8 sm:grid-cols-2">
                      <div className="rounded-lg bg-white p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900">Våra certifieringar</h3>
                        <ul className="mt-4 space-y-3">
                          {(block.certifications?.filter(Boolean) as string[] | undefined)?.map((cert, index: number) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              <span className="text-gray-600">{cert}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="rounded-lg bg-white p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900">Våra garantier</h3>
                        <ul className="mt-4 space-y-3">
                          {(block.guarantees?.filter(Boolean) as string[] | undefined)?.map((guarantee, index: number) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              <span className="text-gray-600">{guarantee}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Container>
                </Section>
              </div>
            );
            
          case "PageBlocksTestimonials":
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Section>
                  <Container>
                    <div className="text-center">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {block.title || ""}
                      </h2>
                      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        {block.description || ""}
                      </p>
                    </div>
                    
                    <div className="mt-12 flex justify-center">
                      {(block.testimonials?.filter(Boolean) as PageBlocksTestimonialsTestimonials[] | undefined)?.map((testimonial, index: number) => (
                        <div key={index} className="rounded-lg bg-white p-8 shadow-sm max-w-xl w-full">
                          <div className="flex items-center">
                            <div className="flex text-yellow-400">
                              {[...Array(testimonial.rating || 5)].map((_, i) => (
                                <svg key={i} className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <p className="mt-4 text-gray-600 text-lg">
                            &quot;{testimonial.quote}&quot;
                          </p>
                          <div className="mt-6">
                            <p className="font-semibold text-gray-900">{testimonial.author}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Container>
                </Section>
              </div>
            );
            
          default:
            return null;
        }
      })}
    </>
  );
}

function getIconForValue(iconName: string) {
  switch (iconName) {
    case 'shield':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'lightning':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
}
