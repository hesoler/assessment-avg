import { createContext, useState } from 'react'
import { users } from '../mock/users.json'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(window.localStorage.getItem('user'))
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const loginAction = (credentials) => {
    const { username, password } = credentials
    const exist = users.find(user => user.username === username && user.password === password)

    if (exist) {
      setCurrentUser(exist)
      setError('')
      window.localStorage.setItem('user', JSON.stringify(exist))
      navigate('/home')
    } else {
      setError('User or password incorrect')
    }
  }

  const logOut = () => {
    setCurrentUser(null)
    setError('')
    window.localStorage.clear()
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{
      currentUser,
      error,
      setCurrentUser,
      setError,
      loginAction,
      logOut
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
