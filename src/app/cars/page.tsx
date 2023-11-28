import { Layout } from '@/components/Layout';
import { SectionTitle } from '@/components/Section';
import { Table } from '@/components/Tables';

export default function Cars() {
  return (
    <Layout>
      <SectionTitle title="Carros" />
      <Table />
    </Layout>
  );
}
