import { deleteMotorcycle } from '@/api';
import { Motorcycle } from '@/types';
import { useState } from 'react';

export const useDeleteMotor = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [selectedDeleteMotorData, setSelectedDeleteMotorData] =
    useState<Motorcycle>({
      id: '',
      model: '',
      year: 0,
      color: '',
      status: false,
      buyValue: 0,
      category: '',
      engineCapacity: 0
    });

  const openDeleteModal = (motorData: Motorcycle) => {
    setSelectedDeleteMotorData(() => ({ ...motorData }));
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const onDelete = async () => {
    await deleteMotorcycle(selectedDeleteMotorData.id);
    setIsDeleteModalOpen(false);
  };

  return {
    isDeleteModalOpen,
    openDeleteModal,
    closeDeleteModal,
    selectedDeleteMotorData,
    onDelete
  };
};
