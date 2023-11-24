'use client';

import { getCars, deleteCar } from '@/api/cars';
import { Car } from '@/types';
import { useState, useEffect } from 'react';

import { DeleteConfirmationModal } from '../DeleteConfirmationModal';
import { TableButton } from '../TableButton';
import * as S from './styles';

export const CarTable = () => {
  const [carsData, setCarsData] = useState<Car[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const onDelete = async (carId: string) => {
    await deleteCar(carId);
    await fetchData();
  };

  const onUpdate = () => {};

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container>
      <DeleteConfirmationModal
        onDelete={() => onDelete('aaa')}
        closeModal={closeModal}
        carModel="Modelo"
        carYear={1990}
        isModalOpen={isModalOpen}
      />

      {carsData.length === 0 ? (
        <section>
          <S.NoCarMessage>Nenhum carro encontrado!</S.NoCarMessage>
        </section>
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
                    onClick={openModal}
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
