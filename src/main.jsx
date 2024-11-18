import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './styles/GlobalStyles';
import { RouterProvider } from 'react-router-dom';
import router from './routes.jsx';
import { AuthProvider } from './scripts/authContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <AuthProvider> {/* Certifique-se de que AuthProvider envolve RouterProvider */}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);