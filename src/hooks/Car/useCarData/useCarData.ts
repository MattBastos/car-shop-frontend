import { getCars } from '@/api';
import { Car } from '@/types';
import { useState, useEffect } from 'react';

export const useCarData = () => {
  const [carData, setCarData] = useState<Car[]>([]);

  const fetchData = async () => {
    const data = await getCars();
    if (data) setCarData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { carData, fetchData };
};
