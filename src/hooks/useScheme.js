import { useContext } from 'react'
import { SchemeContext } from '../context/SchemeContext'

export const useScheme = () => {
  const schemeContext = useContext(SchemeContext)

  if (!schemeContext) {
    throw new Error('useScheme must be used within a SchemeProvider')
  }

  return schemeContext
}
