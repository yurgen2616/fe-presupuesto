const StatusBadge = ({ status }) => {
  const getStatusClasses = (estado) => {
    switch (estado) {
      case 'APROBADO':
        return 'bg-green-100 text-green-800';
      case 'PENDIENTE':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusClasses(status)}`}>
      {status}
    </span>
  );
};

export default StatusBadge;