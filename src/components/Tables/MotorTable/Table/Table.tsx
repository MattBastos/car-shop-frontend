'use client';

import { useMotorData, useCreateMotor } from '@/hooks';
import { useEffect } from 'react';

import { TableContainer } from '../../CarTable/Table/styles';
import { CreateVehicleButton } from '../../CreateVehicleButton';
import { Modal } from '../../Modal';
import { ModalButton } from '../../ModalButton';
import { ModalButtonsContainer } from '../../ModalButtonsContainer';
import { TableButton } from '../../TableButton';
import { Form } from '../Form';
import * as S from './styles';

export const Table = () => {
  const { motorData, fetchData } = useMotorData();

  const {
    openCreateModal,
    closeCreateModal,
    isCreateModalOpen,
    createMotorFormData,
    handleChangeCreateInput,
    onCreate,
    isFormDataValid
  } = useCreateMotor();

  const tableHeaders = [
    'Modelo',
    'Ano',
    'Cor',
    'Disponibilidade',
    'Valor',
    'Categoria',
    'Cilindradas',
    'Ações'
  ];

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <S.Container>
      <S.CreateVehicleButtonContainer>
        <CreateVehicleButton openModal={openCreateModal} title="Criar Moto" />
      </S.CreateVehicleButtonContainer>

      <TableContainer>
        <Modal
          title="Criar Moto"
          description="Preencha os dados abaixo para criar uma nova moto:"
          isModalOpen={isCreateModalOpen}
          closeModal={closeCreateModal}
        >
          <Form
            motorData={createMotorFormData}
            handleInputChange={handleChangeCreateInput}
          />

          <ModalButtonsContainer>
            <ModalButton
              onClick={onCreate}
              title="Criar"
              color="green"
              isDisabled={isFormDataValid()}
            />

            <ModalButton
              onClick={closeCreateModal}
              title="Cancelar"
              color="gray"
            />
          </ModalButtonsContainer>
        </Modal>

        {motorData.length === 0 ? (
          <S.NoMotorMessage>Nenhua moto encontrado!</S.NoMotorMessage>
        ) : (
          <S.Table>
            <S.THead>
              <tr>
                {tableHeaders.map((th) => (
                  <S.TH scope="col" key={th}>
                    {th}
                  </S.TH>
                ))}
              </tr>
            </S.THead>

            <S.TBody>
              {motorData.map((motor) => (
                <S.TBodyRow key={motor.id}>
                  <S.TD>{motor.model}</S.TD>

                  <S.TD>{motor.year}</S.TD>

                  <S.TD>{motor.color}</S.TD>

                  <S.TD
                    className={motor.status ? 'text-green-700' : 'text-red-700'}
                  >
                    {motor.status ? 'Disponível' : 'Não Disponível'}
                  </S.TD>

                  <S.TD>{motor.buyValue}</S.TD>

                  <S.TD>{motor.category}</S.TD>

                  <S.TD>{motor.engineCapacity}</S.TD>

                  <S.TDActions>
                    <TableButton
                      onClick={() => {}}
                      title="Editar"
                      color="blue"
                    />

                    <TableButton
                      onClick={() => {}}
                      title="Deletar"
                      color="red"
                    />
                  </S.TDActions>
                </S.TBodyRow>
              ))}
            </S.TBody>
          </S.Table>
        )}
      </TableContainer>
    </S.Container>
  );
};
