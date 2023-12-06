import { Motorcycle } from '@/types';

import { axiosInstance } from './axiosConfig';

export const getMotorcycles = async () => {
  try {
    const { data } = await axiosInstance.get('motorcycles');
    if (data) return data;
  } catch (error) {
    console.error(`Erro ao buscar dados das motocicletas: ${error}`);
  }
};
