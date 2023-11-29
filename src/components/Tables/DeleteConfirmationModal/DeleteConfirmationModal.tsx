import { Modal } from '../Modal';
import { ModalButtonsContainer } from '../ModalButtonsContainer';
import { TableButton } from '../TableButton';

type DeleteConfirmationModalProps = {
  onDelete: () => void;
  closeModal: () => void;
  vehicleModel: string;
  vehicleYear: number;
  isModalOpen: boolean;
};

export const DeleteConfirmationModal = ({
  onDelete,
  closeModal,
  vehicleModel,
  vehicleYear,
  isModalOpen
}: DeleteConfirmationModalProps) => {
  return (
    <Modal
      title="Confirme sua Ação"
      description={`Tem certeza que deseja deletar o veículo modelo ${vehicleModel} ${vehicleYear}?`}
      isModalOpen={isModalOpen}
      closeModal={closeModal}
    >
      <ModalButtonsContainer>
        <TableButton onClick={() => onDelete()} title="Deletar" color="red" />

        <TableButton onClick={closeModal} title="Cancelar" color="gray" />
      </ModalButtonsContainer>
    </Modal>
  );
};
