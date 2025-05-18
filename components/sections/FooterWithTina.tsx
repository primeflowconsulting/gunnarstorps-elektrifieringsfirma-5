import React from 'react';
import { client } from '@/tina/__generated__/client';
import FooterClient from './FooterClient';

export default async function FooterWithTina() {
  try {
    const result = await client.queries.global({
      relativePath: 'index.json',
    });

    return <FooterClient {...result} />;
  } catch (error) {
    console.error('Error fetching footer data:', error);
    // Fallback to the original Footer component if there's an error
    const Footer = (await import('./Footer')).default;
    return <Footer />;
  }
}
