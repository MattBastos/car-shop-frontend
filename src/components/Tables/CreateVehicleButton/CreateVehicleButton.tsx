import { Plus } from '@/components/Icons';

import * as S from './styles';

type CreateVehicleButtonProps = {
  openModal: () => void;
  title: string;
};

export const CreateVehicleButton = ({
  openModal,
  title
}: CreateVehicleButtonProps) => {
  return (
    <S.Button
      onClick={openModal}
      type="button"
      role="button"
      title={title}
      tabIndex={0}
      aria-label={title}
    >
      <Plus size={60} />
    </S.Button>
  );
};
