import * as S from './styles';

type ModalButtonProps = {
  onClick: () => void;
  title: string;
  color: string;
};

export const ModalButton = ({ onClick, title, color }: ModalButtonProps) => {
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
