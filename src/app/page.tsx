import { SelectSection } from '@/components/SelectSection';
import { WelcomeMessage } from '@/components/WelcomeMessage';

export default function Home() {
  return (
    <main>
      <WelcomeMessage />
      <SelectSection />
    </main>
  );
}
