import { createCar, deleteCar, getCars, updateCar } from '@/api/cars';
import { Car } from '@/types';
import { useEffect, useState } from 'react';

export const useCarTable = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [carsData, setCarsData] = useState<Car[]>([]);

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

  const fetchData = async () => {
    const data = await getCars();
    if (data) setCarsData(data);
  };

  const openCreateModal = () => setIsCreateModalOpen(true);

  const onCreate = async () => {
    await createCar(carFormData);
    setIsCreateModalOpen(false);

    await fetchData();
  };

  const closeCreateModal = () => setIsCreateModalOpen(false);

  const openEditModal = (carData: Car) => {
    setSelectedCarData(() => ({ ...carData }));
    setCarFormData(() => ({ ...carData }));

    setIsEditModalOpen(true);
  };

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

    await fetchData();
  };

  const closeEditModal = () => setIsEditModalOpen(false);

  const openDeleteModal = (carData: Car) => {
    setSelectedCarData(() => ({ ...carData }));

    setIsDeleteModalOpen(true);
  };

  const onDelete = async () => {
    await deleteCar(selectedCarData.id);
    setIsDeleteModalOpen(false);

    await fetchData();
  };

  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  useEffect(() => {
    fetchData();
  }, []);

  return {
    openCreateModal,
    closeCreateModal,
    isCreateModalOpen,
    carFormData,
    selectedCarData,
    handleInputChange,
    onCreate,
    isEditModalOpen,
    openEditModal,
    closeEditModal,
    onUpdate,
    isDeleteModalOpen,
    openDeleteModal,
    closeDeleteModal,
    onDelete,
    carsData
  };
};
