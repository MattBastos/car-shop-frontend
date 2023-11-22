'use client';

import { getCars } from '@/api/cars';
import { useState, useEffect } from 'react';

interface Car {
  id: string;
  model: string;
  year: number;
  color: string;
  status: boolean;
  buyValue: number;
  doorsQty: number;
  seatsQty: number;
}

export default function Cars() {
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
      <h1 className="text-white">Carros</h1>
    </section>
  );
}
