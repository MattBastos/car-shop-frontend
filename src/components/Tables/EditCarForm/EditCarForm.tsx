import { Car } from '@/types';

import * as S from './styles';

type EditCarFormProps = {
  carData: Car;
  onUpdate: () => void;
  closeForm: () => void;
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

      <form className={isFormOpen ? 'flex' : 'hidden'}>
        <h2>Editar Carro</h2>

        <h3>Preencha os dados abaixo para editar o carro:</h3>
      </form>
    </>
  );
};
