'use client';

import { getCars } from '@/api/cars';
import { Car } from '@/types';
import { useState, useEffect } from 'react';

import * as S from './styles';

export const CarTable = () => {
  const [carsData, setCarsData] = useState<Car[]>([]);
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

  const onDelete = () => {};

  const onUpdate = () => {};

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCars();
      if (data) setCarsData(data);
    };

    fetchData();
  }, []);

  return carsData.length === 0 ? (
    <S.NoCarMessage>Nenhum carro encontrado!</S.NoCarMessage>
  ) : (
    <S.Container>
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

              <S.TD className={car.status ? 'text-green-700' : 'text-red-700'}>
                {car.status ? 'Disponível' : 'Não Disponível'}
              </S.TD>

              <S.TD>{car.buyValue}</S.TD>

              <S.TD>{car.doorsQty}</S.TD>

              <S.TD>{car.seatsQty}</S.TD>

              <S.TDActions>
                <S.TButton
                  onClick={onUpdate}
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  Editar
                </S.TButton>

                <S.TButton
                  onClick={onDelete}
                  className="bg-red-500 hover:bg-red-600"
                >
                  Deletar
                </S.TButton>
              </S.TDActions>
            </S.TBodyRow>
          ))}
        </S.TBody>
      </S.Table>
    </S.Container>
  );
};
