import React from 'react';
import { client } from '@/tina/__generated__/client';
import HeaderClient from './HeaderClient';

export default async function HeaderWithTina() {
  try {
    const result = await client.queries.global({
      relativePath: 'index.json',
    });

    return <HeaderClient {...result} />;
  } catch (error) {
    console.error('Error fetching header data:', error);
    // Fallback to the original Header component if there's an error
    const Header = (await import('./Header')).default;
    return <Header />;
  }
}
