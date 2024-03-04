export const Panel3 = () => {
  const handleClassSelected = (event) => {
    const buttons = document.querySelectorAll('.platform')
    buttons.forEach(btn => btn.classList.remove('platform-selected'))
    event.target.classList.add('platform-selected')
  }

  return (
    <article className='panel-3'>
      <ol>
        <li className='first'>
          <div className='platforms'>
            <input className='platform' type='button' onClick={handleClassSelected} value='🎉 Party' />
            <input className='platform' type='button' onClick={handleClassSelected} value='Match' />
            <input className='platform' type='button' onClick={handleClassSelected} value='Streams' />
          </div>
        </li>
        <li className='second'>
          <div className='games-filter' />
        </li>
      </ol>
    </article>
  )
}
