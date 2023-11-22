'use client';

import { getCars } from '@/api/cars';
import { Car } from '@/types';
import { useState, useEffect } from 'react';

export const VehicleTable = () => {
  const [carsData, setCarsData] = useState<Car[]>([]);

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
      <h1>{carsData[0].model}</h1>
    </section>
  );
};
