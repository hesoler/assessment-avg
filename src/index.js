document.addEventListener('DOMContentLoaded', function () {
//   const links = document.querySelectorAll('.nav-left .link')

  //   // función que añade el borde redondo adaptado a la longitud del texto del enlace visitado
  //   const handleClassVisited = (event) => {
  //     links.forEach(link => link.classList.remove('visited'))
  //     event.target.classList.add('visited')
  //     const width = (event.target.innerText.length) + 'ch'

  //     document.styleSheets[0].addRule('.visited::before', 'width: ' + width + ';')
  //   }

  //   links.forEach(link => {
  //     link.addEventListener('click', handleClassVisited)
  //   })

  //* Código para asignar un color aleatorio
  let lastPick, rand

  const li = document.querySelectorAll('.category')
  li.forEach(categoryLi => {
    categoryLi.style.color = randomColor()
  })

  function randomColor () {
    const colors = ['green', 'blue', 'gray', 'yellow', 'orange', 'purple', 'pink', 'red', 'aquamarine']
    rand = colors[Math.floor(Math.random() * colors.length)]
    rand = rand === lastPick ? randomColor() : rand
    lastPick = rand
    return rand
  }
//   ****************************************
})
