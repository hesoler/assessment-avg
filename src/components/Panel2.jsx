import { useScheme } from '../hooks/useScheme'
import { ImageSquare } from './ImageSquare'

export const Panel2 = () => {
  const { fortniteCharacterImageUrl, scheme } = useScheme()

  const miniCharacter1Url = scheme === 'dark'
    ? 'src/images/fortnite-character-3.png'
    : 'src/images/fortnite-character-5.png'

  const miniCharacter2Url = scheme === 'dark'
    ? 'src/images/fortnite-character-4.png'
    : 'src/images/fortnite-character-6.png'

  return (
    <article className='panel-2'>
      <span className='headers'>
        <h2>Fortnite New Season</h2>
        <h3>Join Live Stream</h3>
        <span className='middle-widget'>
          <input type='image' className='addUser' src='/src/assets/add_user_profile_person_avatar_icon.svg' alt='Add user icon' />
          <button className='timeLeft'>
            <p>11&nbsp;&nbsp;:&nbsp;&nbsp;45</p>
          </button>
        </span>
      </span>
      <ImageSquare className='mini-character-1' imageUrl={miniCharacter1Url} />
      <ImageSquare className='mini-character-2' imageUrl={miniCharacter2Url} />
      <span id='upper-line' />
      <span id='lower-line' />
      <img className='fortnite-character' src={fortniteCharacterImageUrl} alt='Fortnite Character' />
    </article>
  )
}
