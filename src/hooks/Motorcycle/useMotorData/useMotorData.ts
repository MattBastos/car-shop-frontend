import { getMotorcycles } from '@/api';
import { Motorcycle } from '@/types';
import { useState, useEffect } from 'react';

export const useMotorData = () => {
  const [motorData, setMotorData] = useState<Motorcycle[]>([]);

  const fetchData = async () => {
    const data = await getMotorcycles();
    if (data) setMotorData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { motorData, fetchData };
};
