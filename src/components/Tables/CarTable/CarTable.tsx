'use client';

import { getCars } from '@/api/cars';
import { Car } from '@/types';
import { useState, useEffect } from 'react';

export const CarTable = () => {
  const [carsData, setCarsData] = useState<Car[]>([]);

  const onDelete = () => {};

  const onUpdate = () => {};

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCars();
      if (data) {
        setCarsData(data);
        console.log(data);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      {carsData.length === 0 ? (
        <p>Nenhum carro encontrado!</p>
      ) : (
        <table className="min-w-full rounded-lg bg-gray-200">
          <thead>
            <tr className="text-center text-lg text-gray-800">
              <th className="border-b border-gray-950 px-4 py-2">ID</th>
              <th className="border-b border-gray-950 px-4 py-2">Modelo</th>
              <th className="border-b border-gray-950 px-4 py-2">Ano</th>
              <th className="border-b border-gray-950 px-4 py-2">Cor</th>
              <th className="border-b border-gray-950 px-4 py-2">Status</th>
              <th className="border-b border-gray-950 px-4 py-2">Valor</th>
              <th className="border-b border-gray-950 px-4 py-2">Portas</th>
              <th className="border-b border-gray-950 px-4 py-2">Assentos</th>
              <th className="border-b border-gray-950 px-4 py-2">Ações</th>
            </tr>
          </thead>

          <tbody>
            {carsData.map((car) => (
              <tr
                key={car.id}
                className="text-center text-lg text-gray-800 transition-colors ease-in-out hover:bg-gray-300"
              >
                <td className="px-4 py-2">{car.id}</td>
                <td className="px-4 py-2">{car.model}</td>
                <td className="px-4 py-2">{car.year}</td>
                <td className="px-4 py-2">{car.color}</td>
                <td className="px-4 py-2">
                  {car.status ? 'Disponível' : 'Não Disponível'}
                </td>
                <td className="px-4 py-2">{car.buyValue}</td>
                <td className="px-4 py-2">{car.doorsQty}</td>
                <td className="px-4 py-2">{car.seatsQty}</td>
                <td className="flex gap-4 px-4 py-2">
                  <button
                    onClick={onUpdate}
                    className="rounded-lg border bg-yellow-500 px-2 py-1 text-white transition-colors ease-in-out hover:bg-yellow-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={onDelete}
                    className="rounded-lg bg-red-600 px-2 py-1 text-white transition-colors ease-in-out hover:bg-red-700"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};
