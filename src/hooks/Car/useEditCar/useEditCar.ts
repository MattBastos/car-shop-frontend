import { updateCar } from '@/api/cars';
import { Car } from '@/types';
import { useState } from 'react';

export const useEditCar = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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

  const openEditModal = (carData: Car) => {
    setSelectedCarData(() => ({ ...carData }));
    setCarFormData(() => ({ ...carData }));

    setIsEditModalOpen(true);
  };

  const closeEditModal = () => setIsEditModalOpen(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCarFormData((prevData) => ({
      ...prevData,
      [name]: name === 'status' ? value === 'true' : value
    }));
  };

  const onUpdate = async () => {
    await updateCar(carFormData);
    setIsEditModalOpen(false);
  };

  return {
    isEditModalOpen,
    openEditModal,
    closeEditModal,
    selectedCarData,
    carFormData,
    handleInputChange,
    onUpdate
  };
};