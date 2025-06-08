import RowsPerPageSelector from '../common/RowsPerPageSelector';
import SearchInput from '../common/SearchImput';
const TableControls = ({ 
  rowsPerPage, 
  onRowsPerPageChange, 
  searchTerm, 
  onSearchChange, 
  onClearSearch, 
  onCreateNew 
}) => (
  <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Mostrar:</span>
        <RowsPerPageSelector
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={onRowsPerPageChange}
          options={[5, 10, 15, 20, 50]}
        />
        <span className="text-sm text-gray-600">por página</span>
      </div>
      
      <SearchInput
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        onClearSearch={onClearSearch}
        placeholder="Buscar presupuesto..."
        className="w-64"
      />
    </div>

    <div className="flex gap-3 items-center">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 shadow-sm cursor-pointer"
        onClick={onCreateNew}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        <span>Nuevo</span>
      </button>
    </div>
  </div>
);

export default TableControls;