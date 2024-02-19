'use client';

import {
  useMotorData,
  useCreateMotor,
  useEditMotor,
  useDeleteMotor
} from '@/hooks';
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

  const {
    isEditModalOpen,
    openEditModal,
    closeEditModal,
    selectedEditMotorData,
    motorFormData,
    handleChangeEditMotor,
    onUpdate
  } = useEditMotor();

  const {
    isDeleteModalOpen,
    openDeleteModal,
    closeDeleteModal,
    selectedDeleteMotorData,
    onDelete
  } = useDeleteMotor();

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

        <Modal
          title="Editar Moto"
          description={`Preencha os dados abaixo para editar o veículo modelo ${selectedEditMotorData.model} ${selectedEditMotorData.year}:`}
          isModalOpen={isEditModalOpen}
          closeModal={closeEditModal}
        >
          <Form
            motorData={motorFormData}
            handleInputChange={handleChangeEditMotor}
          />

          <ModalButtonsContainer>
            <ModalButton onClick={onUpdate} title="Salvar" color="blue" />

            <ModalButton
              onClick={closeEditModal}
              title="Cancelar"
              color="gray"
            />
          </ModalButtonsContainer>
        </Modal>

        <Modal
          title="Confirme sua Ação"
          description={`Tem certeza que deseja deletar o veículo modelo ${selectedDeleteMotorData.model} ${selectedDeleteMotorData.year}?`}
          isModalOpen={isDeleteModalOpen}
          closeModal={closeDeleteModal}
        >
          <ModalButtonsContainer>
            <ModalButton
              onClick={() => onDelete()}
              title="Deletar"
              color="red"
            />

            <ModalButton
              onClick={closeDeleteModal}
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
                      onClick={() => openEditModal(motor)}
                      title="Editar"
                      color="blue"
                    />

                    <TableButton
                      onClick={() => openDeleteModal(motor)}
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
