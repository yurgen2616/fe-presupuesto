import React from 'react';

const SortableHeader = ({ 
  children, 
  sortKey, 
  sortConfig, 
  onSort, 
  className = "",
  sortable = true 
}) => {
  const getSortIcon = () => {
    if (!sortable) return null;
    
    if (sortConfig.key !== sortKey) {
      return (
        <svg className="w-4 h-4 ml-2 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l4-4 4 4M8 15l4 4 4-4" />
        </svg>
      );
    }
    
    if (sortConfig.direction === 'asc') {
      return (
        <svg className="w-4 h-4 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      );
    }
    
    if (sortConfig.direction === 'desc') {
      return (
        <svg className="w-4 h-4 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      );
    }
  };

  const handleClick = () => {
    if (sortable && onSort) {
      onSort(sortKey);
    }
  };

  return (
    <th 
      className={`px-6 py-4 font-medium text-white ${sortable ? 'cursor-pointer select-none group hover:bg-gray-700 transition-colors' : ''} ${className}`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-start">
        {children}
        {getSortIcon()}
      </div>
    </th>
  );
};

export default SortableHeader;