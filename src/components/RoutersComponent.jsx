import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Party from '../pages/Party'
import Streams from '../pages/Streams'
import Premium from '../pages/Premium'
import Login from '../pages/Login'
import Register from '../pages/Register'

const RoutersComponent = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='party' element={<Party />} />
      <Route path='streams' element={<Streams />} />
      <Route path='premium' element={<Premium />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<Navigate to='home' />} />
    </Routes>
  )
}

export default RoutersComponent
