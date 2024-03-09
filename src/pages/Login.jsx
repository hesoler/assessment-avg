import { useState } from 'react'
import '../styles/Login.css'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const { currentUser, error, loginAction } = useAuth()

  const handleSubmit = event => {
    event.preventDefault()
    loginAction(credentials)
  }

  const handleInput = event => {
    const { name, value } = event.target
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return !currentUser && (
    <section className='login'>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} className='login-form'>
        <p className='error'>{error || ''}</p>
        <input
          name='username'
          type='text'
          placeholder='Username'
          required
          onChange={handleInput}
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
          required
          onChange={handleInput}
        />
        <button>Login</button>
      </form>
    </section>
  )
}

export default Login
