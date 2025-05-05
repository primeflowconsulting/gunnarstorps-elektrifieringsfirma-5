'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Logo from '../ui/Logo';
import { services } from '@/lib/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  href="/"
                  className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                    pathname === '/' ? 'text-blue-700' : 'text-gray-700'
                  }`}
                >
                  Hem
                </Link>
              </li>
              <li className="relative group">
                <button className="flex items-center text-sm font-medium text-gray-700 transition-colors hover:text-blue-700">
                  Tjänster
                  <Icon name="chevron-right" size="sm" className="ml-1 rotate-90" />
                </button>
                {/* Added padding-top to create a gap and transition-all for smooth appearance */}
                <div className="absolute left-0 top-full z-10 mt-0 pt-3 hidden w-64 opacity-0 transition-all duration-300 group-hover:block group-hover:opacity-100">
                  <div className="rounded-md bg-white p-2 shadow-lg">
                    <ul className="space-y-1">
                      {services.map((service) => (
                        <li key={service.id}>
                          <Link
                            href={`/${service.id}`}
                            className={`flex items-center rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 ${
                              pathname === `/${service.id}` ? 'bg-gray-100 text-blue-700' : 'text-gray-700'
                            }`}
                          >
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            <Icon name={service.icon as any} size="sm" className="mr-2 text-blue-700" />
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href="/om-oss"
                  className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                    pathname === '/om-oss' ? 'text-blue-700' : 'text-gray-700'
                  }`}
                >
                  Om oss
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button href="/kontakt" size="sm">
              Kontakta oss
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-white p-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`rounded-md px-4 py-2 text-lg font-medium ${
                pathname === '/' ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
              }`}
            >
              Hem
            </Link>
            <div className="border-b border-gray-200 py-2">
              <h3 className="mb-2 px-4 text-sm font-semibold uppercase text-gray-500">Tjänster</h3>
              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/${service.id}`}
                      className={`flex items-center rounded-md px-4 py-2 text-lg font-medium ${
                        pathname === `/${service.id}` ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                      }`}
                    >
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      <Icon name={service.icon as any} size="sm" className="mr-2 text-blue-700" />
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/om-oss"
              className={`rounded-md px-4 py-2 text-lg font-medium ${
                pathname === '/om-oss' ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
              }`}
            >
              Om oss
            </Link>
            <div className="mt-4">
              <Button href="/kontakt" className="w-full">
                Kontakta oss
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
