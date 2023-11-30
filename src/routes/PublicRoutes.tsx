import { Navigate } from 'react-router-dom'
import { Login } from '../pages/Login'
import { useStoreApp } from '../store'
export const isAuthenticated = true
export const PublicRoutes = () => { 
  const auth = useStoreApp((state) => state.isAuth)
  if(auth) {
    return <Navigate to="/" replace />
  }
  return <Login/>
}
