import { X } from '@/components/Icons';
import { ReactNode } from 'react';

import * as S from './styles';

type ModalProps = {
  children: ReactNode;
  title: string;
  description: string;
  isModalOpen: boolean;
  closeModal: () => void;
};

export const Modal = ({
  children,
  title,
  description,
  isModalOpen,
  closeModal
}: ModalProps) => {
  return (
    <>
      {isModalOpen && (
        <S.OverlayBackdrop onClick={closeModal}></S.OverlayBackdrop>
      )}

      <S.Container className={isModalOpen ? '' : 'hidden'}>
        <S.TitleContainer>
          <S.Title>{title}</S.Title>

          <S.CloseModalButton
            onClick={closeModal}
            type="button"
            role="button"
            title="Fechar"
            tabIndex={0}
            aria-label="Fechar"
          >
            <X size={20} color="gray" weight="bold" />
          </S.CloseModalButton>
        </S.TitleContainer>

        <S.SeparatorLine />

        <S.Text>{description}</S.Text>

        {children}
      </S.Container>
    </>
  );
};
