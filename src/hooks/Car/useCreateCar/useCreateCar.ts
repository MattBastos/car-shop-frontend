import { createCar } from '@/api';
import { Car } from '@/types';
import { useState } from 'react';

export const useCreateCar = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [createCarFormData, setCreateCarFormData] = useState<Car>({
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

  const handleChangeCreateInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setCreateCarFormData((prevData) => ({
      ...prevData,
      [name]: name === 'status' ? value === 'true' : value
    }));
  };

  const onCreate = async () => {
    await createCar(createCarFormData);
    setIsCreateModalOpen(false);
  };

  return {
    openCreateModal,
    closeCreateModal,
    isCreateModalOpen,
    createCarFormData,
    handleChangeCreateInput,
    onCreate
  };
};
