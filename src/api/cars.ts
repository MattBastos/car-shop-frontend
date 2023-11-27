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

export const editCar = async (carId: string) => {
  try {
    const { status } = await axiosInstance.put(`cars/${carId}`);
    if (status === 200) {
      return 'Carro editado com sucesso!';
    }
  } catch (error) {
    `Erro ao editar carro: ${error}`;
  }
};
