import React from 'react';

/**
 * Componente Modal reutilizable
 * @param {Object} props 
 */
const Modal = ({
  isVisible,
  onClose,
  title,
  children,
  size = 'md'
}) => {
  if (!isVisible) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto">
      <div className={`relative w-full ${sizeClasses[size]} mx-4 my-8`}>
        <div className="bg-white border-0 shadow-lg rounded-3xl p-8">
          <div className="flex justify-end mb-4">
            <button
              className="flex items-center justify-center w-8 h-8 border-2 border-gray-500 text-gray-500 rounded-full hover:border-gray-700 hover:text-gray-700 transition duration-300 cursor-pointer"
              onClick={onClose}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
            {title && (
              <div className="text-2xl font-bold mb-8 text-center">
                <span style={{ 
                  display: 'inline-block',
                  textTransform: 'none',
                  transition: 'none',
                  animation: 'none',
                  transform: 'none'
                }}>
                  {title}
                </span>
              </div>
            )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;