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

export const deleteMotorcycle = async (motorcycleId: string) => {
  try {
    const { status } = await axiosInstance.delete(
      `motorcycles/${motorcycleId}`
    );

    if (status === 200) {
      return 'Motocicleta deletada com sucesso!';
    }
  } catch (error) {
    `Erro ao deletar motocicleta: ${error}`;
  }
};

export const updateMotorcycle = async ({
  id,
  ...motorcycleData
}: Motorcycle) => {
  try {
    const { status } = await axiosInstance.put(
      `motorcycles/${id}`,
      motorcycleData
    );

    if (status === 200) {
      return 'Motocicleta editada com sucesso!';
    }
  } catch (error) {
    `Erro ao editar motocicleta: ${error}`;
  }
};
