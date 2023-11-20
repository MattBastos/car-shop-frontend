import { CarProfile, Motorcycle } from '@/components/Icons';
import { SectionCard } from '@/components/SectionCard';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center gap-5">
      <SectionCard icon={<CarProfile />} title="Carros" href="cars" />

      <SectionCard icon={<Motorcycle />} title="Motos" href="motorcycles" />
    </main>
  );
}
