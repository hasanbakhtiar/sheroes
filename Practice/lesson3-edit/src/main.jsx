import { createRoot } from 'react-dom/client'
import RouterApp from './routes/RouterApp'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { CategoryProvider } from './context/CategoryContext';
createRoot(document.getElementById('root')).render(
  <CategoryProvider>
    <RouterApp />
  </CategoryProvider>,
)
