export function Article1 () {
  const highTextList = ['start', 'streaming', 'games', 'differently']

  return (
    <article className='panel-1'>
      <span className='high-text'>
        {highTextList.map(text => <p key={text}>{text}</p>)}
      </span>
      <span className='low-text'>
        gamor now has{' '}
        <b>stream party</b>
        {' '}platform
        <div className='curve' />
      </span>
      <span className='links'>
        <button className='btn-register'>Create Account</button>
        <a href='../pages/login.html'>Sign in</a>
      </span>
    </article>
  )
}
