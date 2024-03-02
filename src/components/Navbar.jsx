import { NavLink } from 'react-router-dom'
import { SchemeSwitch } from './SchemeSwitch'

export const Navbar = () => {
  const className = ({ isActive }) => { return isActive ? 'link visited' : 'link' }
  return (
    <nav className='navbar'>
      <span className='nav-items nav-left'>
        <NavLink className={className} to='home'>Home</NavLink>
        <NavLink className={className} to='streams'>Streams</NavLink>
        <NavLink className={className} to='party'>Party</NavLink>
        <NavLink className={className} to='premium'>Premium</NavLink>
      </span>
      <span className='logo'>
        <NavLink className='logo-link' to='home'>
          <span className='logo-widget' />
          <strong>Gamor</strong>
        </NavLink>
      </span>
      <span className='nav-items nav-right'>
        <SchemeSwitch />
        <NavLink className='link' to='login'>Sign in</NavLink>
        <NavLink className='btn-register' to='register'>Create Account</NavLink>
      </span>
    </nav>
  )
}
