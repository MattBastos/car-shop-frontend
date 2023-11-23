import { Layout } from '@/components/Layout';
import { SelectSection } from '@/components/Section';
import { WelcomeMessage } from '@/components/WelcomeMessage';

export default function Home() {
  return (
    <Layout>
      <WelcomeMessage />
      <SelectSection />
    </Layout>
  );
}
