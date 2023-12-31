import * as S from './styles';

type TableButtonProps = {
  onClick: () => void;
  title: string;
  color: string;
};

export const TableButton = ({ onClick, title, color }: TableButtonProps) => {
  return (
    <S.Button
      onClick={() => onClick()}
      type="button"
      role="button"
      title={title}
      tabIndex={0}
      aria-label={title}
      className={`bg-${color}-500 hover:bg-${color}-600`}
    >
      {title}
    </S.Button>
  );
};
