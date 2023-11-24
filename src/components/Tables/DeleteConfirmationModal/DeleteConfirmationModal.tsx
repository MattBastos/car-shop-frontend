import { TableButton } from '../TableButton';

type DeleteConfirmationModalProps = {
  model: string;
};

export const DeleteConfirmationModal = ({
  model
}: DeleteConfirmationModalProps) => {
  return (
    <section>
      <h3>Tem certeza que deseja deletar o veículo modelo {model}</h3>

      <section>
        <TableButton onClick={() => {}} title="Sim" color="red" />
        <TableButton onClick={() => {}} title="Não" color="gray" />
      </section>
    </section>
  );
};
