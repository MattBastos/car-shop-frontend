'use client';

import { getCars } from '@/api/cars';
import { Car } from '@/types';
import { useState, useEffect } from 'react';

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
    <p>Nenhum carro encontrado!</p>
  ) : (
    <section className="relative w-full overflow-x-auto rounded-xl">
      <table className="w-full table-auto border-collapse border-spacing-0 rounded-xl bg-gray-200 text-center">
        <thead className="bg-primary text-sm uppercase text-gray-200 md:text-base lg:text-lg">
          <tr>
            {tableHeaders.map((th) => (
              <th scope="col" key={th} className="px-4 py-3">
                {th}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-sm text-gray-800 md:text-base lg:text-lg">
          {carsData.map((car) => (
            <tr
              key={car.id}
              className="border-b border-gray-400 transition-colors ease-in-out hover:bg-gray-300"
            >
              <td className="px-2 py-2 md:px-4">{car.model}</td>
              <td className="px-2 py-2 md:px-4">{car.year}</td>
              <td className="px-2 py-2 md:px-4">{car.color}</td>
              <td
                className={`px-2 py-2 md:px-4 ${
                  car.status ? 'text-green-700' : 'text-red-700'
                }`}
              >
                {car.status ? 'Disponível' : 'Não Disponível'}
              </td>
              <td className="px-2 py-2 md:px-4">{car.buyValue}</td>
              <td className="px-2 py-2 md:px-4">{car.doorsQty}</td>
              <td className="px-2 py-2 md:px-4">{car.seatsQty}</td>
              <td className="flex items-center justify-center gap-4 px-2 py-2 md:px-4">
                <button
                  onClick={onUpdate}
                  className="rounded-lg bg-blue-500 px-2 py-1 text-white transition-colors duration-200 ease-in-out hover:bg-blue-600"
                >
                  Editar
                </button>
                <button
                  onClick={onDelete}
                  className="rounded-lg bg-red-500 px-2 py-1 text-white transition-colors duration-200 ease-in-out hover:bg-red-600"
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
