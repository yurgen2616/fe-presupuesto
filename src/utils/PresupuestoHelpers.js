
/**
 * Formatear monto como moneda
 * @param {number} monto
 * @param {string} currency 
 * @returns {string} 
 */
export const formatCurrency = (monto, currency = 'COP') => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(monto);
};

/**
 * Formatear fecha
 * @param {string} fecha 
 * @returns {string}
 */
export const formatDate = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Obtener color por estado
 * @param {string} estado
 * @returns {string}
 */
export const getEstadoColor = (estado) => {
  switch (estado) {
    case 'PENDIENTE':
      return 'warning';
    case 'APROBADO':
      return 'success';
    case 'RECHAZADO':
      return 'danger';
    default:
      return 'secondary';
  }
};

/**
 * Validar formato de fecha
 * @param {string} fecha
 * @returns {boolean} 
 */
export const isValidDate = (fecha) => {
  const date = new Date(fecha);
  return date instanceof Date && !isNaN(date);
};

/**
 * Crear objeto de presupuesto con valores por defecto
 * @param {Object} data
 * @returns {Object} 
 */
export const createPresupuestoObject = (data = {}) => {
  return {
    nombre: data.nombre || '',
    fecha: data.fecha || new Date().toISOString().split('T')[0],
    montoTotal: data.montoTotal || 0,
    estado: data.estado || 'PENDIENTE',
    ...data,
  };
};