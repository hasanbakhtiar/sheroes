import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterApp from './routes/RouterApp'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
