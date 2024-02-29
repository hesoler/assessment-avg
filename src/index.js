document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-left a')

  // funcion que añade el borde redondo al enlace visitado adaptado a la longitud del
  // texto de dicho enlace
  const handleClassVisited = (event) => {
    links.forEach(link => link.classList.remove('visited'))
    event.target.classList.add('visited')
    const width = (event.target.innerText.length) + 'rem'

    document.styleSheets[0].addRule('.visited::before', 'width: ' + width + ';')
  }

  links.forEach(link => {
    link.addEventListener('click', handleClassVisited)
  })
})
