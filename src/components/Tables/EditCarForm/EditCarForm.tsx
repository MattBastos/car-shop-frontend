import { X } from '@/components/Icons';
import { Car } from '@/types';
import { Dispatch, SetStateAction } from 'react';

import { TableButton } from '../TableButton';
import * as S from './styles';

type EditCarFormProps = {
  carData: Car;
  onUpdate: () => void;
  closeForm: () => void;
  updateCarData: () => Dispatch<SetStateAction<Car>>;
  isFormOpen: boolean;
};

export const EditCarForm = ({
  carData,
  onClick,
  closeForm,
  isFormOpen
}: EditCarFormProps) => {
  return (
    <>
      {isFormOpen && (
        <S.OverlayBackdrop onClick={closeForm}></S.OverlayBackdrop>
      )}

      <S.Container className={isFormOpen ? 'flex' : 'hidden'}>
        <S.TitleContainer>
          <S.Title>Editar Carro</S.Title>

          <S.CloseModalButton
            onClick={closeForm}
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

        <S.Text>Preencha os dados abaixo para editar o carro:</S.Text>

        <form className="mb-6 flex flex-col gap-2 text-lg">
          <label>
            Modelo:
            <input type="text" name="model" value={carData.model} />
          </label>

          <label>
            Ano:
            <input type="number" name="year" value={carData.year} />
          </label>

          <label>
            Cor:
            <input type="text" name="color" value={carData.color} />
          </label>

          <label>
            Disponibilidade:
            <select name="status" value={carData.status ? 'true' : 'false'}>
              <option value="true">Disponível</option>
              <option value="false">Não Disponível</option>
            </select>
          </label>

          <label>
            Valor de Compra:
            <input type="number" name="buyValue" value={carData.buyValue} />
          </label>

          <label>
            Quantidade de Portas:
            <input type="number" name="doorsQty" value={carData.doorsQty} />
          </label>

          <label>
            Quantidade de Assentos:
            <input type="number" name="seatsQty" value={carData.seatsQty} />
          </label>
        </form>

        <S.ButtonsContainer>
          <TableButton onClick={() => {}} title="Salvar" color="blue" />

          <TableButton onClick={closeForm} title="Cancelar" color="red" />
        </S.ButtonsContainer>
      </S.Container>
    </>
  );
};
