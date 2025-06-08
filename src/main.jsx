import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PresupuestosList from './components/presupuestos/PresupuestosList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PresupuestosList />
  </StrictMode>,
)
