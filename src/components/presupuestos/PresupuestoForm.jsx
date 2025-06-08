import FormField from './FormField';
import FormActions from './FormActions';

const PresupuestoForm = ({ formData, onChange, onSubmit, onCancel, isUpdate }) => (
  <form onSubmit={onSubmit}>
    <div className="space-y-6">
      <FormField
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={onChange}
        label="Nombre del Presupuesto *"
        required
      />

      <FormField
        type="date"
        name="fecha"
        value={formData.fecha}
        onChange={onChange}
        label="Fecha *"
        required
      />

      <FormField
        type="number"
        name="montoTotal"
        value={formData.montoTotal}
        onChange={onChange}
        label="Monto Total *"
        step="0.01"
        min="0"
        required
      />

      <div className="relative">
        <select
          name="estado"
          value={formData.estado}
          onChange={onChange}
          className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-500 transition-all duration-300 cursor-pointer"
        >
          <option value="PENDIENTE">Pendiente</option>
          <option value="APROBADO">Aprobado</option>
          <option value="RECHAZADO">Rechazado</option>
        </select>
        <label className="absolute left-3 top-1 text-blue-500 text-xs bg-white px-1 pointer-events-none">
          Estado
        </label>
      </div>

      <FormActions onCancel={onCancel} isUpdate={isUpdate} />
    </div>
  </form>
);

export default PresupuestoForm;