import React from 'react';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  getVisiblePages,
  className = ""
}) => {
  if (totalPages <= 1) return null;

  const visiblePages = getVisiblePages();

  return (
    <div className={`flex justify-center mt-4 ${className}`}>
      <nav>
        <ul className="flex">
          <li>
            <button 
              onClick={() => onPageChange(1)} 
              disabled={currentPage === 1}
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-transparent p-0 text-sm text-gray-500 transition duration-150 ease-in-out hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Primera página"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
          </li>

          <li>
            <button 
              onClick={() => onPageChange(currentPage - 1)} 
              disabled={currentPage === 1}
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-transparent p-0 text-sm text-gray-500 transition duration-150 ease-in-out hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Página anterior"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </li>

          {visiblePages.map((page, index) => (
            <li key={index}>
              {page === '...' ? (
                <span className="mx-1 flex h-9 w-9 items-center justify-center text-sm text-gray-500">
                  ...
                </span>
              ) : (
                <button 
                  onClick={() => onPageChange(page)} 
                  className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full border p-0 text-sm transition duration-150 ease-in-out hover:bg-gray-200 cursor-pointer ${
                    currentPage === page
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'border-gray-300 text-gray-500'
                  }`}
                >
                  {page}
                </button>
              )}
            </li>
          ))}

          <li>
            <button 
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-transparent p-0 text-sm text-gray-500 transition duration-150 ease-in-out hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Página siguiente"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </li>

          <li>
            <button 
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-transparent p-0 text-sm text-gray-500 transition duration-150 ease-in-out hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Última página"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;