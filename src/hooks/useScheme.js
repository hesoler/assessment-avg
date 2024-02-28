import { useEffect, useState } from 'react'

export const useScheme = () => {
  const [scheme, setScheme] = useState('')
  const [labelText, setLabelText] = useState('')

  useEffect(() => {
    /*
      * Se utiliza el método matchMedia para determinar el modo de tema (claro o oscuro)
      * que el usuario ha establecido en su sistema. Primeramente se verifica si el navegador
      * admite matchMedia y si el usuario ha seleccionado el modo oscuro utilizando el argumento
      * '(prefers-color-scheme: dark)'. Si es el caso, se activará el modo oscuro en la página.
      * */
    const handleColorSchemeChange = (event) => {
      if (window.matchMedia && event.matches) {
        setScheme('dark')
        setLabelText('Dark theme')
        document.documentElement.setAttribute('toggleScheme', 'dark')
      } else {
        setScheme('light')
        setLabelText('Light theme')
        document.documentElement.setAttribute('toggleScheme', 'light')
      }
    }
    const eventDark = window.matchMedia('(prefers-color-scheme: dark)')
    handleColorSchemeChange(eventDark)
    /*
  * Luego, se agrega un evento de escucha de cambios mediante addEventListener en el objeto matchMedia
  * con el argumento 'change'. Si el evento de cambio indica que el usuario ha cambiado a modo oscuro,
  * se cambiará al tema oscuro en la página. Este código permite detectar y reaccionar al cambio de modo
  * de tema elegido por el usuario en tiempo real. */
    eventDark?.addEventListener('change', handleColorSchemeChange)
  }, [])

  return { labelText, scheme, setLabelText, setScheme }
}
