import { axiosInstance } from './axiosConfig';

export const getCars = async () => {
  try {
    const { data } = await axiosInstance.get('cars');
    if (data) return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const deleteCar = async (carId: string) => {
  try {
    const { status } = await axiosInstance.delete(`${carId}`);
    if (status === 200) {
      return 'Carro deletado com sucesso!';
    }
  } catch (error) {
    `Erro ao deletar carro:, ${error}`;
  }
};
