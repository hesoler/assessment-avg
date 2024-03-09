import { NavLink } from 'react-router-dom'
import { SchemeSwitch } from './SchemeSwitch'
import { useAuth } from '../hooks/useAuth'

export const Navbar = () => {
  const { currentUser, logOut } = useAuth()
  const classVisited = ({ isActive }) => { return isActive ? 'link visited' : 'link' }

  return (
    <nav className='navbar'>
      <span className='nav-items nav-left'>
        <NavLink className={classVisited} to='/home'>Home</NavLink>
        <NavLink className={classVisited} to='/streams'>Streams</NavLink>
        <NavLink className={classVisited} to='/party'>Party</NavLink>
        <NavLink className={classVisited} to='/premium'>Premium</NavLink>
      </span>
      <span className='logo'>
        <NavLink className='logo-link' to='home'>
          <span className='logo-widget' />
          <strong>Gamor</strong>
        </NavLink>
      </span>
      <span className='nav-items nav-right'>
        <SchemeSwitch />
        {
          !currentUser
            ? <NavLink className='link' to='/login'>Sign in</NavLink>
            : <NavLink className='link' to='/login' onClick={() => logOut()}>Log out</NavLink>
        }
        <NavLink className='btn-register' to='register'>Create Account</NavLink>
      </span>
    </nav>
  )
}
