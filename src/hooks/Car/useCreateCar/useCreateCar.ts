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

  const openCreateModal = () => {
    setCreateCarFormData({
      id: '',
      model: '',
      year: 0,
      color: '',
      status: false,
      buyValue: 0,
      doorsQty: 0,
      seatsQty: 0
    });

    setIsCreateModalOpen(true);
  };

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

  const isFormDataValid = (): boolean => {
    const isTextDataValid =
      createCarFormData.model.trim().length >= 3 &&
      createCarFormData.color.trim().length >= 3;

    const isNumberDataValid =
      createCarFormData.year.toString().length === 4 &&
      createCarFormData.buyValue >= 5000 &&
      createCarFormData.doorsQty >= 2 &&
      createCarFormData.seatsQty >= 2;

    return !(isTextDataValid && isNumberDataValid);
  };

  return {
    openCreateModal,
    closeCreateModal,
    isCreateModalOpen,
    createCarFormData,
    handleChangeCreateInput,
    onCreate,
    isFormDataValid
  };
};
