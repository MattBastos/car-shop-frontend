import { createCar } from '@/api/cars';
import { Car } from '@/types';
import { useState } from 'react';

export const useCreateCarModal = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [carFormData, setCarFormData] = useState<Car>({
    id: '',
    model: '',
    year: 0,
    color: '',
    status: false,
    buyValue: 0,
    doorsQty: 0,
    seatsQty: 0
  });

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setCarFormData((prevData) => ({
      ...prevData,
      [name]: name === 'status' ? value === 'true' : value
    }));
  };

  const onCreate = async () => {
    await createCar(carFormData);
    setIsCreateModalOpen(false);
  };

  return {
    openCreateModal,
    closeCreateModal,
    isCreateModalOpen,
    carFormData,
    handleInputChange,
    onCreate
  };
};
