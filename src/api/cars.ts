import { axiosInstance } from './axiosConfig';

export const getCars = async () => axiosInstance.get('cars');
