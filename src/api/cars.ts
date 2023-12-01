import { Car } from '@/types';

import { axiosInstance } from './axiosConfig';

export const getCars = async () => {
  try {
    const { data } = await axiosInstance.get('cars');
    if (data) return data;
  } catch (error) {
    console.error(`Erro ao buscar dados dos carros: ${error}`);
  }
};

export const deleteCar = async (carId: string) => {
  try {
    const { status } = await axiosInstance.delete(`cars/${carId}`);
    if (status === 200) {
      return 'Carro deletado com sucesso!';
    }
  } catch (error) {
    `Erro ao deletar carro: ${error}`;
  }
};

export const updateCar = async ({ id, ...carData }: Car) => {
  try {
    const { status } = await axiosInstance.put(`cars/${id}`, carData);
    if (status === 200) {
      return 'Carro editado com sucesso!';
    }
  } catch (error) {
    `Erro ao editar carro: ${error}`;
  }
};

export const createCar = async (carData: Omit<Car, 'id'>) => {
  try {
    const { status } = await axiosInstance.post('cars', carData);
    if (status === 200) {
      return 'Carro criado com sucesso!';
    }
  } catch (error) {
    `Erro ao criar carro: ${error}`;
  }
};
