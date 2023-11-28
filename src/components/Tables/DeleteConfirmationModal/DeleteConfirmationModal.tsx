import { Modal } from '../Modal';
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
    <Modal
      title="Confirme sua Ação"
      description={`Tem certeza que deseja deletar o veículo modelo ${carModel} ${carYear}?`}
      isModalOpen={isModalOpen}
      closeModal={closeModal}
    >
      <S.ButtonsContainer>
        <TableButton onClick={() => onDelete()} title="Deletar" color="red" />

        <TableButton onClick={closeModal} title="Cancelar" color="gray" />
      </S.ButtonsContainer>
    </Modal>
  );
};
