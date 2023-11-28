import { Car } from '@/types';

import { Modal } from '../../Modal';
import { TableButton } from '../../TableButton';
import * as S from './styles';

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
      <form className="mb-6 flex flex-col gap-2 text-lg text-gray-800">
        <label className="flex flex-col">
          <span className="mb-1">Modelo:</span>
          <input
            type="text"
            name="model"
            value={carData.model}
            onChange={(e) => handleInputChange(e)}
            className="rounded border border-gray-300 px-2 py-1
              focus:border-primary focus:outline-none"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1">Ano:</span>
          <input
            type="number"
            name="year"
            value={carData.year}
            onChange={(e) => handleInputChange(e)}
            className="rounded border px-2 py-1"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1">Cor:</span>
          <input
            type="text"
            name="color"
            value={carData.color}
            onChange={(e) => handleInputChange(e)}
            className="rounded border px-2 py-1"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1">Disponibilidade:</span>
          <select
            name="status"
            value={carData.status ? 'true' : 'false'}
            onChange={(e) => handleInputChange(e)}
            className="rounded border px-2 py-1"
          >
            <option value="true">Disponível</option>
            <option value="false">Não Disponível</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="mb-1">Valor de Compra:</span>
          <input
            type="number"
            name="buyValue"
            value={carData.buyValue}
            onChange={(e) => handleInputChange(e)}
            className="rounded border px-2 py-1"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1">Quantidade de Portas:</span>
          <input
            type="number"
            name="doorsQty"
            value={carData.doorsQty}
            onChange={(e) => handleInputChange(e)}
            className="rounded border px-2 py-1"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1">Quantidade de Assentos:</span>
          <input
            type="number"
            name="seatsQty"
            value={carData.seatsQty}
            onChange={(e) => handleInputChange(e)}
            className="rounded border px-2 py-1"
          />
        </label>
      </form>

      <S.ButtonsContainer>
        <TableButton onClick={onUpdate} title="Salvar" color="blue" />

        <TableButton onClick={closeForm} title="Cancelar" color="red" />
      </S.ButtonsContainer>
    </Modal>
  );
};
