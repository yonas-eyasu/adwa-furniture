
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css';
import App from './App';
import SofaDetails from './SofaDetails';
import DiningDetails from './DiningDetails';
import KitchenDetails from './KitchenDetails';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/product-details/sofa/:productId", element: <SofaDetails /> }, // Dynamic product details route
  { path: "/product-details/dining/:productId", element: <DiningDetails /> }, // Dynamic product details route
  { path: "/product-details/kitchen/:productId", element: <KitchenDetails /> }, // Dynamic product details route
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
