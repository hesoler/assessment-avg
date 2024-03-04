import { useScheme } from '../hooks/useScheme'
import { MiniatureSquare } from './MiniatureSquare'

export const Panel2 = () => {
  const { fortniteCharacterImageUrl, scheme } = useScheme()

  const miniCharacter1Url = scheme === 'dark'
    ? 'src/images/fortnite-character-3.png'
    : 'src/images/fortnite-character-5.png'

  const miniCharacter2Url = scheme === 'dark'
    ? 'src/images/fortnite-character-4.png'
    : 'src/images/fortnite-character-6.png'

  const beforeAttribute = {
    miniature1: scheme === 'dark' ? 'eye-view' : '',
    miniature2: scheme !== 'dark' ? 'like-heart' : ''
  }

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
      <MiniatureSquare
        classPositionAndMiniIcon={`mini-character-1`}
        imageUrl={miniCharacter1Url}
      />
      <MiniatureSquare
        classPositionAndMiniIcon={`mini-character-2 ${beforeAttribute.miniature2}`}
        imageUrl={miniCharacter2Url}
      />
      <span className={`upper-curve-${scheme}`} />
      <span className={`lower-curve-${scheme}`} />
      <img className='fortnite-character' src={fortniteCharacterImageUrl} alt='Fortnite Character' />
    </article>
  )
}
