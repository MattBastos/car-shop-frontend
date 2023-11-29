import { ReactNode } from 'react';

import * as S from './styles';

type ModalButtonsContainerProps = {
  children: ReactNode;
};

export const ModalButtonsContainer = ({
  children
}: ModalButtonsContainerProps) => {
  return <S.Container>{children}</S.Container>;
};
