import { Motorcycle } from '@/types';

import { FormNumberInput } from '../../FormNumberInput';
import { FormSelect } from '../../FormSelect';
import { FormTextInput } from '../../FormTextInput';
import * as S from './styles';

type FormProps = {
  motorData: Motorcycle;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export const Form = ({ motorData, handleInputChange }: FormProps) => {
  return (
    <S.Form>
      <FormSelect
        title="Disponibilidade:"
        name="status"
        value={motorData.status}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormTextInput
        title="Modelo:"
        name="model"
        value={motorData.model}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormNumberInput
        title="Ano:"
        name="year"
        value={motorData.year}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormTextInput
        title="Cor:"
        name="color"
        value={motorData.color}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormNumberInput
        title="Valor de Compra:"
        name="buyValue"
        value={motorData.buyValue}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormTextInput
        title="Categoria:"
        name="category"
        value={motorData.category}
        handleInputChange={(e) => handleInputChange(e)}
      />

      <FormNumberInput
        title="Cilindradas:"
        name="engineCapacity"
        value={motorData.engineCapacity}
        handleInputChange={(e) => handleInputChange(e)}
      />
    </S.Form>
  );
};
