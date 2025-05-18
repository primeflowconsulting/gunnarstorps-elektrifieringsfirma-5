import { Metadata } from 'next';
import AboutClientPage from './about-client-page';
import { client } from '@/tina/__generated__/client';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Om oss | Gunnarstorps Elektrifieringsfirma',
  description: 'Lär känna Gunnarstorps Elektrifieringsfirma - en pålitlig elektriker med över 30 års erfarenhet i Sätila. Vi erbjuder professionella eltjänster med fokus på kvalitet och kundnöjdhet.',
  keywords: 'elektriker, elinstallation, Sätila, Gunnarstorps Elektrifieringsfirma, Martin Andersson, elföretag',
};

export default async function AboutPage() {
  const result = await client.queries.page({
    relativePath: 'om-oss.mdx',
  });

  return <AboutClientPage {...result} />;
}
