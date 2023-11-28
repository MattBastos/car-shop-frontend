import * as S from './styles';

type FormInputProps = {
  spanTitle: string;
  type: string;
  name: string;
  value: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export const FormInput = ({
  spanTitle,
  type,
  name,
  value,
  handleInputChange
}: FormInputProps) => {
  return (
    <S.Label>
      <S.Span>{spanTitle}</S.Span>

      <S.Input
        type={type}
        name={name}
        value={value}
        onChange={(e) => handleInputChange(e)}
      />
    </S.Label>
  );
};
