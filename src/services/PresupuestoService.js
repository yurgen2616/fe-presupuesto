import { apiRequest } from './api';

const ENDPOINTS = {
  PRESUPUESTOS: '/api/presupuestos',
  PRESUPUESTO_BY_ID: (id) => `/api/presupuestos/${id}`,
};

class PresupuestoService {
  
  /**
   * Obtener todos los presupuestos
   * @returns {Promise<Array>} 
   */
  static async getAll() {
    try {
      return await apiRequest(ENDPOINTS.PRESUPUESTOS, {
        method: 'GET',
      });
    } catch (error) {
      throw new Error(`Error al obtener presupuestos: ${error.message}`);
    }
  }

  /**
   * Obtener un presupuesto por ID
   * @param {number} id
   * @returns {Promise<Object>}
   */
  static async getById(id) {
    if (!id) {
      throw new Error('ID es requerido');
    }

    try {
      return await apiRequest(ENDPOINTS.PRESUPUESTO_BY_ID(id), {
        method: 'GET',
      });
    } catch (error) {
      if (error.status === 404) {
        throw new Error(`Presupuesto con ID ${id} no encontrado`);
      }
      throw new Error(`Error al obtener presupuesto: ${error.message}`);
    }
  }

  /**
   * Crear un nuevo presupuesto
   * @param {Object} presupuestoData 
   * @returns {Promise<Object>} 
   */
  static async create(presupuestoData) {
    if (!presupuestoData) {
      throw new Error('Datos del presupuesto son requeridos');
    }

    this.validatePresupuestoData(presupuestoData);

    try {
      return await apiRequest(ENDPOINTS.PRESUPUESTOS, {
        method: 'POST',
        body: JSON.stringify(presupuestoData),
      });
    } catch (error) {
      if (error.status === 400) {
        throw new Error(`Datos inválidos: ${JSON.stringify(error.data)}`);
      }
      throw new Error(`Error al crear presupuesto: ${error.message}`);
    }
  }

  /**
   * Actualizar un presupuesto existente
   * @param {number} id
   * @param {Object} presupuestoData
   * @returns {Promise<Object>}
   */
  static async update(id, presupuestoData) {
    if (!id) {
      throw new Error('ID es requerido');
    }
    
    if (!presupuestoData) {
      throw new Error('Datos del presupuesto son requeridos');
    }

    this.validatePresupuestoData(presupuestoData);

    try {
      return await apiRequest(ENDPOINTS.PRESUPUESTO_BY_ID(id), {
        method: 'PUT',
        body: JSON.stringify(presupuestoData),
      });
    } catch (error) {
      if (error.status === 404) {
        throw new Error(`Presupuesto con ID ${id} no encontrado`);
      }
      if (error.status === 400) {
        throw new Error(`Datos inválidos: ${JSON.stringify(error.data)}`);
      }
      throw new Error(`Error al actualizar presupuesto: ${error.message}`);
    }
  }

  /**
   * Eliminar un presupuesto
   * @param {number} id 
   * @returns {Promise<void>}
   */
  static async delete(id) {
    if (!id) {
      throw new Error('ID es requerido');
    }

    try {
      await apiRequest(ENDPOINTS.PRESUPUESTO_BY_ID(id), {
        method: 'DELETE',
      });
    } catch (error) {
      if (error.status === 404) {
        throw new Error(`Presupuesto con ID ${id} no encontrado`);
      }
      throw new Error(`Error al eliminar presupuesto: ${error.message}`);
    }
  }

  /**
   * Validar datos del presupuesto
   * @param {Object} data
   */
  static validatePresupuestoData(data) {
    const { nombre, fecha, montoTotal, estado } = data;

    if (!nombre || nombre.trim() === '') {
      throw new Error('El nombre es obligatorio');
    }

    if (!fecha) {
      throw new Error('La fecha es obligatoria');
    }

    if (!montoTotal || montoTotal < 0) {
      throw new Error('El monto total debe ser mayor o igual a 0');
    }

    const estadosValidos = ['PENDIENTE', 'APROBADO', 'RECHAZADO'];
    if (!estado || !estadosValidos.includes(estado)) {
      throw new Error('El estado debe ser PENDIENTE, APROBADO o RECHAZADO');
    }
  }

  /**
   * Obtener presupuestos por estado
   * @param {string} estado
   * @returns {Promise<Array>}
   */
  static async getByEstado(estado) {
    try {
      const presupuestos = await this.getAll();
      return presupuestos.filter(p => p.estado === estado);
    } catch (error) {
      throw new Error(`Error al filtrar presupuestos por estado: ${error.message}`);
    }
  }

  /**
   * Obtener presupuestos por rango de fechas
   * @param {string} fechaInicio
   * @param {string} fechaFin 
   * @returns {Promise<Array>}
   */
  static async getByRangoFechas(fechaInicio, fechaFin) {
    try {
      const presupuestos = await this.getAll();
      return presupuestos.filter(p => {
        const fecha = new Date(p.fecha);
        return fecha >= new Date(fechaInicio) && fecha <= new Date(fechaFin);
      });
    } catch (error) {
      throw new Error(`Error al filtrar presupuestos por fecha: ${error.message}`);
    }
  }
}

export default PresupuestoService;