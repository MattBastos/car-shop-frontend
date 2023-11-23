import { Layout } from '@/components/Layout';
import { SectionTitle } from '@/components/Section';
import { CarTable } from '@/components/Tables';

export default function Cars() {
  return (
    <Layout>
      <SectionTitle title="Carros" />
      <CarTable />
    </Layout>
  );
}
