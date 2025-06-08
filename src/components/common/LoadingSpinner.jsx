const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-96">
    <div className="flex items-center gap-3">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      <span className="text-lg text-gray-600">Cargando presupuestos...</span>
    </div>
  </div>
);

export default LoadingSpinner;