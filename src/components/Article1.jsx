import React from 'react'

export function Article1 () {
  const highTextList = ['start', 'streaming', 'games', 'differently']

  return (
    <article className='panel-1'>
      <span className='high-text'>
        {highTextList.map(text => <p key={text}>{text}</p>)}
      </span>

      <label>
        gamor now has&nbsp;
        <span class='box-content'>
          <b>stream party</b>
        </span>
        &nbsp;platform
      </label>
    </article>
  )
}
