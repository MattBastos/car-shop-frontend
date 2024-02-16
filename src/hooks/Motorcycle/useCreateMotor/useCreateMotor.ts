import { createMotorcycle } from '@/api';
import { Motorcycle } from '@/types';
import { useState } from 'react';

export const useCreateMotor = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [createMotorFormData, setCreateMotorFormData] = useState<Motorcycle>({
    id: '',
    model: '',
    year: 0,
    color: '',
    status: false,
    buyValue: 0,
    category: '',
    engineCapacity: 0
  });

  const openCreateModal = () => {
    setCreateMotorFormData({
      id: '',
      model: '',
      year: 0,
      color: '',
      status: false,
      buyValue: 0,
      category: '',
      engineCapacity: 0
    });

    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => setIsCreateModalOpen(false);

  const handleChangeCreateInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setCreateMotorFormData((prevData) => ({
      ...prevData,
      [name]: name === 'status' ? value === 'true' : value
    }));
  };

  const onCreate = async () => {
    await createMotorcycle(createMotorFormData);
    setIsCreateModalOpen(false);
  };

  const isFormDataValid = (): boolean => {
    const isTextDataValid =
      createMotorFormData.model.trim().length >= 3 &&
      createMotorFormData.color.trim().length >= 3 &&
      createMotorFormData.category.trim().length >= 3;

    const isNumberDataValid =
      createMotorFormData.year.toString().length === 4 &&
      createMotorFormData.buyValue >= 5000 &&
      createMotorFormData.engineCapacity >= 50;

    return !(isTextDataValid && isNumberDataValid);
  };

  return {
    openCreateModal,
    closeCreateModal,
    isCreateModalOpen,
    createMotorFormData,
    handleChangeCreateInput,
    onCreate,
    isFormDataValid
  };
};
