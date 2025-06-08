import React, { useState } from 'react';
import { UsePresupuestos } from "../../hooks/UsePresupuestos";
import { UsePagination } from "../../hooks/UsePagination"; 
import Modal from '../common/Modal';
import Pagination from '../common/Pagination';
import RowsPerPageSelector from '../common/RowsPerPageSelector';
import SearchInput from '../common/SearchImput';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorDisplay from '../common/ErrorDisplay';
import TableControls from './TableControls';
import PresupuestosTable from './PresupuestosTable';
import PresupuestoForm from './PresupuestoForm';
import FormField from './FormField';

const PresupuestosList = () => {
  const { 
    presupuestos, 
    loading, 
    error, 
    deletePresupuesto,
    createPresupuesto,
    updatePresupuesto 
  } = UsePresupuestos();

  const [showModal, setShowModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedPresupuesto, setSelectedPresupuesto] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    montoTotal: '',
    estado: 'PENDIENTE'
  });

  const {
    currentPage,
    rowsPerPage,
    searchTerm,
    totalPages,
    paginatedData,
    sortConfig,
    changePage,
    changeRowsPerPage,
    updateSearchTerm,
    clearSearch,
    getVisiblePages,
    handleSort,
    totalItems,
    startIndex,
    endIndex
  } = UsePagination(presupuestos || [], 10);

  const openCreateModal = () => {
    setIsUpdate(false);
    setSelectedPresupuesto(null);
    setFormData({
      nombre: '',
      fecha: '',
      montoTotal: '',
      estado: 'PENDIENTE'
    });
    setShowModal(true);
  };

  const openEditModal = (presupuesto) => {
    setIsUpdate(true);
    setSelectedPresupuesto(presupuesto);
    setFormData({
      nombre: presupuesto.nombre,
      fecha: presupuesto.fecha,
      montoTotal: presupuesto.montoTotal.toString(),
      estado: presupuesto.estado
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPresupuesto(null);
    setFormData({
      nombre: '',
      fecha: '',
      montoTotal: '',
      estado: 'PENDIENTE'
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    
    if (!formData.nombre.trim()) {
      alert('El nombre es requerido');
      return;
    }
    
    if (!formData.fecha) {
      alert('La fecha es requerida');
      return;
    }
    
    if (!formData.montoTotal || parseFloat(formData.montoTotal) <= 0) {
      alert('El monto debe ser mayor a 0');
      return;
    }

    try {
      const dataToSend = {
        ...formData,
        montoTotal: parseFloat(formData.montoTotal)
      };

      if (isUpdate && selectedPresupuesto) {
        await updatePresupuesto(selectedPresupuesto.id, dataToSend);
        alert('Presupuesto actualizado exitosamente');
      } else {
        await createPresupuesto(dataToSend);
        alert('Presupuesto creado exitosamente');
      }
      closeModal();
    } catch (err) {
      console.error('Error al guardar:', err);
      alert(`Error: ${err.message || 'Error desconocido'}`);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Está seguro de que desea eliminar este presupuesto?')) {
      try {
        await deletePresupuesto(id);
        alert('Presupuesto eliminado exitosamente');
      } catch (err) {
        console.error('Error al eliminar:', err);
        alert(`Error al eliminar: ${err.message || 'Error desconocido'}`);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getSortingInfo = () => {
    if (!sortConfig.key) return '';
    
    const columnNames = {
      nombre: 'Nombre',
      fecha: 'Fecha', 
      montoTotal: 'Monto Total',
      estado: 'Estado'
    };
    
    const direction = sortConfig.direction === 'asc' ? 'ascendente' : 'descendente';
    return `(ordenado por ${columnNames[sortConfig.key]} - ${direction})`;
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay error={error} />;

  return (
    <div className="m-3 space-y-4">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 items-center">Gestión de Presupuestos</h1>
      </div>

      <TableControls
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={changeRowsPerPage}
        searchTerm={searchTerm}
        onSearchChange={updateSearchTerm}
        onClearSearch={clearSearch}
        onCreateNew={openCreateModal}
      />

      <PresupuestosTable
        presupuestos={paginatedData}
        onEdit={openEditModal}
        onDelete={handleDelete}
        searchTerm={searchTerm}
        onClearSearch={clearSearch}
        sortConfig={sortConfig}
        onSort={handleSort}
      />

      {totalItems > 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-600">
            Mostrando <span className="font-medium">{startIndex}</span> a <span className="font-medium">{endIndex}</span> de <span className="font-medium">{totalItems}</span> resultados
            {searchTerm && (
              <span className="ml-2 text-blue-600">
                (filtrado por: "{searchTerm}")
              </span>
            )}
            {sortConfig.key && (
              <span className="ml-2 text-green-600">
                {getSortingInfo()}
              </span>
            )}
          </div>
          
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={changePage}
            getVisiblePages={getVisiblePages}
          />
        </div>
      )}

      <Modal
        isVisible={showModal}
        onClose={closeModal}
        title={isUpdate ? "Editar Presupuesto" : "Nuevo Presupuesto"}
        size="md"
      >
        <PresupuestoForm
          formData={formData}
          onChange={handleInputChange}
          onSubmit={handleSave}
          onCancel={closeModal}
          isUpdate={isUpdate}
        />
      </Modal>
    </div>
  );
};

export default PresupuestosList;