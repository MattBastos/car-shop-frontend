import { Layout } from '@/components/Layout';
import { SectionTitle } from '@/components/Section';
import { Table } from '@/components/Tables/MotorTable/Table';

export default function Cars() {
  return (
    <Layout>
      <SectionTitle title="Motos" />
      <Table />
    </Layout>
  );
}
