import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import Home from '../Home';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoutes>
        <Home />
      </PrivateRoutes>
    )
  },
  {
    path: '/auth',
    element: <PublicRoutes />
  }, 
  {
    path: '*',
    element: <h1>Not found</h1>
  }
])
export const AppRouter = () => {
  return (
    <main className='p-10'>
      <RouterProvider router={router} />
      <Toaster />
    </main>
  )
}
