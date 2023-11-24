'use client';

import { getCars, deleteCar } from '@/api/cars';
import { Car } from '@/types';
import { useState, useEffect } from 'react';

import { DeleteConfirmationModal } from '../DeleteConfirmationModal';
import { TableButton } from '../TableButton';
import * as S from './styles';

export const CarTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const onDelete = async () => {
    await deleteCar(selectedCarData.id);
    setIsModalOpen(false);

    await fetchData();
  };

  const onUpdate = () => {};

  const openModal = (carId: string, carModel: string, carYear: number) => {
    setSelectedCarData((prevState) => ({
      ...prevState,
      id: carId,
      model: carModel,
      year: carYear
    }));

    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container>
      <DeleteConfirmationModal
        onDelete={onDelete}
        closeModal={closeModal}
        carModel={selectedCarData.model}
        carYear={selectedCarData.year}
        isModalOpen={isModalOpen}
      />

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
                    onClick={() => onUpdate()}
                    title="Editar"
                    color="blue"
                  />

                  <TableButton
                    onClick={() => openModal(car.id, car.model, car.year)}
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
