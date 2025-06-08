const FormActions = ({ onCancel, isUpdate }) => (
  <div className="flex justify-center space-x-4 mt-8 pt-4">
    <button
      type="button"
      onClick={onCancel}
      className="px-6 py-3 text-sm text-gray-600 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center gap-2 cursor-pointer"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
      Cancelar
    </button>
    <button
      type="submit"
      className="px-6 py-3 text-sm text-white bg-blue-500 border-2 border-blue-500 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 flex items-center gap-2 cursor-pointer"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
      {isUpdate ? 'Actualizar' : 'Crear'}
    </button>
  </div>
);

export default FormActions;