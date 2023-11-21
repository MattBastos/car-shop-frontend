import { Logo } from '@/components/Logo';

import * as S from './styles';

const fullYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <S.Container>
      <S.SeparatorLine />

      <S.Content>
        <S.Section>
          <Logo />
        </S.Section>

        <S.Section>
          <S.Title>Mídias Sociais</S.Title>
        </S.Section>

        <S.Section>
          <S.Title>Mapa do Site</S.Title>
        </S.Section>
      </S.Content>

      <S.CopyrightContainer>
        <S.CopyrightText>
          © {fullYear} Matthews Bastos. Todos os direitos reservados.
        </S.CopyrightText>
      </S.CopyrightContainer>
    </S.Container>
  );
};
