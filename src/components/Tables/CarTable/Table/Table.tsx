'use client';

import { getCars, deleteCar, editCar } from '@/api/cars';
import { Car } from '@/types';
import { useState, useEffect } from 'react';

import { Modal } from '../../Modal';
import { ModalButtonsContainer } from '../../ModalButtonsContainer';
import { TableButton } from '../../TableButton';
import { Form } from '../Form';
import * as S from './styles';

export const Table = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditCarFormOpen, setIsEditCarFormOpen] = useState(false);

  const [carsData, setCarsData] = useState<Car[]>([]);

  const [selectedCarData, setSelectedCarData] = useState<Car>({
    id: '',
    model: '',
    year: 0,
    color: '',
    status: false,
    buyValue: 0,
    doorsQty: 0,
    seatsQty: 0
  });

  const [carFormData, setCarFormData] = useState<Car>({
    id: '',
    model: '',
    year: 0,
    color: '',
    status: false,
    buyValue: 0,
    doorsQty: 0,
    seatsQty: 0
  });

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

  const fetchData = async () => {
    const data = await getCars();
    if (data) setCarsData(data);
  };

  const openEditCarForm = (carData: Car) => {
    setSelectedCarData(() => ({ ...carData }));
    setCarFormData(() => ({ ...carData }));

    setIsEditCarFormOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setCarFormData((prevData) => ({
      ...prevData,
      [name]: name === 'status' ? value === 'true' : value
    }));
  };

  const onUpdate = async () => {
    await editCar(carFormData);
    setIsEditCarFormOpen(false);

    await fetchData();
  };

  const closeEditCarForm = () => setIsEditCarFormOpen(false);

  const openDeleteModal = (
    carId: string,
    carModel: string,
    carYear: number
  ) => {
    setSelectedCarData((prevState) => ({
      ...prevState,
      id: carId,
      model: carModel,
      year: carYear
    }));

    setIsDeleteModalOpen(true);
  };

  const onDelete = async () => {
    await deleteCar(selectedCarData.id);
    setIsDeleteModalOpen(false);

    await fetchData();
  };

  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container>
      <Modal
        title="Editar Carro"
        description={`Preencha os dados abaixo para editar o veículo modelo ${selectedCarData.model} ${selectedCarData.year}:`}
        isModalOpen={isEditCarFormOpen}
        closeModal={closeEditCarForm}
      >
        <Form carData={carFormData} handleInputChange={handleInputChange} />

        <ModalButtonsContainer>
          <TableButton onClick={onUpdate} title="Salvar" color="blue" />

          <TableButton
            onClick={closeEditCarForm}
            title="Cancelar"
            color="red"
          />
        </ModalButtonsContainer>
      </Modal>

      <Modal
        title="Confirme sua Ação"
        description={`Tem certeza que deseja deletar o veículo modelo ${selectedCarData.model} ${selectedCarData.year}?`}
        isModalOpen={isDeleteModalOpen}
        closeModal={closeDeleteModal}
      >
        <ModalButtonsContainer>
          <TableButton onClick={() => onDelete()} title="Deletar" color="red" />

          <TableButton
            onClick={closeDeleteModal}
            title="Cancelar"
            color="gray"
          />
        </ModalButtonsContainer>
      </Modal>

      {carsData.length === 0 ? (
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
            {carsData.map((car) => (
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
                    onClick={() => openEditCarForm(car)}
                    title="Editar"
                    color="blue"
                  />

                  <TableButton
                    onClick={() => openDeleteModal(car.id, car.model, car.year)}
                    title="Deletar"
                    color="red"
                  />
                </S.TDActions>
              </S.TBodyRow>
            ))}
          </S.TBody>
        </S.Table>
      )}
    </S.Container>
  );
};
