import {
  CarProfile,
  GithubLogo,
  LinkedinLogo,
  Motorcycle
} from '@/components/Icons';
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

          <S.List>
            <S.Link
              href="https://www.linkedin.com/in/matthewsbastos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={22} weight="duotone" />

              <S.LinkTitle>Linkedin</S.LinkTitle>
            </S.Link>

            <S.Link
              href="https://github.com/MattBastos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo size={22} weight="duotone" />

              <S.LinkTitle>Github</S.LinkTitle>
            </S.Link>
          </S.List>
        </S.Section>

        <S.Section>
          <S.Title>Mapa do Site</S.Title>

          <S.List>
            <S.Link href="cars">
              <CarProfile size={22} weight="duotone" />

              <S.LinkTitle>Carros</S.LinkTitle>
            </S.Link>

            <S.Link href="motorcycles">
              <Motorcycle size={22} weight="duotone" />

              <S.LinkTitle>Motos</S.LinkTitle>
            </S.Link>
          </S.List>
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
