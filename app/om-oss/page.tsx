import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { companyInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Om oss | Gunnarstorps Elektrifieringsfirma',
  description: 'Lär känna Gunnarstorps Elektrifieringsfirma - en pålitlig elektriker med över 30 års erfarenhet i Sätila. Vi erbjuder professionella eltjänster med fokus på kvalitet och kundnöjdhet.',
  keywords: 'elektriker, elinstallation, Sätila, Gunnarstorps Elektrifieringsfirma, Martin Andersson, elföretag',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Om Gunnarstorps Elektrifieringsfirma"
        subtitle="Lär känna oss och vår passion för kvalitativa elinstallationer och kundnöjdhet"
        image="/images/Electrician repairing wires.jpg"
        primaryCta={{ text: 'Kontakta oss', href: '/kontakt' }}
      />
      
      {/* Company Overview */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-square overflow-hidden rounded-xl md:aspect-auto md:h-full">
            <Image
              src="/images/A man looking at his tools for an electrician job.jpg"
              alt="Elektriker från Gunnarstorps Elektrifieringsfirma"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Vår historia och vision
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Gunnarstorps Elektrifieringsfirma specialiserar sig på elinstallationer för både moderna och äldre fastigheter. Företaget grundades 2012 av Martin Andersson, som har mer än tre decennier av erfarenhet inom elbranschen.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Vår vision är att vara det självklara valet för alla typer av elinstallationer i Sätila och närliggande områden, med fokus på kvalitet, säkerhet och kundnöjdhet.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
              <div>
                <p className="text-3xl font-bold text-blue-700">{companyInfo.experience}</p>
                <p className="mt-2 text-gray-600">Erfarenhet</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-700">{companyInfo.founded}</p>
                <p className="mt-2 text-gray-600">Grundat</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-700">{companyInfo.employees}</p>
                <p className="mt-2 text-gray-600">Medarbetare</p>
              </div>
              <div>
              <p className="text-3xl font-bold text-blue-700">98%+</p>
                <p className="mt-2 text-gray-600">Nöjda kunder</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Our Values */}
      <Section background="light">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Våra värderingar
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              På Gunnarstorps Elektrifieringsfirma bygger vi vår verksamhet på starka värderingar som genomsyrar allt vi gör.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Kvalitet</h3>
              <p className="mt-4 text-gray-600">
                Vi kompromissar aldrig med kvaliteten. Varje installation utförs med högsta precision och med material av bästa kvalitet för att säkerställa långsiktig funktionalitet och säkerhet.
              </p>
            </div>
            
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Kundservice</h3>
              <p className="mt-4 text-gray-600">
                Vi sätter alltid kunden i centrum. Genom tydlig kommunikation, punktlighet och lyhördhet strävar vi efter att överträffa våra kunders förväntningar i varje projekt.
              </p>
            </div>
            
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
              <p className="mt-4 text-gray-600">
                Vi håller oss ständigt uppdaterade med de senaste teknologierna och metoderna inom elbranschen för att kunna erbjuda moderna och energieffektiva lösningar.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Certifications */}
      <Section background="light">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Certifieringar & Garantier
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Vi är stolta över våra certifieringar och de garantier vi erbjuder våra kunder.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Våra certifieringar</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Auktoriserad elinstallatör</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Certifierad för solcellsinstallationer</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Certifierad för laddboxinstallationer</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Medlemmar i Elektriska Installatörsorganisationen (EIO)</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Våra garantier</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Garanti på alla installationer</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Nöjd-kund-garanti</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Kostnadsfri uppföljning efter installation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Snabb service vid eventuella problem</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Testimonials */}
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Vad våra kunder säger
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Vi är stolta över att ha hjälpt hundratals nöjda kunder genom åren.
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="rounded-lg bg-white p-8 shadow-sm max-w-xl w-full">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-lg">
                &quot;anlitat flera gånger alltid proffsigt&quot;
              </p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">Gunli A.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
