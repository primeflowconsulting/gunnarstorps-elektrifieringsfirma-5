import { Metadata } from 'next';
import HomeClientPage from './home-client-page';
import { client } from '@/tina/__generated__/client';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Gunnarstorps Elektrifieringsfirma | Professionella eltjänster i Sätila',
  description: 'Vi erbjuder professionella eltjänster inklusive solenergi, laddboxar, villainstallation, elrenovering och smart teknik. Över 30 års erfarenhet.',
};

export default async function Home() {
  const result = await client.queries.page({
    relativePath: 'home.mdx',
  });

  return <HomeClientPage {...result} />;
}
