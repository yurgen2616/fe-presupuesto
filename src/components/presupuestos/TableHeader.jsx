import React from 'react';
import SortableHeader from './SortableHeader';

const TableHeader = ({ sortConfig, onSort }) => (
  <thead className="bg-gray-800">
    <tr>
      <SortableHeader sortable={false} className="text-left">
        ID
      </SortableHeader>
      
      <SortableHeader 
        sortKey="nombre" 
        sortConfig={sortConfig} 
        onSort={onSort}
        className="text-left"
      >
        Nombre
      </SortableHeader>
      
      <SortableHeader 
        sortKey="fecha" 
        sortConfig={sortConfig} 
        onSort={onSort}
        className="text-left"
      >
        Fecha
      </SortableHeader>
      
      <SortableHeader 
        sortKey="montoTotal" 
        sortConfig={sortConfig} 
        onSort={onSort}
        className="text-left"
      >
        Monto Total
      </SortableHeader>
      
      <SortableHeader 
        sortKey="estado" 
        sortConfig={sortConfig} 
        onSort={onSort}
        className="text-left"
      >
        Estado
      </SortableHeader>
      
      <SortableHeader sortable={false} className="text-center">
        Acciones
      </SortableHeader>
    </tr>
  </thead>
);

export default TableHeader;