import * as S from './styles';

type FormTextInputProps = {
  title: string;
  name: string;
  value: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export const FormTextInput = ({
  title,
  name,
  value,
  handleInputChange
}: FormTextInputProps) => {
  return (
    <S.Label>
      <S.Span>{title}</S.Span>

      <S.Input
        type="text"
        name={name}
        value={value}
        onChange={(e) => handleInputChange(e)}
      />
    </S.Label>
  );
};
