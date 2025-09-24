import PropTypes from 'prop-types'
import { createContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { users } from '../mock/users.json'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    window.localStorage.getItem('user')
  )
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const loginAction = (credentials) => {
    const { username, password } = credentials
    const exist = users.find(
      (user) => user.username === username && user.password === password
    )

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

  const obj = useMemo(
    () => ({
      currentUser,
      error,
      setCurrentUser,
      setError,
      loginAction,
      logOut
    }),
    [currentUser, error]
  )

  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
