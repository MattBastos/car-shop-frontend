import { updateMotorcycle } from '@/api';
import { Motorcycle } from '@/types';
import { useState } from 'react';

export const useEditMotor = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [selectedEditMotorData, setSelectedEditMotorData] =
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

  const [motorFormData, setMotorFormData] = useState<Motorcycle>({
    id: '',
    model: '',
    year: 0,
    color: '',
    status: false,
    buyValue: 0,
    category: '',
    engineCapacity: 0
  });

  const openEditModal = (motorData: Motorcycle) => {
    setSelectedEditMotorData(() => ({ ...motorData }));
    setMotorFormData(() => ({ ...motorData }));

    setIsEditModalOpen(true);
  };

  const closeEditModal = () => setIsEditModalOpen(false);

  const handleChangeEditMotor = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMotorFormData((prevData) => ({
      ...prevData,
      [name]: name === 'status' ? value === 'true' : value
    }));
  };

  const onUpdate = async () => {
    await updateMotorcycle(motorFormData);
    setIsEditModalOpen(false);
  };

  return {
    isEditModalOpen,
    openEditModal,
    closeEditModal,
    selectedEditMotorData,
    motorFormData,
    handleChangeEditMotor,
    onUpdate
  };
};
