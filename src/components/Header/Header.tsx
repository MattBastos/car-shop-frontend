import { Logo } from '@/components/Logo';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Container className="bg-slate-950">
      <Logo />
    </S.Container>
  );
};
