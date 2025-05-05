import React from 'react';
import Container from './Container';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'primary' | 'secondary';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
  containerSize = 'lg',
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-blue-700 text-white',
    secondary: 'bg-amber-500 text-white',
  };
  
  return (
    <section
      id={id}
      className={`py-12 md:py-16 lg:py-20 ${backgroundStyles[background]} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
