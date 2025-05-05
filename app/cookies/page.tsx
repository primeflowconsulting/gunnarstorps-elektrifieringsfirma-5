import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Cookies | Gunnarstorps Elektrifieringsfirma',
  description: 'Information om hur vi använder cookies på vår webbplats.',
};

export default function CookiesPage() {
  return (
    <>
      <Section background="light">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cookies
            </h1>
            
            <div className="prose prose-lg prose-blue">
              <p>
                Gunnarstorps Elektrifieringsfirma använder cookies för att förbättra din upplevelse på vår webbplats. Här förklarar vi vad cookies är och hur vi använder dem.
              </p>
              
              <h2>Vad är cookies?</h2>
              <p>
                Cookies är små textfiler som lagras på din dator eller mobila enhet när du besöker en webbplats. De hjälper webbplatsen att komma ihåg dina inställningar och preferenser, vilket gör ditt besök mer effektivt och anpassat.
              </p>
              
              <h2>Vilka typer av cookies använder vi?</h2>
              <p>
                Vi använder följande typer av cookies:
              </p>
              <ul>
                <li><strong>Nödvändiga cookies:</strong> Dessa är viktiga för att webbplatsen ska fungera korrekt.</li>
                <li><strong>Funktionella cookies:</strong> Dessa hjälper oss att komma ihåg dina preferenser och val.</li>
                <li><strong>Analytiska cookies:</strong> Dessa hjälper oss att förstå hur besökare använder vår webbplats, vilket gör att vi kan förbättra den.</li>
              </ul>
              
              <h2>Hur länge sparas cookies?</h2>
              <p>
                Cookies kan vara tillfälliga (sessionscookies) eller permanenta:
              </p>
              <ul>
                <li><strong>Sessionscookies:</strong> Dessa raderas när du stänger din webbläsare.</li>
                <li><strong>Permanenta cookies:</strong> Dessa finns kvar på din enhet under en bestämd tidsperiod eller tills du tar bort dem manuellt.</li>
              </ul>
              
              <h2>Hur kan du hantera cookies?</h2>
              <p>
                Du kan kontrollera och hantera cookies på flera sätt:
              </p>
              <ul>
                <li>De flesta webbläsare låter dig se vilka cookies du har och radera dem individuellt eller blockera cookies från specifika eller alla webbplatser.</li>
                <li>Du kan också ställa in din webbläsare att blockera alla cookies, men detta kan påverka funktionaliteten på många webbplatser.</li>
              </ul>
              
              <p>
                För mer information om hur du hanterar cookies, besök din webbläsares hjälpsidor:
              </p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              </ul>
              
              <h2>Ändringar i vår cookie-policy</h2>
              <p>
                Vi kan uppdatera vår cookie-policy från tid till annan. Eventuella ändringar kommer att publiceras på denna sida.
              </p>
              
              <h2>Kontakta oss</h2>
              <p>
                Om du har frågor om vår användning av cookies, vänligen kontakta oss på:
              </p>
              <p>
                E-post: gunnarstorp1@gmail.com<br />
                Telefon: 070 740 61 16
              </p>
              
              <p className="mt-8 text-sm text-gray-500">
                Denna cookie-policy uppdaterades senast den 1 januari 2023.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
