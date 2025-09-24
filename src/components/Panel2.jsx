import { useScheme } from '../hooks/useScheme'
import { MiniatureSquare } from './MiniatureSquare'
import addUserIcon from '../assets/add_user_profile_person_avatar_icon.svg'

export const Panel2 = () => {
  const { fortniteCharacterImageUrl, schemeColor } = useScheme()

  const miniCharacter1Url = schemeColor === 'dark'
    ? '/images/fortnite-character-3.png'
    : '/images/fortnite-character-5.png'

  const miniCharacter2Url = schemeColor === 'dark'
    ? '/images/fortnite-character-4.png'
    : '/images/fortnite-character-6.png'

  const beforeAttribute = {
    miniature1: schemeColor === 'dark' ? 'eye-view' : '',
    miniature2: schemeColor !== 'dark' ? 'like-heart' : ''
  }

  return (
    <article className='panel-2'>
      <span className='headers'>
        <h2>Fortnite New Season</h2>
        <h3>Join Live Stream</h3>
        <span className='middle-widget'>
          <input type='image' className='addUser' src={addUserIcon} alt='Add user icon' />
          <button className='timeLeft'>
            <p>11&nbsp;&nbsp;:&nbsp;&nbsp;45</p>
          </button>
        </span>
      </span>
      <MiniatureSquare
        classPositionAndBadge={`mini-character-1 ${beforeAttribute.miniature1}`}
        imageUrl={miniCharacter1Url}
      />
      <MiniatureSquare
        classPositionAndBadge={`mini-character-2 ${beforeAttribute.miniature2}`}
        imageUrl={miniCharacter2Url}
      />
      <span className={`upper-curve-${schemeColor}`} />
      <span className={`lower-curve-${schemeColor}`} />
      <img className='fortnite-character' src={fortniteCharacterImageUrl} alt='Fortnite Character' />
    </article>
  )
}
