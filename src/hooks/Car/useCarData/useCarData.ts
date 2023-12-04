import { getCars } from '@/api/cars';
import { Car } from '@/types';
import { useState, useEffect } from 'react';

export const useCarData = () => {
  const [carsData, setCarsData] = useState<Car[]>([]);

  const fetchData = async () => {
    const data = await getCars();
    if (data) setCarsData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { carsData, fetchData };
};
