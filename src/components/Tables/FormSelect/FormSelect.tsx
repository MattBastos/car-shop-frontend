import * as S from './styles';

type FormSelectProps = {
  title: string;
  name: string;
  value: boolean;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export const FormSelect = ({
  title,
  name,
  value,
  handleInputChange
}: FormSelectProps) => {
  return (
    <S.Label>
      <S.Span>{title}</S.Span>
      <S.Select
        name={name}
        value={value ? 'true' : 'false'}
        onChange={(e) => handleInputChange(e)}
      >
        <option value="true">Disponível</option>
        <option value="false">Não Disponível</option>
      </S.Select>
    </S.Label>
  );
};
