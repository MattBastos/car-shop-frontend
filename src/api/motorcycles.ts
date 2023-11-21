import { axiosInstance } from './axiosConfig';

export const getMotorcycles = async () => axiosInstance.get('motorcycles');
