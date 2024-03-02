export const Panel3 = () => {
  const handleClassSelected = (event) => {
    const buttons = document.querySelectorAll('.platform')
    buttons.forEach(btn => btn.classList.remove('platform-selected'))
    event.target.classList.add('platform-selected')
  }

  return (
    <article className='panel-3'>
      <ol>
        <li>
          <p>Choose Platform</p>
          <span className='platforms'>
            <input className='platform' type='button' onClick={handleClassSelected} value='🎉 Party' />
            <input className='platform' type='button' onClick={handleClassSelected} value='Match' />
            <input className='platform' type='button' onClick={handleClassSelected} value='Streams' />
          </span>
        </li>
        <li>
          <p>Searching Game</p>
        </li>
      </ol>
    </article>
  )
}
