import { Navigate } from 'react-router-dom'
import { useStoreApp } from '../store/'
interface PrivateRouteProps {
  children: JSX.Element
}
export const PrivateRoutes = ({ children }: PrivateRouteProps) => {
  const auth = useStoreApp((state) => state.isAuth)
  if (!auth) {
    return <Navigate to="/auth" replace />
  }

  return children
}
