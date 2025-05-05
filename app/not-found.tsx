import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">Sidan kunde inte hittas</h2>
      <p className="mt-6 text-lg text-gray-600">
        Tyvärr kunde vi inte hitta sidan du letar efter. Den kan ha flyttats, tagits bort eller så har du skrivit in fel adress.
      </p>
      <div className="mt-10">
        <Button href="/" size="lg">
          Tillbaka till startsidan
        </Button>
      </div>
    </Container>
  );
}
