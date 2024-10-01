import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App'
import Login from './components/Login';
import Basket from './components/Basket';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Basket />
  </StrictMode>,
)
