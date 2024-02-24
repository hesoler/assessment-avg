//* input que hace el cambio de tema
const toggleTheme = document.querySelector('#theme')

//* Evento de escucha para cuando el usuario active el tema al clickear el input
toggleTheme.addEventListener('change', (event) => {
  const setTheme = event.target.checked ? 'dark' : 'light'
  document.documentElement.setAttribute('toggleTheme', setTheme)
})

/*
* Se utiliza el método matchMedia para determinar el modo de tema (claro o oscuro) que el usuario ha establecido en su sistema. Primeramente se verifica si el navegador admite matchMedia y si el usuario ha seleccionado el modo oscuro utilizando el argumento '(prefers-color-scheme: dark)'. Si es el caso, se activará automáticamente el modo oscuro en la página. */
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  toggleTheme.checked = true
  document.documentElement.setAttribute('toggleTheme', 'dark')
} else {
  toggleTheme.checked = false
  document.documentElement.setAttribute('toggleTheme', 'light')
}
/*
*Luego, se agrega un evento de escucha de cambios mediante addEventListener en el objeto matchMedia con el argumento 'change'. Si el evento de cambio indica que el usuario ha cambiado a modo oscuro, se establece el atributo toggleTheme en «dark», en caso contrario se establece en «light». Este código permite detectar y reaccionar al cambio de modo de tema elegido por el usuario en tiempo real.
*/
const eventDark = window.matchMedia('(prefers-color-scheme: dark)')
eventDark.addEventListener('change', (event) => {
  if (event.matches) {
    // dark mode
    toggleTheme.checked = true
    document.documentElement.setAttribute('toggleTheme', 'dark')
  } else {
    // light mode
    toggleTheme.checked = false
    document.documentElement.setAttribute('toggleTheme', 'light')
  }
})
