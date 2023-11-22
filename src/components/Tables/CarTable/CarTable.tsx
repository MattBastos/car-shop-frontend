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
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Model</th>
              <th>Year</th>
              <th>Color</th>
              <th>Status</th>
              <th>Buy Value</th>
              <th>Doors Quantity</th>
              <th>Seats Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {carsData.map((car) => (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.color}</td>
                <td>{car.status ? 'Active' : 'Inactive'}</td>
                <td>{car.buyValue}</td>
                <td>{car.doorsQty}</td>
                <td>{car.seatsQty}</td>
                <td>
                  <button onClick={() => onDelete()}>Deletar</button>
                  <button onClick={() => onUpdate()}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};
