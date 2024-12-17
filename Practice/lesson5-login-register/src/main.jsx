import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App.jsx'
import { EndPointProvider } from './context/EndPointContext.jsx';

createRoot(document.getElementById('root')).render(
  <EndPointProvider>
    <App />
  </EndPointProvider>,
)
