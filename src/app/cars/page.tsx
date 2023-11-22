import { CarTable } from '@/components/Tables';

export default function Cars() {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold text-gray-200">Carros</h1>
      <CarTable />
    </section>
  );
}
