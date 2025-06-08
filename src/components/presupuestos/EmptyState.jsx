const EmptyState = ({ searchTerm, onClearSearch }) => (
  <div className="flex flex-col items-center gap-3">
    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
    <p className="text-gray-500 text-lg">
      {searchTerm ? 'No se encontraron presupuestos' : 'No hay presupuestos disponibles'}
    </p>
    {searchTerm && (
      <button 
        onClick={onClearSearch}
        className="px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
      >
        Limpiar búsqueda
      </button>
    )}
  </div>
);

export default EmptyState;