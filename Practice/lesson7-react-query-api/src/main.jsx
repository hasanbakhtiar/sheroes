import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App.jsx'
import { EndPointProvider } from './context/EndPointContext.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const query = new QueryClient();

createRoot(document.getElementById('root')).render(
  <EndPointProvider>
    <QueryClientProvider client={query}>
      <App />
    </QueryClientProvider>
  </EndPointProvider>,
)
