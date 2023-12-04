import { deleteCar } from '@/api/cars';
import { Car } from '@/types';
import { useState } from 'react';

export const useDeleteCar = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [selectedCarData, setSelectedCarData] = useState<Car>({
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
    setSelectedCarData(() => ({ ...carData }));

    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const onDelete = async () => {
    await deleteCar(selectedCarData.id);
    setIsDeleteModalOpen(false);
  };

  return {
    isDeleteModalOpen,
    selectedCarData,
    openDeleteModal,
    closeDeleteModal,
    onDelete
  };
};
