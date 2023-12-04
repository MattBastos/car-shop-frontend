import * as S from './styles';

type ModalButtonProps = {
  onClick: () => void;
  title: string;
  color: string;
  isDisabled?: boolean;
};

export const ModalButton = ({
  onClick,
  title,
  color,
  isDisabled
}: ModalButtonProps) => {
  return (
    <S.Button
      onClick={() => onClick()}
      type="button"
      role="button"
      title={title}
      tabIndex={0}
      aria-label={title}
      disabled={isDisabled}
      className={
        isDisabled
          ? `bg-opacity-50 bg-${color}-500`
          : `bg-${color}-500 hover:bg-${color}-600`
      }
    >
      {title}
    </S.Button>
  );
};
