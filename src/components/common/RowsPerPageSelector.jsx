import React from 'react';

/**
 * Componente selector de filas por página
 * @param {Object} props - Propiedades del componente
 */
const RowsPerPageSelector = ({
  rowsPerPage,
  onRowsPerPageChange,
  options = [5, 10, 15, 20, 50],
  className = ""
}) => {
  return (
    <div className={className}>
      <label htmlFor="rowsPerPage" className="sr-only">
        Filas por página:
      </label>
      <select 
        id="rowsPerPage" 
        value={rowsPerPage} 
        onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RowsPerPageSelector;