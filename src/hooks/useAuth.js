import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useAuth = () => {
  const { currentUser, error, checkUser, setCurrentUser, setError, loginAction, logOut } = useContext(AuthContext)

  return { currentUser, error, setCurrentUser, setError, checkUser, loginAction, logOut }
}
