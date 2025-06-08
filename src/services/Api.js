const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const defaultConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * Interceptor para manejar respuestas HTTP
 * @param {Response} response
 * @returns {Promise} 
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    
    const error = new Error(errorData.message || `HTTP Error: ${response.status}`);
    error.status = response.status;
    error.data = errorData;
    
    throw error;
  }
  if (response.status === 204) {
    return null;
  }
  
  return response.json();
};

/**
 * Función genérica para realizar peticiones HTTP
 * @param {string} endpoint 
 * @param {Object} config 
 * @returns {Promise} 
 */
const apiRequest = async (endpoint, config = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const requestConfig = {
    ...defaultConfig,
    ...config,
    headers: {
      ...defaultConfig.headers,
      ...config.headers,
    },
  };

  try {
    const response = await fetch(url, requestConfig);
    return await handleResponse(response);
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export { apiRequest };