export const ESTADOS_PRESUPUESTO = {
  PENDIENTE: 'PENDIENTE',
  APROBADO: 'APROBADO',
  RECHAZADO: 'RECHAZADO',
};

export const ESTADOS_OPTIONS = [
  { value: ESTADOS_PRESUPUESTO.PENDIENTE, label: 'Pendiente' },
  { value: ESTADOS_PRESUPUESTO.APROBADO, label: 'Aprobado' },
  { value: ESTADOS_PRESUPUESTO.RECHAZADO, label: 'Rechazado' },
];

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Error de conexión. Verifique su conexión a internet.',
  SERVER_ERROR: 'Error interno del servidor. Intente nuevamente.',
  NOT_FOUND: 'El recurso solicitado no fue encontrado.',
  VALIDATION_ERROR: 'Los datos proporcionados no son válidos.',
  UNAUTHORIZED: 'No tiene permisos para realizar esta acción.',
};

export const SUCCESS_MESSAGES = {
  CREATE: 'Presupuesto creado exitosamente.',
  UPDATE: 'Presupuesto actualizado exitosamente.',
  DELETE: 'Presupuesto eliminado exitosamente.',
};