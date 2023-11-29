import { Car } from '@/types';

import { Modal } from '../../Modal';
import { ModalButtonsContainer } from '../../ModalButtonsContainer';
import { TableButton } from '../../TableButton';
import { Form } from '../Form';

type EditCarModalProps = {
  carData: Car;
  onUpdate: () => void;
  closeForm: () => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  isFormOpen: boolean;
};

export const EditCarModal = ({
  carData,
  onUpdate,
  closeForm,
  handleInputChange,
  isFormOpen
}: EditCarModalProps) => {
  return (
    <Modal
      title="Editar Carro"
      description={`Preencha os dados abaixo para editar o veículo modelo ${carData.model} ${carData.year}:`}
      isModalOpen={isFormOpen}
      closeModal={closeForm}
    >
      <Form carData={carData} handleInputChange={handleInputChange} />

      <ModalButtonsContainer>
        <TableButton onClick={onUpdate} title="Salvar" color="blue" />

        <TableButton onClick={closeForm} title="Cancelar" color="red" />
      </ModalButtonsContainer>
    </Modal>
  );
};
