import React from 'react';

/**
 * Componente de búsqueda reutilizable
 * @param {Object} props
 */
const SearchInput = ({
  searchTerm,
  onSearchChange,
  onClearSearch,
  placeholder = "Buscar...",
  className = "w-56"
}) => {
  return (
    <div className={`relative ${className}`}>
      <input 
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="peer w-full h-10 bg-transparent text-gray-700 placeholder-gray-400 border rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
      />
      <button 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition p-1 cursor-pointer"
        onClick={onClearSearch}
        type="button"
      >
        {searchTerm ? (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="6" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 15.5L20 20" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SearchInput;