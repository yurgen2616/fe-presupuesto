const FormField = ({ type, name, value, onChange, label, ...props }) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={type !== 'date' ? " " : undefined}
      className="peer w-full px-3 py-3 border-2 border-gray-200 rounded-lg bg-transparent focus:outline-none focus:border-blue-500 transition-all duration-300"
      {...props}
    />
    <label className={`absolute left-3 ${type === 'date' ? 'top-1 text-blue-500 text-xs' : 'top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-blue-500 peer-focus:text-xs peer-valid:top-1 peer-valid:text-blue-500 peer-valid:text-xs'} bg-white px-1 pointer-events-none`}>
      {label}
    </label>
  </div>
);

export default FormField;