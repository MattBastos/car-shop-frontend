import * as S from './styles';

type SectionTitleProps = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return <S.Title>{title}</S.Title>;
};
