"use client";

import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import Icon from '../ui/Icon';
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import { 
  GlobalQuery, 
  GlobalQueryVariables, 
  GlobalFooterSocialMedia, 
  GlobalFooterServices,
  GlobalFooterHours,
  GlobalFooterLegalLinks
} from "@/tina/__generated__/types";

export interface FooterClientProps {
  data: GlobalQuery;
  variables: GlobalQueryVariables;
  query: string;
}

export default function FooterClient(props: FooterClientProps) {
  const { data } = useTina<GlobalQuery>({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const footer = data.global?.footer;
  if (!footer) return null;

  const currentYear = new Date().getFullYear();
  const copyright = footer.copyright?.replace('{year}', currentYear.toString()) || '';

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div data-tina-field={tinaField(footer, "companyName")}>
              <h3 className="text-xl font-bold">{footer.companyName}</h3>
              <p className="mt-4 text-gray-400" data-tina-field={tinaField(footer, "description")}>
                {footer.description}
              </p>
              <div className="mt-6 flex space-x-4" data-tina-field={tinaField(footer, "socialMedia")}>
                {/* Social Media Icons */}
                {(footer.socialMedia?.filter(Boolean) as GlobalFooterSocialMedia[] | undefined)?.map((social, index: number) => {
                  let icon;
                  if (social.platform === 'facebook') {
                    icon = (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    );
                  } else if (social.platform === 'instagram') {
                    icon = (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    );
                  } else if (social.platform === 'twitter') {
                    icon = (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    );
                  } else if (social.platform === 'linkedin') {
                    icon = (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                    );
                  }

                  return (
                    <a
                      key={index}
                      href={social.url || ""}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-blue-700 hover:text-white"
                      aria-label={social.platform || ""}
                      data-tina-field={tinaField(footer.socialMedia, index)}
                    >
                      {icon}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold" data-tina-field={tinaField(footer, "servicesTitle")}>
                {footer.servicesTitle || "Tjänster"}
              </h3>
              <ul className="mt-4 space-y-2">
                {(footer.services?.filter(Boolean) as GlobalFooterServices[] | undefined)?.map((service, index: number) => (
                  <li key={service.id || index}>
                    <Link
                      href={`/${service.id}`}
                      className="text-gray-400 transition-colors hover:text-white"
                      data-tina-field={tinaField(footer.services, index)}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold" data-tina-field={tinaField(footer, "contactTitle")}>
                {footer.contactTitle || "Kontakt"}
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <Icon name="phone" size="sm" className="mr-3 mt-1 text-gray-400" />
                  <span className="text-gray-400">{footer.contact?.phone}</span>
                </li>
                <li className="flex items-start">
                  <Icon name="email" size="sm" className="mr-3 mt-1 text-gray-400" />
                  <span className="text-gray-400">{footer.contact?.email}</span>
                </li>
                <li className="flex items-start">
                  <Icon name="location" size="sm" className="mr-3 mt-1 text-gray-400" />
                  <div className="text-gray-400">
                    {(footer.contact?.address?.filter(Boolean) as string[] | undefined)?.map((line, i: number) => (
                      <div key={i}>{line}</div>
                    ))}
                    <div>
                      {footer.contact?.postalCode} {footer.contact?.city}
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-lg font-semibold" data-tina-field={tinaField(footer, "hoursTitle")}>
                {footer.hoursTitle || "Öppettider"}
              </h3>
              <ul className="mt-4 space-y-3">
                {(footer.hours?.filter(Boolean) as GlobalFooterHours[] | undefined)?.map((item, index: number) => (
                  <li key={index} className="flex items-start">
                    <Icon name="clock" size="sm" className="mr-3 mt-1 text-gray-400" />
                    <div className="text-gray-400">
                      <div className="font-medium">{item.days}</div>
                      <div>{item.hours}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <div className="text-sm text-gray-500" data-tina-field={tinaField(footer, "copyright")}>
                {copyright}
              </div>
              <span className="text-sm text-gray-500">|</span>
              <a 
                href="https://primeflowconsulting.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-gray-500 hover:text-white no-underline"
              >
                Skapad av PrimeFlow
              </a>
            </div>
            <div className="flex space-x-6" data-tina-field={tinaField(footer, "legalLinks")}>
              {(footer.legalLinks?.filter(Boolean) as GlobalFooterLegalLinks[] | undefined)?.map((link, index: number) => (
                <Link 
                  key={index} 
                  href={link.href || ""} 
                  className="text-sm text-gray-500 hover:text-white"
                  data-tina-field={tinaField(footer.legalLinks, index)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
