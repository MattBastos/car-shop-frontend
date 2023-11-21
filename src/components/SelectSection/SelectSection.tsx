import { CarProfile, Motorcycle } from '@/components/Icons';
import { SectionCard } from '@/components/SectionCard';

import * as S from './styles';

export const SelectSection = () => {
  return (
    <S.Container>
      <SectionCard icon={<CarProfile />} title="Carros" href="cars" />

      <SectionCard icon={<Motorcycle />} title="Motos" href="motorcycles" />
    </S.Container>
  );
};
