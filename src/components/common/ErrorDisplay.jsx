const ErrorDisplay = ({ error }) => (
  <div className="flex justify-center items-center min-h-96">
    <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg max-w-md">
      <div className="flex items-center gap-2 mb-2">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <h3 className="font-bold">Error al cargar presupuestos</h3>
      </div>
      <p className="text-sm">{error}</p>
      <button 
        onClick={() => window.location.reload()} 
        className="mt-3 px-4 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors cursor-pointer"
      >
        Reintentar
      </button>
    </div>
  </div>
);

export default ErrorDisplay;