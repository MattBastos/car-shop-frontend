import { X } from '@/components/Icons';

import { TableButton } from '../TableButton';
import * as S from './styles';

type DeleteConfirmationModalProps = {
  onDelete: () => void;
  closeModal: () => void;
  carModel: string;
  carYear: number;
  isModalOpen: boolean;
};

export const DeleteConfirmationModal = ({
  onDelete,
  closeModal,
  carModel,
  carYear,
  isModalOpen
}: DeleteConfirmationModalProps) => {
  return (
    <>
      {isModalOpen && (
        <S.OverlayBackdrop onClick={closeModal}></S.OverlayBackdrop>
      )}

      <S.Container className={isModalOpen ? '' : 'hidden'}>
        <S.TitleContainer>
          <S.Title>Confirme sua Ação</S.Title>

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

        <S.Text>
          Tem certeza que deseja deletar o veículo modelo {carModel} {carYear}?
        </S.Text>

        <S.ButtonsContainer>
          <TableButton onClick={() => onDelete()} title="Deletar" color="red" />

          <TableButton onClick={closeModal} title="Cancelar" color="gray" />
        </S.ButtonsContainer>
      </S.Container>
    </>
  );
};
