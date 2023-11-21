'use client';

import { ReactElement } from 'react';

import * as S from './styles';

type SectionCardProps = {
  icon: ReactElement;
  title: string;
  href: string;
};

export const SectionCard = ({ icon, title, href }: SectionCardProps) => {
  return (
    <S.Container href={href}>
      <S.IconContainer>{icon}</S.IconContainer>

      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
