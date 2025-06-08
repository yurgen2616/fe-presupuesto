import { useState, useEffect } from 'react';
import PresupuestoService from '../services/presupuestoService';

/**
 * Hook personalizado para manejar el estado de presupuestos
 * @returns {Object}
 */
export const UsePresupuestos = () => {
  const [presupuestos, setPresupuestos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPresupuestos = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await PresupuestoService.getAll();
      setPresupuestos(data);
    } catch (err) {
      setError(err.message);
      console.error('Error loading presupuestos:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Crear un nuevo presupuesto
   * @param {Object} presupuestoData 
   */
  const createPresupuesto = async (presupuestoData) => {
    setLoading(true);
    setError(null);
    
    try {
      const newPresupuesto = await PresupuestoService.create(presupuestoData);
      setPresupuestos(prev => [...prev, newPresupuesto]);
      return newPresupuesto;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Actualizar un presupuesto existente
   * @param {number} id 
   * @param {Object} presupuestoData 
   */
  const updatePresupuesto = async (id, presupuestoData) => {
    setLoading(true);
    setError(null);
    
    try {
      const updatedPresupuesto = await PresupuestoService.update(id, presupuestoData);
      setPresupuestos(prev => 
        prev.map(p => p.id === id ? updatedPresupuesto : p)
      );
      return updatedPresupuesto;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Eliminar un presupuesto
   * @param {number} id
   */
  const deletePresupuesto = async (id) => {
    setLoading(true);
    setError(null);
    
    try {
      await PresupuestoService.delete(id);
      setPresupuestos(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Obtener un presupuesto por ID
   * @param {number} id 
   */
  const getPresupuestoById = async (id) => {
    setLoading(true);
    setError(null);
    
    try {
      const presupuesto = await PresupuestoService.getById(id);
      return presupuesto;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPresupuestos();
  }, []);

  return {
    presupuestos,
    loading,
    error,
    loadPresupuestos,
    createPresupuesto,
    updatePresupuesto,
    deletePresupuesto,
    getPresupuestoById,
    setError,
  };
};