import { Car } from '@/types';

import { FormNumberInput } from '../../FormNumberInput';
import { FormSelect } from '../../FormSelect';
import { FormTextInput } from '../../FormTextInput';
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

      <FormTextInput
        title="Modelo:"
        name="model"
        value={carData.model}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormNumberInput
        title="Ano:"
        name="year"
        value={carData.year}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormTextInput
        title="Cor:"
        name="color"
        value={carData.color}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormNumberInput
        title="Valor de Compra:"
        name="buyValue"
        value={carData.buyValue}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormNumberInput
        title="Quantidade de Portas:"
        name="doorsQty"
        value={carData.doorsQty}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormNumberInput
        title="Quantidade de Assentos:"
        name="seatsQty"
        value={carData.seatsQty}
        handleInputChange={(e) => handleInputChange(e)}
      />
    </S.Form>
  );
};
