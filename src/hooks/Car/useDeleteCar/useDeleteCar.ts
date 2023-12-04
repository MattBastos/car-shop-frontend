import { deleteCar } from '@/api';
import { Car } from '@/types';
import { useState } from 'react';

export const useDeleteCar = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [selectedDeleteCarData, setSelectedDeleteCarData] = useState<Car>({
    id: '',
    model: '',
    year: 0,
    color: '',
    status: false,
    buyValue: 0,
    doorsQty: 0,
    seatsQty: 0
  });

  const openDeleteModal = (carData: Car) => {
    setSelectedDeleteCarData(() => ({ ...carData }));

    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const onDelete = async () => {
    await deleteCar(selectedDeleteCarData.id);
    setIsDeleteModalOpen(false);
  };

  return {
    isDeleteModalOpen,
    selectedDeleteCarData,
    openDeleteModal,
    closeDeleteModal,
    onDelete
  };
};
