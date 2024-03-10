import { createContext, useEffect, useState } from 'react'

export const SchemeContext = createContext()

export const SchemeProvider = ({ children }) => {
  const [checked, setChecked] = useState(false)
  const [scheme, setScheme] = useState('')
  const [labelText, setLabelText] = useState('')

  const [fortniteCharacterImageUrl, setFortniteCharacterImageUrl] = useState('')
  const [boxFortniteCharacter1Position, setBoxFortniteCharacter1Position] = useState(0)
  const [boxFortniteCharacter2Position, setBoxFortniteCharacter2Position] = useState(0)

  const handleColorSchemeChange = event => {
    // se verifica por checked cuando se cambia el modo desde la página
    if ((window.matchMedia && event?.matches) || checked) {
      setChecked(true)
      setScheme('dark')
      setLabelText('Dark theme')
      document.documentElement.setAttribute('toggleScheme', 'dark')
      setFortniteCharacterImageUrl('src/assets/fortnite-character-2.png')
    } else {
      setChecked(false)
      setScheme('light')
      setLabelText('Light theme')
      document.documentElement.setAttribute('toggleScheme', 'light')
      setFortniteCharacterImageUrl('src/assets/fortnite-character-1.png')
    }
  }

  //* CÓDIGO PARA ACTIVAR TEMA DE COLOR DE LA APLICACIÓN DINÁMICAMENTE
  useEffect(() => {
    handleColorSchemeChange()
  }, [checked])

  useEffect(() => {
    // *ESTE CÓDIGO SOLO SE EJECUTA UNA VEZ, PUES ES PARA AÑADIR EL LISTENER
    /* Se utiliza el método matchMedia para determinar el modo de tema (claro o oscuro)
      que el usuario ha establecido en su sistema. Primeramente se verifica si el navegador
      admite matchMedia y si el usuario ha seleccionado el modo oscuro utilizando el argumento
     '(prefers-color-scheme: dark)'. Si es el caso, se activará el modo oscuro en la página. */
    const eventDark = window.matchMedia('(prefers-color-scheme: dark)')
    handleColorSchemeChange(eventDark)
    /* Luego, se agrega un evento de escucha de cambios mediante addEventListener en el objeto matchMedia
    con el argumento 'change'. Si el evento de cambio indica que el usuario ha cambiado a modo oscuro,
    se cambiará al tema oscuro en la página. Este código permite detectar y reaccionar al cambio de modo
    de tema elegido por el usuario en tiempo real. */
    eventDark?.addEventListener('change', handleColorSchemeChange)
  }, [])

  return (
    <SchemeContext.Provider value={{
      scheme,
      labelText,
      fortniteCharacterImageUrl,
      boxFortniteCharacter1Position,
      boxFortniteCharacter2Position,
      setChecked,
      setScheme,
      setLabelText,
      handleColorSchemeChange,
      setBoxFortniteCharacter1Position,
      setBoxFortniteCharacter2Position
    }}
    >
      {children}
    </SchemeContext.Provider>
  )
}
