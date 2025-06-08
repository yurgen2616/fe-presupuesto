import React from 'react';
import { formatCurrency, formatDate } from '../../utils/PresupuestoHelpers';
import StatusBadge from './StatusBadge';
import ActionButtons from './ActionButtons';

const PresupuestoRow = ({ presupuesto, onEdit, onDelete }) => (
  <tr className="hover:bg-gray-50 transition-colors">
    <td className="px-6 py-4">
      <div className="text-sm font-medium text-gray-900">
        #{presupuesto.id}
      </div>
    </td>
    <td className="px-6 py-4">
      <div className="text-sm font-medium text-gray-900">
        {presupuesto.nombre}
      </div>
    </td>
    <td className="px-6 py-4">
      <div className="text-sm text-gray-700">
        {formatDate(presupuesto.fecha)}
      </div>
    </td>
    <td className="px-6 py-4">
      <div className="text-sm font-semibold text-green-600">
        {formatCurrency(presupuesto.montoTotal)}
      </div>
    </td>
    <td className="px-6 py-4">
      <StatusBadge status={presupuesto.estado} />
    </td>
    <td className="px-6 py-4">
      <ActionButtons 
        onEdit={() => onEdit(presupuesto)}
        onDelete={() => onDelete(presupuesto.id)}
      />
    </td>
  </tr>
);

export default PresupuestoRow;