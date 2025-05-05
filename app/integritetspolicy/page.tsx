import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Integritetspolicy | Gunnarstorps Elektrifieringsfirma',
  description: 'Vår integritetspolicy beskriver hur vi samlar in, använder och skyddar dina personuppgifter.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section background="light">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Integritetspolicy
            </h1>
            
            <div className="prose prose-lg prose-blue">
              <p>
                Gunnarstorps Elektrifieringsfirma värnar om din personliga integritet. Denna integritetspolicy förklarar hur vi samlar in och använder personuppgifter.
              </p>
              
              <h2>Vilka uppgifter samlar vi in?</h2>
              <p>
                Vi samlar in uppgifter som du själv lämnar till oss, till exempel när du kontaktar oss via formulär, e-post eller telefon. Detta kan inkludera:
              </p>
              <ul>
                <li>Namn</li>
                <li>Kontaktuppgifter (e-post, telefonnummer, adress)</li>
                <li>Information om ditt projekt eller förfrågan</li>
              </ul>
              
              <h2>Hur använder vi dina uppgifter?</h2>
              <p>
                Vi använder dina uppgifter för att:
              </p>
              <ul>
                <li>Besvara dina förfrågningar</li>
                <li>Tillhandahålla och förbättra våra tjänster</li>
                <li>Skicka offerter och fakturor</li>
                <li>Följa lagkrav</li>
              </ul>
              
              <h2>Hur länge sparar vi dina uppgifter?</h2>
              <p>
                Vi sparar dina personuppgifter så länge det är nödvändigt för att uppfylla de ändamål som beskrivs i denna policy, eller så länge som krävs enligt lag.
              </p>
              
              <h2>Dina rättigheter</h2>
              <p>
                Du har rätt att:
              </p>
              <ul>
                <li>Begära tillgång till dina personuppgifter</li>
                <li>Begära rättelse av felaktiga uppgifter</li>
                <li>Begära radering av dina uppgifter</li>
                <li>Invända mot vår behandling</li>
                <li>Begära begränsning av behandlingen</li>
              </ul>
              
              <h2>Kontakta oss</h2>
              <p>
                Om du har frågor om vår integritetspolicy eller hur vi hanterar dina personuppgifter, vänligen kontakta oss på:
              </p>
              <p>
                E-post: gunnarstorp1@gmail.com<br />
                Telefon: 070 740 61 16
              </p>
              
              <p className="mt-8 text-sm text-gray-500">
                Denna integritetspolicy uppdaterades senast den 1 januari 2023.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
