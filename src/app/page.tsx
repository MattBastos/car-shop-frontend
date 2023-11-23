import { SelectSection } from '@/components/Section';
import { WelcomeMessage } from '@/components/WelcomeMessage';

export default function Home() {
  return (
    <main>
      <WelcomeMessage />
      <SelectSection />
    </main>
  );
}
