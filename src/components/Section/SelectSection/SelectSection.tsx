import { CarProfile, Motorcycle } from '@/components/Icons';
import { SectionCard } from '@/components/Section';

import * as S from './styles';

export const SelectSection = () => {
  return (
    <S.Container>
      <SectionCard
        icon={<CarProfile size={60} color="#1B1A69" weight="fill" />}
        title="Carros"
        href="cars"
      />

      <SectionCard
        icon={<Motorcycle size={60} color="#1B1A69" weight="fill" />}
        title="Motos"
        href="motorcycles"
      />
    </S.Container>
  );
};
