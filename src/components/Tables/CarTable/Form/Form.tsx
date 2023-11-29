import { Car } from '@/types';

import { FormInput } from '../../FormInput';
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
