import * as S from './styles';

type FormNumberInputProps = {
  title: string;
  name: string;
  value: number;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export const FormNumberInput = ({
  title,
  name,
  value,
  handleInputChange
}: FormNumberInputProps) => {
  return (
    <S.Label>
      <S.Span>{title}</S.Span>

      <S.Input
        type="number"
        name={name}
        value={value}
        onChange={(e) => handleInputChange(e)}
        min={2}
      />
    </S.Label>
  );
};
