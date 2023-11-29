import { Car } from '@/types';

import { FormInput } from '../../FormInput';
import { FormSelect } from '../../FormSelect';
import * as S from './styles';

type FormProps = {
  carData: Car;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export const Form = ({ carData, handleInputChange }: FormProps) => {
  return (
    <S.Form>
      <FormSelect
        title="Disponibilidade:"
        name="status"
        value={carData.status}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormInput
        title="Modelo:"
        type="text"
        name="model"
        value={carData.model}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormInput
        title="Ano:"
        type="number"
        name="year"
        value={carData.year}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormInput
        title="Cor:"
        type="text"
        name="color"
        value={carData.color}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormInput
        title="Valor de Compra:"
        type="number"
        name="buyValue"
        value={carData.buyValue}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormInput
        title="Quantidade de Portas:"
        type="number"
        name="doorsQty"
        value={carData.doorsQty}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormInput
        title="Quantidade de Assentos:"
        type="number"
        name="seatsQty"
        value={carData.seatsQty}
        handleInputChange={(e) => handleInputChange(e)}
      />
    </S.Form>
  );
};
