import { createContext, useEffect, useMemo, useState } from 'react'

export const SchemeContext = createContext()

export const SchemeProvider = ({ children }) => {
  const [wasDarkSchemeActivated, setWasDarkSchemeActivated] = useState(false)
  const [scheme, setScheme] = useState(
    {
      schemeColor: 'light',
      labelText: 'Light theme',
      fortniteCharacterImageUrl: '/images/fortnite-character-1.png'
    },
    [window.localStorage.getItem('scheme') || 'light']
  )

  const handleColorSchemeChange = (event) => {
    if ((window.matchMedia && event?.matches) || wasDarkSchemeActivated) {
      setScheme({
        schemeColor: 'dark',
        labelText: 'Dark theme',
        fortniteCharacterImageUrl: 'images/fortnite-character-2.png'
      })
      document.documentElement.setAttribute('toggleScheme', 'dark')
      setWasDarkSchemeActivated(true)
    } else {
      setScheme({
        schemeColor: 'light',
        labelText: 'Light theme',
        fortniteCharacterImageUrl: 'images/fortnite-character-1.png'
      })
      document.documentElement.setAttribute('toggleScheme', 'light')
      setWasDarkSchemeActivated(false)
    }
  }

  useEffect(() => {
    handleColorSchemeChange()
  }, [wasDarkSchemeActivated])

  useEffect(() => {
    const eventDark = window.matchMedia('(prefers-color-scheme: dark)')
    handleColorSchemeChange(eventDark)

    eventDark?.addEventListener('change', handleColorSchemeChange)
  }, [])

  const obj = useMemo(() => {
    const { schemeColor, labelText, fortniteCharacterImageUrl } = scheme
    return {
      wasDarkSchemeActivated,
      setWasDarkSchemeActivated,
      schemeColor,
      labelText,
      fortniteCharacterImageUrl
    }
  }, [wasDarkSchemeActivated, scheme])

  return (
    <SchemeContext.Provider value={obj}>{children}</SchemeContext.Provider>
  )
}
