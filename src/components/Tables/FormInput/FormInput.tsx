import * as S from './styles';

type FormInputProps = {
  title: string;
  type: string;
  name: string;
  value: string | number;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export const FormInput = ({
  title,
  type,
  name,
  value,
  handleInputChange
}: FormInputProps) => {
  return (
    <S.Label>
      <S.Span>{title}</S.Span>

      <S.Input
        type={type}
        name={name}
        value={value}
        onChange={(e) => handleInputChange(e)}
      />
    </S.Label>
  );
};
