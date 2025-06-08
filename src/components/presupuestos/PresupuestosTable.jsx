import React from 'react';
import PresupuestoRow from './PresupuestoRow';
import TableHeader from './TableHeader';
import EmptyState from './EmptyState';

const PresupuestosTable = ({ 
  presupuestos, 
  onEdit, 
  onDelete, 
  searchTerm, 
  onClearSearch,
  sortConfig,
  onSort
}) => {
  if (presupuestos.length === 0) {
    return (
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md bg-white">
        <table className="w-full border-collapse text-left text-sm text-gray-500">
          <TableHeader sortConfig={sortConfig} onSort={onSort} />
          <tbody>
            <tr>
              <td colSpan="6" className="px-6 py-12 text-center">
                <EmptyState 
                  searchTerm={searchTerm} 
                  onClearSearch={onClearSearch} 
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md bg-white">
      <table className="w-full border-collapse text-left text-sm text-gray-500">
        <TableHeader sortConfig={sortConfig} onSort={onSort} />
        <tbody className="divide-y divide-gray-100">
          {presupuestos.map(presupuesto => (
            <PresupuestoRow
              key={presupuesto.id}
              presupuesto={presupuesto}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PresupuestosTable;