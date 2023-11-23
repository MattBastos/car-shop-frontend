import * as S from './styles';

type TableButtonType = {
  onClick: () => void;
  title: string;
  color: string;
};

export const TableButton = ({ onClick, title, color }: TableButtonType) => {
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
