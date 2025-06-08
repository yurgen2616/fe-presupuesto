import { useState, useMemo } from 'react';

/**
 * Hook personalizado para manejar paginación, filtrado y ordenamiento
 * @param {Array} data 
 * @param {number} initialRowsPerPage 
 * @returns {Object}
 */
export const UsePagination = (data = [], initialRowsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;
    
    return data.filter(item => 
      Object.values(item)
        .join(' ')
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      // Manejo especial para diferentes tipos de datos
      if (sortConfig.key === 'montoTotal') {
        // Para números
        const numA = parseFloat(aValue) || 0;
        const numB = parseFloat(bValue) || 0;
        return sortConfig.direction === 'asc' ? numA - numB : numB - numA;
      } else if (sortConfig.key === 'fecha') {
        // Para fechas
        const dateA = new Date(aValue);
        const dateB = new Date(bValue);
        return sortConfig.direction === 'asc' ? dateA - dateB : dateB - dateA;
      } else {
        // Para strings
        const strA = String(aValue).toLowerCase();
        const strB = String(bValue).toLowerCase();
        if (strA < strB) return sortConfig.direction === 'asc' ? -1 : 1;
        if (strA > strB) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      }
    });
  }, [filteredData, sortConfig]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, currentPage, rowsPerPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(sortedData.length / rowsPerPage);
  }, [sortedData.length, rowsPerPage]);

  const getVisiblePages = () => {
    const delta = 2; 
    const range = [];
    const rangeWithDots = [];
    
    for (let i = Math.max(2, currentPage - delta); 
         i <= Math.min(totalPages - 1, currentPage + delta); 
         i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots.filter((v, i, a) => a.indexOf(v) === i);
  };

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const changeRowsPerPage = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); 
  };

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    } else if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = null;
      setSortConfig({ key: null, direction: null });
      return;
    }
    setSortConfig({ key, direction });
    setCurrentPage(1); // Reset to first page when sorting
  };

  const resetPagination = () => {
    setCurrentPage(1);
    setSearchTerm('');
    setSortConfig({ key: null, direction: null });
  };

  return {
    currentPage,
    rowsPerPage,
    searchTerm,
    totalPages,
    sortConfig,
    
    filteredData,
    paginatedData,
    
    changePage,
    changeRowsPerPage,
    updateSearchTerm,
    clearSearch,
    resetPagination,
    getVisiblePages,
    handleSort,
    
    totalItems: sortedData.length,
    startIndex: (currentPage - 1) * rowsPerPage + 1,
    endIndex: Math.min(currentPage * rowsPerPage, sortedData.length)
  };
};