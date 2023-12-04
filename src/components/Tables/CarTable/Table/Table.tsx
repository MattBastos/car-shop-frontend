'use client';

import { useCarData, useCreateCar, useDeleteCar, useEditCar } from '@/hooks';
import { useEffect } from 'react';

import { CreateVehicleButton } from '../../CreateVehicleButton';
import { Modal } from '../../Modal';
import { ModalButtonsContainer } from '../../ModalButtonsContainer';
import { TableButton } from '../../TableButton';
import { Form } from '../Form';
import * as S from './styles';

export const Table = () => {
  const { carData, fetchData } = useCarData();

  const {
    openCreateModal,
    closeCreateModal,
    isCreateModalOpen,
    createCarFormData,
    handleChangeCreateInput,
    onCreate
  } = useCreateCar();

  const {
    isEditModalOpen,
    openEditModal,
    closeEditModal,
    selectedEditCarData,
    carFormData,
    handleChangeEditCar,
    onUpdate
  } = useEditCar();

  const {
    isDeleteModalOpen,
    selectedDeleteCarData,
    openDeleteModal,
    closeDeleteModal,
    onDelete
  } = useDeleteCar();

  const tableHeaders = [
    'Modelo',
    'Ano',
    'Cor',
    'Disponibilidade',
    'Valor',
    'Portas',
    'Assentos',
    'Ações'
  ];

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <S.Container>
      <S.CreateVehicleButtonContainer>
        <CreateVehicleButton openModal={openCreateModal} title="Criar Carro" />
      </S.CreateVehicleButtonContainer>

      <S.TableContainer>
        <Modal
          title="Criar Carro"
          description="Preencha os dados abaixo para criar um novo carro:"
          isModalOpen={isCreateModalOpen}
          closeModal={closeCreateModal}
        >
          <Form
            carData={createCarFormData}
            handleInputChange={handleChangeCreateInput}
          />

          <ModalButtonsContainer>
            <TableButton onClick={onCreate} title="Criar" color="green" />

            <TableButton
              onClick={closeCreateModal}
              title="Cancelar"
              color="gray"
            />
          </ModalButtonsContainer>
        </Modal>

        <Modal
          title="Editar Carro"
          description={`Preencha os dados abaixo para editar o veículo modelo ${selectedEditCarData.model} ${selectedEditCarData.year}:`}
          isModalOpen={isEditModalOpen}
          closeModal={closeEditModal}
        >
          <Form carData={carFormData} handleInputChange={handleChangeEditCar} />

          <ModalButtonsContainer>
            <TableButton onClick={onUpdate} title="Salvar" color="blue" />

            <TableButton
              onClick={closeEditModal}
              title="Cancelar"
              color="gray"
            />
          </ModalButtonsContainer>
        </Modal>

        <Modal
          title="Confirme sua Ação"
          description={`Tem certeza que deseja deletar o veículo modelo ${selectedDeleteCarData.model} ${selectedDeleteCarData.year}?`}
          isModalOpen={isDeleteModalOpen}
          closeModal={closeDeleteModal}
        >
          <ModalButtonsContainer>
            <TableButton
              onClick={() => onDelete()}
              title="Deletar"
              color="red"
            />

            <TableButton
              onClick={closeDeleteModal}
              title="Cancelar"
              color="gray"
            />
          </ModalButtonsContainer>
        </Modal>

        {carData.length === 0 ? (
          <S.NoCarMessage>Nenhum carro encontrado!</S.NoCarMessage>
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
              {carData.map((car) => (
                <S.TBodyRow key={car.id}>
                  <S.TD>{car.model}</S.TD>

                  <S.TD>{car.year}</S.TD>

                  <S.TD>{car.color}</S.TD>

                  <S.TD
                    className={car.status ? 'text-green-700' : 'text-red-700'}
                  >
                    {car.status ? 'Disponível' : 'Não Disponível'}
                  </S.TD>

                  <S.TD>{car.buyValue}</S.TD>

                  <S.TD>{car.doorsQty}</S.TD>

                  <S.TD>{car.seatsQty}</S.TD>

                  <S.TDActions>
                    <TableButton
                      onClick={() => openEditModal(car)}
                      title="Editar"
                      color="blue"
                    />

                    <TableButton
                      onClick={() => openDeleteModal(car)}
                      title="Deletar"
                      color="red"
                    />
                  </S.TDActions>
                </S.TBodyRow>
              ))}
            </S.TBody>
          </S.Table>
        )}
      </S.TableContainer>
    </S.Container>
  );
};
