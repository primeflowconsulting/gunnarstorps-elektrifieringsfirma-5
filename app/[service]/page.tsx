import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/tina/__generated__/client';
import ServiceClientPage from './service-client-page';
import { generateServiceParams } from '@/lib/utils';

type ServicePageProps = {
  params: {
    service: string;
  };
};

export function generateStaticParams() {
  return generateServiceParams();
}

export const revalidate = 300;

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  try {
    const result = await client.queries.service({
      relativePath: `${params.service}.mdx`,
    });
    
    const service = result.data.service;
    
    if (!service) {
      return {
        title: 'Tjänst hittades inte',
        description: 'Den begärda tjänsten kunde inte hittas.',
      };
    }
    
    return {
      title: service.title || `${params.service} | Gunnarstorps Elektrifieringsfirma`,
      description: service.longDescription || '',
      keywords: `${service.title?.split('|')[0]?.trim() || ''}, elektriker, elinstallation, Sätila, ${(service.benefits || []).join(', ')}`,
    };
  } catch (_error) {
    return {
      title: 'Tjänst hittades inte',
      description: 'Den begärda tjänsten kunde inte hittas.',
    };
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  try {
    const result = await client.queries.service({
      relativePath: `${params.service}.mdx`,
    });
    
    return <ServiceClientPage {...result} />;
  } catch (_error) {
    notFound();
  }
}
