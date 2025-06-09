# 📊 Sistema de Gestión de Presupuestos

Una aplicación web moderna desarrollada en React para la gestión completa de presupuestos, que permite crear, editar, eliminar y visualizar presupuestos con funcionalidades avanzadas de filtrado, búsqueda y paginación.

## ✨ Características Principales

- **Gestión Completa de Presupuestos**: Crear, editar, eliminar y visualizar presupuestos
- **Estados de Presupuesto**: Pendiente, Aprobado, Rechazado
- **Búsqueda Avanzada**: Filtrado en tiempo real por cualquier campo
- **Ordenamiento Dinámico**: Ordenar por nombre, fecha, monto o estado
- **Paginación Inteligente**: Navegación eficiente con control de filas por página
- **Interfaz Responsive**: Diseño adaptable para dispositivos móviles y desktop
- **Validaciones**: Validación robusta de datos en cliente y servidor
- **Manejo de Errores**: Sistema completo de manejo y visualización de errores

## 🛠 Tecnologías Utilizadas

- **Frontend**: React 18+ con Hooks
- **Estilos**: Tailwind CSS
- **Arquitectura**: Componentes funcionales y hooks personalizados
- **API**: RESTful API con validaciones
- **Estado**: React Hooks (useState, useEffect, useMemo)

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── common/                    # Componentes reutilizables
│   │   ├── ErrorDisplay.jsx      # Visualización de errores
│   │   ├── LoadingSpinner.jsx    # Indicador de carga
│   │   ├── Modal.jsx             # Modal genérico
│   │   ├── Pagination.jsx        # Componente de paginación
│   │   ├── RowsPerPageSelector.jsx
│   │   └── SearchInput.jsx       # Campo de búsqueda
│   │
│   └── presupuestos/             # Componentes específicos
│       ├── ActionButtons.jsx     # Botones de acción
│       ├── EmptyState.jsx        # Estado vacío
│       ├── FormActions.jsx       # Acciones del formulario
│       ├── FormField.jsx         # Campo de formulario
│       ├── PresupuestoForm.jsx   # Formulario principal
│       ├── PresupuestoRow.jsx    # Fila de tabla
│       ├── PresupuestosList.jsx  # Componente principal
│       ├── PresupuestosTable.jsx # Tabla de presupuestos
│       ├── SortableHeader.jsx    # Encabezado ordenable
│       ├── StatusBadge.jsx       # Badge de estado
│       ├── TableControls.jsx     # Controles de tabla
│       └── TableHeader.jsx       # Encabezado de tabla
│
├── hooks/                        # Hooks personalizados
│   ├── UsePagination.js         # Hook para paginación y filtros
│   └── UsePresupuestos.js       # Hook para gestión de presupuestos
│
├── services/                     # Servicios de API
│   ├── api.js                   # Configuración base de API
│   └── presupuestoService.js    # Servicio de presupuestos
│
├── constants/                    # Constantes de la aplicación
│   └── PresupuestoConstants.js  # Estados y mensajes
│
└── utils/                       # Utilidades
    └── PresupuestoHelpers.js    # Funciones auxiliares
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn
- Servidor backend configurado

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/presupuestos-frontend.git
   cd presupuestos-frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**
   ```bash
   # Crear archivo .env en la raíz del proyecto
   VITE_API_URL=http://tu-servidor-backend:puerto
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Compilar para producción**
   ```bash
   npm run build
   # o
   yarn build
   ```

## 📋 API Endpoints

La aplicación consume los siguientes endpoints:

- `GET /api/presupuestos` - Obtener todos los presupuestos
- `GET /api/presupuestos/:id` - Obtener presupuesto por ID
- `POST /api/presupuestos` - Crear nuevo presupuesto
- `PUT /api/presupuestos/:id` - Actualizar presupuesto
- `DELETE /api/presupuestos/:id` - Eliminar presupuesto

### Estructura de Datos

```json
{
  "id": 1,
  "nombre": "Proyecto Web",
  "fecha": "2024-12-15",
  "montoTotal": 150000,
  "estado": "PENDIENTE"
}
```

## 🎯 Funcionalidades Detalladas

### Gestión de Presupuestos

- **Crear**: Formulario modal con validaciones en tiempo real
- **Editar**: Formulario prellenado con datos existentes
- **Eliminar**: Confirmación antes de eliminar
- **Visualizar**: Tabla responsive con toda la información

### Filtrado y Búsqueda

- Búsqueda global que incluye todos los campos
- Filtrado en tiempo real sin necesidad de botones
- Indicadores visuales de filtros activos

### Ordenamiento

- Ordenamiento por cualquier columna
- Tres estados: ascendente, descendente, sin ordenar
- Indicadores visuales del estado de ordenamiento

### Paginación

- Control de número de elementos por página
- Navegación intuitiva con puntos suspensivos
- Información detallada de registros mostrados

## 🔧 Hooks Personalizados

### UsePagination

Hook que maneja toda la lógica de paginación, filtrado y ordenamiento:

```javascript
const {
  currentPage,
  rowsPerPage,
  searchTerm,
  totalPages,
  paginatedData,
  sortConfig,
  changePage,
  changeRowsPerPage,
  updateSearchTerm,
  handleSort
} = UsePagination(data, 10);
```

### UsePresupuestos

Hook para la gestión del estado de presupuestos:

```javascript
const {
  presupuestos,
  loading,
  error,
  createPresupuesto,
  updatePresupuesto,
  deletePresupuesto
} = UsePresupuestos();
```

## 🎨 Estilos y Temas

La aplicación utiliza Tailwind CSS con:

- **Colores**: Paleta moderna con azules y grises
- **Estados**: Colores semánticos para pendiente (amarillo), aprobado (verde), rechazado (rojo)
- **Responsive**: Breakpoints móviles y desktop
- **Animaciones**: Transiciones suaves en hover y focus

## 🛡 Validaciones

### Frontend
- Campos requeridos
- Formato de fecha válido
- Monto mayor a cero
- Estados válidos

### Backend
- Validación de tipos de datos
- Rangos de valores
- Integridad referencial

## 📱 Responsive Design

La aplicación está optimizada para:

- **Desktop**: Tabla completa con todas las funcionalidades
- **Tablet**: Adaptación de columnas y controles
- **Mobile**: Vista optimizada con elementos apilados

## 🚨 Manejo de Errores

- **Errores de red**: Mensajes amigables para problemas de conexión
- **Errores de validación**: Feedback inmediato en formularios
- **Errores de servidor**: Manejo de códigos HTTP con mensajes descriptivos
- **Estados de carga**: Indicadores visuales durante operaciones

## 🔄 Estados de la Aplicación

- **PENDIENTE**: Estado inicial de presupuestos
- **APROBADO**: Presupuestos aprobados para ejecución
- **RECHAZADO**: Presupuestos que no fueron aprobados

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@yurgen2616](https://github.com/yurgen2616)
- Email: yurgen2616@hotmail.com
