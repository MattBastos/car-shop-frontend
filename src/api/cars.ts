import { axiosInstance } from './axiosConfig';

export const getCars = async () => {
  try {
    const { data } = await axiosInstance.get('cars');
    if (data) return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
