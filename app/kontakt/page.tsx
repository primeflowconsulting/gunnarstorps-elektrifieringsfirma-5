import { Metadata } from 'next';
import ContactClientPage from './contact-client-page';
import { client } from '@/tina/__generated__/client';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Kontakta oss | Gunnarstorps Elektrifieringsfirma',
  description: 'Kontakta Gunnarstorps Elektrifieringsfirma för professionella eltjänster i Sätila. Vi erbjuder kostnadsfria offerter och snabb service.',
};

export default async function ContactPage() {
  const result = await client.queries.page({
    relativePath: 'kontakt.mdx',
  });

  return <ContactClientPage {...result} />;
}
