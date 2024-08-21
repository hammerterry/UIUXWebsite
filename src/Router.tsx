import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Product } from './pages/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/product',
    element: <Product />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
